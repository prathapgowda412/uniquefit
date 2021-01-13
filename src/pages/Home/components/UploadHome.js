import React from 'react';
import { Grid, makeStyles, Hidden } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ContactHome from './statics/images/yellowboymob.png';
import ContactHome2 from './statics/images/yellowboydesk.png';
const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    height: 'auto',
    position: 'relative',
    marginTop: '76px',

    [theme.breakpoints.down('sm')]: {
      height: 'fit-content',
    },
  },

  heroimg: {
    width: '100%',
  },
}));

function Uploadhome() {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      xs={11}
      alignContent='stretch'
      className={classes.root}
    >
      <Hidden smUp>
        <Link to='/Contact'>
          <img
            alt='Uniquefit ,clothing brand'
            className={classes.heroimg}
            src={ContactHome}
          />
        </Link>
      </Hidden>
      <Hidden xsDown>
        <Link to='/Contact'>
          <img
            alt='Uniquefit ,clothing brand'
            className={classes.heroimg}
            src={ContactHome2}
          />
        </Link>
      </Hidden>
      {/* <Hidden> two</Hidden> */}
      {/* <Box className={classes.headingbox}>
				<Typography variant="h1" className={classes.headingone}>
					Customize your cloths on your own preferences
				</Typography>

				<Button className={classes.Shopnowbutton}>
					<Link className={classes.link} to="/Shop">
						Shop Now
					</Link>
				</Button>
			</Box>
			<Grid item container xs={6} sm={6}>
				<img src={manimage} width="100%" height="100%" />
			</Grid>
			<Grid item container xs={6} sm={6}>
				<img src={girlimage} width="100%" />
			</Grid> */}
    </Grid>
  );
}
export default Uploadhome;
