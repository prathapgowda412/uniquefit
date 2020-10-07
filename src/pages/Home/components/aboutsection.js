// import classes from '*.module.css';
import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rightarrow from './statics/icons/rightarrow.svg';
import { Link } from 'react-router-dom';
// import rightarrow from '../statics/icons/rightarrow.svg';
const useStyles = makeStyles((theme) => ({
	mainabout: {
		minHeight: '500px',
		maxHeight: 'fit-content',
		marginTop: '120px',
		position: 'relative',
	},
	knowmorebutton: {
		// backgroundColor: '#387A76',
		height: '79px',
		width: '350px',
		display: 'flex',
		justifyContent: 'space-around',
		'&:hover': {
			backgroundColor: '#387A76',
		},
	},
	knowmore: {
		textDecoration: 'none',
		color: 'black',
		fontWeight: '700',
	},
	aboutimgone: {
		height: '50%',
		position: 'relative',
	},
	aboutimgtwo: {
		width: '90%',
		position: 'relative',
	},
	aboutimgthree: {
		width: '50%',
		marginTop: '20px',
		position: 'relative',
	},
	bodytext: {
		width: '90%',
		fontSize: '24px',
		marginBottom: '15px',
		// fontWeight: 'bold',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
}));

function Aboutsection() {
	const classes = useStyles();
	return (
		<Grid item container xs={11} sm={10} className={classes.mainabout}>
			<Grid item container md={6} xs={12}>
				<Typography variant="h2">About US</Typography>
				<Typography variant="body1" className={classes.bodytext}>
					We are a young and energetic, Hyderabad based ecommerce company who’s primary focus is to provide
					high quality clothing at very affordable prices. We’ve known and experienced the struggles of a
					regular middle class Indian family when it comes to clothing and thus are striving to provide the
					best online experience. We’re dedicated to deliver the best fit without compromising on the fabric
					or the styling.
				</Typography>
				<Link className={classes.knowmore} to="/About">
					<Button variant="outlined" className={classes.knowmorebutton}>
						KNOW MORE
						<img src={rightarrow} />
					</Button>
				</Link>
				{/* <FontAwesomeIcon style={{ height: '50px' }} icon={(['fas'], ['fa-long-arrow-alt-right'])} /> */}
				{/* <i class="fas fa-long-arrow-alt-right"> huj</i> */}
			</Grid>
			<Grid style={{ position: 'relative' }} item container md={6} xs={12} alignItems="center">
				<Grid item container xs={6}>
					<img className={classes.aboutimgone} src={require('./statics/images/about1.png')} />
				</Grid>
				<Grid item container xs={6}>
					<img className={classes.aboutimgtwo} src={require('./statics/images/about2.png')} />
					<img className={classes.aboutimgthree} src={require('./statics/images/about22.png')} />
				</Grid>
			</Grid>
		</Grid>
	);
}
export default Aboutsection;
