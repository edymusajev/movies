import { NextApiRequest, NextApiResponse } from 'next';
import { Person } from '../../../interfaces/Movie';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.query;
  const response = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.MOVIES_API}&language=en-US&page=${page}`
  ).then((res) => res.json());

  const results = response.results.map((item: Person) => {
    return { ...item, type: 'person' };
  });
  res
    .status(200)
    .json({
      page,
      results,
      total_pages: response.total_pages,
      total_results: response.total_results,
    });
};
export default handler;
