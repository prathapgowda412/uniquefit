import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	main: {
		backgroundColor: 'lightblue',
		height: '500px',
	},
}));

function Getsizes() {
	const classes = useStyles();
	return <Grid xs={12} className={classes.main}></Grid>;
}

export default Getsizes;
