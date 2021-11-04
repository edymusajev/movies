import { GetServerSideProps } from 'next';
import { Layout } from '../../components/Layout';
import { Series } from '../../interfaces/Movie';
import { Content } from '../../components/content/Content';

const TvPage = ({ data }: { data: Series; bgColor: string }) => {
  return (
    <Layout>
      <Content series={data} />
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.MOVIES_API}&language=en-US`
  ).then((response) => response.json());

  const credits = await fetch(`
  https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.MOVIES_API}&language=en-US
  `).then((response) => response.json());

  return {
    props: {
      data: {
        ...data,
        type: 'tv',
        credits,
      },
    },
  };
};
export default TvPage;
