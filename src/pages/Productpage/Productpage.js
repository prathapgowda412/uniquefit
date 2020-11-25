import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid, withStyles, makeStyles, Box, Container, Button } from '@material-ui/core';
// import { render } from 'react-dom';

import Typography from '@material-ui/core/Typography';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../custom.css';

// import products from '../../data/dummydata.json';
import Axios from 'axios';
import { productContext } from './../../contexts/ProductContext';

const useStyles = makeStyles((theme) => ({
	main: {
		marginTop: '48px',
		height: 'fit-content',
		backgroundColor: 'white',
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
		width: '60%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			height: '90%',
		},
	},
	productnametag: {
		color: '#282C3F',
		fontSize: '24px',
	},
	spacebox: {
		height: '20px',
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
	productdet: {
		fontSize: '18px',
		fontWeight: '600',
		color: '#282C3F',
	},
	pricetag: {
		color: '#282C3F',
		fontSize: '24px',
	},
	salepricetag: {
		color: '#6B6E7B',
		fontSize: '18px',
	},
	pricebox: {
		display: 'flex',
		width: '200px',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
	},
}));

function Productpage() {
	const classes = useStyles();
	const { id } = useParams();
	const { products, setProducts: setproducts } = useContext(productContext);
	const [product, setproduct] = React.useState([]);
	const [productimages, setproductimages] = React.useState([]);
	// console.log(id);

	useEffect(() => {
		if (products.length) {
			console.log(products[0].productimages);
		}
		setproduct(
			products.find((product) => {
				console.log(product.productid);
				return product.productid === id;
			})
		);
		console.log(product);
	}, [products]);

	return (
		<>
			{product && product.productimages ? (
				<Grid item container xs={12} className={classes.main} key={product.productid}>
					<Grid item container xs={12} sm={6} className={classes.leftgrid}>
						<Tabs className={classes.tabss}>
							<Grid xs={12} className={classes.tabpanelbox}>
								{/* {productimages} */}
								{/* {productimages.forEach((index) => {
								return <> {index} </>;
							})} */}
								{product.productimages.map((bigimage, index) => (
									<TabPanel className={classes.paneltab} key={index}>
										<img
											className={classes.bigimage}
											src={`http://45.13.132.188:5000${bigimage}`}
										/>
									</TabPanel>
								))}
							</Grid>

							<Grid xs={12} className={classes.tablistbotom}>
								<TabList className={classes.tablist}>
									{product.productimages.map((tabimage, index) => (
										<Tab className={classes.tabitem} key={index}>
											<img
												className={classes.iconimage}
												src={`http://45.13.132.188:5000${tabimage}`}
											/>
										</Tab>
									))}
								</TabList>
							</Grid>
						</Tabs>
					</Grid>
					<Grid item container xs={12} sm={6} className={classes.showdesc}>
						<Container maxWidth="md" style={{ height: '100px', marginTop: '10px' }}>
							<Typography variant="h4" className={classes.productnametag}>
								{product.productname}
							</Typography>
							<Box className={classes.spacebox} />
							<Box className={classes.pricebox}>
								<Typography variant="body1" className={classes.pricetag}>
									Rs :{product.productprice}
								</Typography>
								<Typography>
									Rs <strike className={classes.salepricetag}> {product.productsaleprice}</strike>{' '}
								</Typography>
							</Box>
							<Link to={`/Customize/${product.productid}`}>
								<Button className={classes.customizebutton}>Customize now</Button>
							</Link>
							<Box className={classes.spacebox} />
							<Typography variant="h6"> Product Details </Typography>
							<br />
							<Typography variant="body1">
								Shirt Type:{' '}
								<Typography className={classes.productdet}>{product.producttype}</Typography>
							</Typography>
							<Typography variant="body1">
								Product Color:{' '}
								<Typography className={classes.productdet}>{product.productcolor}</Typography>{' '}
							</Typography>
							<Typography variant="body1">Product Description: {product.productdesc}</Typography>
						</Container>
					</Grid>
				</Grid>
			) : (
				''
			)}
		</>
	);
}

export default Productpage;
