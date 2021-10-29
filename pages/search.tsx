import { Layout } from '../components/Layout';
import { MoviesGrid } from '../components/MoviesGrid';
import { GetServerSideProps } from 'next';
import { MovieList } from '../interfaces/MovieList';
import { filterResults } from '../services/filterResults';

const SearchPage = ({ data, query }: { data: MovieList; query: string }) => {
  return (
    <Layout>
      <div>
        <MoviesGrid data={data} api={`search?query=${query}`} />
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
