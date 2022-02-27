import { Movie, MovieList, Person, SearchData, Series, SeriesList } from '../interfaces/Movie';
import Image from 'next/image';
import Link from 'next/link';
import Poster from './Poster';
import InfiniteScroll from 'react-infinite-scroll-component';

import useResults from '../hooks/useResults';
import { LoadingSpinner } from './LoadingSpinner';

// ghost element -> <div className="lg:w-48 lg:h-72 opacity-100 hidden relative top-72"></div>;
// hover effects -> hover:relative hover:shadow-2xl transform hover:scale-125 duration-150

interface ListGridCardProps {
  content: Movie | Series | Person;
}
interface ListGridProps {
  data: SearchData;
  api: string;
}

const ListGridCard = (props: ListGridCardProps) => {
  const { content } = props;
  console.log(content);

  const renderThumbnail = (content: any) => {
    if (content.poster_path) {
      return <Poster src={content.poster_path} />;
    } else if (content.profile_path) {
      return <Poster src={content.profile_path} />;
    }
  };

  return (
    <div className="lg:w-48 lg:h-72 group relative">
      <Link href={`/${content.type}/${content.id}`} passHref>
        <div className="  z-10 hover:cursor-pointer">
          <div className="rounded-lg w-36 sm:w-44 lg:w-48 h-56 sm:h-64 lg:h-72 bg-gray-100">
            {renderThumbnail(content)}
          </div>
        </div>
      </Link>
    </div>
  );
};

export const ListGrid = (props: ListGridProps) => {
  const { data, api } = props;
  const { results, fetchMoreResults, hasMore } = useResults(data, api);
  const renderList = () => {
    return results.map((content: any) => <ListGridCard key={content.id} content={content} />);
  };
  return (
    <InfiniteScroll
      next={fetchMoreResults}
      hasMore={hasMore}
      loader={<LoadingSpinner />}
      dataLength={results.length}
    >
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4 justify-items-center w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto py-16">
        {renderList()}
      </div>
    </InfiniteScroll>
  );
};
