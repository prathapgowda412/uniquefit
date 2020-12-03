import React, { useContext, useState } from 'react';
import {
  makeStyles,
  Grid,
  Hidden,
  AppBar,
  Container,
  CssBaseline,
  Box,
  Typography,
  Button,
  Avatar,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ArrowRightAltSharpIcon from '@material-ui/icons/ArrowRightAltSharp';
import { Link, Redirect } from 'react-router-dom';
import Group from './images/Group.svg';

import axio from 'axios';

// not used

import Uniquefit_blacklogosvg from '../../logos/Uniquefit logo.svg';
// import { UserContext } from '../../auth';

import { useAuth } from '../../auth';
import { toast } from 'react-toastify';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '85vh',
    maxWidth: '100%',
  },
  appbar: {
    backgroundColor: 'white',
    paddingLeft: '5%',
  },
  lineText: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '0.2px solid #d2d2d2',
    lineHeight: '0.1em',
    margin: '10px 0 20px',
    fontFamily: 'Lora',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '0.75rem',
    color: '#606060',
  },

  inLineText: {
    background: '#fff',
    padding: '0 10px',
  },

  loginHeading: {
    fontFamily: 'Lora',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    backgroundColor: 'white',
    lineHeight: '36px',
    color: 'black',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  link: {
    textDecoration: 'none',
    color: '#387A76',
  },
  googleLoginButton: {
    background: '#FFFFFF',
    border: '1px solid #ECECEC',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.03)',
    borderRadius: '5px',
    fontFamily: 'Lora',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '18px',
    textAlign: 'center',
    textTransform: 'capitalize',
    padding: '1rem 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      lineHeight: '16px',
    },
    '&:hover': {
      backgroundColor: '#fefefe',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)',
    },
  },
  loginButton: {
    background: '#387a76',
    borderRadius: '5px',
    fontFamily: 'Lora',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '1.15rem',
    lineHeight: '18px',
    textAlign: 'center',
    padding: '1rem 0',
    color: 'white',
    textTransform: 'capitalize',
    '&:hover': {
      background: '#034b46',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      lineHeight: '16px',
    },
  },
  butontext: {
    color: 'white',
  },
  logo: {
    height: '53px',
  },
  textField: {
    background: '#E5E5E5',
    borderRadius: '5px',
  },
  labelFont: {
    fontFamily: 'Lora',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1rem',
    lineHeight: '18px',
  },
  iconSize: {
    width: '1.25rem',
    height: '1.25rem',
    marginRight: '10px',
  },
  success: {
    fontSize: '18px',
    color: 'green',
  },
  wrongerror: {
    fontSize: '14px',
    color: 'red',
  },
}));

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [userName, setUserName] = useState('');
  // const [password, setPassword] = useState('');
  const { setAuthTokens } = useAuth();
  // const referer = props.location.state ? props.location.state.referer : '/';
  // const token = localStorage.getItem('token');

  var [islogggedIn, setlogggedIn] = React.useState(false);
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  // let [islogged,setislogged]=React.useState('')

  const [email, setEmail] = React.useState('');
  const [loginsuccessful, setloginsuccessfull] = React.useState('');
  const handleEmail = (event) => {
    setEmail(event.target.value);
    setusernameerror('');
    setpassworderror('');

    // console.log(email);
  };

  const token = localStorage.getItem('usertoken');
  const [logpassword, setPassword] = React.useState('');

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPassword(event.target.value);
    setpassworderror('');
    setusernameerror('');

    // console.log(logpassword);
  };
  let [passworderror, setpassworderror] = React.useState('');
  let [usernameerror, setusernameerror] = React.useState('');
  const logindata = {
    email: `${email}`,
    password: `${logpassword}`,
  };
  const OnLogClicked = (event) => {
    // console.log(`email: ${email}`);
    // console.log(`password: ${logpassword}`);
    // console.log(logindata);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axio
      .post(
        `${process.env.REACT_APP_API_URL}/users/login`,
        JSON.stringify(logindata),
        config
      )
      .then((resp) => {
        // console.log(resp);
        // console.log(resp.data);
        // console.log(resp.data.token);
        // console.log(resp.data.tok);
        console.log('logged in');
        setloginsuccessfull('logged in succesfull');
        setLoggedIn(true);
        setAuthTokens(resp.data.token);
        const token = resp.data.token;
        // const tokendata = resp.data;
        // console.log('following is token:');
        // console.log(token);

        localStorage.setItem('usertoken', token);
        toast.success('Logged In Successfully');
        setlogggedIn(true);
      })
      .catch((err) => {
        console.log('error came');
        // console.log(err);
        // console.log(err.response.data);
        // console.log(err.response.data.message);
        if (err.response.data.message == 'User Not Exist') {
          toast.error('User name does not exist or Wrong user-email');
          setusernameerror('Username does not exist !!! Please Register');
        } else {
          toast.error('Wrong password');
          setpassworderror('wrong password');
        }
        // console.log(err.response.data.errors);
        // console.log(err.response.data.errors[0].msg);
      });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  if (islogggedIn) {
    return <Redirect to='/' />;
  } else {
    return (
      <Grid item container className={classes.root} xs={12}>
        <AppBar className={classes.appbar} position='sticky' elevation='0'>
          <Link to='/'>
            <img className={classes.logo} src={Uniquefit_blacklogosvg} />
          </Link>
        </AppBar>
        {/* <Grid container> */}
        <Grid item container sm={12} md={6} direction='column'>
          <Container maxWidth='sm'>
            <Box my={5}>
              <Typography component='div' align='center' color='initial'>
                <Box component='div' className={classes.lineText}>
                  <Box component='span' className={classes.loginHeading}>
                    Login
                  </Box>
                </Box>
              </Typography>
            </Box>
            <form noValidate>
              <label className={classes.labelFont}>Email</label>
              <TextField
                id='email'
                size='medium'
                required
                // placeholder="Email"
                margin='normal'
                fullWidth
                onChange={handleEmail}
                variant='outlined'
                className={classes.textField}
              ></TextField>
              <Container>
                <Typography variant='caption' className={classes.wrongerror}>
                  {usernameerror}
                </Typography>
              </Container>

              <Box mt={3}>
                <label className={classes.labelFont}>Password</label>
              </Box>
              <FormControl
                fullWidth
                size='medium'
                margin='normal'
                variant='outlined'
                className={classes.textField}
              >
                {/* <InputLabel htmlFor="password">Password</InputLabel> */}
                <OutlinedInput
                  id='password'
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  //   placeholder='Password'
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Container>
                <Typography variant='caption' className={classes.wrongerror}>
                  {passworderror}
                </Typography>
              </Container>

              <Box my={4}>
                <Button
                  variant='contained'
                  fullWidth
                  size='large'
                  onClick={OnLogClicked}
                  disableElevation
                  className={classes.loginButton}
                >
                  <Typography className={classes.butontext}>Login</Typography>
                </Button>
                <Container>
                  <Typography className={classes.success}>
                    {loginsuccessful}
                  </Typography>
                </Container>
              </Box>
            </form>
            <Box my={4}>
              <Typography
                variant='body1'
                align='center'
                color='initial'
                className={classes.labelFont}
              >
                Not a member?
                <Link className={classes.link} to='/Signup'>
                  SignUp
                </Link>
              </Typography>
            </Box>
            {/* </Box> */}
            {/* </Box> */}
          </Container>
        </Grid>

        <Grid
          item
          sm={12}
          md={6}
          style={{ backgroundImage: `url(${Group})` }}
        ></Grid>
        {/* </Grid> */}
      </Grid>
    );
  }
}

export default Login;
