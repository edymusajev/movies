import { GetServerSideProps } from 'next';
import { ContentList } from '../../components/ContentList';
import { SearchData } from '../../interfaces/Movie';
import fetchList from '../../services/formatFetchedList';

interface Props {
  data: SearchData;
}

const PopularTvPage = (props: Props) => {
  const { data } = props;
  return <ContentList title="Popular TV Shows" data={data} api={'/tv/popular'} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = 1;
  const path = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.MOVIES_API}&language=en-US&page=1`;
  const data = await fetchList(path, page, 'tv');

  return {
    props: {
      data,
    },
  };
};

export default PopularTvPage;
