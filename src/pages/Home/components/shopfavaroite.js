// import classes from '*.module.css';
import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import shopfavimag from '../statics/images/shopfav.png';
import shopfavimag from './statics/images/formalboy.jpg';

const useStyles = makeStyles((theme) => ({
	mainshop: {
		minHeight: '500px',
		maxHeight: 'fit-content',
		marginTop: '120px',
		position: 'relative',
	},
	shopimg: {
		height: '438px',
		width: '100%',
	},
	bodytext: {
		width: '90%',
		fontSize: '24px',
	},
}));

function Shopfav() {
	const classes = useStyles();
	return (
		<Grid item container justify="center" xs={11} sm={10} className={classes.mainshop}>
			<Grid item container sm={6} xs={12}>
				<Typography variant="h2">Shop Your Favourite actors shirts.</Typography>
				<Typography variant="body1" className={classes.bodytext}>
					Go ahead and show us what you have in your mind. Click on the upload button to choose the look that
					you want to recreate or modify. We’ll help you achieve your perfect fit.
				</Typography>
			</Grid>
			<Grid item container sm={6} xs={12}>
				<img className={classes.shopimg} src={shopfavimag} />
			</Grid>
		</Grid>
	);
}
export default Shopfav;
