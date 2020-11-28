import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  main: {
    // backgroundColor: 'grey',
    marginTop: '64px',
    height: 'fit-content',
    // height: '10px',
  },
  catimg: {
    width: '100%',
  },
}));

function Categorysec() {
  const classes = useStyles();
  return (
    <Grid item justify='center' container xs={12} className={classes.main}>
      <Grid item container xs={11}>
        <Grid
          item
          container
          justify='center'
          xs={6}
          md={3}
          style={{ padding: '0px 7px' }}
        >
          <Link to='/Solids'>
            <img
              className={classes.catimg}
              src={require('./statics/images/shop solid shirts.png')}
            />
          </Link>
        </Grid>
        <Grid
          item
          container
          justify='center'
          xs={6}
          md={3}
          style={{ padding: '0px 7px' }}
        >
          <Link to='/Stripes'>
            <img
              className={classes.catimg}
              src={require('./statics/images/shop stripes shirts.png')}
            />
          </Link>
        </Grid>
        <Grid
          item
          container
          justify='center'
          xs={6}
          md={3}
          style={{ padding: '0px 7px' }}
        >
          <Link to='/Checks'>
            <img
              className={classes.catimg}
              src={require('./statics/images/shop checks shirts.png')}
            />
          </Link>
        </Grid>
        <Grid
          item
          container
          justify='center'
          xs={6}
          md={3}
          style={{ padding: '0px 7px' }}
        >
          <Link to='/Printed'>
            <img
              className={classes.catimg}
              src={require('./statics/images/shop printed shirts.png')}
            />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Categorysec;
