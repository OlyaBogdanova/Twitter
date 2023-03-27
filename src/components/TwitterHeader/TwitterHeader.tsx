import React, { useContext } from 'react';
import { TwitterContext } from '../Provider';

type Props = {};

const TwitterHeader = (props: Props) => {
    const { allPosts, likedPosts, importantPosts } = useContext(TwitterContext);
    return (
        <div className='d-flex justify-content-between mt-5 mb-2'>
            <div className='me-1 fw-bold text-uppercase'>Список постов</div>
            <div>
                Всего записей <span className='fw-bold'>{allPosts}</span>,
                понравившихся <span className='fw-bold'>{likedPosts}</span>, в
                избранном <span className='fw-bold'>{importantPosts}</span>
            </div>
        </div>
    );
};

export default TwitterHeader;
