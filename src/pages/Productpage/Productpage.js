import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid, withStyles, makeStyles, Box, Container, Button } from '@material-ui/core';
import { render } from 'react-dom';

import Typography from '@material-ui/core/Typography';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../custom.css';

import products from '../../data/dummydata.json';

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
	const { id } = useParams();
	const classes = useStyles();

	const productdetail = products.filter((product, index) => {
		return product.productid == id;
	});

	return (
		<>
			{productdetail.map((singleproduct, index) => {
				return (
					<Grid item container xs={12} className={classes.main} key={singleproduct.productid}>
						<Grid item container xs={12} sm={6} className={classes.leftgrid}>
							<Tabs className={classes.tabss}>
								<Grid xs={12} className={classes.tabpanelbox}>
									{singleproduct.images.map((bigimage, index) => (
										<TabPanel className={classes.paneltab} key={index}>
											<img className={classes.bigimage} src={bigimage} />
										</TabPanel>
									))}
								</Grid>

								<Grid xs={12} className={classes.tablistbotom}>
									<TabList className={classes.tablist}>
										{singleproduct.images.map((tabimage, index) => (
											<Tab className={classes.tabitem} key={index}>
												<img className={classes.iconimage} src={tabimage} />
											</Tab>
										))}
									</TabList>
								</Grid>
							</Tabs>
						</Grid>
						<Grid item container xs={12} sm={6} className={classes.showdesc}>
							<Container maxWidth="md" style={{ height: '100px', marginTop: '10px' }}>
								<Typography variant="h4">{singleproduct.name}</Typography>
								<Typography variant="body1"> Shirt Type:{singleproduct.type}</Typography>
								<Typography variant="body1">Product Color: {singleproduct.color}</Typography>
								<Typography variant="body1">Our Price : {singleproduct.price} </Typography>
								<Typography variant="body2">
									<b>Product Description: </b> {singleproduct.desc}
								</Typography>
								<Link to={`/Customize/${singleproduct.productid}`}>
									<Button className={classes.customizebutton}>Customize now</Button>
								</Link>
							</Container>
						</Grid>
					</Grid>
				);
			})}
		</>
	);
}

export default Productpage;
