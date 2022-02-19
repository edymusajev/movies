import Poster from '../Poster';
import { HorizontalListItem } from './HorizontalListItem';

interface Props {
  list: {
    id: string;
    name?: string;
    title?: string;
    image: string;
    poster_path: string;
    type: 'tv' | 'movie';
  }[];
}

export const HorizontalList = (props: Props) => {
  const { list } = props;
  const renderList = () => {
    return list.map((item) => <HorizontalListItem key={item.id} item={item} />);
  };
  return <div className="flex overflow-x-auto pt-4 h-full">{renderList()}</div>;
};
