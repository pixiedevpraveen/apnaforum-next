import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import CommentComponent from 'components/Comment';
import TopicViewComponent from 'components/TopicView';
import { Topic, TopicShort } from "models/Topic";
import Custom404 from "../404"
import AddComment from 'components/AddComment';
import Title from 'components/Title';
import { convertMarkToHtmlWithQuery, useFetch } from "helpers/mixin";
import Head from "next/head"
import AddReply from 'components/AddReply';

const TopicView: NextPage<{ topicData: { topic: Topic, comments: [] }, error: boolean, pending: boolean }> = ({ topicData, error, pending }) => {
    if (error)
        return <Custom404 message='The topic you are finding is no more available.' />

    if (pending)
        return (<div className='loading'> loading...</div>)


    useEffect(() => {
        convertMarkToHtmlWithQuery('.md-html')
    }, [])

    const [floatComment, setFloatComment] = useState(false)
    const [floatReply, setFloatReply] = useState(false)
    const [replyTo, setReplyTo] = useState(['', '', ''])

    const addReplyCB = (id: string, type: string, body: string) => {
        setReplyTo([id, type, body])

        showAddReplyModal()
    }

    const showAddCommentModal = () => {
        setFloatComment(!floatComment)
    }
    const showAddReplyModal = () => {
        setFloatReply(!floatReply)
    }


    return (
        <div className='page'>
            <Title>{topicData.topic.name}</Title>
            <Head>
                <meta name="description" content={topicData.topic.name} />
                <meta name="keywords" content={topicData.topic.name} />
            </Head>
            <section>
                <div className="heading px-3">
                    <h2 className="topic-view-title">{topicData.topic.name}</h2>
                    <div>
                        <span title="Topic will be closed after 5 days of no activity" className="topic-view-status">OPEN</span>
                        <span suppressHydrationWarning>{topicData.topic.time.asTime()}</span>
                    </div>
                </div>

                <TopicViewComponent topic={topicData.topic} callback={() => { setFloatComment(!floatComment) }} />

                {<div className="card-group hover-light" id="comments">
                    {topicData.comments.map((comment: any) => (
                        <CommentComponent comment={comment} replyCallback={addReplyCB} key={comment.id} />
                    ))}
                </div>}

                <div className={'modal' + (floatComment ? ' show' : '')}>
                    {floatComment && <span className="close close-top" onClick={showAddCommentModal}></span>}
                    <AddComment slug={topicData.topic.slug} />
                </div>

                <div className={'modal' + (floatReply ? ' show' : ' hidden')}>
                    {floatReply && <span className="close close-top" onClick={showAddReplyModal}></span>}
                    <AddReply replyTo={replyTo} />
                </div>

            </section>
        </div>
    )
}

export async function getServerSidePaths() {
    const topicData = await useFetch("api/topics/").then((res) => res.json())

    const paths = topicData.topics.map((topic: TopicShort) => ({
        params: { slug: topic.slug }
    }))

    return { paths, fallback: 'blocking' }
}

export async function getServerSideProps({ params }: { params: { slug: string, fallback: boolean } }) {

    let topicData = {}
    let error = false;
    let pending = true;

    try {
        topicData = await useFetch(`api/topics/${params.slug}/`, '&res=all').then((res) => res.json())
        pending = false
    } catch (err) {
        error = true;
        return { props: { topicData, error, pending }/* , revalidate: 10 */ }
    }

    return { props: { topicData, error, pending }/* , revalidate: 10 */ }
}

export default TopicView
