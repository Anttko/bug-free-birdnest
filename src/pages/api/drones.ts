import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    console.log(process.env.backendUrl)
    try {
        const response = await fetch('https://curlyspork.fly.dev/api/drones')
        const drones = await response.json()
        console.log(drones)
        res.status(200).json(drones)
    } catch (error) {
        res.json({ error })
    }

}