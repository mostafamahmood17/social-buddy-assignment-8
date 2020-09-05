import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
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
    },
  });
  

const Post = (props) => {
    const {id , title, body} = props.post;
   
        const classes = useStyles();
        const bull = <span className={classes.bullet}>•</span>;
        const text ={
            textAlign: 'center'
        }
   
    return (
        <div style={text}>
            <h1>id = {id}</h1>
            <h2>title = {title}</h2>
             <h3>body = {body}</h3>
             <Link to={`/posts/${id}`}><Button variant="contained" color="primary">
             See Details of id {id}
             </Button>
             </Link>
             
            
        </div>
    );
}

export default Post;

