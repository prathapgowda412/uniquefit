import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, Grid, Typography, Box, CardMedia, Paper, Button, Hidden, Container } from '@material-ui/core';
// import { sizing, width } from "@material-ui/system";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import WhatsAppIcon from "@material-ui/icons/WhatsApp";
// import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: 'white',
	},
	brandForeHeading: {
		fontFamily: 'Merriweather',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '16px',
		lineHeight: '30px',
		display: 'flex',
		alignItems: 'center',
		letterSpacing: '0.1em',
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px',
			lineHeight: '20px',
			letterSpacing: '0.04em',
		},
	},
	foreHeadingLine: {
		width: '170px',
		height: '7px',
		background: '#FF3508',
		[theme.breakpoints.down('sm')]: {
			width: '67px',
		},
	},
	brandHeading: {
		fontFamily: 'Lora',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '80px',
		lineHeight: '102px',
		display: 'flex',
		alignItems: 'center',
		marginTop: '3.25rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '56px',
			lineHeight: '62px',
			letterSpacing: '0.04em',
			marginTop: '1.5rem',
		},
	},
	brandSubHeading: {
		fontFamily: 'Merriweather',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '18px',
		lineHeight: '35px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px',
			lineHeight: '20px',
			letterSpacing: '0.02em',
		},
	},
	about: {
		fontFamily: 'Lora',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '56px',
		lineHeight: '72px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '20px',
			lineHeight: '20px',
			letterSpacing: '0.04em',
		},
	},
	aboutLine: {
		width: '170px',
		height: '7px',
		margin: 'auto',
		backgroundColor: '#CADFC7',
		[theme.breakpoints.down('sm')]: {
			width: '67px',
		},
	},
	simpleBackground: {
		position: 'absolute',
		width: '505px',
		height: '765px',
		left: '0px',
		top: '815px',
		background: '#CADFC7',
	},
	aboutText: {
		fontFamily: 'Merriweather',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '20px',
		lineHeight: '45px',
		display: 'flex',
		alignItems: 'center',
		letterSpacing: '0.03em',
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px',
			lineHeight: '20px',
		},
	},
	viewButton: {
		backgroundColor: '#363636',
		borderRadius: '5px',
		color: '#fff',
		paddingTop: '1.25rem',
		paddingBottom: '1.25rem',
		marginTop: '2rem',
		marginBottom: '2rem',
		[theme.breakpoints.down('sm')]: {
			marginTop: '1rem',
			marginBottom: '1rem',
			paddingTop: '1rem',
			paddingBottom: '1rem',
		},
	},
	viewButtonText: {
		fontFamily: 'Merriweather',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '20px',
		lineHeight: '45px',
		letterSpacing: '0.03em',
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px',
			lineHeight: '20px',
			letterSpacing: '0.02em',
		},
	},
	followQuote: {
		fontFamily: 'Merriweather',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '16px',
		lineHeight: '45px',
		letterSpacing: '0.1em',
		paddingTop: '3.25rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '10px',
			lineHeight: '20px',
			letterSpacing: '0.1em',
		},
	},
	followHeading: {
		fontFamily: 'Merriweather',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '56px',
		lineHeight: '45px',
		letterSpacing: '0.03em',
		marginTop: '1rem',

		marginBottom: '4rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '36px',
			lineHeight: '20px',
			letterSpacing: '0.02em',
		},
	},
	followTag: {
		fontFamily: 'Merriweather',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '16px',
		lineHeight: '45px',
		letterSpacing: '0.03em',
	},
	abtsecondimg: {
		// height: '540px',
		width: '80%',
		position: 'relative',
	},
	followIcon: {},
	measure: {
		fontFamily: 'Lora',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: '32px',
		lineHeight: '140.62%',
		[theme.breakpoints.down('sm')]: {
			fontSize: '24px',
		},
	},
}));

function AboutUs() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="xl" className={classes.root}>
				<Box
					pt={17}
					component="div"
					style={{
						height: '90vh',
					}}>
					{/* <Box > */}
					<Grid container>
						<Grid container item sm={12} md={1}></Grid>
						<Grid
							container
							item
							//   direction="column"
							//   justify="space-evenly"
							alignItems="flex-start"
							sm={12}
							md={10}>
							<Grid item sm={12} md={9}>
								<Typography variant="body1" className={classes.brandForeHeading} color="initial">
									BASED IN HYDERABAD, WORKING ON EXPANDING INTERNATIONALLY
								</Typography>
								<Box mt={2}>
									<Typography variant="body1" className={classes.foreHeadingLine}></Typography>
								</Box>
								<Typography variant="h2" className={classes.brandHeading} color="initial">
									We are UniqueFit
								</Typography>
								<Box my={2}>
									<Typography variant="body1" className={classes.brandSubHeading}>
										A young and energetic, Hyderabad based ecommerce company who’ s <br /> primary
										focus is to provide high quality clothing at very affordable prices.
									</Typography>
								</Box>
							</Grid>
							<Grid item sm={12} md={3}></Grid>
						</Grid>
						<Grid container item sm={12} md={1}></Grid>
					</Grid>
				</Box>
				<Box>
					<Grid container>
						<Grid item sm={12} md={1}></Grid>
						<Grid item sm={12} md={10}>
							<Box mt={3}>
								<Typography variant="h3" className={classes.about} align="center">
									It all started like this
								</Typography>
							</Box>
							{/* <Box className={classes.simpleBackground}>

              </Box> */}
							<Box mt={2}>
								<Typography variant="body1" className={classes.aboutLine}></Typography>
							</Box>
							<Box my={7}>
								<Grid container>
									<Grid item sm={12} md={6}>
										<Box my={2}>
											<Typography variant="body1" className={classes.aboutText}>
												It was about time to bring about changes in the way people dressed.To
												put a full stop to clothings which didn’ t bother about the fit.To
												finally bid adeu to the countless attempts at returning the readymade
												clothing as they didn’ t give you the perfect fit.
											</Typography>
										</Box>
										<Box my={3}>
											<Typography variant="body1" className={classes.aboutText}>
												There’s a limit to how much “you” is reflected in ready to buy clothes.
												But custom made clothing allows you to bring out more individuality.
												Thus, this concept gave rise to UniqueFit as we are determined to help
												you achieve the perfect fit you are looking for.
											</Typography>
										</Box>
										{/* <Box>
											<Button
												variant="contained"
												size="large"
												className={classes.viewButton}
												fullWidth>
												<Typography variant="body1" className={classes.viewButtonText}>
													View our products
												</Typography>
											</Button>
										</Box> */}
									</Grid>
									<Grid
										item
										sm={12}
										md={6}
										style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										{/* <Typography variant="h1">Hello</Typography> */}
										<img
											className={classes.abtsecondimg}
											src={require('./images/aboutsecond.png')}
										/>
									</Grid>
								</Grid>
							</Box>
						</Grid>
						<Grid item sm={12} md={1}></Grid>
					</Grid>
				</Box>
				{/* <Box component="div" style={{ backgroundColor: '#f2f2f2' }}> */}
				{/* <Box>
						<Typography variant="body1" align="center" className={classes.followQuote}>
							Show case your perfect fit!
						</Typography>
					</Box> */}
				{/* <Box>
						<Typography variant="h2" align="center" className={classes.followHeading}>
							#MyUniquefit
						</Typography>
					</Box> */}
				{/* <Box
						display="flex"
						flexDirection="row"
						my={6}
						py={4}
						alignItems="center"
						justifyContent="space-evenly">
						<Box>
							<InstagramIcon fontSize="large" />
							<Hidden smDown>
								<Typography variant="body1" className={classes.followTag}>
									@Uniquefit
								</Typography>
							</Hidden>
						</Box> */}
				{/* <Box> */}
				{/* <FacebookIcon fontSize="large" className={classes.followIcon} /> */}
				{/* <Hidden smDown>
								<Typography variant="body1" className={classes.followTag}>
									/Uniquefit
								</Typography>
							</Hidden>
						</Box> */}
				{/* <Box>
							<TwitterIcon fontSize="large" />
							<Hidden smDown>
								<Typography variant="body1" className={classes.followTag}>
									#Uniquefit
								</Typography>
							</Hidden>
						</Box> */}
				{/* <Box>
							<WhatsAppIcon fontSize="large" />
							<Hidden smDown>
								<Typography variant="body1" className={classes.followTag}>
									1800 123 456
								</Typography>
							</Hidden>
						</Box> */}
				{/* </Box> */}
				{/* <Box mt={15}>
						<Box display="flex" flexDirection="row">
							<Box>
								<Typography variant="h5" className={classes.measure}>
									Ready to get started ?
								</Typography>
							</Box>
						</Box>
					</Box> */}
				{/* </Box> */}
			</Container>
		</React.Fragment>
	);
}

export default AboutUs;
