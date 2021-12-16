import { Creator, Genre } from '../../interfaces/Movie';
import { Heading } from '../Heading';

import { UserScore } from '../UserScore';

import { VideoPlayer } from '../VideoPlayer';

interface DescriptionProps {
  id: number;
  title: string;
  release_date: string;
  user_score: number;
  duration: number;
  genres: Genre[];
  tagline: string;
  overview: string;
  created_by: Creator[];
  type: 'movie' | 'tv';
}

export const Description = ({
  id,
  title,
  release_date,
  user_score,
  duration,
  genres,
  tagline,
  overview,
  created_by,
  type,
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
      <Heading align={Heading.align.CENTER} size={Heading.size.LARGE}>
        {title}
      </Heading>

      <div className="flex items-center justify-center container divide-x mb-8 px-4">
        <div className=" flex-1 flex items-center justify-center w-full">
          <UserScore score={user_score} />
          <span className="ml-2 font-semibold">User Score</span>
        </div>
        <VideoPlayer id={id} type={type} />
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

      <div className="container p-4">
        <p className="italic opacity-75 mb-4 ">{tagline}</p>
        <Heading>Overview</Heading>
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
