import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './PostDetail.css';

const PostDetail = () => {
    const {userId} = useParams();
    const [user, setUser] = useState({});
    useEffect(()=>{
        const url1 = `https://jsonplaceholder.typicode.com/posts/${userId}`;
        fetch(url1)
        .then(res => res.json())
        .then(data =>setUser(data))
    },[])
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        const url2 = `https://jsonplaceholder.typicode.com/comments?postId=${userId}`;
        fetch(url2)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div className="post-details">
            <h1>Title: {user.title}</h1>
            <p>{user.body}</p>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;