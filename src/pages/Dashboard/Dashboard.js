import React, { Component, useEffect } from 'react';
import {
	Container,
	Grid,
	Hidden,
	Box,
	FormControl,
	FormLabel,
	FormControlLabel,
	FormGroup,
	TextField,
	Input,
	Button,
	Typography,
	Avatar,
	Select,
} from '@material-ui/core';
import withStyles from './../welcom';
import { makeStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Axios from 'axios';

// import { Box } from '@material-ui/core/Box';
import DropZone from './../../common/Dropzone';
import { Redirect, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addProduct } from '../../services/fetchService';

const useStyles = makeStyles((theme) => ({
	header: {
		height: '70px',
		backgroundColor: 'white',
		padding: '8px 10px',
		// borderBottom: '1px solid grey',
	},
	bottom: {
		height: '92vh',
	},
	leftbox: {
		backgroundColor: '#f2f2f2',
		padding: '5px 10px',
	},
	rightbox: {
		backgroundColor: '#f2f2f2',
		padding: '5px 10px',
	},
	deskmenu: {
		backgroundColor: '#fff',
		height: 'fit-content',
		borderRadius: '10px',
	},
	rightpanel: {
		backgroundColor: 'white',
		borderRadius: '10px',
		width: '100%',
	},
	menulinks: {
		textAlign: 'left',
		// backgroundColor: '#387A76',
		// color: '#387A76',
		labelAlign: 'left',
	},
	lefttabs: {
		alignItems: 'left',
		backgroundColor: 'transparent',
		// backgroundColor: '#f2f2f2',
	},
	addproductcont: {
		minHeight: '250px',
		// backgroundColor: 'lightblue',
		alignSelf: 'left',
	},
	addproductlabel: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: '24px',
		margin: '10px 5px',
	},
	formbox: {
		height: 'fit-content',
		// backgroundColor: 'purple',
	},
	labelname: {
		color: '#2c2c2c',
		fontSize: '19px',
		fontWeight: '600',
	},
	formcontainer: {
		// backgroundColor: 'green',
		width: '60%',
	},
	righttabpanel: {
		// backgroundColor: 'purple',
	},
	addproductbutton: {
		backgroundColor: '#387A76',
		height: '48px',
		width: '80%',
		color: 'white',
		// borderRadius: '10px',
		margin: '20px 10px',
		'&:hover': {
			backgroundColor: '#387A76',
			borderBottom: '1px solid white',
		},
	},
	avatrbox: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',

		justifyContent: 'space-evenly',
		// backgroundColor: 'red',
	},
	imagepreviewbox: {
		height: '150px',
	},
}));

// tab panel handling down

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}
// tab panel handling above

function Dashboard() {
	const [tabvalue, settabValue] = React.useState(0);
	const handleTabChange = (event, newValue) => {
		settabValue(newValue);
	};

	const productnamechange = (e) => {
		setproductname(e.target.value);
	}; //done
	const productpricechange = (e) => {
		setproductprice(e.target.value);
	}; //done
	const productsalepricechange = (e) => {
		setproductsaleprice(e.target.value);
	}; //done
	const productmaterialchange = (e) => {
		setproductmaterial(e.target.value);
	}; //doe
	const producttypechange = (e) => {
		setproducttype(e.target.value);
	}; //done
	const productdescriptionchange = (e) => {
		setproductdescription(e.target.value);
	}; //done
	const productcolorchange = (e) => {
		setproductcolor(e.target.value);
	}; //done
	const productpatternchange = (e) => {
		setproductpattern(e.target.value);
	}; //done
	const productoccasionchange = (e) => {
		setproductoccasion(e.target.value);
	}; //done
	const productfeelchange = (e) => {
		setproductfeel(e.target.value);
	}; //done
	const [files, setfiles] = React.useState();
	const [selectedfile, setselectedfile] = React.useState();
	const [preview, setpreview] = React.useState();

	useEffect(() => {
		if (!selectedfile) {
			setpreview(undefined);
			return;
		}

		const objecturl = URL.createObjectURL(selectedfile);
		setpreview(objecturl);

		return () => URL.revokeObjectURL(objecturl);
	}, [selectedfile]);

	const imagechange = (e) => {
		if (!e.target.files || e.target.files.length == 0) {
			setselectedfile(undefined);
			return;
		}

		//putting only one image for preview

		setselectedfile(e.target.files[0]);
		setfiles(e.target.files);
		// console.log(e.target.files);
	};

	const [productname, setproductname] = React.useState();
	const [productprice, setproductprice] = React.useState();
	const [productsaleprice, setproductsaleprice] = React.useState();
	const [productmaterial, setproductmaterial] = React.useState();
	const [productcolor, setproductcolor] = React.useState();
	// const [productcategory, setproductcategory] = React.useState();
	const [producttype, setproducttype] = React.useState();
	const [productdescription, setproductdescription] = React.useState();
	const [productpattern, setproductpattern] = React.useState();
	const [productoccasion, setproductoccasion] = React.useState();
	const [productfeel, setproductfeel] = React.useState();

	const onsubmitproduct = async () => {
		// const productdata = {
		// 	productname: productname,
		// 	productprice: productprice,
		// 	productsaleprice: productsaleprice,
		// 	productmaterial: productmaterial,
		// 	productcolor: productcolor,
		// 	producttype: producttype,
		// 	productdescription: productdescription,
		// 	productpattern: productpattern,
		// 	productoccasion: productoccasion,
		// 	productfeel: productfeel,
		// 	productimages: files,
		// };
		const productdata = new FormData();

		productdata.append('productid', Math.round(Math.random() * 100000000));
		productdata.append('productname', productname);
		productdata.append('productprice', +productprice);
		productdata.append('productcolor', productcolor);
		productdata.append('productdescription', productdescription);
		productdata.append('productsaleprice', +productsaleprice);
		productdata.append('productmaterial', productmaterial);
		productdata.append('productfeel', productfeel);
		productdata.append('productoccasion', productoccasion);
		productdata.append('producttype', producttype);
		productdata.append('productpattern', productpattern);
		console.log(files);
		files.map((file) => {
			productdata.append('pimages', file);
		});
		console.log(productdata);
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};

		let resp = await addProduct(productdata);
		console.log(resp);
		console.log(resp.data.message);
		console.log(resp.status);
		if (resp.status == 200) {
			window.location.reload();
			console.log('done succes');
			toast.success('success uploading');
			toast.done('done');
			toast('Product added Successfully');
		}
	};

	const classes = useStyles();
	return (
		<Grid item container xs={12}>
			<Grid item container xs={12} className={classes.header}>
				<Grid xs={2}>
					{/* <Typography variant="h5">Admin Dashboard</Typography> */}
					<img height="60px" src={require('../../logos/Uniquefit logo.svg')} />
				</Grid>

				<Grid xs={8}></Grid>

				<Grid xs={2}>
					<Container className={classes.avatrbox}>
						{/* <Avatar /> */}
						<img height="25px" src={require('./user.svg')} />
						<Typography variant="h6"> Admin</Typography>
					</Container>
				</Grid>
			</Grid>
			<Hidden smDown>
				<Grid item className={classes.bottom} container xs={12}>
					<Grid item container xs={2} className={classes.leftbox}>
						<Container className={classes.deskmenu}>
							<Tabs
								indicatorColor="none"
								orientation="vertical"
								value={tabvalue}
								onChange={handleTabChange}
								aria-label="Vertical tabs example"
								className={classes.lefttabs}>
								<Tab className={classes.menulinks} label="Overview" {...a11yProps(0)}></Tab>
								<Tab className={classes.menulinks} label="Add Products" {...a11yProps(1)} />
								<Tab className={classes.menulinks} label="Orders" {...a11yProps(2)} />
								<Tab className={classes.menulinks} label="Products" {...a11yProps(3)} />
								<Tab className={classes.menulinks} label="Category" {...a11yProps(4)} />
							</Tabs>
						</Container>
					</Grid>
					<Grid item container xs={10} className={classes.rightbox}>
						<Box className={classes.rightpanel}>
							<TabPanel className={classes.righttabpanel} value={tabvalue} index={0}></TabPanel>
							<TabPanel value={tabvalue} index={1}>
								<form autoComplete={true} encType="multipart/form-data">
									<FormControl className={classes.formcontainer}>
										<FormLabel className={classes.addproductlabel}>Add product</FormLabel>
										<FormGroup encty>
											<Container maxWidth="md" className={classes.addproductcont}>
												<Grid
													container
													className={classes.formbox}
													direction="row"
													alignItems="center">
													<Grid xs={5}>
														<FormLabel className={classes.labelname}>
															Product Name :
														</FormLabel>
													</Grid>
													<Grid xs={6}>
														<TextField
															size="medium"
															required
															fullWidth
															onChange={productnamechange}
															label="Product Name"
															variant="outlined"
															margin="normal"
														/>
													</Grid>
												</Grid>
												<Grid
													container
													className={classes.formbox}
													direction="row"
													alignItems="center">
													<Grid xs={5}>
														<FormLabel className={classes.labelname}>
															Product Price :
														</FormLabel>
													</Grid>
													<Grid xs={6}>
														<TextField
															size="medium"
															required
															fullWidth
															onChange={productpricechange}
															label="product price"
															variant="outlined"
															margin="normal"
														/>
													</Grid>
												</Grid>
												<Grid
													container
													className={classes.formbox}
													direction="row"
													alignItems="center">
													<Grid xs={5}>
														<FormLabel className={classes.labelname}>
															Product Sale Price :
														</FormLabel>
													</Grid>
													<Grid xs={6}>
														<TextField
															size="medium"
															required
															fullWidth
															onChange={productsalepricechange}
															label="product sale price"
															variant="outlined"
															margin="normal"
														/>
													</Grid>
												</Grid>

												<Grid
													container
													className={classes.formbox}
													direction="row"
													alignItems="center">
													<Grid xs={5}>
														<FormLabel className={classes.labelname}>
															Product Material :
														</FormLabel>
													</Grid>
													<Grid xs={6}>
														<TextField
															size="medium"
															required
															fullWidth
															onChange={productmaterialchange}
															label="product material"
															variant="outlined"
															margin="normal"
														/>
													</Grid>
												</Grid>
												<Grid
													container
													className={classes.formbox}
													direction="row"
													alignItems="center">
													<Grid xs={5}>
														<FormLabel className={classes.labelname}>
															Product Description :
														</FormLabel>
													</Grid>
													<Grid xs={6}>
														<TextField
															size="medium"
															required
															fullWidth
															onChange={productdescriptionchange}
															label="product description"
															variant="outlined"
															margin="normal"
															multiline
														/>
													</Grid>
												</Grid>
												<Grid
													container
													className={classes.formbox}
													direction="row"
													alignItems="center">
													<Grid xs={5}>
														<FormLabel className={classes.labelname}>
															Product Color :
														</FormLabel>
													</Grid>
													<Grid xs={6}>
														<TextField
															size="medium"
															required
															fullWidth
															onChange={productcolorchange}
															label="product color"
															variant="outlined"
															margin="normal"
														/>
													</Grid>
												</Grid>
												<Grid
													container
													className={classes.formbox}
													direction="row"
													alignItems="center">
													<Grid xs={5}>
														<FormLabel className={classes.labelname}>
															Product Pattern :
														</FormLabel>
													</Grid>
													<Grid xs={6}>
														<TextField
															size="medium"
															required
															fullWidth
															onChange={productpatternchange}
															label="product pattern"
															variant="outlined"
															margin="normal"
														/>
													</Grid>
												</Grid>
												<Grid
													container
													className={classes.formbox}
													direction="row"
													alignItems="center">
													<Grid xs={5}>
														<FormLabel className={classes.labelname}>
															Product Type :
														</FormLabel>
													</Grid>
													<Grid xs={6}>
														<TextField
															size="medium"
															required
															fullWidth
															onChange={producttypechange}
															label="product type"
															variant="outlined"
															margin="normal"
														/>
														{/* {producttype} */}
													</Grid>
												</Grid>
												<Grid
													container
													className={classes.formbox}
													direction="row"
													alignItems="center">
													<Grid xs={5}>
														<FormLabel className={classes.labelname}>
															Product Occasion :
														</FormLabel>
													</Grid>
													<Grid xs={6}>
														<TextField
															size="medium"
															required
															fullWidth
															onChange={productoccasionchange}
															label="product occasion"
															variant="outlined"
															margin="normal"
														/>
													</Grid>
												</Grid>
												<Grid
													container
													className={classes.formbox}
													direction="row"
													alignItems="center">
													<Grid xs={5}>
														<FormLabel className={classes.labelname}>
															Product Feel :
														</FormLabel>
													</Grid>
													<Grid xs={6}>
														<TextField
															size="medium"
															required
															fullWidth
															onChange={productfeelchange}
															label="product feel"
															variant="outlined"
															margin="normal"
														/>
													</Grid>
												</Grid>
												<Grid
													container
													className={classes.formbox}
													direction="row"
													alignItems="center">
													<Grid xs={5}>
														<FormLabel className={classes.labelname}>
															Product images :
														</FormLabel>
													</Grid>
													<Grid xs={6}>
														{/* <input
															type="file"
															accept="image/*"
															multiple={true}
															onChange={imagechange}
														/> */}
														<DropZone setFiles={setfiles} />
														<Box className={classes.imagepreviewbox}>
															{selectedfile && <img height="60px" src={preview} />}
														</Box>
													</Grid>
												</Grid>
												<Grid>
													{/* <input
														className={classes.addproductbutton}
														type="submit"
														onSubmit={onsubmitproduct}
														placeholder="Submit"
													/> */}
													<Button
														onClick={onsubmitproduct}
														className={classes.addproductbutton}>
														Add Product
													</Button>
												</Grid>
											</Container>
										</FormGroup>
									</FormControl>
								</form>
							</TabPanel>
							<TabPanel value={tabvalue} index={2}>
								3
							</TabPanel>
							<TabPanel value={tabvalue} index={3}>
								rtr
							</TabPanel>
							<TabPanel value={tabvalue} index={4}>
								dsfds
							</TabPanel>
						</Box>
					</Grid>
				</Grid>
			</Hidden>
			<Hidden mdUp>helo down</Hidden>
		</Grid>
	);
}

export default Dashboard;
