import { GetServerSideProps } from 'next';
import { ContentList } from '../../components/ContentList';
import { SearchData } from '../../interfaces/Movie';

interface Props {
  data: SearchData;
}

const AiringTvPage = (props: Props) => {
  const { data } = props;
  return <ContentList title="TV Shows Airing Today" data={data} api={'/tv/airing'} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.MOVIES_API}&language=en-US&page=1`
  ).then((response) => response.json());

  return {
    props: {
      data,
    },
  };
};

export default AiringTvPage;
