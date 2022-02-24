import { GetServerSideProps } from 'next';
import { ContentList } from '../../components/ContentList';
import { SearchData } from '../../interfaces/Movie';

interface Props {
  data: SearchData;
}

const PopularTvPage = (props: Props) => {
  const { data } = props;
  return <ContentList title="Currently Airing TV Shows" data={data} api={'/tv/on-tv'} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.MOVIES_API}&language=en-US&page=1`
  ).then((response) => response.json());

  return {
    props: {
      data,
    },
  };
};

export default PopularTvPage;
