import {
	Card,
	Container,
	Grid,
	makeStyles,
	Typography,
	CardMedia,
	Box,
	CardActionArea,
	FormControl,
	FormLabel,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Hidden,
	Button,
	CircularProgress,
} from '@material-ui/core';
import React, { Component, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import imgs from './images/suitwalink.jpg';
import { findDOMNode, ReactDOM } from 'react-dom';

// import dummydata from '../../data/dummydata.json';
import Product from './Product';
import Axios, { axio } from 'axios';
import { CodeSharp } from '@material-ui/icons';
import { productContext } from '../../contexts/ProductContext';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '800px',
		maxHeight: 'fit-content',
	},
	link: {
		textDecoration: 'none',
	},
	topbox: {
		minHeight: '120px',
		maxHeight: 'fit-content',
		marginTop: '10px',
		marginBottom: '25px',
		backgroundColor: '#f2f2f2',
	},
	shopbox: {
		height: 'fit-content',
		position: 'relative',
	},
	filterbox: {
		height: 'fit-content',
		marginTop: '20px',
		padding: '20px 0',
		overflow: 'hidden',
		backgroundColor: '#f2f2f2',
		position: 'sticky',
		[theme.breakpoints.down('sm')]: {
			height: '50px',
			padding: '0',
		},
	},
	productsbox: {
		height: 'fit-content',
	},

	cardproduct: {
		width: '100%',
	},

	flitercont: {
		height: 'fit-content',
		width: '80%',
		position: 'relative',
		// backgroundColor: 'white',
	},
	ul: {
		listStyleType: 'none',
	},
	fliterhead: {
		fontSize: '24px',
	},
	li: {
		margin: '5px 0',
	},
	labeltext: {
		fontSize: '18px',
		marginLeft: '5px',
	},
	checkboxinput: {
		height: '0px',
	},
	inputcheckbox: {
		color: 'blue',
	},
	divider: {
		height: '1.5px',
		// width: '90%',
		margin: '20px 0',
		postion: 'relative',
		backgroundColor: 'grey',
	},
	hidecomp: {
		height: '50px',
		width: '96%',
		// backgroundColor: 'grey',
	},
}));

function Shop() {
	const classes = useStyles();
	const { products, setProducts: setproducts } = useContext(productContext);

	return (
		<Grid item container xs={12} className={classes.root} justify="center">
			{/* <Container maxWidth="lg" className={classes.topbox}>
				<Typography variant="h2" align="center">
					Shop From Variety of Fabric and collection across india
				</Typography>
			</Container> */}
			<Grid item container xs={12} justify="space-evenly" className={classes.shopbox}>
				{/* <Grid xs={12} sm={3} id="filterbox" className={classes.filterbox}>
					<Hidden smUp>
						<Container className={classes.hidecomp}>
							Filters
							<Button style={{ float: 'right' }}>V</Button>
						</Container>
					</Hidden>
					<Container className={classes.flitercont}>
						<>
							<FormControl>
								<FormLabel>Color</FormLabel>
								<FormGroup column>
									<FormControlLabel
										value="top"
										control={<Checkbox size="small" className={classes.inputcheckbox} />}
										label="Blue"
										labelPlacement="end"
									/>
									<FormControlLabel
										value="top"
										control={<Checkbox size="small" className={classes.inputcheckbox} />}
										label="Blue"
										labelPlacement="end"
									/>
									<FormControlLabel
										value="top"
										control={<Checkbox size="small" className={classes.inputcheckbox} />}
										label="Blue"
										labelPlacement="end"
									/>
									<FormControlLabel
										value="top"
										control={<Checkbox size="small" className={classes.inputcheckbox} />}
										label="Blue"
										labelPlacement="end"
									/>
								</FormGroup>
							</FormControl>
							<Container maxWidth="xs" className={classes.divider} />
							<FormControl>
								<FormLabel>Color</FormLabel>
								<FormGroup column>
									<FormControlLabel
										value="top"
										control={<Checkbox size="small" className={classes.inputcheckbox} />}
										label="Blue"
										labelPlacement="end"
									/>
									<FormControlLabel
										value="top"
										control={<Checkbox size="small" className={classes.inputcheckbox} />}
										label="Blue"
										labelPlacement="end"
									/>
									<FormControlLabel
										value="top"
										control={<Checkbox size="small" className={classes.inputcheckbox} />}
										label="Blue"
										labelPlacement="end"
									/>
									<FormControlLabel
										value="top"
										control={<Checkbox size="small" className={classes.inputcheckbox} />}
										label="Blue"
										labelPlacement="end"
									/>
								</FormGroup>
							</FormControl>
						</>
					</Container>
				</Grid> */}
				<Grid item container xs={12} sm={10} direction="row" className={classes.productsbox}>
					{/* {products.map((product) => {
						return (
							<>
								<img src={product.productimages} />
							</>
						);
					})} */}

					{/* {products.forEach((pro) => {
						return <> {pro.productname} </>;
					})} */}
					{products ? (
						<>
							{' '}
							{products.reverse().map((product) => {
								return <Product key={product.productid} product={product} />;
							})}{' '}
						</>
					) : (
						'Loading Products .. . '
					)}

					{/* {products.map((product) => {
						return <Product key={product.productid} product={product} />;
					})} */}
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Shop;
