import React from 'react';
import { makeStyles, Card, CardActionArea, Container, Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import './custom.css';

const useStyles = makeStyles((theme) => ({
	pro: {
		height: '450px',
		width: '350px',
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
		fontSize: '30px',
		fontWeight: '500',
		margin: '0',
		'&:hover': {
			color: '#387A76',
		},
	},
	price: {
		fontSize: '16px',
		color: 'grey',
		fontWeight: '400',
	},
	link: {
		textDecoration: 'none',
		color: 'black',
	},
}));

function Product(props) {
	let { product } = props;
	// console.log;
	const classes = useStyles();
	return (
		<Container className={classes.pro} key={product.productid}>
			<Card className={classes.card} elevation="0" square>
				<Link to={`/ProductPage/${product.productid}`}>
					<Box className={classes.topimag}>
						<img className={classes.cardimg} src={product.productimages[0]} />
					</Box>
				</Link>
				<CardActionArea className={classes.cardbody}>
					<Container>
						<Link className={classes.link} to={`/ProductPage/${product.productid}`}>
							<Typography variant="h2" className={classes.productname}>
								{product.productname}
							</Typography>
						</Link>
					</Container>
					<Container>
						<Typography variant="body1" className={classes.price}>
							₹{product.productprice}
						</Typography>
					</Container>
				</CardActionArea>
			</Card>
		</Container>
	);
}

export default Product;
