import { Grid } from '@material-ui/core';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';

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
function App() {
	return (
		<Grid xs={12}>
			<Header />

			<Switch>
				<Route path="/Shop">
					<Shop />
				</Route>
				<Route path="/Aboutus">
					<Aboutus />
				</Route>
				<Route path="/Profile">
					<Profilepage />
				</Route>

				<Route path="/Login">
					<Login />
				</Route>
				<Route path="/Signup">
					<Signup />
				</Route>
				<Route path="/ProductPage/:id">
					<Productpage />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
			<Footer />
		</Grid>
	);
}

export default App;
