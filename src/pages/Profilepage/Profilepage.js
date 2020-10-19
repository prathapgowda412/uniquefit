// import { Grid, makeStyles } from '@material-ui/core';
// import React from 'react';

// const useStyles = makeStyles((theme) => ({
// 	main: {
// 		height: '500px',
// 		backgroundColor: '#f2f2f2',
// 	},
// }));

// function Profilepage() {
// 	const classes = useStyles();
// 	return <Grid item container xs={12} className={classes.main}></Grid>;
// }
// export default Profilepage;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Grid } from '@material-ui/core';
import { width } from '@material-ui/system';

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
		backgroundColor: 'white',
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
		width: '300px',
	},
	tablink: {
		backgroundColor: '#f2f2f2',
		margin: '5px 0 5px 10px',
		color: '#111',
		borderRadius: '5px',
		'&:active': {
			backgroundColor: '#fff',
		},
	},
}));
function Profilepage() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Grid item container xs={12} className={classes.main}>
			<Grid xs={12} sm={3}>
				<Tabs
					indicatorColor="none"
					orientation="vertical"
					value={value}
					onChange={handleChange}
					aria-label="Vertical tabs example"
					className={classes.tabs}>
					<Tab className={classes.tablink} label="Account Info" {...a11yProps(0)} />
					<Tab className={classes.tablink} label="My orders" {...a11yProps(1)} />
					<Tab className={classes.tablink} label="My cart" {...a11yProps(2)} />
					<Tab className={classes.tablink} label="Settings" {...a11yProps(3)} />
				</Tabs>
			</Grid>
			<Grid xs={12} sm={9}>
				<TabPanel value={value} index={0} style={{ backgroundColor: 'white', width: '100%' }}>
					{/* <Container style={{ backgroundColor: 'white', height: '200px' }}></Container> */}
				</TabPanel>
				<TabPanel value={value} index={1} style={{ backgroundColor: 'white', width: '100%' }}>
					My orders
				</TabPanel>
				<TabPanel value={value} index={2} style={{ backgroundColor: 'white', width: '100%' }}>
					My cart
				</TabPanel>
				<TabPanel value={value} index={3} style={{ backgroundColor: 'white', width: '100%' }}>
					Settings
				</TabPanel>
			</Grid>
		</Grid>
	);
}
export default Profilepage;
