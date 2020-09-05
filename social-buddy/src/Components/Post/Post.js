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
  

const Post = (props) => {
    const {id , title, body} = props.post;
    const classes = useStyles();
    const strongStyle={
      color : "#3f51b5"
    }
    
        
    return (
      
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                    <strong style={strongStyle}>Post {id} = </strong> {title}
                    </Typography>
                    <Typography className={classes.pos} color="textPrimary">
                    <strong style={strongStyle}>Description =</strong> {body}
                     </Typography>
                </CardContent>
                <CardActions className={classes.button}>
                    <Link to={`/posts/${id}`} style={{textDecoration:'none'}}><Button variant="contained" color="primary" size="small">Detail Here for post {id}</Button></Link>
                </CardActions>
            </Card>

     

       
    )
}

export default Post;




