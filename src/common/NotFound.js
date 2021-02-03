import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '480px',
    width: '100%',
  },
  buton: {
    color: 'black',
    '&:hover': {
      color: 'red',
      backgroundColor: 'red',
    },
  },
}));

function NotFound() {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography style={{ fontSize: '98px' }}> 404 </Typography>
      <Link className={classes.buton} component={Button} to='/'>
        Go Home
      </Link>
    </Box>
  );
}

export default NotFound;
