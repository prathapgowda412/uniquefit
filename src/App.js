import { Grid } from '@material-ui/core';
import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
// import About from './pages/About/About';
import Footer from './pages/Footer';
import Aboutus from './pages/About/AboutUs';
import Welcom from './pages/welcom';
import Productpage from './pages/Productpage/Productpage';
import Signup from './pages/sign/SignUp';
import Login from './pages/sign/Login';
import Profilepage from './pages/Profilepage/Profilepage';
import Product from './pages/Shop/Product';
import './css/scrollbar.css';
// import Main from './pages/Main/Main';
import Header from './pages/Header';
import Cart from './pages/cart/Cartpage';
import Customize from './pages/customize/customize';

function App() {
	return (
		<Grid container item xs={12}>
			<Switch>
				<Route path="/Shop">
					<Header />
					<Shop />
					<Footer />
				</Route>
				<Route path="/Aboutus">
					<Header />
					<Aboutus />
					<Footer />
				</Route>
				<Route path="/Profile">
					<Header />
					<Profilepage />
					<Footer />
				</Route>

				<Route path="/Login">
					<Login />
				</Route>
				<Route path="/Signup">
					<Signup />
				</Route>
				<Route path="/ProductPage/:id">
					<Header />
					<Productpage />
					<Footer />
				</Route>
				<Route path="/Cart">
					<Header />
					<Cart />
					<Footer />
				</Route>
				<Route path="/Customize/:id">
					<Customize />
				</Route>

				<Route path="/">
					<Header />
					<Home />
					<Footer />
				</Route>
			</Switch>
		</Grid>
	);
}

export default App;
