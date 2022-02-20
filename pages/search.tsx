import { Layout } from '../components/Layout';
import { ListGrid } from '../components/ListGrid';
import { GetServerSideProps } from 'next';

import { filterResults } from '../services/filterResults';
import { MovieList, SeriesList } from '../interfaces/Movie';

interface Props {
  data: MovieList | SeriesList;
  query: string;
}

const SearchPage = (props: Props) => {
  const { data, query } = props;
  console.log(data);
  return (
    <Layout>
      <div>
        <ListGrid data={data} api={`search?query=${query}`} />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context.query;
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIES_API}&language=en-US&page=1&include_adult=false&query=${query}`
  ).then((response) => response.json());
  const filteredResults = filterResults(data.results);
  return {
    props: {
      data: {
        ...data,
        results: filteredResults,
        total_results: filteredResults.length,
      },
      query,
    },
  };
};

export default SearchPage;
