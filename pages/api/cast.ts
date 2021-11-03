import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.MOVIES_API}&language=en-US`
  ).then((response) => response.json());
  res.status(200).json(data);
};
export default handler;
