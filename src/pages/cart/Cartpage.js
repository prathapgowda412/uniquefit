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
} from '@material-ui/core';
import { getCartItems } from '../../services/fetchService';

import itemimg from '../Home/components/statics/images/girl.jpg';
const Styles = makeStyles({
	root: {
		// backgroundColor: 'grey',
	},

	cont: {
		backgroundColor: '#f2f2f2',
		height: '200px',
		width: '100%',
	},
	removebutton: {
		backgroundColor: 'red',
		float: 'right',
	},
	cartbox: {
		backgroundColor: '#f9f9f9',
		minHeight: '100px',
		maxHeight: 'fit-content',
		marginTop: '50px',
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
		backgroundColor: '#dcd',
		marginTop: '20px',
	},
	itemcard: {
		width: '90%',
		minHeight: 'fit-content',
		marginTop: '10px',
		// boxShadow: '0px 1px 10px -5px solid black',
		border: '1.5px solid #52525275',
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
});

// export class Cartpage extends Component {

//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

// export default Cartpage;

function Cartpage() {
	let [cartItems, setCartItems] = useState();

	useEffect(() => {
		getCartItems().then(({ data }) => {
			const cartIts = data.cartItems;
			setCartItems(cartIts);
			console.log(cartIts);
			console.log(cartIts.items);
		});
	}, []);

	const classes = Styles();
	return (
		<Grid item container xs={12} className={classes.root} justify="center">
			<Box className={classes.cont}>
				<Typography variant="h3" align="center">
					Cart Page
				</Typography>
			</Box>
			<Grid item container xs={12} sm={10} className={classes.cartbox} justify="center">
				<Grid item container xs={12} sm={7} className={classes.leftbox} justify="center">
					<Card elevation square className={classes.itemcard}>
						<CardContent className={classes.cardcontent}>
							<Paper elevation className={classes.cardpaper}>
								<img className={classes.itemimg} src={itemimg} />
								<Box className={classes.papercontent}>
									<Container className={classes.papercontainer}>
										<Typography variant="h3">light bue shirt</Typography>
										<Typography>price : 1299</Typography>
										Quantitiy :
									</Container>
								</Box>
							</Paper>
						</CardContent>
						<CardActions className={classes.actioncard}>
							<Button className={classes.removebutton} size="medium">
								Remove
							</Button>
						</CardActions>
					</Card>
					<Card className={classes.itemcard}>
						<CardContent className={classes.cardcontent}>
							<Paper elevation className={classes.cardpaper}></Paper>
						</CardContent>
						<CardActions className={classes.actioncard}>
							<Button className={classes.removebutton} size="medium">
								Remove
							</Button>
						</CardActions>
					</Card>
					<Card className={classes.itemcard}>
						<CardContent className={classes.cardcontent}>
							<Paper elevation className={classes.cardpaper}></Paper>
						</CardContent>
						<CardActions className={classes.actioncard}>
							<Button className={classes.removebutton} size="medium">
								Remove
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item container xs={10} sm={5} className={classes.rightbox}></Grid>
			</Grid>
		</Grid>
	);
}

export default Cartpage;
