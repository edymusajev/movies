import React, { useEffect } from 'react';
import { ContentList } from '../../interfaces/Movie';
import { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../services/SWRFetcher';
import { Heading } from '../Heading';
import { CarouselItem } from './CarouselItem';
import { CarouselMenu } from './CarouselMenu';

export interface Category {
  readonly api: string;
  readonly name: string;
}
export interface Categories extends Array<Category> {}

interface Props {
  title: string;
  categories: Categories;
  background?: boolean;
  videos?: boolean;
}

export const Carousel = (props: Props) => {
  const { title, categories, background } = props;
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
      return content.map((item: any) => (
        <CarouselItem
          key={item.id}
          imgHref={item.poster_path}
          title={item.title || item.name}
          href={item.title ? `/movie/${item.id}` : `/tv/${item.id}`}
          releaseDate={item.release_date || item.first_air_date}
        />
      ));
    }
  };
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full relative mb-4"
      style={
        background && content
          ? {
              backgroundImage: `url(https://image.tmdb.org/t/p/original${content[0].backdrop_path}`,
            }
          : {}
      }
    >
      {background && (
        <div className="bg-blue-900 bg-opacity-50 w-full h-full absolute inset-0 "></div>
      )}
      <div className="flex justify-between items-center relative z-10 container py-2">
        <Heading size={Heading.size.LARGE}>{title}</Heading>
        <CarouselMenu
          items={categories}
          activeItem={activeCategory}
          setActiveItem={setActiveCategory}
        />
      </div>
      <div className={`flex overflow-x-auto  h-full ${background ? 'text-white' : ''}`}>
        {renderList()}
      </div>
    </div>
  );
};
