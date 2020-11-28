import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box,
  Card,
  CardActions,
  Button,
  CardContent,
  Paper,
  Divider,
  Input,
  FormControl,
  FormLabel,
  TextField,
  AppBar,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  useFormControl,
  Hidden,
} from '@material-ui/core';
import { addOrder, getCartItems } from '../../services/fetchService';
import DeleteIcon from '@material-ui/icons/Delete';
import itemimg from '../Home/components/statics/images/girl.jpg';
import { removeFromCart } from './../../services/fetchService';
import { toast } from 'react-toastify';
import { Link, Redirect, useHistory } from 'react-router-dom';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Axios from 'axios';
import { ReorderRounded } from '@material-ui/icons';
import Header from '../Header';

const Styles = makeStyles({
  root: {
    backgroundColor: 'white',
  },

  cartappbar: {
    backgroundColor: '#fff',
    padding: '20px',
    height: '75px',
    width: '100%',
    marginBottom: '5px',
    position: 'relative',
    boxShadow: '2px 0px 5px -2px rgba(10,10,10,0.3)',
  },
  removebutton: {
    backgroundColor: 'white',
    float: 'right',
  },
  cartbox: {
    // backgroundColor: '#f9f9f9',
    minHeight: '100px',
    maxHeight: 'fit-content',
    // marginTop: '15px',
  },
  cardpaper: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    height: '150px',
  },
  leftbox: {
    minHeight: '100px',
    maxHeight: 'fit-content',
    paddingTop: '20px',
  },
  rightbox: {
    height: '500px',
    // backgroundColor: '#dcd',
    borderLeft: '1.5px solid rgba(100,100,100,0.40)',
    marginTop: '20px',
  },
  itemcard: {
    width: '90%',
    // minHeight: 'fit-content',
    height: 'fit-content',
    marginTop: '10px',
    boxShadow: '0px 1px 10px -5px rgba(10,10,10,0.3)',
    // border: '1.5px solid #52525275',
    borderRadius: '10px',
  },
  itemimg: {
    width: '25%',
    position: 'relative',
    height: '100%',
    objectFit: 'contain',
  },
  papercontent: {
    width: '75%',
    position: 'relative',
    height: '100%',
  },
  papercontainer: {
    marginTop: '5px',
  },
  productpricetag: {
    fontSize: '16px',
    color: '#282C3F',
  },
  productnametag: {
    fontSize: '18px',
    color: '#282C3F',
  },
  cartcalcont: {
    borderRadius: '5px ',
    boxShadow: '0px 0px 10px -5px rgba(50,50,71,0.26)',
    // border: '1px solid black',
    height: 'fit-content',
    width: '80%',
    padding: '20px 0 20px',
  },
  placeorderbutton: {
    margin: '24px 0 24px',
    padding: '16px 80px',
    backgroundColor: '#387A76',
    color: 'white',
    borderRadius: '0px',
    '&:hover': {
      backgroundColor: '#034b46',
    },
  },
  placebutontext: {
    color: 'white',
    fontSize: '18px',
  },
  adressbox: {
    height: 'fit-content',
    marginTop: '20px',
  },
  labelname: {
    color: '#387A76',
    fontSize: '20px',
  },
  sizebox: {
    height: 'fit-content',
    padding: '20px 0',
    backgroundColor: '#fff',
    textAlign: 'center',
    marginTop: '50px',
  },
  sizeimages: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'space-evenly',
  },
  sizeimg: {
    width: '90%',
  },
  sizepaper: {
    width: '115px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: '5px 20px',
  },
  paperaddress: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  setaddressbuton: {
    // backgroundColor: '#387A76',
    backgroundColor: 'black',

    padding: '5px 10px',
  },
  sizeheading: {
    fontSize: '26px',
    textAlign: 'center',
    margin: '50px 0',
    color: 'red',
  },
  adressbox: {
    display: 'flex',
    justifyContent: 'center',
  },
  emptyimg: {
    width: '100%',
    objectFit: 'contain',
  },
  emptyimgmob: {
    width: '100%',
    objectFit: 'container',
  },
  adressform: {
    height: 'fit-content',
    backgroundColor: 'grey',
  },
});

// for stepper below
function getSteps() {
  return ['Cart Page', 'Sizes', 'Address', 'Payments'];
}

// function getStepContent(stepIndex) {
// 	const classes = Styles();
// }
// for stepper above

function Cartpage() {
  let [cartItems, setCartItems] = useState([]);
  const [cartmrpvalueprice, setmrpcartvalueprice] = useState();
  const [cartsaleprice, setcartsaleprice] = useState();
  const [cartquantity, setcartquantity] = useState();
  //  addd adress
  const [address, setfulladdress] = React.useState('');
  const [addressname, setaddressname] = React.useState('');
  const [addressmobile, setaddressmobile] = React.useState('');
  const [addressfull, setaddressfull] = React.useState('');
  const [addresscity, setaddresscity] = React.useState('');
  const [addressstate, setaddressstate] = React.useState('');
  const [addresspin, setaddresspin] = React.useState('');
  const handleaddressname = (event) => {
    setaddressname(event.target.value);
  };
  const handlemobile = (event) => {
    setaddressmobile(event.target.value);
  };
  const handlefulladress = (event) => {
    setaddressfull(event.target.value);
  };
  const handlecity = (event) => {
    setaddresscity(event.target.value);
  };
  const handlestate = (event) => {
    setaddressstate(event.target.value);
  };
  const handlepin = (event) => {
    setaddresspin(event.target.value);
  };

  const handlesetfulladress = () => {
    setfulladdress(
      `Name:${addressname} , Phone :${addressmobile} , Address :${addressfull} , City : ${addresscity} , State: ${addressstate} , Pin: ${addresspin}`
    );
  };

  // get sizes below
  const [size, setsize] = React.useState('');
  const [height, setheight] = React.useState('');
  const [shoulders, setshoulders] = React.useState('');
  const [bodyType, setbodyType] = React.useState('');
  const [bodyFit, setbodyFit] = React.useState('');

  // handle chanages
  const handlesizechange = (event) => {
    setsize(event.target.value);
  };

  const handleshoulderschange = (event) => {
    setshoulders(event.target.value);
  };
  const handlebodytypechange = (event) => {
    setbodyType(event.target.value);
  };
  const handlebodyfitchange = (event) => {
    setbodyFit(event.target.value);
  };
  const handleheightChange = (event, value) => {
    // toast(event.target.value);
    // let het = event.target.value;
    // console.log(value);
    setheight(event.target.value);
    // toast(height);
    // console.log(height);
  };
  // get sizes above

  // for height below
  const marks = [
    {
      value: 152,
      label: '5 ft',
    },

    {
      value: 5.8,
      label: '37°C',
    },
    {
      value: 170,
      label: '5.6 ft',
    },
    {
      value: 180,
      label: '5.9 ft',
    },
    {
      value: 182,
      label: '6 ft',
    },
  ];
  const valuetext = (value) => {
    return `${value} ft`;
  };
  // for height above

  // for stepper below
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  // for stepper above

  const pushSuccess = () => {
    return <Redirect to='/Odersuccess' />;
  };

  useEffect(() => {
    getCartItems().then(({ data }) => {
      const cartIts = data.cartItems;

      setCartItems(cartIts.items);
      // console.log(cartIts);
      // console.log(cartItems);
      console.log(cartIts.items);
    });
  }, []);
  useEffect(() => {
    let sum = 0;
    let salepricesum = 0;

    cartItems.map(({ productsaleprice }) => {
      salepricesum = salepricesum + productsaleprice;
    });

    cartItems.map(({ productprice }) => {
      sum = sum + productprice;
    });
    setmrpcartvalueprice(sum);
    setcartsaleprice(salepricesum);
    setcartquantity(cartItems.length);
  }, [cartItems]);

  // console.log(cartvalueprice);
  // console.log(cartItems.length);

  const removeFromCartUI = async (productid) => {
    setCartItems(
      cartItems.filter((cartItem) => cartItem.productid != productid)
    );
    let { data } = await removeFromCart(productid);
    toast(data.message);
  };

  const classes = Styles();

  const history = useHistory();
  // payments codew below
  const razorPayPaymentHandler = async () => {
    // const orderamount = 125;
    const API_URL = `https://uniquefit.ml/razorpay/`;
    const orderUrl = `${API_URL}order`;
    const amount = cartsaleprice;
    // const amount = this.state.amount;
    // const config = {
    // 	headers: {
    // 		'x-amount': this.state.amount,
    // 	},
    // };
    // const amount = cartsaleprice;
    const response = await Axios.post(orderUrl, { amount });
    const { data } = response;
    console.log('App -> razorPayPaymentHandler -> data', data);

    const options = {
      key: '',
      name: 'Uniquefit',
      description: 'Purchase from Uniquefit',
      order_id: data.id,
      handler: async (response) => {
        try {
          const amount = cartsaleprice;
          const paymentId = response.razorpay_payment_id;
          const url = `${API_URL}capture/${paymentId}`;
          const captureResponse = await Axios.post(url, { amount });
          const successObj = JSON.parse(captureResponse.data);

          const captured = successObj.captured;
          console.log(response);
          console.log('App -> razorPayPaymentHandler -> captured', successObj);
          if (captured) {
            console.log('success');
            let { data } = await addOrder(
              cartItems,
              address,
              size,
              height,
              shoulders,
              bodyType,
              bodyFit
            );

            console.log(data.message);

            toast(data.message);
            history.push('/Ordersuccess');
            // pushSuccess();
          } else {
            // console.log('paymenyt authorised ');
            toast.success('Payment Successful ');
          }
        } catch (err) {
          console.log('error below');
          console.log(err);
          toast(err);
        }
      },
      theme: {
        color: '#686CFD',
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  // payments codew above

  // one below
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Grid
            item
            container
            xs={12}
            sm={10}
            className={classes.cartbox}
            justify='center'
          >
            <Grid
              item
              container
              xs={12}
              sm={7}
              className={classes.leftbox}
              justify='center'
            >
              {/* single item */}
              {cartItems.map((ite, index) => {
                return (
                  <>
                    <Card
                      elevation
                      square
                      className={classes.itemcard}
                      key={index}
                    >
                      <CardContent className={classes.cardcontent}>
                        <Paper elevation className={classes.cardpaper}>
                          <img
                            className={classes.itemimg}
                            src={`https://uniquefit.ml${ite.productimages[0]}`}
                          />
                          <Box className={classes.papercontent}>
                            <Container className={classes.papercontainer}>
                              <Typography
                                className={classes.productnametag}
                                variant='h3'
                              >
                                {ite.productname}
                              </Typography>
                              <Typography>{ite.productsaleprice}</Typography>
                              <Typography variant='body1'>
                                Product id:{ite.productid}
                              </Typography>
                            </Container>
                          </Box>
                        </Paper>
                      </CardContent>
                      <CardActions className={classes.actioncard}>
                        <Button
                          className={classes.removebutton}
                          onClick={() => removeFromCartUI(ite.productid)}
                          size='medium'
                        >
                          <DeleteIcon />
                          Remove
                        </Button>
                      </CardActions>
                    </Card>
                  </>
                );
              })}

              {/* single item */}
            </Grid>
            <Grid
              item
              container
              xs={10}
              sm={5}
              justify='center'
              className={classes.rightbox}
            >
              <Container className={classes.cartcalcont}>
                <Grid container justify='center'>
                  <Grid item container xs={10}>
                    <Grid item xs={7}>
                      <Typography>No of Products:</Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography>{cartquantity}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container xs={10}>
                    <Grid item xs={7}>
                      <Typography>MRP Price:</Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography>{cartmrpvalueprice}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container xs={10}>
                    <Grid item xs={7}>
                      <Typography>Sale Price:</Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography>{cartsaleprice}</Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </Grid>
                <Container>
                  <Button
                    className={classes.placeorderbutton}
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                  >
                    <Typography className={classes.placebutontext}>
                      {activeStep === steps.length - 1 ? 'CheckOut' : 'Next'}
                    </Typography>
                  </Button>
                </Container>
              </Container>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid>
            <Container style={{ display: 'flex', justifyContent: 'center' }}>
              <FormControl>
                <FormLabel>Enter height {'(in feet)'}</FormLabel>
                <TextField
                  label='Height'
                  variant='outlined'
                  placeholder='eg. 5.5'
                  onChange={handleheightChange}
                />
              </FormControl>

              {/* <Typography classname={classes.sizeheading} variant="body1">
								Select your height
							</Typography>
							<Slider
								defaultValue={160}
								getAriaValueText={valuetext}
								// onChange={handleheightChange}
								onDragLeave={handleheightChange}
								aria-labelledby="discrete-slider-always"
								step={2}
								min={150}
								max={200}
								marks={marks}
								valueLabelDisplay="on"
							/> */}
            </Container>
            <Container className={classes.sizebox}>
              <Typography classname={classes.sizeheading} variant='body1'>
                Choose Your Preffered Size
              </Typography>
              <Container className={classes.sizeimages}>
                <RadioGroup
                  row
                  aria-label='position'
                  name='position'
                  defaultValue='top'
                >
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/shirt-sizes-white/sizes/36.svg'
                    />
                    <FormControlLabel
                      value='XS-36'
                      control={
                        <Radio
                          value='XS-36'
                          defaultChecked
                          onClick={handlesizechange}
                          color='primary'
                        />
                      }
                      label='XS-36'
                    />
                  </Paper>
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/shirt-sizes-white/sizes/38.svg'
                    />

                    <FormControlLabel
                      value='S-38'
                      control={
                        <Radio
                          value='s-38'
                          onClick={handlesizechange}
                          color='primary'
                        />
                      }
                      label='S-38'
                    />
                  </Paper>
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/shirt-sizes-white/sizes/40.svg'
                    />
                    <FormControlLabel
                      value='M-40'
                      control={
                        <Radio
                          value='M-40'
                          onClick={handlesizechange}
                          color='primary'
                        />
                      }
                      label='M-40'
                    />
                  </Paper>
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/shirt-sizes-white/sizes/42.svg'
                    />
                    <FormControlLabel
                      value='L-42'
                      control={
                        <Radio
                          value='L-42'
                          onClick={handlesizechange}
                          color='primary'
                        />
                      }
                      label='L-42'
                    />
                  </Paper>
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/shirt-sizes-white/sizes/44.svg'
                    />
                    <FormControlLabel
                      value='XL-44'
                      control={
                        <Radio
                          value='XL-44'
                          onClick={handlesizechange}
                          color='primary'
                        />
                      }
                      label='XL-44'
                    />
                  </Paper>
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/shirt-sizes-white/sizes/46.svg'
                    />
                    <FormControlLabel
                      value='2XL-46'
                      control={
                        <Radio
                          value='2XL-46'
                          onClick={handlesizechange}
                          color='primary'
                        />
                      }
                      label='2XL-46'
                    />
                  </Paper>
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/shirt-sizes-white/sizes/48.svg'
                    />
                    <FormControlLabel
                      value='3XL-48'
                      control={
                        <Radio
                          value='3XL-48'
                          onClick={handlesizechange}
                          color='primary'
                        />
                      }
                      label='3XL-48'
                    />
                  </Paper>
                </RadioGroup>
              </Container>
            </Container>{' '}
            <Container className={classes.sizebox}>
              <Typography classname={classes.sizeheading} variant='body1'>
                Choose Your Preffered Shoulder Type
              </Typography>
              <Container className={classes.sizeimages}>
                <RadioGroup
                  row
                  aria-label='position'
                  name='position'
                  defaultValue='top'
                >
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/shoulders/new-shoulders/not-sloping.svg'
                    />
                    <FormControlLabel
                      value='Not-sloping'
                      control={
                        <Radio
                          value='Not-sloping'
                          onClick={handleshoulderschange}
                          color='primary'
                        />
                      }
                      label='Not sloping'
                    />
                  </Paper>
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/shoulders/new-shoulders/sloping.svg'
                    />

                    <FormControlLabel
                      value='Sloping'
                      control={
                        <Radio
                          value='Sloping'
                          onClick={handleshoulderschange}
                          color='primary'
                        />
                      }
                      label='Sloping'
                    />
                  </Paper>
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/shoulders/new-shoulders/very-sloping.svg'
                    />
                    <FormControlLabel
                      value='Very-Sloping'
                      control={
                        <Radio
                          value='Very-Sloping'
                          onClick={handleshoulderschange}
                          color='primary'
                        />
                      }
                      label='very Sloping'
                    />
                  </Paper>
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/shoulders/new-shoulders/dont-know.svg'
                    />
                    <FormControlLabel
                      value='Dont-know'
                      control={
                        <Radio
                          value='Dont-know'
                          onClick={handleshoulderschange}
                          color='primary'
                        />
                      }
                      label="Don't know"
                    />
                  </Paper>
                </RadioGroup>
              </Container>
            </Container>
            <Container className={classes.sizebox}>
              {' '}
              <Typography classname={classes.sizeheading} variant='body1'>
                Choose Your Preffered Body type
              </Typography>
              <Container className={classes.sizeimages}>
                <RadioGroup
                  row
                  aria-label='position'
                  name='position'
                  defaultValue='top'
                >
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/body-type/body/skinny.svg'
                    />
                    <FormControlLabel
                      value='Skinny'
                      control={
                        <Radio
                          value='Skinny'
                          onClick={handlebodytypechange}
                          color='primary'
                        />
                      }
                      label='Skinny'
                    />
                  </Paper>
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/body-type/body/athletic.svg'
                    />

                    <FormControlLabel
                      value='Athletic'
                      control={
                        <Radio
                          value='Sloping'
                          onClick={handlebodytypechange}
                          color='primary'
                        />
                      }
                      label='Athletic'
                    />
                  </Paper>
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/body-type/body/average.svg'
                    />
                    <FormControlLabel
                      value='Average'
                      control={
                        <Radio
                          value='Average'
                          onClick={handlebodytypechange}
                          color='primary'
                        />
                      }
                      label='Average'
                    />
                  </Paper>
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/body-type/body/healthy.svg'
                    />
                    <FormControlLabel
                      value='Healthy'
                      control={
                        <Radio
                          value='Healthy'
                          onClick={handlebodytypechange}
                          color='primary'
                        />
                      }
                      label='Healthy'
                    />
                  </Paper>
                </RadioGroup>
              </Container>
            </Container>
            {/* brlow for perfect it */}
            <Container className={classes.sizebox}>
              {' '}
              <Typography classname={classes.sizeheading} variant='body1'>
                Choose Your Preffered Body Fit
              </Typography>
              <Container className={classes.sizeimages}>
                <RadioGroup
                  row
                  aria-label='position'
                  name='position'
                  defaultValue='top'
                >
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/perfect-fit/fit/super-slim.svg'
                    />
                    <FormControlLabel
                      value='Super Slim'
                      control={
                        <Radio
                          value='Super Slim'
                          onClick={handlebodyfitchange}
                          color='primary'
                        />
                      }
                      label='Super Slim'
                    />
                  </Paper>
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/perfect-fit/fit/structured.svg'
                    />
                    <FormControlLabel
                      value='Structured'
                      control={
                        <Radio
                          value='Structured'
                          onClick={handlebodyfitchange}
                          color='primary'
                        />
                      }
                      label='Structured'
                    />
                  </Paper>
                  <Paper className={classes.sizepaper}>
                    <img
                      className={classes.sizeimg}
                      src='https://www.bombayshirts.com/static/images/fitsmart-new-icon/perfect-fit/fit/baggy.svg'
                    />

                    <FormControlLabel
                      value='Baggy'
                      control={
                        <Radio
                          value='Baggy'
                          onClick={handlebodyfitchange}
                          color='primary'
                        />
                      }
                      label='Baggy'
                    />
                  </Paper>
                </RadioGroup>
              </Container>
            </Container>
          </Grid>
        );
      case 2:
        return (
          <Container maxWidth='md'>
            <FormControl
              style={{ display: 'flex', justifyContent: 'center' }}
              noValidate
            >
              <Grid
                xs={6}
                style={{ backgroundColor: 'white' }}
                item
                container
                spacing={2}
              >
                <FormLabel>Enter adress :</FormLabel>
                <Grid item xs={12}>
                  <TextField
                    onChange={handleaddressname}
                    label='Name:'
                    placeholder='enter name '
                    required
                    fullWidth
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={handlemobile}
                    label='Phone number:'
                    fullWidth
                    placeholder='pin code '
                    variant='outlined'
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    onChange={handlefulladress}
                    label='Full Adddress :'
                    placeholder='house no. area'
                    required
                    fullWidth
                    variant='outlined'
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    onChange={handlecity}
                    label='City :'
                    fullWidth
                    placeholder='city'
                    required
                    variant='outlined'
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    onChange={handlestate}
                    label='State :'
                    fullWidth
                    placeholder='state'
                    variant='outlined'
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    onChange={handlepin}
                    label='Pin Code :'
                    fullWidth
                    placeholder='pin code '
                    variant='outlined'
                  />
                </Grid>
              </Grid>
              <Divider />
              <Button
                classname={classes.setaddressbuton}
                style={{ backgroundColor: '#387A76', padding: '5px 10px' }}
                onClick={handlesetfulladress}
              >
                Set address
              </Button>
            </FormControl>

            {/* <Container classname={classes.adressbox}>
              <FormControl></FormControl>
            </Container> */}
          </Container>
        );
      case 3:
        return (
          <Grid
            item
            container
            xs={12}
            sm={10}
            className={classes.cartbox}
            justify='center'
          >
            <Grid
              item
              container
              xs={12}
              sm={7}
              className={classes.leftbox}
              justify='center'
            >
              {/* single item */}
              {cartItems.map((ite, index) => {
                return (
                  <>
                    <Card
                      elevation
                      square
                      className={classes.itemcard}
                      key={index}
                    >
                      <CardContent className={classes.cardcontent}>
                        <Paper elevation className={classes.cardpaper}>
                          <img
                            className={classes.itemimg}
                            src={`https://uniquefit.ml${ite.productimages[0]}`}
                          />
                          <Box className={classes.papercontent}>
                            <Container className={classes.papercontainer}>
                              <Typography
                                className={classes.productnametag}
                                variant='h3'
                              >
                                {ite.productname}
                              </Typography>
                              <Typography>{ite.productsaleprice}</Typography>
                              <Typography variant='body1'>
                                Product id:{ite.productid}
                              </Typography>
                            </Container>
                          </Box>
                        </Paper>
                      </CardContent>
                      <CardActions className={classes.actioncard}>
                        <Button
                          className={classes.removebutton}
                          onClick={() => removeFromCartUI(ite.productid)}
                          size='medium'
                        >
                          <DeleteIcon />
                          Remove
                        </Button>
                      </CardActions>
                    </Card>
                  </>
                );
              })}

              {/* single item */}
            </Grid>
            <Grid
              item
              container
              xs={10}
              sm={5}
              justify='center'
              className={classes.rightbox}
            >
              <Container className={classes.cartcalcont}>
                <Grid container justify='center'>
                  <Grid item container xs={10}>
                    <Grid item xs={7}>
                      <Typography>No of Products:</Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography>{cartquantity}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container xs={10}>
                    <Grid item xs={7}>
                      <Typography>MRP Price:</Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography>{cartmrpvalueprice}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item container xs={10}>
                    <Grid item xs={7}>
                      <Typography>Sale Price:</Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography>{cartsaleprice}</Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </Grid>
                <Container>
                  <Button
                    className={classes.placeorderbutton}
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                  >
                    <Button
                      className={classes.placebutontext}
                      onClick={razorPayPaymentHandler}
                    >
                      Pay Now
                      {/* {activeStep === steps.length - 1 ? 'CheckOut' : 'Next'} */}
                    </Button>
                  </Button>
                </Container>
              </Container>
            </Grid>
          </Grid>
        );
      default:
        return 'Unknown stepIndex';
    }
  };
  // one above

  return (
    <>
      <Grid item container xs={12} className={classes.root} justify='center'>
        {cartquantity != 0 ? (
          <>
            <Grid
              xs={12}
              item
              justify='center'
              container
              className={classes.cartappbar}
            >
              <Box style={{ width: '95%' }}>
                <Grid item container xs={1} />
                <Grid item container xs={4}>
                  <Link to='/'>
                    <img
                      src={require('../../logos/Unique fit monogram.svg')}
                      height='35px'
                    />
                  </Link>
                </Grid>
                <Grid item container></Grid>
              </Box>
            </Grid>
            <Container maxWidth='md'>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>
                      <Typography className={classes.labelname}>
                        {label}
                      </Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Container>
            <Container style={{ display: 'flex', justifyContent: 'center' }}>
              <Box>
                {activeStep === steps.length ? (
                  <div>
                    <Typography className={classes.instructions}>
                      All steps completed
                    </Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes.instructions}>
                      {getStepContent(activeStep)}
                    </Typography>
                    <Container
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <div
                        style={{
                          width: 'fit-content',
                        }}
                      >
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.backButton}
                        >
                          Back
                        </Button>
                        <Button
                          className={classes.placeorderbutton}
                          variant='contained'
                          color='primary'
                          onClick={handleNext}
                        >
                          <Typography className={classes.placebutontext}>
                            {activeStep === steps.length - 1
                              ? 'Finish'
                              : 'Next'}
                          </Typography>
                        </Button>
                      </div>
                    </Container>
                  </div>
                )}
              </Box>
            </Container>

            <Grid xs={12} sm={10} className={classes.adressbox}></Grid>
          </>
        ) : (
          <Grid xs={12}>
            <Header />
            <Hidden smUp>
              <Container>
                <Link to='/Shop'>
                  <img
                    classname={classes.emptyimgmob}
                    src={require('./statics/Empty_Bag_Mobile.svg')}
                  />
                </Link>
              </Container>
            </Hidden>
            <Hidden xsDown>
              <Link to='/Shop'>
                <img
                  className={classes.emptyimg}
                  src={require('./statics/Empty_Bag_1.svg')}
                />
              </Link>
            </Hidden>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default Cartpage;
