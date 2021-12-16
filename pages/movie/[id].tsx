import { GetServerSideProps } from 'next';
import { Layout } from '../../components/Layout';
import { Movie } from '../../interfaces/Movie';
import { Content } from '../../components/contentPage/Content';

const MoviePage = ({ data }: { data: Movie }) => {
  console.log(data);
  console.log(data.trailer);
  return (
    <Layout>
      <Content movie={data} />
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIES_API}&language=en-US`
  ).then((response) => response.json());

  const credits = await fetch(`
  https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.MOVIES_API}&language=en-US
  `).then((response) => response.json());

  return {
    props: {
      data: {
        ...data,
        type: 'movie',
        credits,
      },
    },
  };
};
export default MoviePage;
