import { FC } from "react"
import useSWR from 'swr';
import Forum from "../models/Forum";

const fetcher = (path: string) => fetch(path).then(res => res.json())

const ForumList: FC = () => {

    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_BASE}/api/forums/?res_type=api`, fetcher)

    if (error)
        return (<div>Failed!</div>)

    if (!data)
        return (<div>Loading...</div>)

    return (
        <div>
            <span>Forums</span>
            <ul>
                {data.forums.map((forum: Forum) => (
                    <li key={forum.name}>{forum.name} </li>
                ))}
            </ul>
        </div>
    )
}


export default ForumList
