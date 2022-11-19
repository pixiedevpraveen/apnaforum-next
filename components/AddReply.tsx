import { FC } from 'react'
import { usePostFetch } from '../helpers/mixin'

const AddReply: FC<{ replyTo: string[], closeBtn?: boolean }> = ({ replyTo, closeBtn = false }) => {

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const formdata = new FormData(event.target)
    }

    return (
        <form onSubmit={handleSubmit} className='strict'>
            <div id="add-reply" className="card card-bg col mt-5 py-3">
                {closeBtn && <span className="close close-top" onClick={() => { console.log("close") }}></span>}
                <label htmlFor="editor-add-reply">Add Reply</label>
                <small>{`Reply to  ${replyTo[1]} - ${replyTo[2]}`}</small>
                <div className="editor-menu"></div>
                <textarea name="reply-body" id="editor-add-reply" cols={30} rows={50} minLength={10} required></textarea>
                <button type='submit' className="button">submit</button>
            </div>
        </form>
    )
}

export default AddReply
