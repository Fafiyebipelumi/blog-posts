// import { FC } from 'react'

import { IPosts } from "../interfaces/Posts.interface"

// type IPost = {
//     userId?: number
//     id?: number
//     title: string
//     body: string
// }

const Post = ({ posts }: IPosts) => {
    return (
        <>
            {posts.map(post => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ))}
        </>
    )
}

export default Post