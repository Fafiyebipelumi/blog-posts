import { FC, useState } from 'react'
import { TextInputField, Button, FormField } from 'evergreen-ui';
import * as React from 'react';
// import axios from '../hooks/axios';
import axios from 'axios';

const Profile: FC = () => {

    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');

    // const Add_Post_Url = '/posts'

    // const details = new FormData();
    // details.append('title', title)
    // details.append('body', body)

    // const AddPost = {
    //     method: 'POST',
    //     url: Add_Post_Url,
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     data: details
    // }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Perform form submission logic here
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title, body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => console.log(res)).catch(err => console.error(err)
        )
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBody(event.target.value);
    };

    return (
        // <Form onSubmit={handleSubmit}>
        <FormField onSubmit={handleSubmit} display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'>
            <TextInputField
                label="Title"
                value={title}
                onChange={handleTitleChange}
                required
                outline='none'
                width='50%'
            />
            <TextInputField
                label="Body"
                value={body}
                onChange={handleBodyChange}
                required
                outline='none'
                width='50%'
            />
            <Button type="submit" appearance="primary">
                Submit
            </Button>
        </FormField>
        // </Form>
    )
}

export default Profile;