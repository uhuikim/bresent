// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = Array<{
  id: number;
  category: string;
  title: string;
  imgUrl: string;
  country: string;
}>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json([
    {
      id: 56,
      category: 'bread',
      title: '구겔호프',
      imgUrl: '구겔호프',
      country: 'CH',
    },
  ]);
}
