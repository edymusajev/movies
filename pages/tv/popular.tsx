import { GetServerSideProps } from 'next';
import { ContentList } from '../../components/ContentList';
import { SearchData } from '../../interfaces/Movie';

interface Props {
  data: SearchData;
}

const PopularTvPage = (props: Props) => {
  const { data } = props;
  return <ContentList title="Popular TV Shows" data={data} api={'/tv/popular'} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.MOVIES_API}&language=en-US&page=1`
  ).then((response) => response.json());

  return {
    props: {
      data,
    },
  };
};

export default PopularTvPage;
