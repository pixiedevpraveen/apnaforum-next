import { FC } from "react"
import Topic from "models/Topic"
import Like from "./form/Like";

const TopicViewComponent: FC<{ topic: Topic, callback: Function }> = ({ topic, callback }) => {

    return (
        <div className="topic-view">
            <div className="cont-menu shadow">
                <div>
                    <button className='button button-clear row'>Share</button>
                    <button className='button button-clear row'>Report</button>
                    <button className='button button-clear row'>Useful</button>
                </div>
            </div>
            <div className="row">
                <img src="/icons/user.svg" alt="author" />
                <div className="card-body flex-fill">
                    <div className="card-details me-5">
                        <span className="card-author">{topic.authorName}</span>
                    </div>
                    <div className="card-text md-html">{topic.body}</div>
                </div>
            </div>
            <div className="interaction row">
                <div>
                    <Like isChecked={topic.isLiked} to={'topic'} toId={topic.slug} count={topic.likes} key={topic.likes} />
                </div>
                <div>
                    <button className='button-outline' onClick={() => { callback() }}>Comment</button>
                </div>
                <div>
                    <button className='button-outline'>Share</button>
                </div>
            </div>
        </div>
    )
}


export default TopicViewComponent
