import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIES_API}&language=en-US&page=${req.query.page}&region=US`
  ).then((res) => res.json());
  res.status(200).json(response);
};

export default handler;
