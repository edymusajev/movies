import { Link } from '../Link';
import Poster from '../Poster';

interface Props {
  item: {
    id: string;
    type: string;
    name?: string;
    title?: string;
    image: string;
    poster_path: string;
  };
}

export const HorizontalListItem = (props: Props) => {
  const { item } = props;
  return (
    <Link key={item.id} href={item.type === 'tv' ? `/tv/${item.id}` : `/movie/${item.id}`}>
      <div className="hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 p-4 rounded-lg">
        <div className="w-36 h-56">
          <Poster src={item.poster_path} />
        </div>
        <h6 className="mt-2 font-semibold">
          {item.title ? item.title.substring(0, 24) : item.name ? item.name.substring(0, 24) : null}
          {item.title
            ? item.title.length > 24
              ? '...'
              : ''
            : item.name
            ? item.name.length > 24
              ? '...'
              : ''
            : null}
        </h6>
      </div>
    </Link>
  );
};
