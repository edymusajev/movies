import { NextApiRequest, NextApiResponse } from 'next';
import { filterResults } from '../../services/filterResults';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query, page } = req.query;
  console.log(query, page);
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIES_API}&language=en-US&page=${page}&include_adult=false&query=${query}`
  ).then((response) => response.json());
  const filteredResults = filterResults(data.results);
  res
    .status(200)
    .json({ ...data, results: filteredResults, total_results: filteredResults.length });
};

export default handler;
