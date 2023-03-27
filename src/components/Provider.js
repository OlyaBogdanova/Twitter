import React, { createContext, useEffect, useState } from 'react';
import Services from '../services/Services';
export const TwitterContext = createContext();
const Provider = (props) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        Services.getPostsList().then((data) => {
            const newArr = [...data].map((el) => ({
                ...el,
                active: false,
                important: false,
                liked: false,
            }));
            setPosts(newArr);
        });
    }, []);

    const allPosts = posts.length;
    const likedPosts = posts.filter((post) => post.liked).length;
    const importantPosts = posts.filter((post) => post.important).length;

    function changeLikedAttributte(id) {
        const index = posts.findIndex((el) => el.id === id);
        const newArr = [...posts];

        newArr[index].liked = !newArr[index].liked;
        setPosts(newArr);
    }
    function changeImportantAttributte(id) {
        const index = posts.findIndex((el) => el.id === id);
        const newArr = [...posts];

        newArr[index].important = !newArr[index].important;
        setPosts(newArr);
    }
    function addPost(post) {
        const newArr = [...posts];
        let maxId = 0;
        newArr.forEach((elem) => {
            if (elem.id > maxId) {
                maxId = elem.id;
            }
        });

        newArr.unshift({
            id: maxId + 1,
            title: `Post ${maxId + 1}`,
            body: post,
            active: false,
            important: false,
            liked: false,
        });
        setPosts(newArr);
    }

    function deletePost(id) {
        const newArr = [...posts];
        const index = posts.findIndex((el) => el.id === id);
console.log(index);
        let changeArr;
        if (index !== 0) {
            changeArr = [
                ...newArr.splice(0, index),
                ...newArr.splice(index, newArr.length - 1),
            ];
            console.log(changeArr);
        } else {
            changeArr = [...newArr.splice(1, newArr.length - 1)];
            console.log(changeArr);
        }
        setPosts(changeArr);
    }

    return (
        <TwitterContext.Provider
            value={{
                posts,
                allPosts,
                likedPosts,
                importantPosts,
                changeLikedAttributte,
                changeImportantAttributte,
                addPost,
                deletePost,
            }}>
            {props.children}
        </TwitterContext.Provider>
    );
};

export default Provider;
