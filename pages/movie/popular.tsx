import { GetServerSideProps } from 'next';
import { ContentList } from '../../components/ContentList';
import { SearchData } from '../../interfaces/Movie';
import fetchList from '../../services/formatFetchedList';

interface Props {
  data: SearchData;
}

const PopularMoviePage = (props: Props) => {
  const { data } = props;
  return <ContentList title="Popular Movies" data={data} api={'/movies/popular'} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = 1;
  const path = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIES_API}&language=en-US&page=1`;
  const data = await fetchList(path, page, 'movie');
  return {
    props: {
      data,
    },
  };
};

export default PopularMoviePage;
