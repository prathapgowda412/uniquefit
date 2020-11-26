import { Grid } from '@material-ui/core';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { getProducts } from './services/fetchService';

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
import Registeruser from './pages/sign/register';
import { ProductContextProvider } from './contexts/ProductContext';

// import { BrowserRouter } from 'react-router-dom';

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
					<ScrollToTop />
					<ToastContainer />
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
							{/* <Route path="/Signup">
					<Signup />
				</Route> */}
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
				</ProductContextProvider>
			</AuthContext.Provider>
		</BrowserRouter>
	);
}

export default App;
