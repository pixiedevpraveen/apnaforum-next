import Reply from "./Reply"

interface Comment {
    id: number
    authorName: string
    authorUsername: string
    body: string
    likeIds: number[]
    replies: Reply[]
    time: string
};

export default Comment
