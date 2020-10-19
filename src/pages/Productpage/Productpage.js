import { Grid, withStyles, makeStyles, Box, Container, Button } from '@material-ui/core';
import React, { Component } from 'react';
import { render } from 'react-dom';

import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../custom.css';

const useStyles = makeStyles((theme) => ({
	main: {
		marginTop: '5px',
		height: 'fit-content',
	},
	leftgrid: {
		height: '600px',
	},
	showdesc: {
		height: '550px',
		// backgroundColor: 'purple',
	},

	tabss: {
		width: '100%',
		height: '600px',
	},
	tablistbotom: {
		height: '100px',
	},
	tabpanelbox: {
		height: '450px',
		overflow: 'hidden',
	},
	paneltab: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	tablist: {
		display: 'flex',
		listStyleType: 'none',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	tabitem: {
		width: '80px',
		height: '80px',
		'&:hover': {
			cursor: 'pointer',
			border: '1px solid grey',
		},
	},
	iconimage: {
		width: '100%',
		height: '100%',
	},
	bigimage: {
		width: '80%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			height: '90%',
		},
	},
	customizebutton: {
		width: '350px',
		marginTop: '20px',
		margin: 'auto',
		marginBottom: '20px',
		height: '60px',
		boxShadow: '0 2px 10px -5px #00000060',
		backgroundColor: '#387A76',
		color: 'white',
		transition: 'all 0.3s',
		'&:hover': {
			backgroundColor: '#034b46',
			color: 'white',
			transform: ' translateY(-1.8px)',
		},
	},
}));

function Productpage() {
	const classes = useStyles();

	return (
		<Grid item container xs={12} className={classes.main}>
			<Grid item container xs={12} sm={6} className={classes.leftgrid}>
				<Tabs className={classes.tabss}>
					<Grid xs={12} className={classes.tabpanelbox}>
						<TabPanel className={classes.paneltab}>
							<img
								className={classes.bigimage}
								src={require('../Home/components/statics/images/casualgoogles.jpg')}
							/>
						</TabPanel>
						<TabPanel className={classes.paneltab}>
							<img
								className={classes.bigimage}
								src={require('../Home/components/statics/images/formalboy.jpg')}
							/>
						</TabPanel>
						<TabPanel className={classes.paneltab}>
							<img
								className={classes.bigimage}
								src={require('../Home/components/statics/images/mancolor.jpg')}
							/>
						</TabPanel>
					</Grid>

					<Grid xs={12} className={classes.tablistbotom}>
						<TabList className={classes.tablist}>
							<Tab className={classes.tabitem}>
								<img
									className={classes.iconimage}
									src={require('../Home/components/statics/images/casualgoogles.jpg')}
								/>
							</Tab>
							<Tab className={classes.tabitem}>
								<img
									className={classes.iconimage}
									src={require('../Home/components/statics/images/formalboy.jpg')}
								/>
							</Tab>
							<Tab className={classes.tabitem}>
								<img
									className={classes.iconimage}
									src={require('../Home/components/statics/images/mancolor.jpg')}
								/>
							</Tab>
						</TabList>
					</Grid>
				</Tabs>
			</Grid>
			<Grid item container xs={12} sm={6} className={classes.showdesc}>
				<Container maxWidth="md" style={{ height: '100px', marginTop: '10px' }}>
					<Typography variant="h4">BLue shirt some</Typography>
					<Typography variant="body1">PRoduct Color: red</Typography>
					<Typography variant="body1">Our Price : 1299</Typography>
					<Typography variant="body2">
						<b>Product Description: </b> helo there this is a shirt of some color
					</Typography>
					<Button className={classes.customizebutton}>Customize now</Button>
				</Container>
			</Grid>
		</Grid>
	);
}
export default Productpage;
