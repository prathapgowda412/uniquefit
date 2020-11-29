import { Grid } from '@material-ui/core';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { getProducts } from './services/fetchService';

import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Footer from './pages/Footer';
import Aboutus from './pages/About/AboutUs';
import Productpage from './pages/Productpage/Productpage';
import Login from './pages/sign/Login';
import Profilepage from './pages/Profilepage/Profilepage';
import './css/scrollbar.css';
import Header from './pages/Header';
import Cart from './pages/cart/Cartpage';
import Customize from './pages/customize/customize';
import Registeruser from './pages/sign/register';
import { ProductContextProvider } from './contexts/ProductContext';

import ScrollToTop from './common/scrolltop';

import { Provider } from 'react-redux';
import { AuthContext } from './auth';
import { useMemo, useState } from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import Getsizes from './pages/getsizes/getsizes';
import { ToastContainer } from 'react-toastify';
import TestCartCrud from './pages/TestCartCrud';
import Uploadshirt from './pages/contact/uploadshirt';
import Contact from './pages/contact/contact';
import Ordersuccess from './pages/cart/Ordersuccess';
import Solids from './pages/Shop/Filters/Solids';
import Checks from './pages/Shop/Filters/Checks';
import Stripes from './pages/Shop/Filters/Stripes';
import Printed from './pages/Shop/Filters/Printed';
import { userContext } from './contexts/UserContext';

function App() {
	const [authTokens, setAuthTokens] = useState(localStorage.getItem('tokens') || '');
	const setTokens = (data) => {
		localStorage.setItem('tokens', JSON.stringify(data));
		setAuthTokens(data);
	};
	return (
		<BrowserRouter>
			<AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
				{/* <UserContext.Provider uservalue={uservalue}> */}
				<ProductContextProvider>
					<userContext.Provider>
						<ScrollToTop />
						<ToastContainer />
						<Grid container item xs={12}>
							<Switch>
								<Route path="/Shop">
									<Header />
									<Shop />
									<Footer />
								</Route>
								<Route path="/Ordersuccess">
									<Ordersuccess />
								</Route>

								<Route path="/Aboutus">
									<Header />
									<Aboutus />
									<Footer />
								</Route>
								<Route path="/Solids">
									<Header />
									<Solids />
									<Footer />
								</Route>
								<Route path="/Checks">
									<Header />
									<Checks />
									<Footer />
								</Route>
								<Route path="/Stripes">
									<Header />
									<Stripes />
									<Footer />
								</Route>
								<Route path="/Printed">
									<Header />
									<Printed />
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
									<Registeruser />
								</Route>
								<Route path="/Uploadshirt">
									<Uploadshirt />
								</Route>
								<Route path="/Contact">
									<Header />
									<Contact />
									<Footer />
								</Route>
								<Route path="/Getsizes">
									<Header />
									<Getsizes />
									<Footer />
								</Route>

								<Route path="/Dashboard">
									<Dashboard />
								</Route>
								<Route path="/ProductPage/:id">
									<Header />
									<Productpage />
									<Footer />
								</Route>
								<Route path="/Cart">
									<Cart />
									{/* <Header />
								<Footer /> */}
								</Route>
								<Route path="/Customize/:id">
									<Customize />
								</Route>
								<Route path="/testcartcrud">
									<TestCartCrud />
								</Route>
								<Route path="/">
									<Header />
									<Home />
									<Footer />
								</Route>
							</Switch>
						</Grid>
						{/* </UserContext.Provider> */}
					</userContext.Provider>
				</ProductContextProvider>
			</AuthContext.Provider>
		</BrowserRouter>
	);
}

export default App;
// <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_G5cN9Y43rGcXRK"> </script> </form>
