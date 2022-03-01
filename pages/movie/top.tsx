import { GetServerSideProps } from 'next';
import { ContentList } from '../../components/ContentList';
import { Layout } from '../../components/Layout';
import { ListGrid } from '../../components/ListGrid';
import fetchList from '../../services/formatFetchedList';

interface Props {
  data: any;
}

const TopMoviePage = (props: Props) => {
  const { data } = props;
  return <ContentList title="Top Rated Movies" data={data} api={`/movies/top`} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = 1;
  const path = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIES_API}&language=en-US&page=1`;
  const data = await fetchList(path, page, 'movie');

  return {
    props: {
      data,
    },
  };
};

export default TopMoviePage;
