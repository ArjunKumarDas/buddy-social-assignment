import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import './PostDetail.css'


const PostDetail = () => {
    
    // post api
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setPost(data));
}, [])
   
//comment api
    
    const [comment, setComment] = useState([]);
     useEffect(() => {
     fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(res => res.json())
    .then(data => setComment(data))
    
  }, [])
console.log(comment, post)
    return (
        <div className="post-comment">
           <div className="post-part">
                <h3 className="common-color">{post.title}</h3>
                <p className="common-color">{post.body}</p> 
             
           </div> 
           <div className="comment-part">
             {
                 comment.map(com =>  <Comment com={com}></Comment>)
             }
             
           </div>
        </div>
    );
};

export default PostDetail;




