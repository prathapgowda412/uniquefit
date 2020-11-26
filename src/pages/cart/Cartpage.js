import React, { useEffect, useState } from 'react';
import {
	Container,
	Grid,
	Typography,
	makeStyles,
	Box,
	Card,
	CardActions,
	Button,
	CardContent,
	Paper,
	Divider,
	Input,
	FormControl,
	FormLabel,
	TextField,
	AppBar,
} from '@material-ui/core';
import { getCartItems } from '../../services/fetchService';
import DeleteIcon from '@material-ui/icons/Delete';
import itemimg from '../Home/components/statics/images/girl.jpg';
import { removeFromCart } from './../../services/fetchService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const Styles = makeStyles({
	root: {
		// backgroundColor: 'grey',
	},

	cartappbar: {
		backgroundColor: '#fff',
		padding: '20px',
		height: '75px',
		width: '100%',
		marginBottom: '5px',
		position: 'relative',
		boxShadow: '2px 0px 5px -2px rgba(10,10,10,0.3)',
	},
	removebutton: {
		backgroundColor: 'white',
		float: 'right',
	},
	cartbox: {
		// backgroundColor: '#f9f9f9',
		minHeight: '100px',
		maxHeight: 'fit-content',
		// marginTop: '15px',
	},
	cardpaper: {
		width: '100%',
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		height: '150px',
	},
	leftbox: {
		minHeight: '100px',
		maxHeight: 'fit-content',
		paddingTop: '20px',
	},
	rightbox: {
		height: '500px',
		// backgroundColor: '#dcd',
		borderLeft: '1.5px solid rgba(100,100,100,0.40)',
		marginTop: '20px',
	},
	itemcard: {
		width: '90%',
		// minHeight: 'fit-content',
		height: 'fit-content',
		marginTop: '10px',
		boxShadow: '0px 1px 10px -5px rgba(10,10,10,0.3)',
		// border: '1.5px solid #52525275',
		borderRadius: '10px',
	},
	itemimg: {
		width: '25%',
		position: 'relative',
		height: '100%',
		objectFit: 'contain',
	},
	papercontent: {
		width: '75%',
		position: 'relative',
		height: '100%',
	},
	papercontainer: {
		marginTop: '5px',
	},
	productpricetag: {
		fontSize: '16px',
		color: '#282C3F',
	},
	productnametag: {
		fontSize: '18px',
		color: '#282C3F',
	},
	cartcalcont: {
		borderRadius: '5px ',
		boxShadow: '0px 0px 10px -5px rgba(50,50,71,0.26)',
		// border: '1px solid black',
		height: 'fit-content',
		width: '80%',
		padding: '20px 0 20px',
	},
	placeorderbutton: {
		margin: '24px 0 24px',
		padding: '16px 80px',
		backgroundColor: '#387A76',
		color: 'white',
		borderRadius: '0px',
		'&:hover': {
			backgroundColor: '#034b46',
		},
	},
	placebutontext: {
		color: 'white',
		fontSize: '18px',
	},
	adressbox: {
		height: 'fit-content',
		marginTop: '20px',
	},
	labelname: {
		color: '#387A76',
		fontSize: '20px',
	},
});

// for stepper below
function getSteps() {
	return ['Cart Page', 'Address', 'Payments'];
}

// function getStepContent(stepIndex) {
// 	const classes = Styles();
// }
// for stepper above

function Cartpage() {
	let [cartItems, setCartItems] = useState([]);
	const [cartmrpvalueprice, setmrpcartvalueprice] = useState();
	const [cartsaleprice, setcartsaleprice] = useState();
	const [cartquantity, setcartquantity] = useState();

	// for stepper below
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};
	// for stepper above

	useEffect(() => {
		getCartItems().then(({ data }) => {
			const cartIts = data.cartItems;

			setCartItems(cartIts.items);
			// console.log(cartIts);
			// console.log(cartItems);
			console.log(cartIts.items);
		});
	}, []);
	useEffect(() => {
		let sum = 0;
		let salepricesum = 0;

		cartItems.map(({ productsaleprice }) => {
			salepricesum = salepricesum + productsaleprice;
		});

		cartItems.map(({ productprice }) => {
			sum = sum + productprice;
		});
		setmrpcartvalueprice(sum);
		setcartsaleprice(salepricesum);
		setcartquantity(cartItems.length);
	}, [cartItems]);

	// console.log(cartvalueprice);
	// console.log(cartItems.length);

	const removeFromCartUI = async (productid) => {
		setCartItems(cartItems.filter((cartItem) => cartItem.productid != productid));
		let { data } = await removeFromCart(productid);
		toast(data.message);
	};

	const classes = Styles();

	// one below
	const getStepContent = (stepIndex) => {
		switch (stepIndex) {
			case 0:
				return (
					<Grid item container xs={12} sm={10} className={classes.cartbox} justify="center">
						<Grid item container xs={12} sm={7} className={classes.leftbox} justify="center">
							{/* single item */}
							{cartItems.map((ite, index) => {
								return (
									<>
										<Card elevation square className={classes.itemcard} key={index}>
											<CardContent className={classes.cardcontent}>
												<Paper elevation className={classes.cardpaper}>
													<img
														className={classes.itemimg}
														src={`http://45.13.132.188:5000${ite.productimages[0]}`}
													/>
													<Box className={classes.papercontent}>
														<Container className={classes.papercontainer}>
															<Typography className={classes.productnametag} variant="h3">
																{ite.productname}
															</Typography>
															<Typography>{ite.productsaleprice}</Typography>
															<Typography variant="body1">
																Product id:{ite.productid}
															</Typography>
														</Container>
													</Box>
												</Paper>
											</CardContent>
											<CardActions className={classes.actioncard}>
												<Button
													className={classes.removebutton}
													onClick={() => removeFromCartUI(ite.productid)}
													size="medium">
													<DeleteIcon />
													Remove
												</Button>
											</CardActions>
										</Card>
									</>
								);
							})}

							{/* single item */}
						</Grid>
						<Grid item container xs={10} sm={5} justify="center" className={classes.rightbox}>
							<Container className={classes.cartcalcont}>
								<Grid container justify="center">
									<Grid item container xs={10}>
										<Grid item xs={7}>
											<Typography>No of Products:</Typography>
										</Grid>
										<Grid item xs={5}>
											<Typography>{cartquantity}</Typography>
										</Grid>
									</Grid>
									<Grid item container xs={10}>
										<Grid item xs={7}>
											<Typography>MRP Price:</Typography>
										</Grid>
										<Grid item xs={5}>
											<Typography>{cartmrpvalueprice}</Typography>
										</Grid>
									</Grid>
									<Grid item container xs={10}>
										<Grid item xs={7}>
											<Typography>Sale Price:</Typography>
										</Grid>
										<Grid item xs={5}>
											<Typography>{cartsaleprice}</Typography>
										</Grid>
									</Grid>
									<Divider />
								</Grid>
								<Container>
									{/* <Button className={classes.placeorderbutton}>
										<Typography className={classes.placebutontext}>Place Order</Typography>
									</Button> */}
									<Button
										className={classes.placeorderbutton}
										variant="contained"
										color="primary"
										onClick={handleNext}>
										<Typography className={classes.placebutontext}>
											{activeStep === steps.length - 1 ? 'CheckOut' : 'Next'}
										</Typography>
									</Button>
								</Container>
							</Container>
						</Grid>
					</Grid>
				);
			case 1:
				return <Grid></Grid>;
			case 2:
				return <Grid></Grid>;
			default:
				return 'Unknown stepIndex';
		}
	};
	// one above

	return (
		<>
			<Grid item container xs={12} className={classes.root} justify="center">
				<Grid xs={12} item justify="center" container className={classes.cartappbar}>
					<Box style={{ width: '95%' }}>
						<Grid item container xs={1} />
						<Grid item container xs={4}>
							<Link to="/">
								<img src={require('../../logos/Unique fit monogram.svg')} height="35px" />
							</Link>
						</Grid>
						<Grid item container></Grid>
					</Box>
				</Grid>

				<Container maxWidth="md">
					<Stepper activeStep={activeStep} alternativeLabel>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>
									<Typography className={classes.labelname}>{label}</Typography>
								</StepLabel>
							</Step>
						))}
					</Stepper>
				</Container>
				<Container>
					<div>
						{activeStep === steps.length ? (
							<div>
								<Typography className={classes.instructions}>All steps completed</Typography>
								<Button onClick={handleReset}>Reset</Button>
							</div>
						) : (
							<div>
								<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
								<div>
									<Button
										disabled={activeStep === 0}
										onClick={handleBack}
										className={classes.backButton}>
										Back
									</Button>
									<Button
										className={classes.placeorderbutton}
										variant="contained"
										color="primary"
										onClick={handleNext}>
										<Typography className={classes.placebutontext}>
											{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
										</Typography>
									</Button>
								</div>
							</div>
						)}
					</div>
				</Container>

				<Grid xs={12} sm={10} className={classes.adressbox}></Grid>
			</Grid>
		</>
	);
}

export default Cartpage;
