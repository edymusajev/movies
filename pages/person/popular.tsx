import { GetServerSideProps } from 'next';
import { ContentList } from '../../components/ContentList';
import { Person, PersonList, SearchData } from '../../interfaces/Movie';
import formatPersonFetch from '../../services/formatPersonFetch';

interface Props {
  data: SearchData;
}

const PopularPeople = (props: Props) => {
  const { data } = props;
  return <ContentList title="Popular People" data={data} api={`/person/popular`} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.MOVIES_API}&language=en-US&page=1`
  ).then((response) => response.json());

  const results: PersonList = data.results.map((item: Person) => {
    return { ...item, type: 'person' };
  });
  console.log(typeof results);
  return {
    props: {
      data: formatPersonFetch(data),
    },
  };
};

export default PopularPeople;
