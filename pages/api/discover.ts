import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { category, monetization } = req.query;
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/${category}?api_key=${process.env.MOVIES_API}&watch_region=LV&with_watch_monetization_types=${monetization}`
  ).then((response) => response.json());
  res.status(200).json(data);
};
export default handler;
