import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
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
// import { customizationContext } from './contexts/CustomizationContext';

import { CustomizationContextProvider } from './contexts/CustomizationContext';
import ScrollToTop from './common/scrolltop';

import { AuthContext } from './auth';
import { useState } from 'react';
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
import Whatsapp from './pages/whatsapp';
import FormalShirts from './pages/Shop/Filters/Formalshirts';
import FilterType from './pages/Shop/Filters/FilterType';
import PrivacyPolicy from './pages/Common/PrivacyPolicy';
import ShippingPolicy from './pages/Common/ShippingPolicy';
import TermsPolicy from './pages/Common/Terms';
import AdminLogin from './pages/Dashboard/adminLogin';
import NotFound from './common/NotFound';

function App() {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem('tokens') || ''
  );
  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        {/* <UserContext.Provider uservalue={uservalue}> */}
        <ProductContextProvider>
          <CustomizationContextProvider>
            <userContext.Provider>
              <ScrollToTop />
              <ToastContainer />
              <Grid container>
                <Switch>
                  <Route path='/Shop'>
                    <Whatsapp />
                    <Header />
                    <Shop />
                    <Footer />
                  </Route>
                  <Route path='/Ordersuccess'>
                    <Ordersuccess />
                  </Route>

                  <Route path='/Aboutus'>
                    <Whatsapp />
                    <Header />
                    <Aboutus />
                    <Footer />
                  </Route>
                  <Route path='/Solids'>
                    <Whatsapp />
                    <Header />
                    <Solids />
                    <Footer />
                  </Route>
                  <Route path='/Checks'>
                    <Whatsapp />
                    <Header />
                    <Checks />
                    <Footer />
                  </Route>
                  <Route path='/Stripes'>
                    <Whatsapp />
                    <Header />
                    <Stripes />
                    <Footer />
                  </Route>
                  <Route path='/Printed'>
                    <Whatsapp />
                    <Header />
                    <Printed />
                    <Footer />
                  </Route>
                  <Route path='/Formal'>
                    <Whatsapp />
                    <Header />
                    <FormalShirts />
                    <Footer />
                  </Route>
                  <Route path='/filterType/:type'>
                    <Whatsapp />
                    <Header />
                    <FilterType />
                    <Footer />
                  </Route>
                  <Route path='/Profile/:tab'>
                    <Header />
                    <Profilepage />
                    <Footer />
                  </Route>

                  <Route path='/Login'>
                    {/* <Header /> */}
                    <Login />
                  </Route>

                  <Route path='/Signup'>
                    {/* <Header /> */}
                    <Registeruser />
                  </Route>
                  <Route path='/Uploadshirt'>
                    <Uploadshirt />
                  </Route>
                  <Route path='/Contact'>
                    <Whatsapp />
                    <Header />
                    <Contact />
                    <Footer />
                  </Route>
                  <Route path='/Getsizes'>
                    <Header />
                    <Getsizes />
                    <Footer />
                  </Route>
                  <Route path='/PrivacyPolicy'>
                    <Whatsapp />
                    <Header />
                    <PrivacyPolicy />
                    <Footer />
                  </Route>
                  <Route path='/ShippingPolicy'>
                    <Whatsapp />
                    <Header />
                    <ShippingPolicy />
                    <Footer />
                  </Route>
                  <Route path='/Terms'>
                    <Header />
                    <TermsPolicy />
                    <Footer />
                    <Whatsapp />
                  </Route>
                  <Route path='/adminLogin'>
                    <AdminLogin />
                  </Route>
                  <Route path='/ProductPage/:id'>
                    <Whatsapp />
                    <Header />
                    <Productpage />
                    <Footer />
                  </Route>
                  <Route path='/Cart'>
                    <Cart />
                  </Route>
                  <Route path='/Customize/:id'>
                    <Customize />
                  </Route>
                  <Route path='/testcartcrud'>
                    <TestCartCrud />
                  </Route>
                  <Route path='/'>
                    <Whatsapp />
                    <Header />
                    <Home />
                    <Footer />
                  </Route>
                  {/* <Route path='/*'>
                    <NotFound />
                  </Route> */}
                </Switch>
              </Grid>
              {/* </UserContext.Provider> */}
            </userContext.Provider>
          </CustomizationContextProvider>
        </ProductContextProvider>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
