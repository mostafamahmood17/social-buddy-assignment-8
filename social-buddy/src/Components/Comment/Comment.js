import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const Comment = (props) => {
  const { name, email, body, id } = props.comment;
  const classes = useStyles();

function digit(id) {
  let num = parseInt((id /10));
  return num
}
// console.log((digit(54)))
  
  // used matarial ui list template
  return (
    <>
      <h1 style={{ textAlign: "center", color : "#3f51b5" }}>Comment</h1>
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src={`https://randomuser.me/api/portraits/men/${digit(id)}.jpg`}/>
          </ListItemAvatar>
           <ListItemText
            primary={name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary">
                  Email : {email}
                </Typography>
                <br />
                <strong>Comment :</strong> {body}
              </React.Fragment>
            }
          />
         </ListItem>
        <Divider variant="inset" component="li"/>
      </List>
    </>
  );
};

export default Comment;



