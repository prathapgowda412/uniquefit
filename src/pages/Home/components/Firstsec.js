import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Grid, makeStyles, Paper, Box, Container, Card, CardMedia, Button, Typography } from '@material-ui/core';
// import manimage from '../statics/images/manblack.jpg';
// import girlimage from '../statics/images/girl.jpg';
import manimage from './statics/images/manblack.jpg';
import girlimage from './statics/images/girl.jpg';
import { Link } from 'react-router-dom';
// import {} from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
	root: {
		overflow: 'hidden',
		height: '250px',
		backgroundColor: 'grey',
		position: 'relative',
		height: '70vh',
		[theme.breakpoints.down('sm')]: {
			height: '35vh',
		},
	},

	media: {
		height: 500,
	},
	headingbox: {
		position: 'absolute',
		display: 'flex',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	headingone: {
		fontSize: '49px',
		color: 'white',
		[theme.breakpoints.down('sm')]: {
			fontSize: '29px',
		},
	},
	link: {
		textDecoration: 'none',
		color: 'white',
	},
	Shopnowbutton: {
		color: 'white',
		backgroundColor: '#387A76',
		padding: '10px 69px',
		fontSize: '18px',
		borderRadius: '8px',
		'&:hover': {
			backgroundColor: '#034b46',
		},
	},
}));

function Firstsec() {
	const classes = useStyles();
	return (
		<Grid item container xs={12} alignContent="stretch" className={classes.root}>
			<Box className={classes.headingbox}>
				<Typography variant="h1" className={classes.headingone}>
					Customize your cloths on your own preferences
				</Typography>

				<Button className={classes.Shopnowbutton}>
					<Link className={classes.link} to="/Shop">
						Shop Now
					</Link>
					{/* <a href="/src/pages/Shop/Shop.js"> shop</a> */}
				</Button>
			</Box>
			<Grid item container xs={6} sm={6}>
				<img src={manimage} width="100%" height="100%" />
				{/* <CardMedia component="img" image={require('../statics/images/manblack.jpg')} title="" /> */}
			</Grid>
			<Grid item container xs={6} sm={6}>
				<img src={girlimage} width="100%" />
				{/* <CardMedia component="img" image={girlimage} title="" /> */}
			</Grid>
		</Grid>
	);
}
export default Firstsec;
