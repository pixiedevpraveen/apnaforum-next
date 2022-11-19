interface TopicBase {
    authorName: string,
    isactive: boolean,
    name: string,
    pinned: boolean,
    slug: string,
    time: string,
}

export interface TopicShort extends TopicBase {
    dislikes: number,
    likes: number,
}

export interface Topic extends TopicBase {
    authorUsername: string,
    body: string,
    forumData: {},
    likes: number,
    isLiked: boolean,
};

export default Topic
