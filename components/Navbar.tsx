import { Menu } from '@headlessui/react';
import SearchBar from './SearchBar';
import { HiMenu, HiSearch } from 'react-icons/hi';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className=" flex items-center justify-center w-full bg-blue-900 text-white">
      <header className="flex items-center justify-between w-full p-4">
        <HiMenu className="text-2xl" />
        <Link href="/">
          <a className="text-2xl font-semibold tracking-wide">TMDB</a>
        </Link>
        <HiSearch className="text-2xl " />
        {/* <nav>
          <Menu>
            <Menu.Button>Movies</Menu.Button>
            <Menu.Items></Menu.Items>
          </Menu>
        </nav> */}
        {/* <SearchBar /> */}
      </header>
    </div>
  );
};
