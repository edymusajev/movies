import { Popover } from '@headlessui/react';
import React, { useEffect } from 'react';
import { Content, ContentList } from '../interfaces/Movie';
import Poster from './Poster';
import { useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export interface Category {
  readonly api: string;
  readonly name: string;
  type: string;
}
export interface Categories extends Array<Category> {}
interface CategoryMenuTypes {
  categories: Categories;
  activeCategory: Category;
  setActiveCategory: React.Dispatch<React.SetStateAction<Category>>;
}
interface CarouselTypes {
  title: string;
  categories: Categories;
}

const CategoryMenu = ({ categories, activeCategory, setActiveCategory }: CategoryMenuTypes) => {
  const renderItems = (): React.ReactNode => {
    return categories.map((category) => (
      <Popover.Button
        key={category.api}
        className="w-full first:border-t border-blue-900 rounded-3xl "
      >
        <a
          className={`mb-1 last:mb-0 z-10 flex w-full ${
            category === activeCategory ? 'btn-category-active' : 'px-4 py-2 justify-start'
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category.name}
          {activeCategory === category && <HiOutlineChevronDown className="ml-1" size="1.25rem" />}
        </a>
      </Popover.Button>
    ));
  };

  return (
    <Popover className="w-36">
      <Popover.Button className="btn-category-active z-20">
        {activeCategory.name}
        <HiOutlineChevronDown className="ml-1" size="1.25rem" />
      </Popover.Button>
      <Popover.Panel className="absolute z-30 bg-white border-b border-l border-r border-blue-900 rounded-3xl -mt-10 box-content  w-36">
        {renderItems()}
      </Popover.Panel>
    </Popover>
  );
};

export const Carousel = ({ title, categories }: CarouselTypes) => {
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
  const { data } = useSWR(`/api/${activeCategory.api}`, fetcher);
  const [content, setContent] = useState<ContentList | null>(null);

  useEffect(() => {
    if (data) {
      setContent(data.results);
    }
  }, [data]);

  const renderList = () => {
    if (content) {
      return content.map((item: Content) => (
        <div key={item.id}>
          <Link
            href={activeCategory.type === 'movie' ? `/movie/${item.id}` : `/tv/${item.id}`}
            passHref
          >
            <div className="w-36 h-56 hover:cursor-pointer">
              <Poster src={item.poster_path} />
            </div>
          </Link>

          <h6 className="font-semibold hover:text-blue-300 hover:cursor-pointer my-2 inline-block">
            {item.title || item.name}
          </h6>
          <p className="text-gray-700 text-sm">{item.release_date || item.first_air_date}</p>
        </div>
      ));
    }
  };
  return (
    <>
      <div className="py-6 flex justify-between">
        <h2 className="text-2xl mr-4">{title}</h2>
        <CategoryMenu
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
      <div className="flex overflow-x-scroll space-x-4 h-full">{renderList()}</div>
    </>
  );
};
