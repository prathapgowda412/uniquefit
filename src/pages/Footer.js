import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import uniquefitlogo from '../logos/Uniquefit logo.svg';

const useStyles = makeStyles((theme) => ({
	footer: {
		minHeight: '400px',
		maxHeight: 'fit-content',
		backgroundColor: '#f2f2f2',
		position: 'relative',
		marginTop: '200px',
	},
	footertop: {
		display: 'flex',
		paddingTop: '50px',
		// justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
	},
	fit: {
		fontWeight: 'bold',
	},
	hashuniquefit: {
		fontWeight: 'bold',
		fontSize: '59px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '40px',
		},
	},
	mediabox: {
		width: '100%',
		position: 'relative',
		marginTop: '50px',
	},
	socialbox: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		padding: '40px 10px',
		'&:hover': {
			color: '#034b46',
		},
	},
	mediaicon: {
		height: '25px',
	},
	sociolink: {
		textDecoration: 'none',
		'&:hover': {
			color: '#034b46',
		},
	},
	foterbotom: {
		minHeight: '250px',
		maxHeight: 'fit-content',
		borderTop: '1.5px solid #CCCCCC',
		paddingTop: '50px',
	},
	listbox: {
		listStyleType: 'none',
	},
	listhead: {
		fontWeight: 'bold',
		marginBottom: '10px',
	},
	logo: {
		height: '120px',
		[theme.breakpoints.down('sm')]: {
			height: '90px',
		},
	},
}));
function Footer() {
	const classes = useStyles();
	return (
		<Grid item container xs={12} direction="row" className={classes.footer} justify="center">
			<Grid item container xs={10} className={classes.footertop}>
				<Typography className={classes.fit} variant="body1">
					Show case your perfect fit!
				</Typography>
				<Typography className={classes.hashuniquefit} variant="h2">
					#MyUniquefit
				</Typography>
				<div className={classes.mediabox}>
					<Grid item container xs={12} alignItems="stretch">
						<Grid item container xs={6} sm={3}>
							{/* <i class="fab fa-facebook-f"></i> */}
							<Paper square elevation={0} className={classes.socialbox}>
								{/* <FontAwesomeIcon style={{ fontSize: '20px' }} icon={facebook-f} /> */}
								<img
									className={classes.mediaicon}
									src={require('../logos/socialicons/facebook-f-brands.svg')}
								/>
								@uniquefit
							</Paper>
						</Grid>
						<Grid item container xs={6} sm={3}>
							{/* <i class="fab fa-facebook-f"></i> */}
							<a className={classes.sociolink} href="https://www.instagram.com/uniquefitindia/?hl=en">
								<Paper square elevation={0} className={classes.socialbox}>
									{/* <FontAwesomeIcon style={{ fontSize: '20px' }} icon={facebook-f} /> */}
									<img
										className={classes.mediaicon}
										src={require('../logos/socialicons/instagram-brands.svg')}
									/>
									@uniquefit
								</Paper>
							</a>
						</Grid>
						<Grid item container xs={6} sm={3}>
							{/* <i class="fab fa-facebook-f"></i> */}
							<Paper square elevation={0} className={classes.socialbox}>
								{/* <FontAwesomeIcon style={{ fontSize: '20px' }} icon={facebook-f} /> */}
								<img
									className={classes.mediaicon}
									src={require('../logos/socialicons/twitter-brands.svg')}
								/>
								@uniquefit
							</Paper>
						</Grid>
						<Grid item container xs={6} sm={3}>
							{/* <i class="fab fa-facebook-f"></i> */}
							<Paper square elevation={0} className={classes.socialbox}>
								{/* <FontAwesomeIcon style={{ fontSize: '20px' }} icon={facebook-f} /> */}
								<img
									className={classes.mediaicon}
									src={require('../logos/socialicons/whatsapp-brands.svg')}
								/>
								123-4564-789
							</Paper>
						</Grid>
					</Grid>
				</div>
			</Grid>
			<Grid item container xs={10} justify="center" className={classes.foterbotom}>
				<Grid item container sm={10} md={5}>
					<img src={uniquefitlogo} className={classes.logo} />
				</Grid>
				<Grid item container justify="center" sm={10} md={6}>
					{/* <Grid item container justify="center" xs={12} sm={6}>
						<Grid item container xs={6}>
							<ul className={classes.listbox}>
								<li className={classes.listhead}> Shop</li>
								<li> Formals</li>
								<li> Casual</li>
								<li> Design shirt</li>
							</ul>
						</Grid>
						<Grid item container xs={6}>
							<ul className={classes.listbox}>
								<li className={classes.listhead}> Shop</li>
								<li> Strips</li>
								<li> Plain</li>
								<li> Design shirt</li>
							</ul>
						</Grid>
					</Grid> */}
					{/* <Grid item container xs={12} sm={6}>
						<Grid xs={6}>
							<ul className={classes.listbox}>
								<li className={classes.listhead}> Shop</li>
								<li> Formals</li>
								<li> Casual</li>
								<li> Design shirt</li>
							</ul>
						</Grid>
						<Grid xs={6}>
							<ul className={classes.listbox}>
								<li className={classes.listhead}> Shop</li>
								<li> Formals</li>
								<li> Casual</li>
								<li> Design shirt</li>
							</ul>
						</Grid>
					</Grid> */}
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Footer;
