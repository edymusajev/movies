import { Movie, MovieList, Person, PersonList, Series, SeriesList } from '../interfaces/Movie';

interface ContentList {
  page: number;
  results: MovieList | SeriesList | PersonList;
  total_pages: number;
  total_results: number;
}

const formatFetchedList = (
  contentList: ContentList,
  page: number,
  type: 'movie' | 'tv' | 'person'
) => {
  const results = contentList.results.map((item: Movie | Series | Person) => {
    return { ...item, type };
  });

  return {
    page,
    results,
    total_pages: contentList.total_pages,
    total_results: contentList.total_results,
  };
};

const fetchList = async (path: string, page: number, type: 'movie' | 'tv' | 'person') => {
  const response = await fetch(path).then((response) => response.json());
  return formatFetchedList(response, page, type);
};

export default fetchList;
