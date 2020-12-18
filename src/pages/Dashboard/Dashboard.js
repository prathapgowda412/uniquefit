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

import { toast } from 'react-toastify';
<<<<<<< HEAD
import AddProduct from './AddProduct/addProduct';
import DeleteProduct from './DeleteProduct/deleteProduct';
=======
import { addProduct } from '../../services/fetchService';
>>>>>>> 516f2cdec25b6f75ab8b5f7bd29f6dea5d8af755

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
		borderRadius: '10px',
		width: '100%',
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

<<<<<<< HEAD
=======
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

>>>>>>> 516f2cdec25b6f75ab8b5f7bd29f6dea5d8af755
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
								<Tab className={classes.menulinks} label=" Products" {...a11yProps(1)} />
								<Tab className={classes.menulinks} label="Orders" {...a11yProps(2)} />
								{/* <Tab className={classes.menulinks} label="Category" {...a11yProps(3)} /> */}
							</Tabs>
						</Container>
					</Grid>
					<Grid item container xs={10} className={classes.rightbox}>
						<Box className={classes.rightpanel}>
							<TabPanel className={classes.righttabpanel} value={tabvalue} index={0}>
								{' '}
								under development
							</TabPanel>

							<TabPanel className={classes.righttabpanel} value={tabvalue} index={1}>
								<Grid container style={{ width: '100%' }}>
									<AddProduct />
									<DeleteProduct />
								</Grid>
							</TabPanel>

							<TabPanel value={tabvalue} index={2}>
								3
							</TabPanel>
							{/* <TabPanel value={tabvalue} index={3}>
								rtr
							</TabPanel> */}
						</Box>
					</Grid>
				</Grid>
			</Hidden>
			<Hidden mdUp>helo down</Hidden>
		</Grid>
	);
}

export default Dashboard;
