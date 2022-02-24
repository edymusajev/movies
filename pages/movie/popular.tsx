import { GetServerSideProps } from 'next';
import { Layout } from '../../components/Layout';
import { ListGrid } from '../../components/ListGrid';

interface Props {
  data: any;
}

const PopularMoviePage = (props: Props) => {
  const { data } = props;
  console.log(data);
  return (
    <Layout>
      popular
      <ListGrid data={data} api={'/popularMovies'} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIES_API}&language=en-US&page=1`
  ).then((response) => response.json());

  return {
    props: {
      data,
    },
  };
};

export default PopularMoviePage;
