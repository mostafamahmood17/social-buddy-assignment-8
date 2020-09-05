import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Home = () => {

    const [post, setPost] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))

    }, [])
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Social Buddy
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>


            <h1>Post = {post.length}</h1>
            {
                post.map(posts => <Post key={posts.id} post={posts}></Post>)
            }


        </div>
    );
};

export default Home;