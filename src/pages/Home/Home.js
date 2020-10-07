import React from 'react';
import Firstsec from './components/Firstsec';
import Trending from './components/Trendingproducts';
import Shopfav from './components/shopfavaroite';
import Offerssection from './components/Offerssection';
import Aboutsection from './components/aboutsection';
import { Grid } from '@material-ui/core';

function Home() {
	return (
		<Grid container xs={12} justify="center">
			<Firstsec />
			<Trending />
			<Shopfav />
			<Offerssection />
			<Aboutsection />
		</Grid>
	);
}
export default Home;
