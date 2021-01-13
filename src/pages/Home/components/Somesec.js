import { Grid, Hidden, makeStyles } from '@material-ui/core';
import React from 'react';
import SecuraDesk from './statics/images/securedesk.png';
import SecureMob from './statics/images/securemob.png';
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
          alt='Uniquefit ,clothing brand'
          className={classes.someimg}
          src={SecureMob}
        />
      </Hidden>
      <Hidden xsDown>
        <img
          alt='Uniquefit ,clothing brand'
          className={classes.someimg}
          src={SecuraDesk}
        />
      </Hidden>
    </Grid>
  );
}

export default Somesec;
