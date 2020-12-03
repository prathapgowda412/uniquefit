import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, CircularProgress, Container, Grid, Hidden } from '@material-ui/core';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getOrders } from '../../services/fetchService';
import Axios from 'axios';
import { toast } from 'react-toastify';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
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

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		height: 224,
		paddingTop: '80px',
		// backgroundColor: '#f2f2f2',
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},
	tabindicator: {
		backgroundColor: 'green',
	},
	tabselected: {
		color: 'red',
	},
	link: {
		textDecoration: 'none',
		margin: '4px 2px',
	},
}));

function Profilepage() {
	const { tab } = useParams();
	const classes = useStyles();
	const [value, setValue] = React.useState(tab);
	const [userdata, setuserdata] = React.useState([]);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const history = useHistory();
	useEffect(async () => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				token: localStorage.getItem('usertoken'),
			},
		};

		const respuser = await Axios.get(`${process.env.REACT_APP_API_URL}/users/me`, config);
		let data = respuser;
		if (respuser.data.message == 'Token has expired') {
			toast.warning('User session has Expired \n Please Login');
			localStorage.removeItem('usertoken');
			localStorage.removeItem('tokens');

			window.location.reload();
			window.history.push('/');
		}
		console.log(respuser);
		setuserdata(respuser.data);

		console.log(userdata);
		const resp = await getOrders();

		console.log(resp.data.orders);
	}, []);

	return (
		<Grid item container justify="center" xs={12} className={classes.root}>
			<Hidden smDown>
				<Grid sm={4}>
					<Link className={classes.link} to="/Profile/info">
						<Button>to info</Button>
					</Link>
					<br />
					<Link className={classes.link} to="/Profile/orders">
						<Button>to orders</Button>
					</Link>
					{/* <Tabs
						orientation="vertical"
						value={value}
						onChange={handleChange}
						aria-label="Vertical tabs example"
						className={classes.tabs}>
						<Tab label="Account Info" {...a11yProps('info')} />
						<Tab label="My Orders" {...a11yProps('orders')} />
					</Tabs> */}
				</Grid>
			</Hidden>
			<Grid xs={11} sm={6}>
				<TabPanel value={value} index={'info'}>
					<Container maxWidth="md">
						<Typography> My Account Details</Typography>
						<br />
						<Grid item container xs={12} justify="center" item container style={{ height: '50px' }}>
							<Grid item xs={5}>
								Name:
							</Grid>
							<Grid item xs={5}>
								{userdata ? (
									<Typography>{userdata.username} </Typography>
								) : (
									<CircularProgress color="secondary" />
								)}
							</Grid>
						</Grid>
						<Grid item container xs={12} justify="center" item container style={{ height: '50px' }}>
							<Grid item xs={5}>
								Email-Id:
							</Grid>
							<Grid item xs={5}>
								{userdata ? (
									<Typography>{userdata.email} </Typography>
								) : (
									<CircularProgress color="secondary" />
								)}
							</Grid>
						</Grid>
						<Grid item container xs={12} justify="center" item container style={{ height: '50px' }}>
							<Grid item xs={5}>
								Mobile number:
							</Grid>
							<Grid item xs={5}>
								{userdata ? (
									<Typography>{userdata.mobile} </Typography>
								) : (
									<CircularProgress color="secondary" />
								)}
							</Grid>
						</Grid>
					</Container>
				</TabPanel>
				<TabPanel value={value} index={'orders'}>
					Orders section in development
				</TabPanel>
			</Grid>
		</Grid>
	);
}

export default Profilepage;
