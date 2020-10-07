import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	main: {
		height: '70vh',
		backgroundColor: 'red',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	poeplesaying: {
		color: 'white',
	},
}));

function Testimonialsection() {
	const classes = useStyles();
	return (
		<Grid xs={12} className={classes.main}>
			<Container>
				<Typography variant="body2" className={classes.poeplesaying}>
					What are People saying!
				</Typography>
			</Container>
		</Grid>
	);
}
export default Testimonialsection;
