import React, { useContext } from 'react';
import {
    ListGroup,
    ListGroupItemHeading,
    ListGroupItemText,
    ListGroupItem,
} from 'reactstrap';
import PostListItem from '../../PostListItem/PostListItem';
import { TwitterContext } from '../Provider';
import './PostList.scss';

type Props = {};

export type PostListItemType = {
    id: number;
    title: string;
    body: string;
    active: boolean;
    important: boolean;
    liked: boolean;
};

const PostList = (props: Props) => {
    const { posts } = useContext(TwitterContext);

    const elements = posts.map((post: PostListItemType) => {
        return (
            <PostListItem
                element={post}
                key={post.id}
            />
        );
    });
    return <ListGroup>{elements}</ListGroup>;
};

export default PostList;
