import Image from 'next/image';
import { BsFillImageFill } from 'react-icons/bs';

const Poster = ({ src }: { src: string }) => {
  return (
    <div className="relative h-full w-full flex justify-center items-center">
      {src ? (
        <Image
          src={`https://image.tmdb.org/t/p/w500${src}`}
          alt=""
          layout="fill"
          className="object-cover rounded-lg"
        />
      ) : (
        <span className="text-gray-300 bg-gray-50 w-full h-full flex justify-center items-center rounded">
          <BsFillImageFill size="5rem" />
        </span>
      )}
    </div>
  );
};

export default Poster;
