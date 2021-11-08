import { Popover } from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';
import { Categories, Category } from './Carousel';

interface Props {
  items: Categories;
  activeItem: Category;
  setActiveItem: React.Dispatch<React.SetStateAction<Category>>;
}

const CarouselMenu = (props: Props) => {
  const { items, activeItem, setActiveItem } = props;

  const renderItems = () => {
    return items.map((item) => (
      <Popover.Button key={item.api} className="w-full">
        <a
          className={`flex w-full px-4 py-2 justify-start hover:bg-gray-100 ${
            item === activeItem && 'font-semibold'
          }`}
          onClick={() => setActiveItem(item)}
        >
          {item.name}
        </a>
      </Popover.Button>
    ));
  };

  return (
    <Popover className="w-36">
      <Popover.Button className="button button-primary w-32 inline-flex items-center justify-evenly">
        {activeItem.name}
        <HiChevronDown className="text-xl" />
      </Popover.Button>
      <Popover.Panel className="absolute mt-3 w-44 right-12 z-30 bg-white border rounded-lg shadow-lg">
        {renderItems()}
      </Popover.Panel>
    </Popover>
  );
};

export { CarouselMenu };
