import {
	Card,
	CardMedia,
	Grid,
	Typography,
	Paper,
	Container,
	CardContent,
	Button,
	makeStyles,
	CardActions,
	CardActionArea,
	Box,
} from '@material-ui/core';
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { productContext } from './../../../contexts/ProductContext';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		marginTop: '40px',
	},
	grid: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
	},
	gridList: {
		flexWrap: 'nowrap',
		height: 'fit-content',
		[theme.breakpoints.up('sm')]: {
			// flexWrap: 'wrap',
			display: 'flex',
			flexDirection: 'row',
		},
		// cols: '1.5',
	},
	button: {
		color: 'orange',
	},
	name: {
		color: 'black',
	},
	cardbox: {
		display: 'flex',
		flexDirection: 'row',
		// display: 'inline',
		position: 'relative',
		width: '100%',
		backgroundColor: 'grey',
		overflowX: 'scroll',
		[theme.breakpoints.down('sm')]: {
			width: 'fit-content',
		},
	},
	shopbutton: {
		color: '#387A76',
		fontWeight: 'bold',
	},
	imgcard: {
		width: '100%',
		position: 'relative',
	},
	trendcard: {
		height: '600px',
		// width: '250px',
		marginLeft: '10px',
		[theme.breakpoints.up('sm')]: {
			width: '500px',
		},
	},
	pricebox: {
		display: 'flex',
		alignItems: 'center',
	},
	gridcard: {
		height: '450px',
	},
	// from product below
	pro: {
		height: '370px',
		width: '350px',
		marginTop: '20px',
		marginBottom: '20px',

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
		backgroundColor: '#fff',
		height: '370px',
		borderRadius: '0px',
		[theme.breakpoints.down('sm')]: {
			height: '305px',
			margin: '10px 8px',
		},
		'&:hover': {
			boxShadow: '0px 2px 2px rgba(50,50,71,0.06) , 0px 2px 4px rgba(50,50,71,0.06)',
		},
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
		paddingTop: '12px',
		position: 'relative',
		backgroundColor: 'white',
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
	trendingtextbox: {
		width: '80%',
		padding: '10px 0',
		[theme.breakpoints.down('sm')]: {
			width: '98%',
		},
	},
}));

function Secondpro() {
	const classes = useStyles();
	// const [products, setproducts] = React.useState([]);
	const { products, setProducts: setproducts } = useContext(productContext);

	// console.log(products);

	// useEffect(() => {
	// 	Axios.get('https://uniquefit.ml/products/get-products')
	// 		.then((resp) => {
	// 			const result = resp;
	// 			// console.log(resp);
	// 			// console.log(resp.data);
	// 			// console.log(resp.data);
	// 			setproducts(resp.data);
	// 		})
	// 		.catch((err) => {
	// 			console.log('err : ');
	// 			console.log(err);
	// 		}, []);
	// }, []);
	// console.log(products);

	return (
		<Grid item container xs={12} justify="center" className={classes.root}>
			<Container justify="center" className={classes.trendingtextbox}>
				<Typography variant="h5">Solids Shirts</Typography>
			</Container>

			<Grid item container xs={12} sm={11} justify="space-evenly">
				{products
					.filter((prod) => prod.productpattern === 'Solids')
					.slice(0, 4)
					.reverse()
					.map((product) => {
						return (
							<Grid xs={6} sm={4} md={2}>
								<Card className={classes.card} elevation="0" square>
									<Link to={`/ProductPage/${product.productid}`}>
										<Box className={classes.topimag}>
											<img className={classes.cardimg} src={product.productimages[0]} />
										</Box>
									</Link>
									<CardActionArea className={classes.cardbody}>
										<Box className={classes.cardbodytext} style={{ marginTop: '-20px' }}>
											<Link className={classes.link} to={`/ProductPage/${product.productid}`}>
												<Typography variant="h1" className={classes.productname}>
													{product.productname}
												</Typography>
											</Link>
										</Box>
										<Container className={classes.pricebox}>
											<Typography variant="body1" className={classes.saleprice}>
												₹{product.productsaleprice}
											</Typography>
											<Typography variant="body2" className={classes.originprice}>
												₹
												<strike className={classes.originprice}> {product.productprice}</strike>
											</Typography>
										</Container>
									</CardActionArea>
								</Card>
							</Grid>
						);
					})}
			</Grid>
			<Container justify="center" className={classes.trendingtextbox}>
				<Typography variant="h5">Stripes Shirts</Typography>
			</Container>

			<Grid item container xs={12} sm={11} justify="space-evenly">
				{products
					.filter((prod) => prod.productpattern === 'Stripes')
					.slice(0, 4)
					.reverse()
					.map((product) => {
						return (
							<Grid xs={6} sm={4} md={2}>
								<Card className={classes.card} elevation="0" square>
									<Link to={`/ProductPage/${product.productid}`}>
										<Box className={classes.topimag}>
											<img className={classes.cardimg} src={product.productimages[0]} />
										</Box>
									</Link>
									<CardActionArea className={classes.cardbody}>
										<Box className={classes.cardbodytext} style={{ marginTop: '-20px' }}>
											<Link className={classes.link} to={`/ProductPage/${product.productid}`}>
												<Typography variant="h1" className={classes.productname}>
													{product.productname}
												</Typography>
											</Link>
										</Box>
										<Container className={classes.pricebox}>
											<Typography variant="body1" className={classes.saleprice}>
												₹{product.productsaleprice}
											</Typography>
											<Typography variant="body2" className={classes.originprice}>
												₹
												<strike className={classes.originprice}> {product.productprice}</strike>
											</Typography>
										</Container>
									</CardActionArea>
								</Card>
							</Grid>
						);
					})}
			</Grid>

			{/* <div className={classes.grid}>
				<GridList className={classes.gridList} cols={1.7}>
					<GridListTile className={classes.gridcard}>
						<Card elevation={0} className={classes.trendcard}>
							<img className={classes.imgcard} src={imgs} />
							<Typography>bluse</Typography>
						</Card>
					</GridListTile>
					<GridListTile>
						<Card className={classes.trendcard}>
							<img className={classes.imgcard} src={imgs} />
							<Typography>bluse</Typography>
						</Card>
					</GridListTile>
					<GridListTile>
						<Card className={classes.trendcard}>
							<img className={classes.imgcard} src={imgs} />
							<Typography>bluse</Typography>
						</Card>
					</GridListTile>
					<GridListTile>
						<Card className={classes.trendcard}>
							<img className={classes.imgcard} src={imgs} />
							<Typography>bluse</Typography>
						</Card>
					</GridListTile>
				</GridList>
			</div> */}

			{/* <Container className={classes.cardbox}>
				<Card elevation="0" square className={classes.card}>
					<CardMedia component="img" image={imgs} title="" />
					<CardContent>
						<Typography className={classes.name}> blue girl </Typography>

						<Link component={Button} to="/ProductPage/10" className={classes.shopbutton}>
							Shop now
						</Link>
					</CardContent>
				</Card>

				<Card elevation="0" square className={classes.card}>
					<CardMedia component="img" image={imgs} title="" />
					<CardContent>
						<Typography className={classes.name}> blue man </Typography>

						<Link component={Button} to="/ProductPage/10" className={classes.shopbutton}>
							Shop now
						</Link>
					</CardContent>
				</Card>
			</Container> */}

			{/* new one below */}
			{/* <Grid item container xs={12} alignContent="stretch" spacing={2} justify="space-around">
				<Grid item container xs={10} sm={3}>
					<Card elevation={0} square>
						<CardMedia component="img" image={imgs} title="" />
						<CardContent>
							<Typography className={classes.name}> heding </Typography>

							<Link component={Button} to="/ProductPage/1" className={classes.shopbutton}>
								Shop now
							</Link>
						</CardContent>
					</Card>
				</Grid>
				<Grid item container xs={10} sm={3}>
					<Card elevation={0} square>
						<CardMedia component="img" image={imgs} title="" />
						<CardContent>
							<Typography className={classes.name}> heding </Typography>

							<Link component={Button} to="/ProductPage/2" className={classes.shopbutton}>
								Shop now
							</Link>
						</CardContent>
					</Card>
				</Grid>
				<Grid item container xs={10} sm={3}>
					<Card elevation={0} square>
						<CardMedia component="img" image={imgs} title="" />
						<CardContent>
							<Typography className={classes.name}> heding </Typography>

							<Link component={Button} to="/ProductPage/3" className={classes.shopbutton}>
								Shop now
							</Link>
						</CardContent>
					</Card>
				</Grid>
			</Grid> */}
		</Grid>
	);
}
export default Secondpro;
{
	/* <Grid xs={12} sm={12} alignContent="stretch" spacing={5} style={{ backgroundColor: 'red' }}>
				<Grid item container xs={4} sm={4}>
					<Card>
						<CardMedia component="img" image={require('../statics/images/blackdog.jpg')} />
					</Card>
				</Grid>
				<Grid item container xs={4} sm={3}>
					<Card>
						<CardMedia component="img" image={require('../statics/images/blackdog.jpg')} />
					</Card>
				</Grid>
				<Grid item container xs={4} sm={3}>
					<Paper>
						<CardMedia component="img" image={require('../statics/images/blackdog.jpg')} />
					</Paper>
				</Grid>
			</Grid> */
}
