import React, { useState } from 'react';
import fake from '../../fake';



const Comment = (props) => {
    const {name, email, body, id, postId} = props.comment;
   

   
    
    const comStyle ={
        border: '1px solid red',
        margin: " 5px",
        padding:" 10px",
        textAlign: 'center'
    }
    return (
        <div style={comStyle}>
            <h1>{postId}</h1>
            <h5 style={comStyle}> Name: {name}</h5>
            <h5 style={comStyle}>Email: {email}</h5>
            <h5 style={comStyle}>Body: {body}</h5>
            <h5 style={comStyle}>Id: {id}</h5>
            <br/>
            
            
        </div>
    );
};

export default Comment;