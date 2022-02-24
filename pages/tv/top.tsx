import { GetServerSideProps } from 'next';
import { ContentList } from '../../components/ContentList';
import { SearchData } from '../../interfaces/Movie';

interface Props {
  data: SearchData;
}

const TopTvPage = (props: Props) => {
  const { data } = props;
  return <ContentList title="Top Rated TV Shows" data={data} api={'/tv/top'} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.MOVIES_API}&language=en-US&page=1`
  ).then((response) => response.json());

  return {
    props: {
      data,
    },
  };
};

export default TopTvPage;
