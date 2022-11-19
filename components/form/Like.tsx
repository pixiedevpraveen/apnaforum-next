import { FC, useState } from 'react'
import { useFetch, setMsg } from 'helpers/mixin';
import { startLoading, stopLoading } from "helpers/mixin";

const Like: FC<{ isChecked: boolean, to: string, toId: string, count?: number }> = ({ isChecked, to, toId, count }) => {

    const [topicLike, setTopicLike] = useState(isChecked)
    const [likeCount, setLikeCount] = useState(count)

    const doLike = (event: any) => {

        startLoading(2000)

        useFetch(`api/action/`, `&action=like&to=${to}&id=${toId}`, topicLike ? 'DELETE' : 'GET')
            .then((res) => res.json())
            .then((data) => {
                if (data.message.tag === 'success') {
                    stopLoading()
                    setMsg(`Like ${topicLike ? 'removed' : 'added'}`, 5000)

                    setTimeout(() => {
                        setLikeCount(data.count)
                    }, 500);
                } else {
                    console.log(data);
                    
                    throw new Error(data.message)
                }
            })
            .catch((err: Error) => {
                setTimeout(() => {
                    setTopicLike(!event.target.checked)
                    console.log(err.message, event.target.checked, topicLike);
                }, 500)
            }
            )

        setTopicLike(event.target.checked)
    }


    return (
        <>
            <input type="checkbox" checked={topicLike} onChange={doLike} id={to + '-like'} className='hidden' />
            <label className='heart' htmlFor={to + '-like'}></label>
            {count && <span> {likeCount} likes </span>}
        </>
    )
}

export default Like
