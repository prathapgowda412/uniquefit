import { Grid } from '@material-ui/core';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';

import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import About from './pages/About/About';
import Footer from './pages/Footer';
function App() {
	return (
		<Grid xs={12}>
			<Header />

			<Switch>
				<Route path="/shop">
					<Shop />
				</Route>
				<Route path="/About">
					<About />
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
