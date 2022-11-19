import { FC } from 'react'
import { usePostFetch } from 'helpers/mixin'

const AddComment: FC<{ slug: string, closeBtn?: boolean }> = ({ slug, closeBtn }) => {

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const formdata = new FormData(event.target)
    }

    return (
        <form onSubmit={handleSubmit} className='strict'>
            <div id="add-comment" className="card card-bg col mt-5 py-3">
                {closeBtn && <span className="close close-top" onClick={() => { console.log("close") }}></span>}
                <label htmlFor="editor-add-comment">Add Comment</label>
                <div className="editor-menu"></div>
                <textarea name="comment-body" id="editor-add-comment" cols={30} rows={50} minLength={10} required></textarea>
                {/* <div className='d-flex justify-content-around'> */}
                <button type='submit' className="button">submit</button>
                {/* <button className="button-outline">cancel</button> */}
                {/* </div> */}
                {/* <div className="card comment" id="editorPreview-add-comment"></div> */}
            </div>
        </form>
    )
}

export default AddComment
