import { useEffect, useState } from 'react';
import { MovieList } from '../interfaces/MovieList';

const useResults = (initialData: MovieList, api: string) => {
  console.log('useresults: ' + initialData.results[0].title, api);
  const [results, setResults] = useState(initialData.results);
  const [page, setPage] = useState(initialData.page);
  const [hasMore, setHasMore] = useState(Boolean(initialData.total_pages > page));

  useEffect(() => {
    setResults(initialData.results);
    setPage(initialData.page);
    setHasMore(Boolean(initialData.total_pages > page));
  }, [initialData, page]);

  const fetchMoreResults = async () => {
    const response = await fetch(`/api/${api}${api.includes('?') ? '&' : '?'}page=${page + 1}`);
    const data = await response.json();
    setResults([...results, ...data.results]);
    setPage(data.page);
    setHasMore(Boolean(data.total_pages > data.page));
  };
  return { results, page, hasMore, fetchMoreResults };
};

export default useResults;
