import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const tv = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.MOVIES_API}&language=en-US&page=1`
  ).then((response) => response.json());
  const movies = await fetch(`
  https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.MOVIES_API}&language=en-US&page=1
  `).then((response) => response.json());
  const data = tv.results ? tv.results.concat(movies.results) : movies.results;
  res.status(200).json(data.sort((a: any, b: any) => (a.popularity < b.popularity ? 1 : -1)));
};

export default handler;
