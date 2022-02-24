import { GetServerSideProps } from 'next';
import { ContentList } from '../../components/ContentList';
import { Layout } from '../../components/Layout';
import { ListGrid } from '../../components/ListGrid';
import { SearchData } from '../../interfaces/Movie';

interface Props {
  data: SearchData;
}

const NowPlayingMoviePage = (props: Props) => {
  const { data } = props;
  return <ContentList title="Now Playing Movies" data={data} api={`/movies/playing`} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIES_API}&language=en-US&page=1`
  ).then((response) => response.json());

  return {
    props: {
      data,
    },
  };
};

export default NowPlayingMoviePage;
