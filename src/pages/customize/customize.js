import {
  Grid,
  Hidden,
  Box,
  Paper,
  Typography,
  Button,
  Divider,
  Container,
  AppBar,
} from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Tab, Tabs } from 'react-tabs';

import './style.css';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';

import collars from './data/collar.json';
import frontt from './data/front.json';
import Butoons from './data/buttons.json';
import sleevecuffss from './data/sleevecuffs.json';
import pocket from './data/pocket.json';
import collarstiffness from './data/collarstiffness.json';
import buttonthread from './data/thread.json';
import back from './data/back.json';
import backbottom from './data/backbottom.json';
import { Link, Redirect, useHistory, useParams } from 'react-router-dom';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Axios from 'axios';
import { PaletteRounded } from '@material-ui/icons';
import { addToCart } from '../../services/fetchService';
import { toast } from 'react-toastify';
import { productContext } from '../../contexts/ProductContext';
import { width } from '@material-ui/system';

const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f0f5ff',
    height: '100vh',
    position: 'relative',
  },
  topbar: {
    height: '12%',
    backgroundColor: '#F0F5FF',
  },
  logobox: {
    backgroundColor: '#28334B',
    height: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: '55px',
  },
  tablink: {
    backgroundColor: '#f2f2f2',
    margin: '10px 0',
    color: '#111',
    width: '75%',
    borderRadius: '5px',
    '&:active': {
      backgroundColor: '#fff',
    },
  },
  botombox: {
    backgroundColor: '#f0f5ff',
    height: '88%',
    position: 'relative',
  },
  typepanel: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    overflowY: 'scroll',
    // backgroundColor: '#fff',
  },
  typeimage: {
    // height: '80px',
    width: '80%',
  },
  buttonimage: {
    height: '40px',
  },
  rightpane: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflowY: 'scroll',
    // backgroundColor: 'purple',
  },
  divider: {
    height: '2px',
    margin: '25px 0',
    backgroundColor: 'grey',
  },
  typepaper: {
    display: 'flex',
    flexDirection: 'column',
    transition: '0.3s',
    alignItems: 'center',
    marginBottom: '10px',
    justifyContent: 'space-between',
    marginTop: '10px',
    marginLeft: '5px',
    transition: '0.3s',
    height: '130px',
    // height: 'fit-content',
    width: '110px',
    // minWidth: '140px',
    // maxWidth: 'fit-content',
    backgroundColor: '#fff',
    padding: '5px ',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  mobtypepaper: {
    display: 'flex',
    flexDirection: 'column',
    transition: '0.3s',
    alignItems: 'center',
    marginBottom: '10px',
    justifyContent: 'space-between',
    marginTop: '5px',
    marginLeft: '5px',
    transition: '0.3s',
    height: '150px',
    width: '140px',
    // minWidth: '130px',
    // maxWidth: '140px',
    backgroundColor: '#fff',
    padding: '5px ',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  buttonpaper: {
    width: '90px',
    // minWidth: '80px',
    // maxWidth: 'fit-content',
    margin: '5px 6px',
    padding: '4px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mobmain: {
    height: '100vh',
    backgroundColor: '#f0f5ff',
  },
  addtocartbutton: {
    backgroundColor: '#387A76',
  },
  aaddtontext: {
    color: 'white',
  },
  mobtabs: {
    height: '100%',
    position: 'relative',
    width: 'fit-content',
    // overflowX: 'scroll',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: '20px 20px 0 0',
  },
  mobtablink: {
    height: '90px',
    width: '120px',
    transition: '0.5s',
    color: 'white',
    backgroundColor: '#f2f2f2',
  },
  bigimagecont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bckgroundColor: '#f2f2f2',
  },
  bigimage: {
    width: '50%',
    height: '80%',
    objectFit: 'contain',
    bckgroundColor: '#f2f2f2',
  },
  addcartbutton: {
    color: 'white',
    // padding: '8px 16px',
    height: '44px',
    width: '139px',
    backgroundColor: '#28334B',
    '&:hover': {
      backgroundColor: '#253049',
    },
  },
  productname: {
    fontSize: '24px',
    color: '#282c3f',
    fontWeight: '500',
  },
  adbutontext: {
    fontSize: '15px',
    color: 'black',
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: 'white',
  },
  customappmob: {
    padding: '0 16px',
    height: '8vh',
    backgroundColor: '#28334B',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {},
  variation: {
    color: '#303030',
    fontSize: '18px',
  },
}));

// tabs handling functions below
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
// tabs handling functions above

// main functin here

function Customize() {
  const classes = styles();
  const { id } = useParams();

  // product from content below
  const { products, setProducts: setproducts } = useContext(productContext);
  const [product, setproduct] = React.useState([]);

  const [productimages, setproductimages] = React.useState([]);
  // console.log(id);

  useEffect(() => {
    if (products.length) {
      console.log(products[0].productimages);
    }
    setproduct(
      products.find((product) => {
        console.log(product.productid);
        return product.productid === id;
      })
    );
    console.log(product);
  }, [products]);
  // product from content above

  // const [product, setproduct] = React.useState();

  // useEffect(() => {
  // 	const config = {
  // 		headers: {
  // 			'Content-Type': 'application/json',
  // 			'x-productid': id,
  // 		},
  // 	};
  // 	Axios.get('http://45.13.132.188:5000/products/getproduct-byid', config)
  // 		.then((resp) => {
  // 			const response = resp;
  // 			// console.log(resp);
  // 			// console.log(resp.data);
  // 			setproduct(resp.data);
  // 			console.log(product);

  // 			try {
  // 			} catch (err) {
  // 				console.log(err);
  // 			}
  // 		})
  // 		.catch((err) => {
  // 			console.log(err);
  // 		});
  // }, []);

  // collar value change handling below
  const [collarnamevalue, setcollarnameValue] = React.useState('');
  const [collarimage, setcollarimage] = React.useState('');
  const [collarstiff, setcollarstiffness] = React.useState('');
  // let collarname = '';
  const handlecollarChange = (event) => {
    // collarname = event.value;
    setcollarnameValue(event.target.value);
    setcollarimage(event.target.image);
    console.log(collarimage);
    console.log(collarnamevalue);

    // customizedproduct[0].collarname=
  };
  const handlecollarstiffnesschange = (event) => {
    setcollarstiffness(event.target.value);
  };
  // collar value change handling above

  // sleevecuff value change handling below
  const [sleevecuffvalue, setsleevecuffValue] = React.useState('');
  const [cuffstiff, setcuffstiff] = React.useState('');
  const handlesleevecuffChange = (event) => {
    setsleevecuffValue(event.target.value);
  };

  const handlesleevecuffstiffness = (event) => {
    setcuffstiff(event.target.value);
  };
  // sleevecuff value change handling above

  // butoons  value change handling below
  const [butoonvalue, setbutoonvalue] = React.useState('');
  const [buttonthreadvalue, setbuttonthreadvalue] = React.useState('');
  const handlebutoonChange = (event) => {
    setbutoonvalue(event.target.value);
  };
  const handlebuttonthread = (event) => {
    setbuttonthreadvalue(event.target.value);
  };
  // butoons  value change handling above

  // butoons  value change handling below
  const [frontvalue, setfrontvalue] = React.useState('');
  const handlefrontChange = (event) => {
    setfrontvalue(event.target.value);
  };
  // butoons  value change handling above

  //pocket handling
  const [pocketvalue, setpocketvalue] = React.useState('');
  const handlepocketchange = (event) => {
    setpocketvalue(event.target.value);
  };

  // back and bac bottom hanfling below
  const [backvalue, setbackvalue] = React.useState('');
  const [backbottomvalue, setbackbottomvalue] = React.useState('');
  const handlebackchange = (event) => {
    setbackvalue(event.target.value);
  };
  const handlebackbottomchange = (event) => {
    setbackbottomvalue(event.target.value);
  };
  // back and bac bottom hanfling above
  const history = useHistory();
  // tabs handling below
  const [tabvalue, settabValue] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    settabValue(newValue);
  };
  // tabs handling top
  // customized total product below

  // gettinf single product below
  // const { products, setProducts: setproducts } = useContext(productContext);
  // const [singleproduct, setsingleproduct] = React.useState([]);
  // useEffect(() => {
  // 	if (products.length) {
  // 		console.log(products[0].productimages);
  // 	}
  // 	setproduct(
  // 		products.find((product) => {
  // 			console.log(product.productid);
  // 			return product.productid === id;
  // 		})
  // 	);
  // 	console.log(singleproduct);
  // }, [products]);
  // gettinf single product above

  const hancleclickcart = async () => {
    // toast('clicked butn');
    if (localStorage.getItem('usertoken') == '') {
      history.push('/Login');
      toast('please login to add to cart');
      // <Redirect to="Login" />;
    }

    // const {productid, productname, productprice, productsaleprice, productmaterial, productcolor, productpattern, productdesc, producttype, productoccassion, productfeel, productimages} = product
    // const productc = {
    // 	productid: product.productid,
    // 	productname: screen,
    // 	productprice: screen,
    // 	productsaleprice: jn,
    // 	productmaterial: df,
    // 	productcolor: color,
    // 	productpattern: patenrb,
    // 	productdesc: desc,
    // 	producttype: type,
    // 	productoccassion: ocasion,
    // 	productfeel: frameElement,
    // 	productimages: img,
    // };

    const productc = { ...product };

    let customisations = {
      collar: {
        name: collarnamevalue,
      },
      collarstiff: {
        name: collarstiff,
      },
      cuffs: {
        name: sleevecuffvalue,
      },
      cuffstiff: {
        name: cuffstiff,
      },
      button: {
        name: butoonvalue,
      },
      buttontherad: {
        name: buttonthreadvalue,
      },
      front: {
        name: frontvalue,
      },
      pocket: {
        name: pocketvalue,
      },
      back: {
        name: backvalue,
      },
      backbottom: {
        name: backbottomvalue,
      },
    };

    productc.customisations = customisations;

    delete productc._id;
    delete productc.__v;

    // customproduct={
    // 	productid: cd,
    // 	productname: screen,
    // 	productprice: screen,
    // 	productsaleprice: jn,
    // 	productmaterial: df,
    // 	productcolor: color,
    // 	productpattern: patenrb,
    // 	productdesc: desc,
    // 	producttype: type,
    // 	productoccassion: ocasion,
    // 	productfeel: frameElement,
    // 	productimages: img,
    // 	customisations:
    // }
    // const cartproduct = {
    // 	userId: userid,
    // 	items: customproduct,
    // };

    // console.log(productc);
    const { data: response } = await addToCart(productc);
    toast(response.message);
    console.log(response);
    if (response.message == 'Product added to cart successfully') {
      history.push('/Cart');
    }
  };

  return (
    <>
      {/* this is is for desktop tool below */}
      <Hidden smDown>
        <Grid item container xs={12} className={classes.root}>
          <Grid
            item
            container
            xs={12}
            alignItems='center'
            className={classes.topbar}
          >
            <Grid item xs={2} className={classes.logobox}>
              <Link to='/'>
                <img
                  className={classes.logo}
                  src={require('../../logos/uniquefitlogowhite.svg')}
                />
              </Link>
            </Grid>
            <Grid item xs={7}>
              {/* {productdetail.map((singleproduct) => {
								return (
									<div key={singleproduct.productid}>
										<Typography> {singleproduct.name} </Typography>
									</div>
								);
							})} */}
              <Container>
                {product && product.productimages ? (
                  <>
                    <Typography
                      className={classes.productname}
                      key={product.productid}
                    >
                      {product.productname}
                    </Typography>
                    {/* <br /> */}
                    <Typography style={{ color: '#282c3f' }}>
                      {product.productsaleprice}
                    </Typography>
                  </>
                ) : (
                  '.. . .'
                )}
              </Container>
            </Grid>
            <Grid item xs={3} justify='center'>
              <Button
                className={classes.addtocartbutton}
                onClick={hancleclickcart}
              >
                <Typography className={classes.aaddtontext}>
                  Add to Cart
                </Typography>
              </Button>
              {/* <Button className={classes.addcartbutton}>
								<Typography className={classes.adbutontext}>Go to Cart</Typography>
							</Button> */}
            </Grid>
          </Grid>
          <Grid item container xs={12} className={classes.botombox}>
            {/* left type selection tab below */}
            <Grid
              item
              container
              justify='center'
              sm={2}
              style={{ backgroundColor: '#28334B', height: '100%' }}
            >
              <Tabs
                indicatorColor='none'
                orientation='vertical'
                value={tabvalue}
                onChange={handleTabChange}
                aria-label='Vertical tabs example'
                className={classes.tabs}
              >
                <Tab
                  className={classes.tablink}
                  label='Collar'
                  {...a11yProps(0)}
                ></Tab>
                <Tab
                  className={classes.tablink}
                  label='Hand Cuffs'
                  {...a11yProps(1)}
                />
                <Tab
                  className={classes.tablink}
                  label='Button & Thread'
                  {...a11yProps(2)}
                />
                <Tab
                  className={classes.tablink}
                  label='Front'
                  {...a11yProps(3)}
                />
                <Tab
                  className={classes.tablink}
                  label='Pocket'
                  {...a11yProps(4)}
                />
                <Tab
                  className={classes.tablink}
                  label='Back & Bottom'
                  {...a11yProps(5)}
                />
                {/* <Tab className={classes.tablink} label="Back" {...a11yProps(3)} /> */}
              </Tabs>
            </Grid>
            {/* left type selection tab above */}

            {/* middle preview  tab below */}
            <Grid
              item
              container
              sm={7}
              style={{ backgroundColor: '#fff', height: '100%' }}
            >
              {/* {product.productimages.map((productimage, index) => {
								return (
									<div key={index}>
										<img src={`http://45.13.132.188:5000${productimage}`} />
									</div>
								);
							})} */}
              {product && product.productimages ? (
                <>
                  <Container className={classes.bigimagecont}>
                    <img
                      className={classes.bigimage}
                      src={`https://uniquefit.ml${product.productimages[0]}`}
                    />
                  </Container>

                  {/* {product.productimages.map((bigimage, index) => (
										<Container className={classes.paneltab} key={index}>
											<img
												className={classes.bigimage}
												src={`http://45.13.132.188:5000${bigimage}`}
											/>
										</Container>
									))} */}
                  {/* <Typography className={classes.productname} key={product.productid}>
											{product.productname}
										</Typography> */}
                </>
              ) : (
                '.. . .'
              )}
              {/* {product.productimages[0]} */}
              {/* {product.productimages.map((bigimg, index) => (
								<Container key={index}>
									<img src={`http://45.13.132.188:5000${bigimg}`} />
								</Container>
							))} */}

              {/* {customizedproduct.buttonname} */}
            </Grid>
            {/* middle preview  tab above */}

            {/* right subtype selection tab below */}
            <Grid
              item
              container
              sm={3}
              style={{ backgroundColor: '#e6eeff', height: '100%' }}
            >
              <TabPanel
                value={tabvalue}
                index={0}
                className={classes.rightpane}
              >
                <FormControl component='fieldset'>
                  {/* <FormLabel component="legend">Gender</FormLabel> */}
                  <FormLabel className={classes.variation}>
                    Variations
                  </FormLabel>
                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={collarnamevalue}
                    onChange={handlecollarChange}
                    className={classes.typepanel}
                  >
                    {collars.map((collar) => {
                      return (
                        <Paper className={classes.typepaper}>
                          <img
                            src={collar.image}
                            className={classes.typeimage}
                          />
                          <FormControlLabel
                            value={collar.name}
                            control={<Radio />}
                            label={collar.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                  {/* <Typography>value : {collarnamevalue}</Typography> */}
                </FormControl>
                <Divider className={classes.divider} />
                <FormControl component='fieldset'>
                  <FormLabel className={classes.variation}>
                    Select collar Stiffness :
                  </FormLabel>
                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={collarstiff}
                    onChange={handlecollarstiffnesschange}
                    className={classes.typepanel}
                  >
                    {collarstiffness.map((collarstiffness) => {
                      return (
                        <Paper className={classes.typepaper}>
                          <img
                            src={collarstiffness.image}
                            className={classes.typeimage}
                          />
                          <FormControlLabel
                            value={collarstiffness.name}
                            control={<Radio />}
                            label={collarstiffness.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              </TabPanel>
              <TabPanel
                value={tabvalue}
                index={1}
                className={classes.rightpane}
              >
                <FormControl component='fieldset'>
                  {/* <FormLabel component="legend">Gender</FormLabel> */}
                  <FormLabel className={classes.variation}>
                    Variations
                  </FormLabel>
                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={sleevecuffvalue}
                    onChange={handlesleevecuffChange}
                    className={classes.typepanel}
                  >
                    {sleevecuffss.map((sleevecuff) => {
                      return (
                        <Paper className={classes.typepaper}>
                          <img
                            src={sleevecuff.image}
                            className={classes.typeimage}
                          />
                          <FormControlLabel
                            value={sleevecuff.name}
                            control={<Radio />}
                            label={sleevecuff.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                  {/* <Typography>value : {sleevecuffvalue}</Typography> */}
                </FormControl>
                <Divider className={classes.divider} />
                <FormControl component='fieldset'>
                  <FormLabel className={classes.variation}>
                    Select Cuff Stiffness :
                  </FormLabel>
                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={cuffstiff}
                    onChange={handlesleevecuffstiffness}
                    className={classes.typepanel}
                  >
                    {collarstiffness.map((collarstiffness) => {
                      return (
                        <Paper className={classes.typepaper}>
                          <img
                            src={collarstiffness.image}
                            className={classes.typeimage}
                          />
                          <FormControlLabel
                            value={collarstiffness.name}
                            control={<Radio />}
                            label={collarstiffness.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              </TabPanel>
              <TabPanel
                value={tabvalue}
                index={2}
                className={classes.rightpane}
              >
                <FormControl component='fieldset'>
                  <FormLabel className={classes.variation}>
                    Variations
                  </FormLabel>
                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={butoonvalue}
                    onChange={handlebutoonChange}
                    className={classes.typepanel}
                  >
                    {Butoons.map((butoon) => {
                      return (
                        <Paper className={classes.typepaper}>
                          <img
                            src={butoon.image}
                            className={classes.typeimage}
                          />
                          <FormControlLabel
                            value={butoon.name}
                            control={<Radio />}
                            label={butoon.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                  {/* <Typography>value : {butoonvalue}</Typography> */}
                </FormControl>
                <Divider className={classes.divider} />
                <FormControl component='fieldset'>
                  <FormLabel className={classes.variation}>
                    Select button thread :
                  </FormLabel>
                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={buttonthreadvalue}
                    onChange={handlebuttonthread}
                    className={classes.typepanel}
                  >
                    {buttonthread.map((buttonthread) => {
                      return (
                        <Paper className={classes.buttonpaper}>
                          <img
                            src={buttonthread.image}
                            className={classes.buttonimage}
                          />
                          <FormControlLabel
                            value={buttonthread.name}
                            control={<Radio />}
                            label={buttonthread.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              </TabPanel>
              <TabPanel
                value={tabvalue}
                index={3}
                className={classes.rightpane}
              >
                <FormControl component='fieldset'>
                  <FormLabel className={classes.variation}>
                    Variations
                  </FormLabel>

                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={frontvalue}
                    onChange={handlefrontChange}
                    className={classes.typepanel}
                  >
                    {frontt.map((frontt) => {
                      return (
                        <Paper className={classes.typepaper}>
                          <img
                            src={frontt.image}
                            className={classes.typeimage}
                          />
                          <FormControlLabel
                            value={frontt.name}
                            control={<Radio />}
                            label={frontt.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                  {/* <Typography>value : {frontvalue}</Typography> */}
                </FormControl>
              </TabPanel>
              <TabPanel
                value={tabvalue}
                index={4}
                className={classes.rightpane}
              >
                <FormControl component='fieldset'>
                  <FormLabel className={classes.variation}>
                    Variations :
                  </FormLabel>
                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={pocketvalue}
                    onChange={handlepocketchange}
                    className={classes.typepanel}
                  >
                    {pocket.map((pocket) => {
                      return (
                        <Paper className={classes.typepaper}>
                          <img
                            src={pocket.image}
                            className={classes.typeimage}
                          />
                          <FormControlLabel
                            value={pocket.name}
                            control={<Radio />}
                            label={pocket.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                  {/* <Typography>value : {frontvalue}</Typography> */}
                </FormControl>
              </TabPanel>
              <TabPanel
                value={tabvalue}
                index={5}
                className={classes.rightpane}
              >
                <FormControl component='fieldset'>
                  <FormLabel className={classes.variation}>
                    Variations :
                  </FormLabel>
                  <RadioGroup
                    aria-label='gender'
                    value={backvalue}
                    onChange={handlebackchange}
                    className={classes.typepanel}
                  >
                    {/* for bacj anf cbotm */}
                    {back.map((back) => {
                      return (
                        <Paper className={classes.typepaper}>
                          <img src={back.image} className={classes.typeimage} />
                          <FormControlLabel
                            value={back.name}
                            control={<Radio />}
                            label={back.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                  {/* <Typography>value : {frontvalue}</Typography> */}
                </FormControl>
                <Divider className={classes.divider} />
                <FormControl component='fieldset'>
                  <FormLabel className={classes.variation}>
                    Select Back Bottom:
                  </FormLabel>
                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={backbottomvalue}
                    onChange={handlebackbottomchange}
                    className={classes.typepanel}
                  >
                    {backbottom.map((backbottom) => {
                      return (
                        <Paper className={classes.buttonpaper}>
                          <img
                            src={backbottom.image}
                            className={classes.typeimage}
                          />
                          <FormControlLabel
                            value={backbottom.name}
                            control={<Radio />}
                            label={backbottom.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              </TabPanel>
            </Grid>
            {/* right subtype selection tab above */}
          </Grid>
        </Grid>
      </Hidden>
      {/* thisi is for desktop tool above */}

      {/* this is for mobile layout below */}
      <Hidden mdUp>
        <Grid item container xs={12} className={classes.mobmain}>
          <Grid item container xs={12} className={classes.customappmob}>
            <Link to='/'>
              <img
                src={require('../../logos/Uniquefit_white_monogram.svg')}
                style={{ height: '35px' }}
              />
            </Link>
            <Box style={{ float: 'right' }}>
              <Button
                className={classes.addcartbutton}
                onClick={hancleclickcart}
              >
                <Typography className={classes.adbutontext}>
                  Add to Cart
                </Typography>
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            container
            xs={12}
            style={{ height: '40vh', backgroundColor: '#fff' }}
          >
            {product && product.productimages ? (
              <>
                <Container className={classes.bigimagecont}>
                  <img
                    className={classes.bigimage}
                    src={`https://uniquefit.ml${product.productimages[0]}`}
                  />
                </Container>
              </>
            ) : (
              '.. . .'
            )}

            {/* { product && product.productimages ? ():('') } */}
          </Grid>
          {/* <Grid
						item
						container
						xs={12}
						style={{
							height: '9vh',
							// backgroundColor: '#28334B',
							borderRadius: '10px 10px 0 0',
							display: 'inline-block',
							overflowX: 'scroll',
							zIndex: '10',
						}}>
						<Tabs
							indicatorColor="none"
							orientation="horizontal"
							value={tabvalue}
							onChange={handleTabChange}
							indicatorColor="primary"
							aria-label="Vertical tabs example"
							className={classes.mobtabs}>
							<Tab className={classes.mobtablink} label="Collar" {...a11yProps(0)} />
							<Tab className={classes.mobtablink} label="Hand Cuffs" {...a11yProps(1)} />
							<Tab className={classes.mobtablink} label="Button" {...a11yProps(2)} />
							<Tab className={classes.mobtablink} label="Front" {...a11yProps(3)} />
							<Tab className={classes.mobtablink} label="Pocket" {...a11yProps(4)} />
							<Tab className={classes.mobtablink} label="Back & Bottom" {...a11yProps(5)} />
						</Tabs>
					</Grid> */}

          <Grid
            item
            container
            xs={12}
            style={{ height: '50vh', backgroundColor: '#fff' }}
          >
            <Box
              style={{
                height: 'fit-content',
                width: '100%',
                overflowX: 'scroll',
              }}
            >
              <Tabs
                indicatorColor='none'
                orientation='horizontal'
                value={tabvalue}
                onChange={handleTabChange}
                indicatorColor='primary'
                aria-label='Vertical tabs example'
                className={classes.mobtabs}
              >
                <Tab
                  className={classes.mobtablink}
                  label='Collar'
                  {...a11yProps(0)}
                />
                <Tab
                  className={classes.mobtablink}
                  label='Hand Cuffs'
                  {...a11yProps(1)}
                />
                <Tab
                  className={classes.mobtablink}
                  label='Button'
                  {...a11yProps(2)}
                />
                <Tab
                  className={classes.mobtablink}
                  label='Front'
                  {...a11yProps(3)}
                />
                <Tab
                  className={classes.mobtablink}
                  label='Pocket'
                  {...a11yProps(4)}
                />
                <Tab
                  className={classes.mobtablink}
                  label='Back & Bottom'
                  {...a11yProps(5)}
                />
              </Tabs>
            </Box>
            <Box style={{ overflowY: 'scroll', height: '100%' }}>
              <TabPanel
                value={tabvalue}
                index={0}
                className={classes.rightpane}
              >
                <FormControl component='fieldset'>
                  {/* <FormLabel component="legend">Gender</FormLabel> */}
                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={collarnamevalue}
                    onChange={handlecollarChange}
                    className={classes.typepanel}
                  >
                    {collars.map((collar) => {
                      return (
                        <Paper className={classes.mobtypepaper}>
                          <img
                            src={collar.image}
                            className={classes.typeimage}
                          />
                          <FormControlLabel
                            value={collar.name}
                            control={<Radio />}
                            label={collar.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                  {/* <Typography>value : {collarnamevalue}</Typography> */}
                </FormControl>

                <Divider className={classes.divider} />
                <FormControl component='fieldset'>
                  <FormLabel className={classes.variation}>
                    Select collar Stiffness :
                  </FormLabel>
                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={collarstiff}
                    onChange={handlecollarstiffnesschange}
                    className={classes.typepanel}
                  >
                    {collarstiffness.map((collarstiffness) => {
                      return (
                        <Paper className={classes.mobtypepaper}>
                          <img
                            src={collarstiffness.image}
                            className={classes.typeimage}
                          />
                          <FormControlLabel
                            value={collarstiffness.name}
                            control={<Radio />}
                            label={collarstiffness.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              </TabPanel>
              <TabPanel
                value={tabvalue}
                index={1}
                className={classes.typepanel}
              >
                <FormControl component='fieldset'>
                  {/* <FormLabel component="legend">Gender</FormLabel> */}
                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={sleevecuffvalue}
                    onChange={handlesleevecuffChange}
                    className={classes.typepanel}
                  >
                    {sleevecuffss.map((sleevecuff) => {
                      return (
                        <Paper className={classes.mobtypepaper}>
                          <img
                            src={sleevecuff.image}
                            className={classes.typeimage}
                          />
                          <FormControlLabel
                            value={sleevecuff.name}
                            control={<Radio />}
                            label={sleevecuff.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                  {/* <Typography>value : {sleevecuffvalue}</Typography> */}

                  <Divider className={classes.divider} />
                  <FormControl component='fieldset'>
                    <FormLabel className={classes.variation}>
                      Select Cuff Stiffness :
                    </FormLabel>
                    <RadioGroup
                      aria-label='gender'
                      name='gender1'
                      value={cuffstiff}
                      onChange={handlesleevecuffstiffness}
                      className={classes.typepanel}
                    >
                      {collarstiffness.map((collarstiffness) => {
                        return (
                          <Paper className={classes.mobtypepaper}>
                            <img
                              src={collarstiffness.image}
                              className={classes.typeimage}
                            />
                            <FormControlLabel
                              value={collarstiffness.name}
                              control={<Radio />}
                              label={collarstiffness.name}
                            />
                          </Paper>
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                </FormControl>
              </TabPanel>
              <TabPanel
                value={tabvalue}
                index={2}
                className={classes.typepanel}
              >
                <FormControl component='fieldset'>
                  {/* <FormLabel component="legend">Gender</FormLabel> */}
                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={butoonvalue}
                    onChange={handlebutoonChange}
                    className={classes.typepanel}
                  >
                    {Butoons.map((butoon) => {
                      return (
                        <Paper className={classes.mobtypepaper}>
                          <img
                            src={butoon.image}
                            className={classes.typeimage}
                          />
                          <FormControlLabel
                            value={butoon.name}
                            control={<Radio />}
                            label={butoon.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                  {/* <Typography>value : {butoonvalue}</Typography> */}
                </FormControl>

                <Divider className={classes.divider} />
                <FormControl component='fieldset'>
                  <FormLabel className={classes.variation}>
                    Select button thread :
                  </FormLabel>
                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={buttonthreadvalue}
                    onChange={handlebuttonthread}
                    className={classes.typepanel}
                  >
                    {buttonthread.map((buttonthread) => {
                      return (
                        <Paper className={classes.mobtypepaper}>
                          <img
                            src={buttonthread.image}
                            className={classes.buttonimage}
                          />
                          <FormControlLabel
                            value={buttonthread.name}
                            control={<Radio />}
                            label={buttonthread.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              </TabPanel>
              <TabPanel
                value={tabvalue}
                index={3}
                className={classes.typepanel}
              >
                <FormControl component='fieldset'>
                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={frontvalue}
                    onChange={handlefrontChange}
                    className={classes.typepanel}
                  >
                    {frontt.map((frontt) => {
                      return (
                        <Paper className={classes.mobtypepaper}>
                          <img
                            src={frontt.image}
                            className={classes.typeimage}
                          />
                          <FormControlLabel
                            value={frontt.name}
                            control={<Radio />}
                            label={frontt.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                  {/* <Typography>value : {frontvalue}</Typography> */}
                </FormControl>
              </TabPanel>
              <TabPanel
                value={tabvalue}
                index={4}
                className={classes.typepanel}
              >
                <FormControl component='fieldset'>
                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={pocketvalue}
                    onChange={handlepocketchange}
                    className={classes.typepanel}
                  >
                    {pocket.map((pocket) => {
                      return (
                        <Paper className={classes.mobtypepaper}>
                          <img
                            src={pocket.image}
                            className={classes.typeimage}
                          />
                          <FormControlLabel
                            value={pocket.name}
                            control={<Radio />}
                            label={pocket.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                  {/* <Typography>value : {frontvalue}</Typography> */}
                </FormControl>
              </TabPanel>
              <TabPanel
                value={tabvalue}
                index={5}
                className={classes.rightpane}
              >
                <FormControl component='fieldset'>
                  <FormLabel className={classes.variation}>
                    Variations :
                  </FormLabel>
                  <RadioGroup
                    aria-label='gender'
                    value={backvalue}
                    onChange={handlebackchange}
                    className={classes.typepanel}
                  >
                    {/* for bacj anf cbotm */}
                    {back.map((back) => {
                      return (
                        <Paper className={classes.mobtypepaper}>
                          <img src={back.image} className={classes.typeimage} />
                          <FormControlLabel
                            value={back.name}
                            control={<Radio />}
                            label={back.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                  {/* <Typography>value : {frontvalue}</Typography> */}
                </FormControl>
                <Divider className={classes.divider} />
                <FormControl component='fieldset'>
                  <FormLabel className={classes.variation}>
                    Select Back Bottom:
                  </FormLabel>
                  <RadioGroup
                    aria-label='gender'
                    name='gender1'
                    value={backbottomvalue}
                    onChange={handlebackbottomchange}
                    className={classes.typepanel}
                  >
                    {backbottom.map((backbottom) => {
                      return (
                        <Paper className={classes.mobtypepaper}>
                          <img
                            src={backbottom.image}
                            className={classes.typeimage}
                          />
                          <FormControlLabel
                            value={backbottom.name}
                            control={<Radio />}
                            label={backbottom.name}
                          />
                        </Paper>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
}

export default Customize;
