import Link from 'next/link';
import Poster from '../Poster';

interface Props {
  imgHref: string;
  title: string;
  href: string;
  releaseDate: string;
}

const CarouselItem = (props: Props) => {
  const { imgHref, title, href, releaseDate } = props;

  return (
    <Link href={href} passHref>
      <div className="hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 p-4 rounded-lg">
        <div className="relative w-36 h-56 mb-2">
          <Poster src={imgHref} />
        </div>

        <div className="">
          <h6 className="font-semibold">
            {title.substring(0, 24)}
            {title.length > 24 ? '...' : ''}
          </h6>
          <p className="text-sm opacity-75">{releaseDate}</p>
        </div>
      </div>
    </Link>
  );
};
export { CarouselItem };
