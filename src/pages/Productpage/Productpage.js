/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid, Box, Container, Button } from '@material-ui/core';
// import { render } from 'react-dom';

import Typography from '@material-ui/core/Typography';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../custom.css';

// import products from '../../data/dummydata.json';
import { productContext } from './../../contexts/ProductContext';
import productStyles from './productStyles';

const useStyles = productStyles;

function Productpage() {
	const classes = useStyles();
	const { id } = useParams();
	const { products } = useContext(productContext);
	const [product, setproduct] = React.useState([]);

	// const [productimages, setproductimages] = React.useState([]);

	useEffect(() => {
		if (products.length) {
			// console.log(products[0].productimages);
		}
		setproduct(
			products.find((product) => {
				// console.log(product.productid);
				return product.productid === id;
			})
		);
		// console.log(product);
	}, [products]);

	return (
		<>
			{product && product.productimages ? (
				<Grid item container xs={12} className={classes.main} key={product.productid}>
					<Grid item container xs={12} sm={6} className={classes.leftgrid}>
						<Tabs className={classes.tabss}>
							<Grid item xs={12} className={classes.tabpanelbox}>
								{/* {productimages} */}
								{/* {productimages.forEach((index) => {
								return <> {index} </>;
							})} */}
								{product.productimages.map((bigimage, index) => (
									<TabPanel className={classes.paneltab} key={index}>
										<img
											alt={`Uniquefit , shirts , ${product.producttype} shirt , ${product.productmaterial}shirts, ${product.productname}`}
											className={classes.bigimage}
											src={bigimage}
										/>
									</TabPanel>
								))}
							</Grid>

							<Grid item xs={12} className={classes.tablistbotom}>
								<TabList className={classes.tablist}>
									{product.productimages.map((tabimage, index) => (
										<Tab className={classes.tabitem} key={index}>
											<img
												alt={`Uniquefit , shirts , ${product.producttype} shirt , ${product.productmaterial}shirts, ${product.productname}`}
												className={classes.iconimage}
												src={tabimage}
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
									Rs :{product.productsaleprice}
								</Typography>
								<Typography>
									Rs <strike className={classes.salepricetag}> {product.productprice}</strike>{' '}
								</Typography>
							</Box>
							<Typography className={classes.inclusivetext}> inclusive of all taxes</Typography>
							<Link className={classes.Link} to={`/Customize/${product.productid}`}>
								<Button className={classes.customizebutton}>
									<Typography className={classes.customtext}>Customize Now </Typography>{' '}
								</Button>
							</Link>
							<Box className={classes.spacebox} />
							<Typography className={classes.nametitle} variant="h6">
								Product Details
							</Typography>
							<Box>
								<Typography variant="body1">
									Made in India. Wear this to feel and look your best. You can style this to your
									taste and that fits you.{' '}
								</Typography>
							</Box>
							<br />
							<Typography className={classes.nametitle} variant="body1">
								Product code : <em className={classes.prodtext}>{product.productid} </em>
							</Typography>
							<Typography className={classes.nametitle} variant="body1">
								Shirt type: <em className={classes.prodtext}>{product.producttype} </em>
							</Typography>
							<Typography className={classes.nametitle} variant="body1">
								Shirt pattern: <em className={classes.prodtext}>{product.productpattern} </em>
							</Typography>
							<Typography className={classes.nametitle} variant="body1">
								Product color : <em className={classes.prodtext}>{product.productcolor} </em>
							</Typography>
							<Typography className={classes.nametitle} variant="body1">
								Product material : <em className={classes.prodtext}>{product.productmaterial} </em>
							</Typography>
							<Typography className={classes.nametitle} variant="body1">
								Product feel : <em className={classes.prodtext}>{product.productfeel} </em>
							</Typography>

							{/* <Typography variant="body1">Product Description: {product.productdesc}</Typography> */}
						</Container>
					</Grid>
				</Grid>
			) : (
				'Loading .. . .'
			)}
		</>
	);
}

export default Productpage;
