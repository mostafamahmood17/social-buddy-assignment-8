import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import fake from '../../fake';


const PostDetail = () => {
    const [detail , setDetail] = useState({});
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setDetail(data))
    }, [id])
    const [comment , setComment] = useState([]);
   
    useEffect(() => {
        fetch(` https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(info => setComment(info))
    }, [id])

   

    const comStyle ={
        border: '1px solid blue',
        margin: " 5px",
        padding:" 10px",
        textAlign: "center"
    }
    
    return (
        <div>
            <div style={comStyle}>
            <h1>id = {id}</h1>
            <h2>title = {detail.title}</h2>
             <h3>body = {detail.body}</h3>
             </div>
             
             {
              comment.map(comments => <Comment key = {comments.id} comment = {comments}></Comment>)
             }
             
               
             
        </div>
    );
};

export default PostDetail;