import React from 'react';
import { makeStyles, Card, CardActionArea, Container, Box, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import './custom.css';

const useStyles = makeStyles((theme) => ({
	pro: {
		height: '370px',
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
		backgroundColor: '#f2f2f2',
		height: '420px',
		borderRadius: '5px',
	},
	topimag: {
		width: '100%',
		height: '70%',
		backgroundColor: 'white',
		position: 'relative',
		overflow: 'hidden',
	},
	cardbody: {
		height: '30%',
		position: 'relative',
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
		margin: '8px',
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
							<img className={classes.cardimg} src={product.productimages[0]} />
						</Box>
					</Link>
					<CardActionArea className={classes.cardbody}>
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
					</CardActionArea>
				</Card>
			</Container>
		</Grid>
	);
}

export default Product;
