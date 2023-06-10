import { FC, useEffect, useState } from 'react';
import { Pane } from 'evergreen-ui'
import axios from '../hooks/axios'
import Post from '../components/Post';
// import { IPosts } from '../interfaces/Posts.interface';

const Posts: FC = () => {

    const GET_ALL_POSTS: string = '/posts'

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const getAllPosts = {
        method: 'GET',
        url: GET_ALL_POSTS,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    useEffect(() => {
        const getPosts = async () => {
            setIsLoading(true)
            try {
                const response = await axios(getAllPosts)
                setPosts(response.data);
            } catch (error) {
                setError('Error')
                setIsLoading(false)
            }
            setIsLoading(false)
        }
        getPosts()
    }, [])

    return (
        <Pane>
            <div>All Posts</div>
            {isLoading && <p>Loading...</p>}
            {error && <span>{error}</span>}
            <Post posts={posts} />
        </Pane>
    )
}

export default Posts;