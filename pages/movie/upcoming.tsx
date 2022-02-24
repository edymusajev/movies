import { GetServerSideProps } from 'next';
import { ContentList } from '../../components/ContentList';
import { Layout } from '../../components/Layout';
import { ListGrid } from '../../components/ListGrid';

interface Props {
  data: any;
}

const UpcomingMoviePage = (props: Props) => {
  const { data } = props;
  return <ContentList title="Upcoming Movies" data={data} api={`/movies/upcoming`} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.MOVIES_API}&language=en-US&page=1`
  ).then((response) => response.json());

  return {
    props: {
      data,
    },
  };
};

export default UpcomingMoviePage;
