import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.query;
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.MOVIES_API}&language=en-US&page=${page}`
  ).then((res) => res.json());
  res.status(200).json(response);
};
export default handler;
