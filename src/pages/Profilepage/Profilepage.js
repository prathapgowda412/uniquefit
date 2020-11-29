import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Grid, Hidden } from '@material-ui/core';
import { width } from '@material-ui/system';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { getOrders } from './../../services/fetchService';

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

const useStyles = makeStyles((theme) => ({
	main: {
		flexGrow: 1,
		backgroundColor: '#fff',
		display: 'flex',
		minHeight: '60vh',
		maxHeight: 'fit-content',
		padding: '50px 0',
	},
	root: {
		color: '#387A76',
		backgroundColor: 'white',
	},
	tabs: {
		width: 'fit-content',
		margin: 'auto',
	},
	tablink: {
		backgroundColor: '#f2f2f2',
		margin: '10px 0',
		color: '#111',
		width: '250px',
		borderRadius: '5px',
		'&:active': {
			backgroundColor: '#fff',
		},
	},
	rightpanel: {
		backgroundColor: '#f2f2f2',
		width: '92%',
		[theme.breakpoints.down('sm')]: {
			margin: 'auto',
		},
	},
	mobleftpanel: {
		width: '90%',
		backgroundColor: '#f2f2f2',
		margin: 'auto',
		height: '65px',
		marginBottom: '20px',
		borderRadius: '10px',
		padding: '5px 10px',
	},
}));
function Profilepage(pops) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [user, setuser] = React.useState();
	useEffect(async () => {
		let token = localStorage.getItem('usertoken');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				token: token,
			},
		};

		const resp = await Axios.get(`${process.env.REACT_APP_API_URL}/users/me`, config);
		console.log(resp.data);

		const resporder = await getOrders();
		console.log(resporder.data);
		console.log(resporder.data.orders);
		console.log(resporder.data.orders.length);
	});
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Grid item container xs={12} className={classes.main}>
			<Grid item container xs={12} md={3}>
				<Hidden mdUp>
					<Container className={classes.mobleftpanel}>for mob</Container>
				</Hidden>
				<Hidden smDown>
					<Tabs
						indicatorColor="none"
						orientation="vertical"
						value={value}
						onChange={handleChange}
						aria-label="Vertical tabs example"
						className={classes.tabs}>
						<Tab className={classes.tablink} label="Account Info" {...a11yProps(0)} />
						<Tab className={classes.tablink} label="My orders" {...a11yProps(1)} />
						{/* <Tab className={classes.tablink} label="My cart" {...a11yProps(2)} /> */}
						<Tab className={classes.tablink} label="Settings" {...a11yProps(3)} />
					</Tabs>
				</Hidden>
			</Grid>
			<Grid item container xs={12} md={9}>
				<TabPanel value={value} index={0} className={classes.rightpanel}>
					<Typography> </Typography>
				</TabPanel>
				<TabPanel value={value} index={1} className={classes.rightpanel}>
					<Container></Container>
				</TabPanel>
				{/* <TabPanel value={value} index={2} className={classes.rightpanel}>
					My cart
				</TabPanel> */}
				<TabPanel value={value} index={3} className={classes.rightpanel}>
					Settings
				</TabPanel>
			</Grid>
		</Grid>
	);
}
export default Profilepage;
