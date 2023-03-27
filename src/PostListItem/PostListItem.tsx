import React, { useContext } from 'react';
import { PostListItemType } from '../components/PostList/PostList';
import {
    ListGroupItemHeading,
    ListGroupItemText,
    ListGroupItem,
} from 'reactstrap';
import { TwitterContext } from '../components/Provider';
import '../components/PostList/PostList.scss';

type Props = {
    element: PostListItemType;
};

const PostListItem = ({ element }: Props) => {
    let classList =
        'd-flex justify-content-between align-items-center activeItem';

    const { changeLikedAttributte, changeImportantAttributte, deletePost } =
        useContext(TwitterContext);
    return (
        <ListGroupItem
            key={element.id}
            className={classList}
            onDoubleClick={() => changeLikedAttributte(element.id)}>
            <div>
                <ListGroupItemHeading>{element.title}</ListGroupItemHeading>
                <ListGroupItemText>{element.body}</ListGroupItemText>
            </div>
            <div className='d-flex'>
                <div className={element.liked ? 'heart active' : 'heart'}>
                    {' '}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='red'
                        className='bi bi-heart-fill'
                        viewBox='0 0 16 16'>
                        <path
                            fill-rule='evenodd'
                            d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                        />
                    </svg>
                </div>

                <div className='star'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        onClick={() => changeImportantAttributte(element.id)}
                        fill={element.important ? 'yellow' : 'black'}
                        className='bi bi-star-fill'
                        viewBox='0 0 16 16'>
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                    </svg>
                </div>
                <div>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        onClick={(e) => deletePost(element.id)}
                        fill='currentColor'
                        className='bi bi-trash3-fill'
                        viewBox='0 0 16 16'>
                        <path d='M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z' />
                    </svg>
                </div>
            </div>
        </ListGroupItem>
    );
};

export default PostListItem;
