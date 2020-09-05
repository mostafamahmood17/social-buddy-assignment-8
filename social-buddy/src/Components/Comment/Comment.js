import React, { useState } from 'react';
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
  const { name, email, body, id, postId } = props.comment;
  const classes = useStyles();


  // const fake = {1:"https://randomuser.me/api/portraits/men/86.jpg",
  //               2:"https://randomuser.me/api/portraits/men/73.jpg",
  //               3:"https://randomuser.me/api/portraits/men/78.jpg",
  //               4:"https://randomuser.me/api/portraits/women/93.jpg",
  //               5:"https://randomuser.me/api/portraits/women/45.jpg",
  //               6:"https://randomuser.me/api/portraits/men/45.jpg",
  //               7:"https://randomuser.me/api/portraits/men/56.jpg",
  //               8:"https://randomuser.me/api/portraits/men/79.jpg",
  //               9:"https://randomuser.me/api/portraits/women/77.jpg",
  //               }
  

// const twoDigit = (id) => {
//   let num = [];
//   if(id > 9) { num.push(id % 10);
//               id = parseInt(id / 10)}
//   else{id};
//   return num[0];
// }
  

  return (
    <>
      <h1 style={{ textAlign: "center", color : "#3f51b5" }}>Comment</h1>
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src={`https://randomuser.me/api/portraits/women/${postId}.jpg`}/>
          </ListItemAvatar>
          <ListItemText
            primary={name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {email}
                </Typography>
                <br />
                {body}
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
