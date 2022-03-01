import { useState } from 'react';
import { HiMenu, HiSearch } from 'react-icons/hi';
import { Popover } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { Link } from './Link';
import { useRouter } from 'next/dist/client/router';

interface DropDownMenuProps {
  children: React.ReactNode;
  links: {
    title: string;
    href: string;
  }[];
}

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
  const movieLinks = [
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
  ];
  const tvLinks = [
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
  ];
  const peopleLinks = [{ title: 'Popular People', href: '/person/popular' }];
  return (
    <div className="flex gap-x-8">
      <DropdownMenu links={movieLinks}>Movies</DropdownMenu>
      <DropdownMenu links={tvLinks}>TV Shows</DropdownMenu>
      <DropdownMenu links={peopleLinks}>People</DropdownMenu>
    </div>
  );
};

export const Navbar = () => {
  return (
    <div className=" flex items-center justify-center w-full bg-gray-900 text-white">
      <header className="flex items-center justify-between w-full p-4">
        <HiMenu className="text-2xl md:hidden" />
        <div className="md:order-2 hidden md:block">
          <Navigation />
        </div>
        <div className="md:order-1">
          <Link href="/">
            <a className="text-2xl font-semibold tracking-wide">TMDB</a>
          </Link>
        </div>

        <HiSearch className="text-2xl md:order-3" />
      </header>
    </div>
  );
};
