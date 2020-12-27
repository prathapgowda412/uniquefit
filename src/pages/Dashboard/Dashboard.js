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
import AddProduct from './AddProduct/addProduct';
import DeleteProduct from './DeleteProduct/deleteProduct';
import { Redirect } from 'react-router-dom';
import { Person, PersonPinCircleRounded } from '@material-ui/icons';

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
	avatrbox: {
		display: 'flex',
		flexDirection: 'row',
		width: '160px',
		alignItems: 'center',
		justifyContent: 'space-around',
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
	const [isAdminLogged, setIsAdminLogged] = React.useState(false);
	// useEffect(() => {
	// 	const adminToken = localStorage.getItem('adminToken');
	// 	if (adminToken) {
	// 		setIsAdminLogged(true);
	// 	} else {
	// 		setIsAdminLogged(false);
	// 	}
	// });

	const classes = useStyles();
	const handleLogOut = async () => {
		localStorage.removeItem('adminToken');
		window.location.reload();
	};
	if (localStorage.getItem('adminToken')) {
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
							{/* <img height="25px" src={require('./user.svg')} /> */}
							<Person fontSize="large" />
							<Typography style={{ fontSize: '20px', color: '#030303' }}> Admin</Typography>
						</Container>
						<Button onClick={handleLogOut}>Logout</Button>
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
	} else {
		return <Redirect to="/adminLogin" />;
	}
}

export default Dashboard;
