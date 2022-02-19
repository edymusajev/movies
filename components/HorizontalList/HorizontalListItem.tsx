import Poster from '../Poster';

interface Props {
  item: {
    id: string;
    name?: string;
    title?: string;
    image: string;
    poster_path: string;
  };
}

export const HorizontalListItem = (props: Props) => {
  const { item } = props;
  return (
    <div
      key={item.id}
      className="hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 p-4 rounded-lg"
    >
      <div className="w-36 h-56">
        <Poster src={item.poster_path} />
      </div>
      <h6 className="font-semibold">
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
  );
};
