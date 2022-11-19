
import type { NextApiRequest, NextApiResponse } from 'next'
import transcripts from "./transcripts.json"

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<string[]>
) {

    const titles = transcripts.map(x => x.title)
    res.status(200).json(titles)
}
