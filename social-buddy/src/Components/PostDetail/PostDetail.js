import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Nav from '../Nav/Nav';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        textAlign: 'center',
        borderBottom: "1px solid #3f51b5"

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
        marginTop: 12,
    },
    button:{
      display: 'flex',
      justifyContent : 'center'

    } 
});

// post api to get each posts
const PostDetail = () => {
    const [detail , setDetail] = useState({});
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setDetail(data))
        .catch(error => console.log(error))
    }, [id])
    
    // comment api to use comments
    const [comment , setComment] = useState([]);
    useEffect(() => {
        fetch(` https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(info => setComment(info))
        .catch(error => console.log(error))  
    }, [id])

   

    const classes = useStyles();
    const strongStyle={
      color : "#3f51b5"
    }
    
    // used matarial ui card
    return (
        <div>
            <Nav></Nav>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                    <strong style={strongStyle}>Post {detail.id} =</strong> {detail.title}
                    </Typography>
                    <Typography className={classes.pos} color="textPrimary">
                    <strong style={strongStyle}>Description =</strong> {detail.body}
                     </Typography>
                </CardContent>
            </Card>

             {
              comment.map(comments => <Comment key = {comments.id} comment = {comments}></Comment>)
             }          
        </div>
    );
};

export default PostDetail;

