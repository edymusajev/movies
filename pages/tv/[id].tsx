import { GetServerSideProps } from 'next';
import { Layout } from '../../components/Layout';
import { Series } from '../../interfaces/Movie';
import { Video } from '../../interfaces/Video';
import { Content } from '../../components/content/Content';

const TvPage = ({ data }: { data: Series; bgColor: string }) => {
  console.log(data);
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

  const videos = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.MOVIES_API}&language=en-US`
  ).then(
    (response) => response.json(),
    (error) => console.log(error)
  );
  const trailer = videos.results.find((video: Video) => video.site === 'YouTube');

  return {
    props: {
      data: {
        ...data,
        type: 'tv',
        credits,
        trailer: trailer ? trailer : null,
      },
    },
  };
};
export default TvPage;
