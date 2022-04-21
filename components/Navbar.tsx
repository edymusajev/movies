import React, { useEffect, useState } from 'react';
import { HiMenu, HiSearch, HiOutlineX } from 'react-icons/hi';
import { Popover, Transition } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { Link } from './Link';
import { useRouter } from 'next/dist/client/router';
import { Heading } from './Heading';

interface DropDownMenuProps {
  children: React.ReactNode;
  links: {
    title: string;
    href: string;
  }[];
}

interface PageLinks {
  header: string;
  links: {
    title: string;
    href: string;
  }[];
}

const movieLinks: PageLinks = {
  header: 'Movies',
  links: [
    {
      title: 'Popular',
      href: '/movie/popular',
    },
    {
      title: 'Now Playing',
      href: '/movie/playing',
    },
    {
      title: 'Upcoming',
      href: '/movie/upcoming',
    },
    {
      title: 'Top Rated',
      href: '/movie/top',
    },
  ],
};

const tvLinks: PageLinks = {
  header: 'TV Shows',
  links: [
    {
      title: 'Popular',
      href: '/tv/popular',
    },
    {
      title: 'Airing Today',
      href: '/tv/airing',
    },
    {
      title: 'On TV',
      href: '/tv/on-tv',
    },
    {
      title: 'Top Rated',
      href: '/tv/top',
    },
  ],
};
const peopleLinks: PageLinks = {
  header: 'People',
  links: [{ title: 'Popular People', href: '/person/popular' }],
};

const MobileMenu = () => {
  const [isShowing, setIsShowing] = useState(false);

  const renderLinks = (links: PageLinks) => {
    const linkList = links.links.map((link) => (
      <li key={link.href} className="mb-1">
        <Link href={link.href}>{link.title}</Link>
      </li>
    ));
    return (
      <div className="py-2">
        <Heading size={Heading.size.MEDIUM} weight={Heading.weight.SEMIBOLD}>
          {links.header}
        </Heading>
        <ul className="pt-2">{linkList}</ul>
      </div>
    );
  };

  return (
    <div className="relative w-full">
      <button onClick={() => setIsShowing(!isShowing)}>
        <HiMenu className="text-2xl" />
      </button>
      <div className={`fixed mt-4 z-50 w-4/5 h-full -ml-4 ${isShowing ? 'visible' : 'invisible'}`}>
        <Transition
          show={isShowing}
          enter="transform  duration-300"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform duration-300"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="w-4/5 h-screen bg-gray-900 px-5 py-5">
            {renderLinks(movieLinks)}
            {renderLinks(tvLinks)}
            {renderLinks(peopleLinks)}
          </div>
        </Transition>
      </div>
    </div>
  );
};
const DropdownMenu = (props: DropDownMenuProps) => {
  const { children, links } = props;
  let [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>();
  let [popperElement, setPopperElement] = useState<HTMLDivElement | null>();
  let { styles, attributes } = usePopper(referenceElement, popperElement);

  const router = useRouter();

  const renderLinks = () => {
    return links.map((link) => (
      <li key={link.href} className="mb-1">
        <Link href={link.href}>
          <a
            className={`hover:cursor-pointer ${
              router.pathname.includes(link.href) ? 'font-semibold' : ''
            }`}
          >
            {link.title}
          </a>
        </Link>
      </li>
    ));
  };

  return (
    <Popover className="relative z-40">
      <Popover.Button ref={setReferenceElement}>{children}</Popover.Button>
      <Popover.Panel ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        <div className="bg-white p-4 rounded-lg shadow border w-48">
          <ul className="text-black flex flex-col">{renderLinks()}</ul>
        </div>
      </Popover.Panel>
    </Popover>
  );
};
const Navigation = () => {
  return (
    <div className="flex gap-x-8">
      <DropdownMenu links={movieLinks.links}>Movies</DropdownMenu>
      <DropdownMenu links={tvLinks.links}>TV Shows</DropdownMenu>
      <DropdownMenu links={peopleLinks.links}>People</DropdownMenu>
    </div>
  );
};

const Searchbar = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push(`/search?query=${input}`, undefined, { shallow: false });
    setIsShowing(false);
  };
  return (
    <div className="relative">
      <div className="fixed top-16 left-0 w-full z-40">
        <Transition
          show={isShowing}
          enter="transform duration-500"
          enterFrom="-translate-y-full"
          enterTo="translate-y-0"
        >
          <form onSubmit={handleSubmit} className="h-12 px-5 flex items-center border-b bg-white">
            <HiSearch className="text-xl text-black mr-2" />
            <input
              autoFocus
              type="text"
              className="h-8 w-full px-2 text-black focus:outline-none"
              placeholder="Search"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button type="button" onClick={() => setIsShowing(false)}>
              <HiOutlineX className="text-xl text-black ml-2 hover:cursor-pointer" />
            </button>
          </form>
        </Transition>
      </div>

      <button onClick={() => setIsShowing(!isShowing)}>
        <HiSearch className="text-2xl" />
      </button>
    </div>
  );
};

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  return (
    <div className="sticky top-0 z-30 flex items-center justify-evenly w-full bg-gray-900 text-white">
      <header className="flex items-center justify-between w-full p-4">
        <div className="md:hidden">
          <MobileMenu />
        </div>

        <div className="md:order-2 hidden md:block">
          <Navigation />
        </div>
        <div className="md:order-1">
          <Link href="/">
            <a className="text-2xl font-semibold tracking-wide">TMDB</a>
          </Link>
        </div>

        <div className="md:order-3">
          <Searchbar />
        </div>
      </header>
    </div>
  );
};
