//import { GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import transcripts from '../api/transcripts.json'

export default function Transcript() {
    const router = useRouter()
    const { pid } = router.query
    if (pid === undefined) {
        return <div>loading</div>
    }
    const transcript = transcripts[parseInt(pid as string)]
    return (
        <div>
            <h1>{transcript.title}</h1>
            <a href={transcript.link}>{transcript.link}</a>
            <p>{transcript.published}</p>
            <p>{transcript.summary}</p>
            {transcript.transcript.map((x, index) =>
                <div key={index}>
                    {x.text}
                </div>
            )}
        </div>
    )

}