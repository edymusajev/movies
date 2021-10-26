import { Movie } from '../interfaces/Movie';
import Image from 'next/image';
import Link from 'next/link';

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="lg:w-48 lg:h-72 group relative">
      {/* ghost element */}
      <div className="lg:w-48 lg:h-72 opacity-100 hidden relative top-72"></div>
      {/* real element */}
      <Link href="#" passHref>
        <div className="hover:relative hover:shadow-2xl  z-10 transform hover:scale-125 duration-150 hover:cursor-pointer">
          <div className="rounded-lg w-36 sm:w-44 lg:w-48 h-56 sm:h-64 lg:h-72 bg-gray-100">
            <div className="relative h-full w-full">
              {movie.backdrop_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  layout="fill"
                  className="object-cover rounded-lg"
                  alt=""
                />
              ) : null}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const MoviesGrid = ({ movies }: { movies: Movie[] }) => {
  const renderList = () => {
    return movies.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />);
  };
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4 justify-items-center w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto pt-16">
      {renderList()}
    </div>
  );
};
