import { HiPlay } from 'react-icons/hi';
import { Creator, Genre } from '../../interfaces/Movie';
import Link from 'next/link';

interface DescriptionProps {
  title: string;
  release_date: string;
  user_score: number;
  duration: number;
  genres: Genre[];
  tagline: string;
  overview: string;
  created_by: Creator[];
}

const UserScore = ({ score }: { score: number }) => {
  return (
    <div>
      <div className="rounded-full p-2 bg-gray-900 text-white">{score * 10}%</div>
    </div>
  );
};

export const Description = ({
  title,
  release_date,
  user_score,
  duration,
  genres,
  tagline,
  overview,
  created_by,
}: DescriptionProps) => {
  const renderGenres = () => {
    return genres.map((genre, index) => (
      <span key={genre.id}>
        {/* Should become a link */}
        {genre.name}
        {index === genres.length - 1 ? '' : ', '}
      </span>
    ));
  };
  const renderCreators = () => {
    return created_by.map((creator) => <span key={creator.id}>{creator.name}</span>);
  };
  return (
    <div>
      <div className="flex justify-center py-4">
        <h1 className="text-2xl ">
          <span className="font-semibold">{title}</span>
          <span className="text-xl ml-1 opacity-75">({release_date.substr(0, 4)})</span>
        </h1>
      </div>

      <div className="flex items-center justify-between container divide-x mb-8 px-16">
        <div className=" flex-1 flex items-center">
          <UserScore score={user_score} />
          <span className="ml-2 font-semibold">User Score</span>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <HiPlay size="1.25rem" className="mr-1" />
          Play Trailer
        </div>
      </div>

      <div className="border-t border-b flex flex-col justify-center items-center py-4">
        <div className="flex justify-center items-center">
          <span className="border rounded px-2 opacity-75">19</span>
          <span className="px-2">•</span>
          <span>{duration}m</span>
        </div>
        <div>
          <p>{renderGenres()}</p>
        </div>
      </div>

      <div className="container py-4">
        <p className="italic opacity-75 mb-4 ">{tagline}</p>
        <h2 className="text-xl mb-2">Overview</h2>
        <p className="mb-4">{overview}</p>
        {created_by && (
          <>
            <p className="font-semibold -mb-1">{renderCreators()}</p>
            <p className="text-sm">Creator</p>
          </>
        )}
      </div>
    </div>
  );
};
