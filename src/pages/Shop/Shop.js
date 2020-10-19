import { Card, Container, Grid, makeStyles, Typography, CardMedia, Box, CardActionArea } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import imgs from './images/suitwalink.jpg';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '800px',
		maxHeight: 'fit-content',
	},
	link: {
		textDecoration: 'none',
	},
	topbox: {
		minHeight: '250px',
		maxHeight: 'fit-content',
		marginTop: '50px',
		marginBottom: '50px',
		backgroundColor: '#f2f2f2',
	},
	shopbox: {
		height: 'fit-content',
		position: 'relative',
	},
	filterbox: {
		height: '400px',
		marginTop: '20px',
		backgroundColor: '#f2f2f2',
		position: 'sticky',
	},
	productsbox: {
		height: 'fit-content',
	},
	pro: {
		height: '450px',
		width: '350px',
		marginTop: '20px',
		position: 'relative',
		// backgroundColor: '#f2f2f2',
	},
	cardproduct: {
		width: '100%',
	},
	cardimg: {
		height: '100%',
		width: '100%',
		'&:hover': {
			transform: 'scale(1.1)',
		},
	},

	card: {
		backgroundColor: '#f2f2f2',
		height: '420px',
		borderRadius: '5px',

		// boxShadow: '0 2px 10px -8px #00000048',
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
		'&:hover': {
			backgroundColor: 'transparent',
		},
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
}));
function Shop() {
	const classes = useStyles();
	return (
		<Grid item container xs={12} className={classes.root} justify="center">
			<Container maxWidth="lg" className={classes.topbox}>
				<Typography variant="h2" align="center">
					Shop From Variety of Fabric and collection across india
				</Typography>
			</Container>
			<Grid item container xs={12} justify="space-evenly" className={classes.shopbox}>
				<Grid xs={12} sm={3} className={classes.filterbox}></Grid>
				<Grid item container xs={12} sm={9} direction="row" cols={3} className={classes.productsbox}>
					{/* <Container item className={classes.pro}>
						<div
							style={{
								height: '50px',
								backgroundColor: 'white',
								width: '100%',
								position: 'relative',
							}}></div>
						
					</Container> */}
					{/* <Box component="div" className={classes.pro}>
						<div
							style={{
								height: '50px',
								backgroundColor: 'white',
								width: '100%',
								position: 'relative',
							}}></div>
						
					</Box> */}
					<Container className={classes.pro}>
						<Card className={classes.card} elevation="0" square>
							{/* <CardMedia images="./images/whiteshirtgirl.jpg" /> */}
							<Box className={classes.topimag}>
								<img className={classes.cardimg} src={imgs} />
							</Box>
							<Link className={classes.link} to="/ProductPage/10">
								<CardActionArea className={classes.cardbody}>
									<Container>
										<Typography variant="h2" className={classes.productname}>
											Mens Formal casua;
										</Typography>
									</Container>
									<Container>
										<Typography variant="body1" className={classes.price}>
											1299
										</Typography>
									</Container>
								</CardActionArea>
							</Link>
						</Card>
					</Container>
					<Container className={classes.pro}>
						<Card className={classes.card} elevation="0" square>
							{/* <CardMedia images="./images/whiteshirtgirl.jpg" /> */}
							<Box className={classes.topimag}>
								<img className={classes.cardimg} src={imgs} />
							</Box>
							<Link className={classes.link} to="/Home">
								<CardActionArea className={classes.cardbody}>
									<Container>
										<Typography variant="h2" className={classes.productname}>
											Mens Formal Shirt
										</Typography>
									</Container>
									<Container>
										<Typography variant="body1" className={classes.price}>
											1299
										</Typography>
									</Container>
								</CardActionArea>
							</Link>
						</Card>
					</Container>
					<Container className={classes.pro}>
						<Card className={classes.card} elevation="0" square>
							{/* <CardMedia images="./images/whiteshirtgirl.jpg" /> */}
							<Box className={classes.topimag}>
								<img className={classes.cardimg} src={imgs} />
							</Box>
							<Link className={classes.link} to="/Home">
								<CardActionArea className={classes.cardbody}>
									<Container>
										<Typography variant="h2" className={classes.productname}>
											Mens Formal Shirt
										</Typography>
									</Container>
									<Container>
										<Typography variant="body1" className={classes.price}>
											1299
										</Typography>
									</Container>
								</CardActionArea>
							</Link>
						</Card>
					</Container>
					<Container className={classes.pro}>
						<Card className={classes.card} elevation="0" square>
							{/* <CardMedia images="./images/whiteshirtgirl.jpg" /> */}
							<Box className={classes.topimag}>
								<img className={classes.cardimg} src={imgs} />
							</Box>
							<Link className={classes.link} to="/Home">
								<CardActionArea className={classes.cardbody}>
									<Container>
										<Typography variant="h2" className={classes.productname}>
											Mens Formal Shirt
										</Typography>
									</Container>
									<Container>
										<Typography variant="body1" className={classes.price}>
											1299
										</Typography>
									</Container>
								</CardActionArea>
							</Link>
						</Card>
					</Container>

					<Container className={classes.pro}>
						<Card className={classes.card} elevation="0" square>
							{/* <CardMedia images="./images/whiteshirtgirl.jpg" /> */}
							<Box className={classes.topimag}>
								<img className={classes.cardimg} src={imgs} />
							</Box>
							<CardActionArea className={classes.cardbody}>
								<Container>
									<Typography variant="h2" className={classes.productname}>
										Mens Formal Shirt
									</Typography>
								</Container>
								<Container>
									<Typography variant="body1" className={classes.price}>
										1299
									</Typography>
								</Container>
							</CardActionArea>
						</Card>
					</Container>
				</Grid>
			</Grid>
		</Grid>
	);
}

// class Shop extends Component {
// 	render() {
// 		return <div>this is shop page</div>;
// 	}
// }

export default Shop;
