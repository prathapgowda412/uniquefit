import React from 'react';
import { makeStyles, Card, Container, Box, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import './custom.css';

const useStyles = makeStyles((theme) => ({
	pro: {
		height: 'fit-content',
		width: '100%',
		marginTop: '20px',
		position: 'relative',
	},
	cardimg: {
		height: '100%',
		width: '100%',
		transition: '0.3s',
		'&:hover': {
			transform: 'scale(1.1)',
		},
	},

	card: {
		height: '390px',
		borderRadius: '5px',
		'&:hover': {
			boxShadow: '0px 2px 2px rgba(50,50,71,0.06) , 0px 2px 4px rgba(50,50,71,0.06)',
		},
	},
	topimag: {
		width: '100%',
		// height: '68%',
		height: '260px',
		// backgroundColor: 'white',
		position: 'relative',
		overflow: 'hidden',
		[theme.breakpoints.down('sm')]: {
			height: '60%',
		},
	},
	cardbody: {
		// height: '32%',
		height: '135px',
		position: 'relative',
		backgroundColor: 'white',
		paddingTop: '10px',
		// marginTop: '10px',
		[theme.breakpoints.down('sm')]: {
			height: '40%',
		},
	},
	productname: {
		color: 'black',
		fontSize: '16px',
		fontWeight: '500',
		marginBottom: '10px',
		'&:hover': {
			color: '#387A76',
		},
	},
	saleprice: {
		fontSize: '16px',
		color: '#282C3F',
		fontWeight: '400',
	},
	originprice: {
		fontSize: '14px',
		color: '#6B6E7B',
	},
	link: {
		textDecoration: 'none',
		color: 'black',
	},
	productbox: {
		height: 'fit-content',
	},
	cardbodytext: {
		padding: '2px 5px ',
		backgroundColor: 'white',
	},
	main: {
		marginTop: '60px',
	},
}));

function Product(props) {
	let { product } = props;
	const classes = useStyles();
	return (
		<Grid xs={6} md={3} className={classes.main} key={product.productid}>
			<Container className={classes.pro}>
				<Card className={classes.card} elevation="0" square>
					<Link to={`/ProductPage/${product.productid}`}>
						<Box className={classes.topimag}>
							<img
								alt={`Uniquefit , shirts , ${product.producttype} shirt , ${product.productmaterial}shirts, ${product.productname}`}
								className={classes.cardimg}
								src={product.productimages[0]}
							/>
						</Box>
					</Link>
					<Box className={classes.cardbody}>
						<Box className={classes.cardbodytext} style={{ marginTop: '-20px' }}>
							<Link className={classes.link} to={`/ProductPage/${product.productid}`}>
								<Typography variant="h2" className={classes.productname}>
									{product.productname}
								</Typography>
							</Link>
						</Box>
						<Container className={classes.pricebox}>
							<Typography variant="body1" className={classes.saleprice}>
								₹{product.productsaleprice}
							</Typography>
							<Typography variant="body2" className={classes.originprice}>
								₹<strike className={classes.originprice}> {product.productprice}</strike>
							</Typography>
						</Container>
					</Box>
				</Card>
			</Container>
		</Grid>
	);
}

export default Product;
