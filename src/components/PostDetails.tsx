import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../hooks/axios';
import { Pane, Text } from 'evergreen-ui';

const PostDetails: FC = () => {
    const { id } = useParams()
    const getPostDetailsUrl: string = `/posts/${id}`;

    const [body, setBody] = useState<string>()
    const [detailTitle, setDetailTitle] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getPostDetails = async () => {
            setIsLoading(true)
            try {
                const response = await axios(getPostDetailsUrl)
                setBody(response.data.body);
                setDetailTitle(response.data.title)

            } catch (error) {
                setError('Error')
                setIsLoading(false)
            }
            setIsLoading(false)
        }
        getPostDetails()
    }, [id])

    return (
        <Pane display='flex' flexDirection='column' alignItems='center' justifyContent='center' marginX={40}>
            <Pane>
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </Pane>
            <Pane display='flex' alignItems='flex-start' justifyContent='flex-start' flexDirection='column'>
                <Text fontSize={18} textTransform='uppercase' marginY={30}>{detailTitle}</Text>
                <Text fontSize={30} lineHeight={2}>{body}</Text>
            </Pane>
        </Pane>
    )
}

export default PostDetails;