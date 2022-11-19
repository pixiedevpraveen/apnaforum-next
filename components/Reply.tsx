import { markToHtml } from 'helpers/mixin'
import { FC } from 'react'
import Reply from "../models/Reply"

const ReplyComponent: FC<{ reply: Reply, replyCallback: Function }> = ({ reply, replyCallback }) => {
    const doCallback = () => {
        replyCallback(reply.id.toString(), 'reply', reply.body.substring(0, 50))
    }
    if (!reply)
        return (<div>Loading...</div>)

    return (
        <div className="card reply" id={'reply-' + reply.id}>
            <div className="cont-menu shadow">
                <div>
                    <button className='button button-clear row' onClick={doCallback}>Reply</button>
                    <button className='button button-clear row'>Report</button>
                    <button className='button button-clear row'>Useful</button>
                </div>
            </div>
            <div className="row">
                <img src="/icons/user.svg" alt="author" loading="lazy" />
                <div className="card-body flex-fill">
                    <div className="card-text md-html">{reply.body }</div>
                    <hr className="small" />
                    <small className="card-details pe-4">
                        <span className="card-author">{reply.authorUsername}</span>
                        <span className="card-time" suppressHydrationWarning>{reply.time.asTime()}</span>
                    </small>
                </div>
            </div>
        </div>
    )
}


export default ReplyComponent
