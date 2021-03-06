import {Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const spacing =2;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(spacing),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const NavigationHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>       
        <Typography variant="h6" className={classes.title}>
          PetsApp
        </Typography>
        <Button color="inherit">
          <NavLink to='/' >Home</NavLink>
        </Button>
        <Button color="inherit">
          <NavLink to='/citas' >Citas</NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  </div>
  );
};
