/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import {
	Container,
	Grid,
	Typography,
	FormControl,
	FormLabel,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Hidden,
	Button,
	CircularProgress,
	Popover,
} from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';

// import dummydata from '../../data/dummydata.json';
import Product from './Product';
import { productContext } from '../../contexts/ProductContext';
import shopStyles from './shopStyles';
import LoadingSkeleton from './components/loadingSkeleton';
import { Box } from '@material-ui/core';

const filterBluePrint = {
	color: '',
	pattern: '',
	category: '',
	material: '',
};

const useStyles = shopStyles;
function Shop() {
	// const [patternFilter,setPatternFilter]
	const classes = useStyles();
	const { products } = useContext(productContext);
	let [filteredProducts, setFilteredProducts] = useState([]);
	let [filter, setFilter] = useState(filterBluePrint);
	const onClickApplyFilter = () => {
		// console.log('filter changed');
		// let filtProducts = products.map((product) => {
		// 	if (product.productpattern === filter.productpattern || product.producttype === filter.category) {
		// 		console.log(product);
		// 		return product;
		// 	}
		// });
		let filtProducts = products.filter(
			(product) => product.productpattern === filter.pattern || product.producttype === filter.category
		);
		console.log(filtProducts);
		setFilteredProducts(filtProducts);
	};
	useEffect(() => {
		if (products && products.length) {
			setFilteredProducts(products);
		}
	}, [products]);

	// useEffect(() => {
	// 	console.log('filter changed');
	// 	// let filtProducts = products.map((product) => {
	// 	// 	if (product.productpattern === filter.productpattern || product.producttype === filter.category) {
	// 	// 		console.log(product);
	// 	// 		return product;
	// 	// 	}
	// 	// });
	// 	let filtProducts = products.filter(
	// 		(product) => product.productpattern === filter.pattern || product.producttype === filter.category
	// 	);
	// 	console.log(filtProducts);
	// 	setFilteredProducts(filtProducts);
	// }, [filter]);
	const handleFilterChange = (event) => {
		if (event.target.checked) {
			setFilter((oldFilter) => ({
				...oldFilter,
				[event.target.name]: event.target.value,
			}));
		} else {
			setFilter((oldFilter) => ({ ...oldFilter, [event.target.name]: '' }));
		}
	};
	const [mobFilterBox, setMobFilterBox] = React.useState(null);
	const handleFilterBoxOpen = (event) => {
		setMobFilterBox(event.currentTarget);
	};
	const handleFilterBoxClose = () => {
		setMobFilterBox(null);
	};
	const mobFilterCont = Boolean(mobFilterBox);
	const filtID = mobFilterCont ? 'filter-box' : undefined;
	// const filteredProducts=products.filter()

	return (
		<Grid item container xs={12} className={classes.root} justify="center">
			<Grid item container xs={12} justify="space-evenly" className={classes.shopbox}>
				<Hidden mdUp>
					<Button aria-describedby={filtID} onClick={handleFilterBoxOpen}>
						<Box className={classes.hidecomp}>
							<Container className={classes.mobfilterbox}>
								<img src={require('./images/filter.svg')} />
								<Typography>Filter </Typography>
							</Container>
						</Box>
					</Button>
					<Popover
						anchorReference="anchorPosition"
						anchorPosition={{ top: 750 }}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						transformOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
						}}
						anchorEl={mobFilterBox}
						onClose={handleFilterBoxClose}
						open={mobFilterCont}
						id={filtID}>
						<Container className={classes.mobFiltContainer}>
							<Container className={classes.flitercont}>
								<Typography className={classes.filterproducts}>Filter Products</Typography>
								{/* <FormControl>
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
							</FormControl> */}
								<Container maxWidth="xs" className={classes.divider} />
								<FormControl>
									<FormLabel>Pattern</FormLabel>
									<FormGroup column>
										<FormControlLabel
											value="Stripes"
											control={
												<Checkbox
													name="pattern"
													value="Stripes"
													onChange={handleFilterChange}
													size="small"
													className={classes.inputcheckbox}
												/>
											}
											label="Stripes"
											labelPlacement="end"
										/>
										<FormControlLabel
											control={
												<Checkbox
													size="small"
													onChange={handleFilterChange}
													value="Solids"
													name="pattern"
													className={classes.inputcheckbox}
												/>
											}
											label="Solids"
											labelPlacement="end"
										/>
										<FormControlLabel
											control={
												<Checkbox
													size="small"
													onChange={handleFilterChange}
													value="Checks"
													name="pattern"
													className={classes.inputcheckbox}
												/>
											}
											label="Checks"
											labelPlacement="end"
										/>
										<FormControlLabel
											control={
												<Checkbox
													size="small"
													onChange={handleFilterChange}
													value="Printed"
													name="pattern"
													className={classes.inputcheckbox}
												/>
											}
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
											value="Formal"
											control={
												<Checkbox
													onChange={handleFilterChange}
													value="Formal"
													name="category"
													size="small"
													className={classes.inputcheckbox}
												/>
											}
											label="Formal"
											labelPlacement="end"
										/>
										<FormControlLabel
											value="Casual"
											control={
												<Checkbox
													onChange={handleFilterChange}
													value="Casual"
													name="category"
													size="small"
													className={classes.inputcheckbox}
												/>
											}
											label="Casual"
											labelPlacement="end"
										/>
										<FormControlLabel
											value="Semi Formal"
											control={
												<Checkbox
													onChange={handleFilterChange}
													value="Semi-Formal"
													name="category"
													size="small"
													className={classes.inputcheckbox}
												/>
											}
											label="Semi Formal"
											labelPlacement="end"
										/>
									</FormGroup>
								</FormControl>
							</Container>
							<Button className={classes.applybutton} onClick={onClickApplyFilter}>
								<Typography style={{ color: 'white' }}>Apply</Typography>{' '}
							</Button>
						</Container>{' '}
					</Popover>
				</Hidden>
				<Hidden smDown>
					<Grid xs={12} justify="center" sm={3} id="filterbox" className={classes.filterbox}>
						<Container className={classes.flitercont}>
							<Typography className={classes.filterproducts}>Filter Products</Typography>
							{/* <FormControl>
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
							</FormControl> */}
							<Container maxWidth="xs" className={classes.divider} />
							<FormControl>
								<FormLabel>Pattern</FormLabel>
								<FormGroup column>
									<FormControlLabel
										value="Stripes"
										control={
											<Checkbox
												name="pattern"
												value="Stripes"
												onChange={handleFilterChange}
												size="small"
												className={classes.inputcheckbox}
											/>
										}
										label="Stripes"
										labelPlacement="end"
									/>
									<FormControlLabel
										control={
											<Checkbox
												size="small"
												onChange={handleFilterChange}
												value="Solids"
												name="pattern"
												className={classes.inputcheckbox}
											/>
										}
										label="Solids"
										labelPlacement="end"
									/>
									<FormControlLabel
										control={
											<Checkbox
												size="small"
												onChange={handleFilterChange}
												value="Checks"
												name="pattern"
												className={classes.inputcheckbox}
											/>
										}
										label="Checks"
										labelPlacement="end"
									/>
									<FormControlLabel
										control={
											<Checkbox
												size="small"
												onChange={handleFilterChange}
												value="Printed"
												name="pattern"
												className={classes.inputcheckbox}
											/>
										}
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
										value="Formal"
										control={
											<Checkbox
												onChange={handleFilterChange}
												value="Formal"
												name="category"
												size="small"
												className={classes.inputcheckbox}
											/>
										}
										label="Formal"
										labelPlacement="end"
									/>
									<FormControlLabel
										value="Casual"
										control={
											<Checkbox
												onChange={handleFilterChange}
												value="Casual"
												name="category"
												size="small"
												className={classes.inputcheckbox}
											/>
										}
										label="Casual"
										labelPlacement="end"
									/>
									<FormControlLabel
										value="Semi Formal"
										control={
											<Checkbox
												onChange={handleFilterChange}
												value="Semi-Formal"
												name="category"
												size="small"
												className={classes.inputcheckbox}
											/>
										}
										label="Semi Formal"
										labelPlacement="end"
									/>
								</FormGroup>
							</FormControl>
						</Container>
						<Button className={classes.applybutton} onClick={onClickApplyFilter}>
							<Typography style={{ color: 'white' }}>Apply</Typography>{' '}
						</Button>
					</Grid>
				</Hidden>

				<Grid item container xs={12} sm={9} direction="row" className={classes.productsbox}>
					{filteredProducts && filteredProducts.length ? (
						<>
							{' '}
							{filteredProducts.reverse().map((product) => {
								return <Product key={product.productid} product={product} />;
							})}{' '}
						</>
					) : (
						<Grid container spacing={2} justify="center" xs={12} style={{ paddingTop: '50px' }}>
							<Typography style={{ position: 'absolute', zIndex: 10, left: '30%', top: '35%' }}>
								<CircularProgress /> Please wait while we fetch the products
							</Typography>
							<LoadingSkeleton />
							<LoadingSkeleton />
							<LoadingSkeleton />
							<LoadingSkeleton />
							<LoadingSkeleton />
							<LoadingSkeleton />
							<LoadingSkeleton />
							<LoadingSkeleton />
						</Grid>
					)}
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Shop;
