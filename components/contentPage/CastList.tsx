import { Cast } from '../../interfaces/Movie';
import Image from 'next/image';
import Poster from '../Poster';
import { Heading } from '../Heading';

interface CastListProps {
  cast: Cast[];
  series?: boolean;
  movie?: boolean;
}
interface CastCardProps {
  person: Cast;
}

const CastCard = ({ person }: CastCardProps) => {
  return (
    <div className="w-48 h-64 first:ml-4 border shadow-lg rounded-lg">
      <div className="relative w-32 h-36 ">
        <Poster src={person.profile_path} />
      </div>
      <div className="p-2">
        <p className="text-gray-900 font-semibold">{person.name}</p>
        <p className="text-sm text-gray-600">{person.character}</p>
      </div>
    </div>
  );
};

export const CastList = ({ cast, series }: CastListProps) => {
  const renderList = () => {
    return cast.map((person) => <CastCard key={person.id} person={person} />);
  };
  return (
    <>
      <div className="container">
        <Heading>{series ? 'Series' : 'Movies'} Cast</Heading>
      </div>
      <div className="flex overflow-x-scroll w-full space-x-4 pb-4">{renderList()}</div>
    </>
  );
};
