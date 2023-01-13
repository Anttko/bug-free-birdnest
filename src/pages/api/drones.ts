import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch(process.env.backendUrl)
        const drones = await response.json()
        console.log(drones)
        res.status(200).json(drones)
    } catch (error) {
        res.json({ error })
    }

}