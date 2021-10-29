import { Movie } from '../interfaces/Movie';

export const filterResults = (results: Movie[]) => {
  return results.filter((result) => result.poster_path);
};
