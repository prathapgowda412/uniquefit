import { Grid, Hidden, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: '80px',
  },
  someimg: {
    width: '100%',
    height: 'auto',
  },
}));

function Somesec() {
  const classes = useStyles();
  return (
    <Grid item container xs={12} className={classes.main}>
      <Hidden smUp>
        <img
          className={classes.someimg}
          src={require('./statics/images/abovefotermob.jpg')}
        />
      </Hidden>
      <Hidden xsDown>
        <img
          className={classes.someimg}
          src={require('./statics/images/abovefoter.jpg')}
        />
      </Hidden>
    </Grid>
  );
}

export default Somesec;
