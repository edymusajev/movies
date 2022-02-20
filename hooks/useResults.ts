import { useEffect, useState } from 'react';
import { SearchData } from '../interfaces/Movie';

const useResults = (initialData: SearchData, api: string) => {
  const [results, setResults] = useState(initialData.results);
  const [page, setPage] = useState(initialData.page);
  const [hasMore, setHasMore] = useState(Boolean(initialData.total_pages > page));

  useEffect(() => {
    if (api.includes('search')) {
      setResults(initialData.results);
    }
  }, [initialData, api]);

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
