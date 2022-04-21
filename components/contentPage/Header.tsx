import { useEffect, useState } from 'react';
import { Image } from '../Image';
import Poster from '../Poster';

interface HeaderProps {
  background: string;
  poster: string;
}

export const Header = ({ background, poster }: HeaderProps) => {
  return (
    <>
      <div
        className="md:hidden h-72 md:h-full md:rounded bg-center bg-cover p-4 mb-4 flex items-center justify-center "
        style={{
          backgroundImage: background && `url(https://image.tmdb.org/t/p/original${background})`,
        }}
      >
        <div className="relative w-36 h-48 md:w-24 md:h-36 shadow-lg">
          <Image src={poster} alt="" rounded={Image.rounded.MEDIUM} />
        </div>
      </div>

      <div className="hidden md:block relative w-full h-96 shadow-lg">
        <Image src={poster} alt="" rounded={Image.rounded.MEDIUM} />
      </div>
    </>
  );
};
