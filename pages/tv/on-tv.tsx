import { GetServerSideProps } from 'next';
import { ContentList } from '../../components/ContentList';
import { SearchData } from '../../interfaces/Movie';
import fetchList from '../../services/formatFetchedList';

interface Props {
  data: SearchData;
}

const PopularTvPage = (props: Props) => {
  const { data } = props;
  return <ContentList title="Currently Airing TV Shows" data={data} api={'/tv/on-tv'} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = 1;
  const path = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.MOVIES_API}&language=en-US&page=1`;

  const data = await fetchList(path, page, 'tv');
  return {
    props: {
      data,
    },
  };
};

export default PopularTvPage;
