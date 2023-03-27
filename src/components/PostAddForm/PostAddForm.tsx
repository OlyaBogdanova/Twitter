import React, { useState, useContext, FormEvent } from 'react';
import { Input, Button } from 'reactstrap';
import { TwitterContext } from '../Provider';

type Props = {};

const PostAddForm = (props: Props) => {
    const [inputValue, setInputValue] = useState('');
    const { addPost } = useContext(TwitterContext);
    function addPostAndCleanInput() {
        addPost(inputValue);
        setInputValue('');
    }

    return (
        <div className='d-flex my-2 '>
            <Input
                className='me-2'
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
            />
            <Button
                color='primary'
                onClick={() => addPostAndCleanInput()}>
                Добавить
            </Button>
        </div>
    );
};

export default PostAddForm;
