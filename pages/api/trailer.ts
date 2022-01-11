import { NextApiRequest, NextApiResponse } from 'next';
import { Trailer } from '../../interfaces/Movie';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, type } = req.query;
  const data = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.MOVIES_API}&language=en-US`
  ).then((res) => res.json());
  const trailer = data.results.find(
    (item: Trailer) => item.site === 'YouTube' && item.type === 'Trailer'
  );
  res.status(200).json(trailer);
};
export default handler;
