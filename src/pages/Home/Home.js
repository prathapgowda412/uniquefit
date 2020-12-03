import React, { useContext, useEffect } from 'react';
import Firstsec from './components/Firstsec';
import Trending from './components/Trendingproducts';
import Shopfav from './components/shopfavaroite';
import Offerssection from './components/Offerssection';
import Aboutsection from './components/aboutsection';
import { Grid } from '@material-ui/core';
import Welcom from '../welcom';
import Testimonialsection from './components/Testimonial';
import { productContext } from './../../contexts/ProductContext';
// import Uploadhome from './components/UploadHome';
import UploadHome from './components/UploadHome';
// import { Category } from '@material-ui/icons';
import Categorysec from './components/Categorysec';
import Secondpro from './components/Secondpro';
import Somesec from './components/Somesec';
import ThirdProducts from './components/ThirdProducts';
function Home() {
	let { products } = useContext(productContext);

	console.log(products);

	return (
		<Grid item container xs={12} justify="center">
			<Firstsec />
			<Trending />
			{/* <UploadHome /> */}
			<UploadHome />
			<Categorysec />
			<Shopfav />
			<Secondpro />
			{/* <Offerssection /> */}
			{/* <Aboutsection /> */}
			{/* <Testimonialsection /> */}
			<Somesec />
			<ThirdProducts />
		</Grid>
	);
}
export default Home;
