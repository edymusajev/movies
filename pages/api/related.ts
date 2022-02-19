import { NextApiRequest, NextApiResponse } from 'next';
import { Movie, Series, SeriesList } from '../../interfaces/Movie';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  let tv = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.MOVIES_API}&language=en-US&page=1`
  ).then((response) => response.json());
  let movies = await fetch(`
  https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.MOVIES_API}&language=en-US&page=1
  `).then((response) => response.json());

  tv.results && tv.results.forEach((series: Series) => (series.type = 'tv'));
  movies.results && movies?.results.forEach((movie: Movie) => (movie.type = 'movie'));

  const data = tv.results
    ? movies.results
      ? tv.results.concat(movies.results)
      : tv.results
    : movies.results;
  res.status(200).json(data.sort((a: any, b: any) => (a.popularity < b.popularity ? 1 : -1)));
};

export default handler;
