import { FC } from "react"
import { IPosts } from "../interfaces/Posts.interface"
import { Pane, Text } from "evergreen-ui"
import { Link } from "react-router-dom"

const Post: FC<IPosts> = ({ posts }) => {
    return (
        <Pane display='flex' alignItems='center' flexDirection='row' flexWrap='wrap' justifyContent='center'>
            {posts.map(post => (
                <Link to={`/post/${post.id}`} key={post.id} style={{ textDecoration: 'none' }}>
                    <Pane width='300px' border='1px solid #ccc' height='100px' display='flex' alignItems='center' borderRadius={10} justifyContent='center' marginX={20} marginY={30} cursor='pointer'>
                        <Text fontSize='18px' marginX={20} color='#333' fontWeight='bold' >{post.title}</Text>
                    </Pane>
                </Link>
            ))}
        </Pane>
    )
}

export default Post