import { NextApiRequest, NextApiResponse } from 'next';
import fetchList from '../../../services/formatFetchedList';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.query;
  const path = `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.MOVIES_API}&language=en-US&page=${page}`;
  const data = await fetchList(path, Number(page), 'tv');
  res.status(200).json(data);
};
export default handler;
