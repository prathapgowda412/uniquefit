import {
	Grid,
	Hidden,
	Box,
	Paper,
	Typography,
	Button,
	Divider,
	Container,
	CircularProgress,
	LinearProgress,
} from '@material-ui/core';
import React, { useContext, useEffect } from 'react';

import './style.css';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';

import { Link, Redirect, useHistory, useParams } from 'react-router-dom';

// import collars from './data/collar.json';
// import frontt from './data/front.json';
// import Butoons from './data/buttons.json';
// import sleevecuffss from './data/sleevecuffs.json';
// import pocket from './data/pocket.json';
// import collarstiffness from './data/collarstiffness.json';
// import buttonthread from './data/thread.json';
// import back from './data/back.json';
// import backbottom from './data/backbottom.json';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { addToCart } from '../../services/fetchService';
import { toast } from 'react-toastify';
import { productContext } from '../../contexts/ProductContext';
import { getCustomisations } from './../../services/fetchService';
import CustomiseStyles from './Customizestyles';
import { customizationContext } from '../../contexts/CustomizationContext';

const styles = CustomiseStyles;
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
	const history = useHistory();
	const classes = styles();
	const { id } = useParams();
	const [fullCustomization, setfullCustomization] = React.useState([]);
	const getcustomizationdata = async () => {
		let resp = await getCustomisations();

		setfullCustomization(resp.data.customisations);
		// console.log(fullCustomization);
	};
	// product from content below

	const { products, setProducts: setproducts } = useContext(productContext);
	const [product, setproduct] = React.useState([]);
	const [colarimg, setcolarimg] = React.useState([]);
	const [productimages, setproductimages] = React.useState([]);
	// const { customizationsdata, setCustomizationsdata } = useContext(customizationContext);
	// console.log(customizationsdata);
	useEffect(() => {
		// console.log(customizations);
		// if (products.length) {
		// 	console.log(products[0].productimages);
		// }
		// console.log(products);
		setproduct(
			products.find((product) => {
				// console.log(product.productid);
				return product.productid === id;
			})
		);
		// console.log(product);

		getcustomizationdata();
	}, [products]);

	// collar value change handling below
	const [collarnamevalue, setcollarnameValue] = React.useState('Spread Eagle');

	const [collarimage, setcollarimage] = React.useState();
	const [collarstiff, setcollarstiffness] = React.useState('soft');
	// let collarname = '';
	const handlecollarChange = (event) => {
		setcollarnameValue(event.target.value);
	};

	const handlecollarstiffnesschange = (event) => {
		setcollarstiffness(event.target.value);
	};
	// collar value change handling above

	// sleevecuff value change handling below
	const [sleevecuffvalue, setsleevecuffValue] = React.useState('half sleeve');
	const [cuffstiff, setcuffstiff] = React.useState('soft');
	const handlesleevecuffChange = (event) => {
		setsleevecuffValue(event.target.value);
	};

	const handlesleevecuffstiffness = (event) => {
		setcuffstiff(event.target.value);
	};
	// sleevecuff value change handling above

	// butoons  value change handling below
	const [butoonvalue, setbutoonvalue] = React.useState('Natural');
	const [buttonthreadvalue, setbuttonthreadvalue] = React.useState('Black');
	const handlebutoonChange = (event) => {
		setbutoonvalue(event.target.value);
	};
	const handlebuttonthread = (event) => {
		setbuttonthreadvalue(event.target.value);
	};
	// butoons  value change handling above

	// butoons  value change handling below
	const [frontvalue, setfrontvalue] = React.useState('Regular');
	const handlefrontChange = (event) => {
		setfrontvalue(event.target.value);
	};
	// butoons  value change handling above

	//pocket handling
	const [pocketvalue, setpocketvalue] = React.useState('none');
	const handlepocketchange = (event) => {
		setpocketvalue(event.target.value);
	};

	// back and bac bottom hanfling below
	const [backvalue, setbackvalue] = React.useState('None');
	const [backbottomvalue, setbackbottomvalue] = React.useState('Rounded');
	const handlebackchange = (event) => {
		setbackvalue(event.target.value);
	};
	const handlebackbottomchange = (event) => {
		setbackbottomvalue(event.target.value);
	};
	// back and bac bottom hanfling above
	// tabs handling below
	const [tabvalue, settabValue] = React.useState(0);
	const handleTabChange = (event, newValue) => {
		settabValue(newValue);
	};

	const hancleclickcart = async () => {
		// toast('clicked butn');
		console.log(localStorage.getItem('usertoken'));
		let toke = localStorage.getItem('usertoken');
		if (toke == null) {
			toast('please login to add to cart');
			history.push('/Login');
			// <Redirect to="Login" />;
		}

		const productc = { ...product };

		let customisations = {
			back: fullCustomization.find((custom) => custom.name === backvalue),
			backbottom: fullCustomization.find((custom) => custom.name === backbottomvalue),
			buttons: fullCustomization.find((custom) => custom.name === butoonvalue),
			collar: fullCustomization.find((custom) => custom.name === collarnamevalue),
			collarstiffness: fullCustomization.find((custom) => custom.name === collarstiff),
			front: fullCustomization.find((custom) => custom.name === frontvalue),
			pocket: fullCustomization.find((custom) => custom.name === pocketvalue),
			sleevecuffs: fullCustomization.find((custom) => custom.name === sleevecuffvalue),
			buttonthread: fullCustomization.find((custom) => custom.name === buttonthreadvalue),
			cuffstiffness: fullCustomization.find((custom) => custom.name === cuffstiff),
		};

		productc.customisations = customisations;

		delete productc._id;
		delete productc.__v;

		const { data: response } = await addToCart(productc);
		toast(response.message);
		console.log(response);
		if (response.message == 'Product added to cart successfully') {
			history.push('/Cart');
		}
	};

	return (
		<>
			{/* this is is for desktop tool below */}
			{/* 
wa.link/54ag6i */}
			<Hidden smDown>
				<Grid item container xs={12} className={classes.root}>
					<Grid item container xs={12} alignItems="center" className={classes.topbar}>
						<Grid item xs={2} className={classes.logobox}>
							<Link to="/">
								<img className={classes.logo} src={require('../../logos/uniquefitlogowhite.svg')} />
							</Link>
						</Grid>
						<Grid item xs={7}>
							<Container>
								{product && product.productimages ? (
									<>
										<Typography className={classes.productname} key={product.productid}>
											{product.productname}
										</Typography>
										{/* <br /> */}
										<Typography style={{ color: '#282c3f' }}>{product.productsaleprice}</Typography>
									</>
								) : (
									<Container maxWidth="xs">
										<LinearProgress />
									</Container>
								)}
							</Container>
						</Grid>
						<Grid item xs={3} justify="center">
							<Button className={classes.addtocartbutton} onClick={hancleclickcart}>
								<Typography className={classes.aaddtontext}>Add to Cart</Typography>
							</Button>
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
								aria-label="Vertical tabs example">
								<Tab className={classes.tablink} label="Collar" {...a11yProps(0)}></Tab>
								<Tab className={classes.tablink} label="Hand Cuffs" {...a11yProps(1)} />
								<Tab className={classes.tablink} label="Button & Thread" {...a11yProps(2)} />
								<Tab className={classes.tablink} label="Front" {...a11yProps(3)} />
								<Tab className={classes.tablink} label="Pocket" {...a11yProps(4)} />
								<Tab className={classes.tablink} label="Back & Bottom" {...a11yProps(5)} />
							</Tabs>
						</Grid>
						{/* left type selection tab above */}

						{/* middle preview  tab below */}
						<Grid item container sm={7} style={{ backgroundColor: '#fff', height: '100%' }}>
							<Grid xs={12} className={classes.bigimagecont}>
								<Container className={classes.bigimagecont}>
									{/* {fullCustomization.map((colar) => {
									if (colar.type == 'collar') {
										return <Typography> |. {colar.name} .| </Typography>;
									}
								})} */}

									{product && product.productimages ? (
										<>
											<img
												className={classes.bigimagedesk}
												height="350px"
												src={product.productimages[0]}
											/>
										</>
									) : (
										<CircularProgress color="secondary" />
									)}
								</Container>
							</Grid>
							<Grid item container xs={12} justify="center" style={{ height: '35%' }}>
								{/* <Container classname={classes.selectedbox}> */}
								<Grid item container justify="space-between" xs={11}>
									<Grid xs={2} item>
										<Paper elevation className={classes.selectedpaper}>
											<Typography> Collar name :</Typography>
											{collarnamevalue}
										</Paper>
									</Grid>
									<Grid xs={2} item>
										<Paper elevation className={classes.selectedpaper}>
											<Typography> Collar Stiffness :</Typography>
											{collarstiff}
										</Paper>
									</Grid>
									<Grid xs={2} item>
										<Paper elevation className={classes.selectedpaper}>
											<Typography> Sleeves and Cuffs :</Typography>
											{sleevecuffvalue}
										</Paper>
									</Grid>
									<Grid xs={2} item>
										<Paper elevation className={classes.selectedpaper}>
											<Typography> Cuff Stiffness :</Typography>
											{cuffstiff}
										</Paper>
									</Grid>
									<Grid xs={2} item>
										<Paper elevation className={classes.selectedpaper}>
											<Typography> Pocket name :</Typography>
											{pocketvalue}
										</Paper>
									</Grid>
								</Grid>
								<Grid item container justify="space-between" container xs={11}>
									<Grid xs={2} item>
										<Paper elevation className={classes.selectedpaper}>
											<Typography> Button name :</Typography>
											{butoonvalue}
										</Paper>
									</Grid>
									<Grid xs={2} item>
										<Paper elevation className={classes.selectedpaper}>
											<Typography> Button Thread color :</Typography>
											{buttonthreadvalue}
										</Paper>
									</Grid>
									<Grid xs={2} item>
										<Paper elevation className={classes.selectedpaper}>
											<Typography> Front Value :</Typography>
											{frontvalue}
										</Paper>
									</Grid>
									<Grid xs={2} item>
										<Paper elevation className={classes.selectedpaper}>
											<Typography> Back Value :</Typography>
											{backvalue}
										</Paper>
									</Grid>
									<Grid xs={2} item>
										<Paper elevation className={classes.selectedpaper}>
											<Typography> Back Bottom name :</Typography>
											{backbottomvalue}
										</Paper>
									</Grid>
								</Grid>
								{/* </Container> */}
							</Grid>
						</Grid>
						{/* middle preview  tab above */}

						{/* right subtype selection tab below */}
						<Grid item container sm={3} style={{ backgroundColor: '#e6eeff', height: '100%' }}>
							<TabPanel value={tabvalue} index={0} className={classes.rightpane}>
								<FormControl component="fieldset">
									{/* <FormLabel component="legend">Gender</FormLabel> */}
									<FormLabel className={classes.variation}>Variations</FormLabel>
									{/*  */}
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={collarnamevalue}
										onChange={handlecollarChange}
										className={classes.typepanel}>
										{fullCustomization
											.filter((colr) => colr.type == 'collar')
											.map((colar) => {
												return (
													<Paper className={classes.typepaper}>
														<img src={colar.image} className={classes.typeimage} />
														<FormControlLabel
															value={colar.name}
															control={<Radio />}
															label={colar.name}
														/>
													</Paper>
												);
											})}
									</RadioGroup>

									{/* <Typography>value : {collarnamevalue}</Typography> */}
								</FormControl>
								<Divider className={classes.divider} />
								<FormControl component="fieldset">
									<FormLabel className={classes.variation}>Select collar Stiffness :</FormLabel>
									<RadioGroup
										value={collarstiff}
										onChange={handlecollarstiffnesschange}
										className={classes.typepanel}>
										{fullCustomization
											.filter((colr) => colr.type == 'collarstiffness')
											.map((colarstif) => {
												return (
													<Paper className={classes.typepaper}>
														<img src={colarstif.image} className={classes.typeimage} />
														<FormControlLabel
															value={colarstif.name}
															control={<Radio />}
															label={colarstif.name}
														/>
													</Paper>
												);
											})}
									</RadioGroup>
								</FormControl>
							</TabPanel>
							<TabPanel value={tabvalue} index={1} className={classes.rightpane}>
								<FormControl component="fieldset">
									{/* <FormLabel component="legend">Gender</FormLabel> */}
									<FormLabel className={classes.variation}>Variations</FormLabel>
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={sleevecuffvalue}
										onChange={handlesleevecuffChange}
										className={classes.typepanel}>
										{fullCustomization
											.filter((colr) => colr.type == 'sleevecuffs')
											.map((sleevecuff) => {
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
									{/* <Typography>value : {sleevecuffvalue}</Typography> */}
								</FormControl>
								<Divider className={classes.divider} />
								<FormControl component="fieldset">
									<FormLabel className={classes.variation}>Select Cuff Stiffness :</FormLabel>
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={cuffstiff}
										onChange={handlesleevecuffstiffness}
										className={classes.typepanel}>
										{fullCustomization
											.filter((colr) => colr.type == 'collarstiffness')
											.map((sleevecuff) => {
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
								</FormControl>
							</TabPanel>
							<TabPanel value={tabvalue} index={2} className={classes.rightpane}>
								<FormControl component="fieldset">
									<FormLabel className={classes.variation}>Variations</FormLabel>
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={butoonvalue}
										onChange={handlebutoonChange}
										className={classes.typepanel}>
										{fullCustomization
											.filter((colr) => colr.type == 'buttons')
											.map((butoon) => {
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
									{/* <Typography>value : {butoonvalue}</Typography> */}
								</FormControl>
								<Divider className={classes.divider} />
								<FormControl component="fieldset">
									<FormLabel className={classes.variation}>Select button thread :</FormLabel>
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={buttonthreadvalue}
										onChange={handlebuttonthread}
										className={classes.typepanel}>
										{fullCustomization
											.filter((colr) => colr.type == 'thread')
											.map((buttonthread) => {
												return (
													<Paper className={classes.buttonpaper}>
														<img src={buttonthread.image} className={classes.buttonimage} />
														<FormControlLabel
															value={buttonthread.name}
															control={<Radio />}
															label={buttonthread.name}
														/>
													</Paper>
												);
											})}
									</RadioGroup>
								</FormControl>
							</TabPanel>
							<TabPanel value={tabvalue} index={3} className={classes.rightpane}>
								<FormControl component="fieldset">
									<FormLabel className={classes.variation}>Variations</FormLabel>

									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={frontvalue}
										onChange={handlefrontChange}
										className={classes.typepanel}>
										{fullCustomization
											.filter((colr) => colr.type == 'front')
											.map((frontt) => {
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
									{/* <Typography>value : {frontvalue}</Typography> */}
								</FormControl>
							</TabPanel>
							<TabPanel value={tabvalue} index={4} className={classes.rightpane}>
								<FormControl component="fieldset">
									<FormLabel className={classes.variation}>Variations :</FormLabel>
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={pocketvalue}
										onChange={handlepocketchange}
										className={classes.typepanel}>
										{fullCustomization
											.filter((colr) => colr.type == 'pocket')
											.map((pocket) => {
												return (
													<Paper className={classes.typepaper}>
														<img src={pocket.image} className={classes.typeimage} />
														<FormControlLabel
															value={pocket.name}
															control={<Radio />}
															label={pocket.name}
														/>
													</Paper>
												);
											})}
									</RadioGroup>
									{/* <Typography>value : {frontvalue}</Typography> */}
								</FormControl>
							</TabPanel>
							<TabPanel value={tabvalue} index={5} className={classes.rightpane}>
								<FormControl component="fieldset">
									<FormLabel className={classes.variation}>Variations :</FormLabel>
									<RadioGroup
										aria-label="gender"
										value={backvalue}
										onChange={handlebackchange}
										className={classes.typepanel}>
										{/* for bacj anf cbotm */}
										{fullCustomization
											.filter((colr) => colr.type == 'back')
											.map((back) => {
												return (
													<Paper className={classes.typepaper}>
														<img src={back.image} className={classes.typeimage} />
														<FormControlLabel
															value={back.name}
															control={<Radio />}
															label={back.name}
														/>
													</Paper>
												);
											})}
									</RadioGroup>
									{/* <Typography>value : {frontvalue}</Typography> */}
								</FormControl>
								<Divider className={classes.divider} />
								<FormControl component="fieldset">
									<FormLabel className={classes.variation}>Select Back Bottom:</FormLabel>
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={backbottomvalue}
										onChange={handlebackbottomchange}
										className={classes.typepanel}>
										{fullCustomization
											.filter((colr) => colr.type == 'backbottom')
											.map((backbottom) => {
												return (
													<Paper className={classes.buttonpaper}>
														<img src={backbottom.image} className={classes.typeimage} />
														<FormControlLabel
															value={backbottom.name}
															control={<Radio />}
															label={backbottom.name}
														/>
													</Paper>
												);
											})}
									</RadioGroup>
								</FormControl>
							</TabPanel>
						</Grid>
						{/* right subtype selection tab above */}
					</Grid>
				</Grid>
			</Hidden>
			{/* thisi is for desktop tool above */}

			{/* this is for mobile layout below */}
			<Hidden mdUp>
				<Grid item container xs={12} className={classes.mobmain}>
					<Grid item container xs={12} className={classes.customappmob}>
						<Link to="/">
							<img src={require('../../logos/Uniquefit_white_monogram.svg')} style={{ height: '35px' }} />
						</Link>
						<Box style={{ float: 'right' }}>
							<Button className={classes.addcartbutton} onClick={hancleclickcart}>
								<Typography className={classes.adbutontext}>Add to Cart</Typography>
							</Button>
						</Box>
					</Grid>

					<Grid item container xs={12} style={{ height: '40vh', backgroundColor: '#f2f2f2' }}>
						<Container className={classes.bigimagecont}>
							{product && product.productimages ? (
								<>
									<img className={classes.bigimage} src={product.productimages[0]} />
								</>
							) : (
								<CircularProgress />
							)}
						</Container>

						{/* { product && product.productimages ? ():('') } */}
					</Grid>
					{/* <Grid
						item
						container
						xs={12}
						style={{
							height: '9vh',
							// backgroundColor: '#28334B',
							borderRadius: '10px 10px 0 0',
							display: 'inline-block',
							overflowX: 'scroll',
							zIndex: '10',
						}}>
						<Tabs
							indicatorColor="none"
							orientation="horizontal"
							value={tabvalue}
							onChange={handleTabChange}
							indicatorColor="primary"
							aria-label="Vertical tabs example"
							className={classes.mobtabs}>
							<Tab className={classes.mobtablink} label="Collar" {...a11yProps(0)} />
							<Tab className={classes.mobtablink} label="Hand Cuffs" {...a11yProps(1)} />
							<Tab className={classes.mobtablink} label="Button" {...a11yProps(2)} />
							<Tab className={classes.mobtablink} label="Front" {...a11yProps(3)} />
							<Tab className={classes.mobtablink} label="Pocket" {...a11yProps(4)} />
							<Tab className={classes.mobtablink} label="Back & Bottom" {...a11yProps(5)} />
						</Tabs>
					</Grid> */}

					<Grid item container xs={12} style={{ height: '50vh', backgroundColor: '#fff' }}>
						<Box
							style={{
								height: 'fit-content',
								width: '100%',
								overflowX: 'scroll',
							}}>
							<Tabs
								indicatorColor="none"
								orientation="horizontal"
								value={tabvalue}
								onChange={handleTabChange}
								indicatorColor="primary"
								aria-label="Vertical tabs example"
								className={classes.mobtabs}>
								<Tab className={classes.mobtablink} label="Collar" {...a11yProps(0)} />
								<Tab className={classes.mobtablink} label="Hand Cuffs" {...a11yProps(1)} />
								<Tab className={classes.mobtablink} label="Button" {...a11yProps(2)} />
								<Tab className={classes.mobtablink} label="Front" {...a11yProps(3)} />
								<Tab className={classes.mobtablink} label="Pocket" {...a11yProps(4)} />
								<Tab className={classes.mobtablink} label="Back & Bottom" {...a11yProps(5)} />
							</Tabs>
						</Box>
						<Box style={{ overflowY: 'scroll', height: '100%' }}>
							<TabPanel value={tabvalue} index={0} className={classes.rightpane}>
								<FormControl component="fieldset">
									{/* <FormLabel component="legend">Gender</FormLabel> */}
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={collarnamevalue}
										onChange={handlecollarChange}
										className={classes.typepanel}>
										{fullCustomization
											.filter((colr) => colr.type == 'collar')
											.map((collar) => {
												return (
													<Paper className={classes.mobtypepaper}>
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
									{/* <Typography>value : {collarnamevalue}</Typography> */}
								</FormControl>

								<Divider className={classes.divider} />
								<FormControl component="fieldset">
									<FormLabel className={classes.variation}>Select collar Stiffness :</FormLabel>
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={collarstiff}
										onChange={handlecollarstiffnesschange}
										className={classes.typepanel}>
										{fullCustomization
											.filter((colr) => colr.type == 'collarstiffness')
											.map((collarstiffness) => {
												return (
													<Paper className={classes.mobtypepaper}>
														<img
															src={collarstiffness.image}
															className={classes.typeimage}
														/>
														<FormControlLabel
															value={collarstiffness.name}
															control={<Radio />}
															label={collarstiffness.name}
														/>
													</Paper>
												);
											})}
									</RadioGroup>
								</FormControl>
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
										{fullCustomization
											.filter((colr) => colr.type == 'sleevecuffs')
											.map((sleevecuff) => {
												return (
													<Paper className={classes.mobtypepaper}>
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
									{/* <Typography>value : {sleevecuffvalue}</Typography> */}

									<Divider className={classes.divider} />
									<FormControl component="fieldset">
										<FormLabel className={classes.variation}>Select Cuff Stiffness :</FormLabel>
										<RadioGroup
											aria-label="gender"
											name="gender1"
											value={cuffstiff}
											onChange={handlesleevecuffstiffness}
											className={classes.typepanel}>
											{fullCustomization
												.filter((colr) => colr.type == 'collarstiffness')
												.map((collarstiffness) => {
													return (
														<Paper className={classes.mobtypepaper}>
															<img
																src={collarstiffness.image}
																className={classes.typeimage}
															/>
															<FormControlLabel
																value={collarstiffness.name}
																control={<Radio />}
																label={collarstiffness.name}
															/>
														</Paper>
													);
												})}
										</RadioGroup>
									</FormControl>
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
										{fullCustomization
											.filter((colr) => colr.type == 'buttons')
											.map((butoon) => {
												return (
													<Paper className={classes.mobtypepaper}>
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
									{/* <Typography>value : {butoonvalue}</Typography> */}
								</FormControl>

								<Divider className={classes.divider} />
								<FormControl component="fieldset">
									<FormLabel className={classes.variation}>Select button thread :</FormLabel>
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={buttonthreadvalue}
										onChange={handlebuttonthread}
										className={classes.typepanel}>
										{fullCustomization
											.filter((colr) => colr.type == 'thread')
											.map((buttonthread) => {
												return (
													<Paper className={classes.mobtypepaper}>
														<img src={buttonthread.image} className={classes.buttonimage} />
														<FormControlLabel
															value={buttonthread.name}
															control={<Radio />}
															label={buttonthread.name}
														/>
													</Paper>
												);
											})}
									</RadioGroup>
								</FormControl>
							</TabPanel>
							<TabPanel value={tabvalue} index={3} className={classes.typepanel}>
								<FormControl component="fieldset">
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={frontvalue}
										onChange={handlefrontChange}
										className={classes.typepanel}>
										{fullCustomization
											.filter((colr) => colr.type == 'front')
											.map((frontt) => {
												return (
													<Paper className={classes.mobtypepaper}>
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
									{/* <Typography>value : {frontvalue}</Typography> */}
								</FormControl>
							</TabPanel>
							<TabPanel value={tabvalue} index={4} className={classes.typepanel}>
								<FormControl component="fieldset">
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={pocketvalue}
										onChange={handlepocketchange}
										className={classes.typepanel}>
										{fullCustomization
											.filter((colr) => colr.type == 'pocket')
											.map((pocket) => {
												return (
													<Paper className={classes.mobtypepaper}>
														<img src={pocket.image} className={classes.typeimage} />
														<FormControlLabel
															value={pocket.name}
															control={<Radio />}
															label={pocket.name}
														/>
													</Paper>
												);
											})}
									</RadioGroup>
									{/* <Typography>value : {frontvalue}</Typography> */}
								</FormControl>
							</TabPanel>
							<TabPanel value={tabvalue} index={5} className={classes.rightpane}>
								<FormControl component="fieldset">
									<FormLabel className={classes.variation}>Variations :</FormLabel>
									<RadioGroup
										aria-label="gender"
										value={backvalue}
										onChange={handlebackchange}
										className={classes.typepanel}>
										{/* for bacj anf cbotm */}
										{fullCustomization
											.filter((colr) => colr.type == 'back')
											.map((back) => {
												return (
													<Paper className={classes.mobtypepaper}>
														<img src={back.image} className={classes.typeimage} />
														<FormControlLabel
															value={back.name}
															control={<Radio />}
															label={back.name}
														/>
													</Paper>
												);
											})}
									</RadioGroup>
									{/* <Typography>value : {frontvalue}</Typography> */}
								</FormControl>
								<Divider className={classes.divider} />
								<FormControl component="fieldset">
									<FormLabel className={classes.variation}>Select Back Bottom:</FormLabel>
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={backbottomvalue}
										onChange={handlebackbottomchange}
										className={classes.typepanel}>
										{fullCustomization
											.filter((colr) => colr.type == 'backbottom')
											.map((backbottom) => {
												return (
													<Paper className={classes.mobtypepaper}>
														<img src={backbottom.image} className={classes.typeimage} />
														<FormControlLabel
															value={backbottom.name}
															control={<Radio />}
															label={backbottom.name}
														/>
													</Paper>
												);
											})}
									</RadioGroup>
								</FormControl>
							</TabPanel>
						</Box>
					</Grid>
				</Grid>
			</Hidden>
		</>
	);
}

export default Customize;
