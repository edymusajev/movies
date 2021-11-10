import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.MOVIES_API}`
  ).then((res) => res.json());

  res.status(200).json({
    background: `https://image.tmdb.org/t/p/original${
      data.results[Math.floor(Math.random() * data.results.length)].backdrop_path
    }`,
  });
};

export default handler;
