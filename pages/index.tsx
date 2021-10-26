import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Layout } from '../components/Layout';
import { MoviesGrid } from '../components/MoviesGrid';
import { Movie } from '../interfaces/Movie';
import { MovieList } from '../interfaces/MovieList';

const Home = ({ data }: { data: MovieList }) => {
  const [movies, setMovies] = useState(data.results);
  const [page, setPage] = useState(data.page);
  const [hasMore, setHasMore] = useState(Boolean(data.total_pages > page));

  const fetchMoreData = async () => {
    const moreData = await fetch(`/api/movies?page=${page + 1}`).then((res) => res.json());

    const newMovies = moreData.results.filter((data: Movie) => {
      if (!movies.find((movie) => movie.id === data.id) && data.poster_path) {
        return data;
      }
    });
    console.log(newMovies);
    setMovies([...movies, ...newMovies]);
    setPage(page + 1);
    setHasMore(Boolean(moreData.total_pages > page));
  };

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {movies && (
        <InfiniteScroll
          next={() => fetchMoreData()}
          hasMore={hasMore}
          loader={'loading'}
          dataLength={movies.length}
        >
          <MoviesGrid movies={movies} />
        </InfiniteScroll>
      )}
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${
      process.env.MOVIES_API
    }&language=en-US&page=${1}`
  ).then((res) => res.json());
  return {
    props: {
      data,
    },
  };
};

export default Home;
