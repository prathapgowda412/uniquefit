import React from 'react';
import Firstsec from './components/Firstsec';
import Trending from './components/Trendingproducts';
import Shopfav from './components/shopfavaroite';
import { Grid } from '@material-ui/core';
// import Uploadhome from './components/UploadHome';
import UploadHome from './components/UploadHome';
// import { Category } from '@material-ui/icons';
import Categorysec from './components/Categorysec';
import Secondpro from './components/Secondpro';
import Somesec from './components/Somesec';
import ThirdProducts from './components/ThirdProducts';
function Home() {
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
