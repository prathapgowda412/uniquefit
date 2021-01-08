/* eslint-disable jsx-a11y/alt-text */
import { Grid, Hidden, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	main: {
		height: '100vh',
		backgroundColor: 'white',
		width: '100%',
	},
	imgsuccess: {
		width: '100%',
		objectFit: 'cover',
	},
}));

function Ordersuccess() {
	const classes = useStyles();
	return (
		<>
			<Grid className={classes.main}>
				<Hidden xsDown>
					<Link to="/">
						<img className={classes.imgsuccess} src={require('./statics/ordersuccess.png')} />
					</Link>
				</Hidden>
				<Hidden smUp>
					<Link to="/">
						<img className={classes.imgsuccess} src={require('./statics/ordersuccessmob.png')} />
					</Link>
				</Hidden>
			</Grid>
		</>
	);
}

export default Ordersuccess;
