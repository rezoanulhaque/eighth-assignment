import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = (props) => {
    const { title, body, id } = props.post;
    return (
        <div className="post-item">
            <h3>Title: {title}</h3>
            <p>{body}</p>
            <Button className="link-button" variant="contained" color="default">
            <Link className="link-button" to={`/postdetail/${id}`}>Read More</Link>
            </Button>
        </div>
    );
};

export default Post;