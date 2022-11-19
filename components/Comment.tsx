import { FC } from "react"
import Comment from "../models/Comment"
import Reply from "../models/Reply"
import ReplyComponent from "./Reply"

const CommentComponent: FC<{ comment: Comment, replyCallback: Function }> = ({ comment, replyCallback }) => {
    const doCallback = () => {
        replyCallback(comment.id.toString(), 'comment', comment.body.substring(0, 50))
    }

    if (!comment)
        return (<div className="loading">Loading...</div>)

    return (
        <div className="card comment m-2" id={'comment-' + comment.id}>
            <div className="cont-menu shadow">
                <div>
                    <button className='button button-clear row' onClick={doCallback}>Reply</button>
                    <button className='button button-clear row'>Report</button>
                    <button className='button button-clear row'>Useful</button>
                </div>
            </div>
            <div className="row">
                <img src="/icons/user.svg" alt="author" loading="lazy" />
                <div className="card-body flex-fill mb-5">
                    <div className="card-text md-html">{comment.body}</div>
                    <hr className="small" />

                    <small className="card-details pe-4">
                        <span className="card-author">{comment.authorUsername}</span>
                        <span className="card-time" suppressHydrationWarning>{comment.time.asTime()}</span>
                    </small>
                </div>
            </div>

            {comment.replies.map((reply: Reply) =>
                <ReplyComponent reply={reply} replyCallback={replyCallback} key={reply.id} />
            )}
        </div>
    )
}


export default CommentComponent
