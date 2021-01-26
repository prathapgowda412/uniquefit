/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Hidden,
} from '@material-ui/core';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getOrders } from '../../services/fetchService';
import { toast } from 'react-toastify';
import profileStyles from './profileStyles';
import { ExpandMore } from '@material-ui/icons';
import { getProfileDetails } from './../../services/fetchService';

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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

const useStyles = profileStyles;

function Profilepage() {
  const { tab } = useParams();
  const classes = useStyles();
  const [value, setValue] = React.useState(tab);
  const [orders, setorders] = React.useState([]);
  const [totalOrders, settotalOrders] = React.useState();
  const [userdata, setuserdata] = React.useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const history = useHistory();
  const userData = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('usertoken'),
      },
    };

    const respuser = await getProfileDetails(config);
    let data = respuser;
    if (respuser.data.message === 'Token has expired') {
      toast.warning('User session has Expired \n Please Login');
      localStorage.removeItem('usertoken');
      localStorage.removeItem('tokens');

      //   window.location.reload();
      window.history.push('/');
    }
    // console.log(respuser);
    setuserdata(respuser.data);

    // console.log(userdata);
    const resp = await getOrders();
    setorders(resp.data.orders);
    // console.log(orders);
    // console.log(resp.data.orders);
    // console.table(resp.data.orders);
    // console.log(resp.data.orders.length);
    settotalOrders(resp.data.orders.length);
  };
  useEffect(() => {
    userData();
  }, [userdata]);

  return (
    <Grid item container justify='center' xs={12} className={classes.root}>
      <Hidden smDown>
        <Grid item sm={3}>
          <Link className={classes.link} to='/Profile/info'>
            <Button classname={classes.linkbuton}> to info</Button>
          </Link>
          <br />
          <Link className={classes.link} to='/Profile/orders'>
            <Button classname={classes.linkbuton}>to orders</Button>
          </Link>
          {/* <Tabs
						orientation="vertical"
						value={value}
						onChange={handleChange}
						aria-label="Vertical tabs example"
						className={classes.tabs}>
						<Tab label="Account Info" {...a11yProps('info')} />
						<Tab label="My Orders" {...a11yProps('orders')} />
					</Tabs> */}
        </Grid>
      </Hidden>
      <Grid item container xs={11} sm={7}>
        <TabPanel value={value} index={'info'}>
          <Container maxWidth='md'>
            <Typography> My Account Details</Typography>
            <br />
            <Grid
              item
              container
              xs={12}
              justify='center'
              style={{ height: '50px' }}
            >
              <Grid item xs={5}>
                Name:
              </Grid>
              <Grid item xs={5}>
                {userdata ? (
                  <Typography>{userdata.username} </Typography>
                ) : (
                  <CircularProgress color='secondary' />
                )}
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              justify='center'
              style={{ height: '50px' }}
            >
              <Grid item xs={5}>
                Email-Id:
              </Grid>
              <Grid item xs={5}>
                {userdata ? (
                  <Typography>{userdata.email} </Typography>
                ) : (
                  <CircularProgress color='secondary' />
                )}
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              justify='center'
              style={{ height: '50px' }}
            >
              <Grid item xs={5}>
                Mobile number:
              </Grid>
              <Grid item xs={5}>
                {userdata ? (
                  <Typography>{userdata.mobile} </Typography>
                ) : (
                  <CircularProgress color='secondary' />
                )}
              </Grid>
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel style={{ width: '100%' }} value={value} index={'orders'}>
          <Container
            style={{
              backgroundColor: '#fff',
              height: 'fit-content',
              padding: '20px 10px',
            }}
          >
            <Typography>Total number of Orders : {totalOrders} </Typography>

            {orders ? (
              <>
                {orders.map((order, index) => {
                  return (
                    <Accordion
                      key={index}
                      style={{
                        marginTop: '10px',
                        borderRadius: '10px',
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                      >
                        <Typography className={classes.heading}>
                          Order {index + 1} &nbsp; &nbsp; &nbsp; Ordervalue:{' '}
                          {order.cartValue} &nbsp; &nbsp; Order Status:{' '}
                          {order.orderstatus}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box
                          style={{
                            backgroundColor: '#f2f2f2',
                            width: '100%',
                          }}
                        >
                          {order.products.map((product, i) => {
                            return (
                              <Accordion key={i} style={{ width: '100%' }}>
                                <AccordionSummary
                                  expandIcon={<ExpandMore />}
                                  aria-controls='panel1a-content'
                                  id='panel1a-header'
                                >
                                  <Typography className={classes.heading}>
                                    Product {i + 1} &nbsp; &nbsp; &nbsp; Product
                                    price: {product.productsaleprice}
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Container
                                    style={{
                                      backgroundColor: '#f2f2f2',
                                      width: '100%',
                                    }}
                                  >
                                    <Card
                                      style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        height: '200px',
                                      }}
                                    >
                                      <div className={classes.carddetails}>
                                        <CardContent
                                          className={classes.content}
                                        >
                                          <Typography
                                            component='h5'
                                            variant='h5'
                                          >
                                            {product.productname}
                                          </Typography>
                                          <Typography
                                            variant='subtitle1'
                                            color='textSecondary'
                                          >
                                            {' '}
                                            Product ID:
                                            {product.productid}
                                          </Typography>
                                        </CardContent>
                                      </div>
                                      <div style={{ width: '40%' }}>
                                        <img
                                          style={{ height: '99%' }}
                                          src={product.productimages[0]}
                                        />
                                      </div>

                                      {/* <CardMedia
                                        className={classes.cover}
                                     
                                        src={product.productimages[0]}
                                        title='Live from space album cover'
                                      /> */}
                                    </Card>
                                  </Container>
                                </AccordionDetails>
                              </Accordion>
                            );
                          })}
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}{' '}
              </>
            ) : (
              ' Loading your orders'
            )}
          </Container>
        </TabPanel>
      </Grid>
    </Grid>
  );
}

export default Profilepage;
