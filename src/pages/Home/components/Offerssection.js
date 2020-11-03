import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import { Grid, Card, CardMedia, Typography, Box, Button } from '@material-ui/core';
import oferimg from './statics/images/mancolor.jpg';
const useStyles = makeStyles((theme) => ({
	main: {
		marginTop: '100px',
		position: 'relative',
	},
	card: {
		maxHeight: '450px',
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'center',
	},
	offerbox: {
		position: 'absolute',
		paddingLeft: '4%',
	},
	offertext: {
		fontWeight: 'bold',
		fontSize: '35px',
		color: 'white',
	},
}));

const Customizebutton = styled(Button)({
	backgroundColor: 'white',
	padding: '8px 16px',
	borderRadius: '5px',
	color: '#387A76',
});

function Offerssection() {
	const classes = useStyles();
	return (
		<Grid item container xs={12} alignContent="stretch" className={classes.main}>
			<Grid item container xs={12} sm={6}>
				<Card elevation={0} square className={classes.card}>
					<CardMedia component="img" image={oferimg} title="" />
					<Box className={classes.offerbox}>
						<Typography variant="body1" className={classes.offertext}>
							50% off on casual shirts
						</Typography>
						<Customizebutton>Customize now</Customizebutton>
					</Box>
				</Card>
			</Grid>
			<Grid item container xs={12} sm={6}>
				<Card elevation={0} square className={classes.card}>
					<CardMedia component="img" image={oferimg} title="" />
					<Box className={classes.offerbox}>
						<Typography variant="body1" className={classes.offertext}>
							50% off on Formal shirts
						</Typography>
						<Customizebutton>Customize now</Customizebutton>
					</Box>
				</Card>
			</Grid>
			<Grid item container xs={12} sm={6}>
				<Card elevation={0} square className={classes.card}>
					<CardMedia component="img" image={oferimg} title="" />
					<Box className={classes.offerbox}>
						<Typography variant="body1" className={classes.offertext}>
							50% off on Suits
						</Typography>
						<Customizebutton>Customize now</Customizebutton>
					</Box>
				</Card>
			</Grid>
			<Grid item container xs={12} sm={6}>
				<Card elevation={0} square className={classes.card}>
					<CardMedia component="img" image={oferimg} title="" />
					<Box className={classes.offerbox}>
						<Typography variant="body1" className={classes.offertext}>
							50% off on women shirts
						</Typography>
						<Customizebutton>Customize now</Customizebutton>
					</Box>
				</Card>
			</Grid>
		</Grid>
	);
}
export default Offerssection;
