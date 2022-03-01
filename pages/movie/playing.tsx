import { GetServerSideProps } from 'next';
import { ContentList } from '../../components/ContentList';
import { Layout } from '../../components/Layout';
import { ListGrid } from '../../components/ListGrid';
import { SearchData } from '../../interfaces/Movie';
import fetchList from '../../services/formatFetchedList';
import formatFetchedList from '../../services/formatFetchedList';

interface Props {
  data: SearchData;
}

const NowPlayingMoviePage = (props: Props) => {
  const { data } = props;
  console.log(data);
  return <ContentList title="Now Playing Movies" data={data} api={`/movies/playing`} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const response = await fetch(
  //   `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIES_API}&language=en-US&page=1`
  // ).then((response) => response.json());
  const page = 1;
  const path = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIES_API}&language=en-US&page=${page}`;
  const data = await fetchList(path, 1, 'movie');

  return {
    props: {
      data,
    },
  };
};

export default NowPlayingMoviePage;
