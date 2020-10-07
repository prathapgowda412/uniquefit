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
} from '@material-ui/core';
import React from 'react';
import { styled } from '@material-ui/core/styles';
import imgs from './statics/images/girlwhite.jpg';
const useStyles = makeStyles({
	root: {
		position: 'relative',
	},
	button: {
		color: 'orange',
	},
	name: {
		color: 'black',
	},
});
const Shopbuton = styled(Button)({
	color: '#387A76',
	fontWeight: 'bold',
});

function Trending() {
	const classes = useStyles();
	return (
		<Grid item container xs={12} style={{ marginTop: '115px' }} className={classes.root}>
			<Container justify="center" alignContent="center" style={{ marginBottom: '35px' }}>
				<Typography variant="h5">Trending</Typography>
			</Container>

			<Grid item container xs={12} alignContent="stretch" spacing={2} justify="space-around">
				<Grid item container xs={10} sm={3}>
					<Card elevation="0" square>
						<CardMedia component="img" image={imgs} title="" />
						<CardContent>
							<Typography className={classes.name}>Mens half Sleeve Suits</Typography>
							<Shopbuton>Shop Now</Shopbuton>
						</CardContent>
					</Card>
				</Grid>
				<Grid item container xs={10} sm={3}>
					<Card elevation="0" square>
						<CardMedia component="img" image={imgs} title="" />
						<CardContent>
							<Typography className={classes.name}>Mens Formal Shirts</Typography>
							<Shopbuton>Shop Now</Shopbuton>
						</CardContent>
					</Card>
				</Grid>
				<Grid item container xs={10} sm={3}>
					<Card elevation="0" square>
						<CardMedia component="img" image={imgs} title="" />
						<CardContent>
							<Typography className={classes.name}>Women Casual Shirts</Typography>
							<Shopbuton>Shop Now</Shopbuton>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Grid>
	);
}
export default Trending;
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
