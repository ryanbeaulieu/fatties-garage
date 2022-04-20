import type { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

    if (req.method !== "GET") res.status(400);
    const { publicRuntimeConfig: { headers } } = getConfig();

    const data = await fetch(process.env.STRIPE_URL + "products", headers)
        .then((test) => test.json())

    res.status(200).json(data)

}
