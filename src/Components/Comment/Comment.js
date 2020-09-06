import React from 'react';
import manphoto from '../../images/manphoto.jpg';
import './Comment.css';

const Comment = (props) => {
    const {name, email, body} = props.comment;
    return (
        <div className="main-comment">
            <div className="photo-comment">
                <img src={manphoto} alt=""/>
            </div>
            <div className="comment-detail">
            <p>{body}</p>
            <h5>{name}</h5>
            <p><small>{email}</small></p>
            </div>
        </div>
    );
};

export default Comment;