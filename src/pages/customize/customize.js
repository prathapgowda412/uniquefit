import { Grid, Hidden, Box, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Tab, Tabs } from 'react-tabs';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';

import collars from './data/collar.json';
import frontt from './data/front.json';
import Butoons from './data/buttons.json';
import sleevecuffss from './data/sleevecuffs.json';
import { Link, useParams } from 'react-router-dom';

import products from '../../data/dummydata.json';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = makeStyles((theme) => ({
	root: {
		backgroundColor: 'white',
		height: '100vh',
		position: 'relative',
	},
	topbar: {
		height: '12%',
		backgroundColor: '#f2f2f2',
	},
	logobox: {
		backgroundColor: '#28334B',
		height: '100%',
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		height: '55px',
	},
	tablink: {
		backgroundColor: '#f2f2f2',
		margin: '10px 0',
		color: '#111',
		width: '75%',
		borderRadius: '5px',
		'&:active': {
			backgroundColor: '#fff',
		},
	},
	botombox: {
		backgroundColor: '#f2f2f2',
		height: '88%',
		position: 'relative',
	},
	typepanel: {
		width: '100%',
		height: 'fit-content',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	typeimage: {
		height: '70px',
	},
	rightpane: {
		width: '100%',
	},
	typepaper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: '10px',
		justifyContent: 'space-between',
		marginTop: '10px',
		marginLeft: '5px',
		transition: '0.3s',
		height: '120px',
		width: '120px',
		backgroundColor: '#fff',
		padding: '5px ',
		'&:hover': {
			cursor: 'pointer',
		},
	},
}));

// function Collargroup() {
// 	const classes = styles();
// 	const [collarnamevalue, setcollarnameValue] = React.useState('');
// 	const handlecollarChange = (event) => {
// 		setcollarnameValue(event.target.value);
// 	};

// 	return (
// 		<FormControl component="fieldset">
// 			<RadioGroup
// 				aria-label="gender"
// 				name="gender1"
// 				value={collarnamevalue}
// 				onChange={handlecollarChange}
// 				className={classes.typepanel}>
// 				{collars.map((collar) => {
// 					return (
// 						<Paper className={classes.typepaper}>
// 							<img src={collar.image} className={classes.typeimage} />
// 							<FormControlLabel value={collar.name} control={<Radio />} label={collar.name} />
// 						</Paper>
// 					);
// 				})}
// 			</RadioGroup>
// 			<Typography>value : {collarnamevalue}</Typography>
// 		</FormControl>
// 	);
// }

// function Collars(props) {
// 	let { collar } = props;
// 	const classes = styles();
// 	return (
// 		<Paper key={collar.collarid} className={classes.typepaper}>
// 			<img src={collar.image} />
// 			<Typography>{collar.name}</Typography>
// 			<input type="radio" />
// 		</Paper>
// 	);
// }

// function Sleevescuffs(props) {
// 	let { sleeve } = props;
// 	const classes = styles();
// 	return (
// 		<Paper key={sleeve.sleeveid} className={classes.typepaper}>
// 			<img src={sleeve.image} />
// 			<Typography>{sleeve.name}</Typography>
// 		</Paper>
// 	);
// }

// function Butons(props) {
// 	let { buton } = props;
// 	const classes = styles();
// 	return (
// 		<Paper key={buton.buttonid} className={classes.typepaper}>
// 			<img src={buton.image} />
// 			<Typography>{buton.name}</Typography>
// 		</Paper>
// 	);
// }

// function Front(props) {
// 	let { front } = props;
// 	const classes = styles();
// 	return (
// 		<Paper key={front.frontid} className={classes.typepaper}>
// 			<img src={front.image} />
// 			<Typography>{front.name}</Typography>
// 		</Paper>
// 	);
// }

// tabs handling functions below
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
// tabs handling functions above

// main functin here

function Customize() {
	const classes = styles();
	const id = useParams();

	let productdetail = products.filter((product, index) => {
		return product.productid == id;
	});

	// collar value change handling below
	const [collarnamevalue, setcollarnameValue] = React.useState('');
	let collarname = 'onecollar';
	const handlecollarChange = (event) => {
		collarname = event.value;
		setcollarnameValue(event.target.value);
		// customizedproduct[0].collarname=
	};
	// collar value change handling above

	// sleevecuff value change handling below
	const [sleevecuffvalue, setsleevecuffValue] = React.useState('');
	const handlesleevecuffChange = (event) => {
		setsleevecuffValue(event.target.value);
	};
	// sleevecuff value change handling above

	// butoons  value change handling below
	const [butoonvalue, setbutoonvalue] = React.useState('');
	const handlebutoonChange = (event) => {
		setbutoonvalue(event.target.value);
	};
	// butoons  value change handling above

	// butoons  value change handling below
	const [frontvalue, setfrontvalue] = React.useState('');
	const handlefrontChange = (event) => {
		setfrontvalue(event.target.value);
	};
	// butoons  value change handling above

	// tabs handling below
	const [tabvalue, settabValue] = React.useState(0);
	const handleTabChange = (event, newValue) => {
		settabValue(newValue);
	};
	// tabs handling top
	// customized total product below
	let customizedproduct = [
		{
			product_id: id,
			collarname: collarnamevalue,
			frontname: frontvalue,
			buttonname: butoonvalue,
			slevevecuff: sleevecuffvalue,
			quantity: '1',
		},
	];
	console.log('printing prod below');
	let finalprod = customizedproduct[0];
	console.log(finalprod);
	console.log('printing prod above');
	console.log();
	// customized total product above
	return (
		<>
			<Hidden smDown>
				<Grid item container xs={12} className={classes.root} key={productdetail.productid}>
					<Grid xs={12} className={classes.topbar}>
						<Grid xs={2} className={classes.logobox}>
							<Link to="/">
								<img className={classes.logo} src={require('../../logos/uniquefitlogowhite.svg')} />
							</Link>
						</Grid>
					</Grid>
					<Grid item container xs={12} className={classes.botombox}>
						{/* left type selection tab below */}
						<Grid
							item
							container
							justify="center"
							sm={2}
							style={{ backgroundColor: '#28334B', height: '100%' }}>
							<Tabs
								indicatorColor="none"
								orientation="vertical"
								value={tabvalue}
								onChange={handleTabChange}
								aria-label="Vertical tabs example"
								className={classes.tabs}>
								<Tab className={classes.tablink} label="Collar" {...a11yProps(0)}></Tab>
								<Tab className={classes.tablink} label="Hand Cuffs" {...a11yProps(1)} />
								<Tab className={classes.tablink} label="Button" {...a11yProps(2)} />
								<Tab className={classes.tablink} label="Front" {...a11yProps(3)} />
								{/* <Tab className={classes.tablink} label="Back" {...a11yProps(3)} /> */}
							</Tabs>
						</Grid>
						{/* left type selection tab above */}

						{/* middle preview  tab below */}
						<Grid item container sm={6} style={{ backgroundColor: '#f2f2f2', height: '100%' }}>
							{productdetail.map((singleproduct) => {
								return (
									<div>
										<Typography> {singleproduct.name} </Typography>;
									</div>
								);
							})}
							helos
							{customizedproduct.buttonname}
						</Grid>
						{/* middle preview  tab above */}

						{/* right subtype selection tab below */}
						<Grid item container sm={4} style={{ backgroundColor: 'white', height: '100%' }}>
							<TabPanel value={tabvalue} index={0} className={classes.rightpane}>
								<FormControl component="fieldset">
									{/* <FormLabel component="legend">Gender</FormLabel> */}
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={collarnamevalue}
										onChange={handlecollarChange}
										className={classes.typepanel}>
										{collars.map((collar) => {
											return (
												<Paper className={classes.typepaper}>
													<img src={collar.image} className={classes.typeimage} />
													<FormControlLabel
														value={collar.name}
														control={<Radio />}
														label={collar.name}
													/>
												</Paper>
											);
										})}
									</RadioGroup>
									<Typography>value : {collarnamevalue}</Typography>
								</FormControl>

								{/* <Collargroup /> */}

								{/* <form>
									<Box className={classes.typepanel}>
										{collars.map((collar) => {
											return <Collars key={collar.collarid} collar={collar} />;
										})}
									</Box>
								</form> */}
							</TabPanel>
							<TabPanel value={tabvalue} index={1} className={classes.typepanel}>
								<FormControl component="fieldset">
									{/* <FormLabel component="legend">Gender</FormLabel> */}
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={sleevecuffvalue}
										onChange={handlesleevecuffChange}
										className={classes.typepanel}>
										{sleevecuffss.map((sleevecuff) => {
											return (
												<Paper className={classes.typepaper}>
													<img src={sleevecuff.image} className={classes.typeimage} />
													<FormControlLabel
														value={sleevecuff.name}
														control={<Radio />}
														label={sleevecuff.name}
													/>
												</Paper>
											);
										})}
									</RadioGroup>
									<Typography>value : {sleevecuffvalue}</Typography>
								</FormControl>
							</TabPanel>
							<TabPanel value={tabvalue} index={2} className={classes.typepanel}>
								<FormControl component="fieldset">
									{/* <FormLabel component="legend">Gender</FormLabel> */}
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={butoonvalue}
										onChange={handlebutoonChange}
										className={classes.typepanel}>
										{Butoons.map((butoon) => {
											return (
												<Paper className={classes.typepaper}>
													<img src={butoon.image} className={classes.typeimage} />
													<FormControlLabel
														value={butoon.name}
														control={<Radio />}
														label={butoon.name}
													/>
												</Paper>
											);
										})}
									</RadioGroup>
									<Typography>value : {butoonvalue}</Typography>
								</FormControl>

								{/* <form>
									<Box className={classes.typepanel}>
										{Butoons.map((buton) => {
											return <Butons key={buton.buttonid} buton={buton} />;
										})}
									</Box>
								</form> */}
							</TabPanel>
							<TabPanel value={tabvalue} index={3} className={classes.typepanel}>
								<FormControl component="fieldset">
									{/* <FormLabel component="legend">Gender</FormLabel> */}
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={frontvalue}
										onChange={handlefrontChange}
										className={classes.typepanel}>
										{frontt.map((frontt) => {
											return (
												<Paper className={classes.typepaper}>
													<img src={frontt.image} className={classes.typeimage} />
													<FormControlLabel
														value={frontt.name}
														control={<Radio />}
														label={frontt.name}
													/>
												</Paper>
											);
										})}
									</RadioGroup>
									<Typography>value : {frontvalue}</Typography>
								</FormControl>

								{/* <form>
									<Box className={classes.typepanel}>
										{frontt.map((front) => {
											return <Front key={front.frontid} front={front} />;
										})}
									</Box>
								</form> */}
							</TabPanel>
							{/* <TabPanel value={value} index={3} className={classes.typepanel}>
								<Box className={classes.typepanel}> back </Box>
							</TabPanel> */}
						</Grid>
						{/* right subtype selection tab above */}
					</Grid>
				</Grid>
			</Hidden>
			<Hidden mdUp>
				<Grid item container xs={12}>
					mobile
				</Grid>
			</Hidden>
		</>
	);
}

export default Customize;
