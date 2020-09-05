import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import Nav from '../Nav/Nav';




const Home = () => {
    
    

    const [post, setPost] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(error => console.log(error))
    }, [])



    return (
        <div>
            <Nav></Nav>
            {
                post.map(posts => <Post key={posts.id} post={posts}></Post>)
            }


        </div>
    );
};

export default Home;