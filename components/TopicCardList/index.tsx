import Link from "next/link";
import { FC } from 'react';
import { TopicShort } from "models/Topic";

const TopicCardList: FC<{ topics: TopicShort[] }> = ({ topics }) => {

    return (
        <div>
            {topics.map((topic: TopicShort) => (
                <Link href={'/topics/' + topic.slug} key={topic.slug}>
                    <a className="outline-off2">
                        <div className="card col pointer my-3 shadow border-x" key={topic.slug}>
                            <div className="card-title"> {topic.name} </div>
                        </div>
                    </a>
                </Link>
            ))}
        </div >
    )
}

export default TopicCardList
