import React, { useContext } from 'react';
import Firstsec from './components/Firstsec';
import Trending from './components/Trendingproducts';
import Shopfav from './components/shopfavaroite';
import Offerssection from './components/Offerssection';
import Aboutsection from './components/aboutsection';
import { Grid } from '@material-ui/core';
import Welcom from '../welcom';
import Testimonialsection from './components/Testimonial';
import { productContext } from './../../contexts/ProductContext';

function Home() {
	let { products } = useContext(productContext);

	console.log(products);

	return (
		<Grid item container xs={12} justify="center">
			<Firstsec />
			<Trending />
			<Shopfav />
			{/* <Offerssection /> */}
			<Aboutsection />
			{/* <Testimonialsection /> */}
		</Grid>
	);
}
export default Home;
