import { PersonList } from '../interfaces/Movie';

function formatPersonFetch(response: {
  results: PersonList;
  total_pages: number;
  total_results: number;
  page: number;
}) {
  const results = response.results.map((item) => {
    return { ...item, type: 'person' };
  });

  return {
    page: response.page,
    results,
    total_pages: response.total_pages,
    total_results: response.total_results,
  };
}

export default formatPersonFetch;
