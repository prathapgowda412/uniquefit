import React from 'react';
import { Box, Button, Link, makeStyles } from '@material-ui/core';

const Styles = makeStyles((theme) => ({
	whatsapp: {
		position: 'fixed',
		bottom: '50px',
		right: '50px',
		zIndex: '1000',
		// backgroundColor: 'red',
	},
}));

function Whatsapp() {
	const classes = Styles();

	const goToWhatsapp = () => {
		// global.window.location.href = 'wa.link/54ag6i';
		// window.location.pathname = 'wa.link/54ag6i';
	};
	// https://wa.link/pyw6h9
	return (
		<Box className={classes.whatsapp}>
			{/* <a href="https://wa.link/pyw6h9"> */}
			<Button onClick={goToWhatsapp}>
				<img height="60px" src={require('../logos/whatsapp.svg')} />
			</Button>
			{/* </a> */}
		</Box>
	);
}

export default Whatsapp;
