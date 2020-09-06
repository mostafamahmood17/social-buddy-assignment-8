import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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

const linkStyle = {
    textDecoration:'none', color:"whitesmoke", cursor:"pointer"
}


// matarial ui appbar and home link used
const Nav = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" gutterBottom className={classes.title}>
                            <div align="center">
                            <Link style={linkStyle} to="/">Social Buddy</Link>
                            </div>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            
        </div>
    );
};

export default Nav;