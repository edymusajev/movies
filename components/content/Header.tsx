import { Image } from '../Image';
import Poster from '../Poster';

interface HeaderProps {
  background: string;
  poster: string;
}

export const Header = ({ background, poster }: HeaderProps) => {
  return (
    <div
      className="h-48 bg-center bg-cover p-4 mb-4 flex items-center"
      style={{
        backgroundImage: background && `url(https://image.tmdb.org/t/p/original${background})`,
      }}
    >
      <div className="relative w-24 h-36">
        {/* <Poster src={poster} /> */}
        <Image src={poster} alt="" rounded={Image.rounded.MEDIUM} />
      </div>
    </div>
  );
};
