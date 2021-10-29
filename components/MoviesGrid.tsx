import { Movie } from '../interfaces/Movie';
import Image from 'next/image';
import Link from 'next/link';
import Poster from './Poster';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MovieList } from '../interfaces/MovieList';
import useResults from '../hooks/useResults';

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="lg:w-48 lg:h-72 group relative">
      {/* ghost element */}
      <div className="lg:w-48 lg:h-72 opacity-100 hidden relative top-72"></div>
      {/* real element */}
      <Link href={`/movie/${movie.id}`} passHref>
        <div className="hover:relative hover:shadow-2xl  z-10 transform hover:scale-125 duration-150 hover:cursor-pointer">
          <div className="rounded-lg w-36 sm:w-44 lg:w-48 h-56 sm:h-64 lg:h-72 bg-gray-100">
            <Poster src={movie.poster_path} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export const MoviesGrid = ({ data, api }: { data: MovieList; api: string }) => {
  const { results, fetchMoreResults, hasMore } = useResults(data, api);
  const renderList = () => {
    return results.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />);
  };
  return (
    <InfiniteScroll
      next={fetchMoreResults}
      hasMore={hasMore}
      loader={'loading'}
      dataLength={results.length}
    >
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4 justify-items-center w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto py-16">
        {renderList()}
      </div>
    </InfiniteScroll>
  );
};
