import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, Paper, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	main: {
		height: '70vh',
		display: 'flex',
		justifyContent: 'center',
		marginTop: '50px',
		padding: '50px 0 50px 0',
		position: 'relative',
		// alignItems: 'center',
	},
	peoplesaying: {
		color: '#3d3d3d',
		marginBottom: '60px',
		fontSize: '68px',
		fontWeight: 'bold',
		[theme.breakpoints.down('sm')]: {
			fontSize: '34px',
		},
	},
	content: {
		fontSize: '22px',
		color: '#3d3d3d',
	},
	paperbox: {
		width: '80%',
		minHeight: 'fit-content',
		padding: '50px 0px',
		position: 'relative',
		backgroundColor: 'white',
		position: 'relative',
		border: '2px solid #3d3d3d',
		borderRadius: '12px',
		display: 'flex',
		alignItems: 'center',
	},
	cont: {
		// backgroundColor: 'grey',
		height: '400px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatar: {
		height: '90px',
		width: '90px',
		[theme.breakpoints.down('sm')]: {
			height: '70px',
			width: '70px',
		},
	},
	qoutes: {
		height: '80px',
		position: 'absolute',
		top: '-40px',
		left: '40px',
		[theme.breakpoints.down('sm')]: {
			height: '60px',
			top: '-30px',
		},
	},
	testwriter: {
		[theme.breakpoints.down('sm')]: {
			marginTop: '20px',
		},
	},

	justcent: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

function Testimonialsection() {
	const classes = useStyles();
	return (
		<Grid xs={12} className={classes.main}>
			<Grid xs={11} sm={9} className={classes.cont}>
				<Typography variant="body2" className={classes.peoplesaying}>
					What are people saying!
				</Typography>
				<Paper elevation={0} className={classes.paperbox}>
					<img className={classes.qoutes} src={require('./statics/icons/qoutes.svg')} />
					<Grid container xs={12} justify="center">
						<Grid item container xs={10} sm={6}>
							<Typography variant="body2" className={classes.content}>
								The Tailors customization tool is just beyond expectations. Helped me design the shirt I
								wanted in the way I wanted. Looking for quality at an affordable price? Tailors is the
								best place!
							</Typography>
						</Grid>
						<Grid xs={12} sm={1} />
						<Grid
							item
							container
							xs={10}
							sm={4}
							justify="center"
							className={classes.testwriter}
							// justifyContent="center"
							style={{ height: 'fit-content' }}>
							<Grid xs={4} sm={10} className={classes.justcent}>
								<Avatar
									className={classes.avatar}
									src={require('./statics/images/avatr1.jpg')}></Avatar>
							</Grid>
							<Grid xs={7} sm={10} className={classes.justcent}>
								<Typography variant>Rohith Dhanala</Typography>
								<Typography>Founder MaxC</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	);
}
export default Testimonialsection;
