import React, { useContext } from 'react';
import PostAddForm from '../PostAddForm/PostAddForm';
import PostList from '../PostList/PostList';
import { TwitterContext } from '../Provider';
import TwitterHeader from '../TwitterHeader/TwitterHeader';

type Props = {};

const TwitterContainer = (props: Props) => {
    const { allPosts } = useContext(TwitterContext);
    return (
        <div className='container'>
            <TwitterHeader />
            <PostAddForm />
            {allPosts !== 0 ? (
                <PostList />
            ) : (
                <div className='text-uppercase fs-3 fw-bold'>
                    Постов пока нет! Добавьте первый:)
                </div>
            )}
        </div>
    );
};

export default TwitterContainer;
