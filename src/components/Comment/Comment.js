
import React from 'react';
import './Comment.css';

const Comment = (props) => {
 const {name, email, body} = props.com;
  return (
    <div className="comment-body">
      <h4>User Name : {name}</h4>
      <p>Gmail : {email}</p>
      <p>Comment : {body}</p>
    </div>
  );
};

export default Comment;



















