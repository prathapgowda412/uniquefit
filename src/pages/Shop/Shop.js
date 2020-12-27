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

// import dummydata from '../../data/dummydata.json';
import Product from './Product';
import Axios, { axio } from 'axios';
import { CodeSharp } from '@material-ui/icons';
import { productContext } from '../../contexts/ProductContext';
import shopStyles from './shopStyles';

const useStyles = shopStyles;
function Shop() {
	const classes = useStyles();
	const { products, setProducts: setproducts } = useContext(productContext);

	return (
		<Grid item container xs={12} className={classes.root} justify="center">
			<Grid item container xs={12} justify="space-evenly" className={classes.shopbox}>
				<Hidden mdUp>
					<Container className={classes.hidecomp}>helo</Container>
				</Hidden>
				<Hidden smDown>
					<Grid xs={12} sm={3} id="filterbox" className={classes.filterbox}>
						<Container className={classes.flitercont}>
							<Typography className={classes.filterproducts}>Filter Products</Typography>
							<FormControl>
								<FormLabel>Color</FormLabel>
								<FormGroup column>
									<FormControlLabel
										value="Blue"
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
								<FormLabel>Pattern</FormLabel>
								<FormGroup column>
									<FormControlLabel
										value="top"
										control={<Checkbox size="small" className={classes.inputcheckbox} />}
										label="Stripes"
										labelPlacement="end"
									/>
									<FormControlLabel
										value="top"
										control={<Checkbox size="small" className={classes.inputcheckbox} />}
										label="Solids"
										labelPlacement="end"
									/>
									<FormControlLabel
										value="top"
										control={<Checkbox size="small" className={classes.inputcheckbox} />}
										label="Checks"
										labelPlacement="end"
									/>
									<FormControlLabel
										value="top"
										control={<Checkbox size="small" className={classes.inputcheckbox} />}
										label="Printed"
										labelPlacement="end"
									/>
								</FormGroup>
							</FormControl>
							<Container maxWidth="xs" className={classes.divider} />
							<FormControl>
								<FormLabel>Category</FormLabel>
								<FormGroup column>
									<FormControlLabel
										value="top"
										control={<Checkbox size="small" className={classes.inputcheckbox} />}
										label="Formal"
										labelPlacement="end"
									/>
									<FormControlLabel
										value="top"
										control={<Checkbox size="small" className={classes.inputcheckbox} />}
										label="Casual"
										labelPlacement="end"
									/>
									<FormControlLabel
										value="top"
										control={<Checkbox size="small" className={classes.inputcheckbox} />}
										label="Semi-Formal"
										labelPlacement="end"
									/>
								</FormGroup>
							</FormControl>
						</Container>
					</Grid>
				</Hidden>

				<Grid item container xs={12} sm={9} direction="row" className={classes.productsbox}>
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
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Shop;
