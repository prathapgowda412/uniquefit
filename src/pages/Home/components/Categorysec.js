import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import StripesHome from './statics/images/shop stripes shirts.png';
import ChecksHome from './statics/images/shop checks shirts.png';
import SolidsHome from './statics/images/shop solid shirts.png';
import PrintedHome from './statics/images/shop printed shirts.png';
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
          style={{ padding: '0px 8px', margin: '5px 0' }}
        >
          <Link to='/Solids'>
            <img
              alt='Uniquefit ,clothing brand'
              className={classes.catimg}
              src={SolidsHome}
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
              alt='Uniquefit ,stripes shirts'
              className={classes.catimg}
              src={StripesHome}
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
              alt='Uniquefit ,clothing brand'
              className={classes.catimg}
              src={ChecksHome}
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
              alt='Uniquefit ,clothing brand'
              className={classes.catimg}
              src={PrintedHome}
            />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Categorysec;
