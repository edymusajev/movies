import { GetServerSideProps } from 'next';
import { ContentList } from '../../components/ContentList';
import { SearchData } from '../../interfaces/Movie';
import fetchList from '../../services/formatFetchedList';

interface Props {
  data: SearchData;
}

const AiringTvPage = (props: Props) => {
  const { data } = props;
  return <ContentList title="TV Shows Airing Today" data={data} api={'/tv/airing'} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = 1;
  const path = `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.MOVIES_API}&language=en-US&page=1`;
  const data = await fetchList(path, page, 'tv');
  return {
    props: {
      data,
    },
  };
};

export default AiringTvPage;
