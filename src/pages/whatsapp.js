/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import WhatsappIcon from '../logos/whatsapp.svg';
const Styles = makeStyles((theme) => ({
  whatsapp: {
    position: 'fixed',
    bottom: '50px',
    right: '50px',
    zIndex: '1000',
    // backgroundColor: 'red',
  },
}));

function Whatsapp() {
  const classes = Styles();

  const goToWhatsapp = () => {
    // global.window.location.href = 'wa.link/54ag6i';
    // window.location.pathname = 'wa.link/54ag6i';
  };

  return (
    <Box className={classes.whatsapp}>
      <a href='https://wa.link/ag507j'>
        <Button onClick={goToWhatsapp}>
          <img height='60px' src={WhatsappIcon} />
        </Button>
      </a>
    </Box>
  );
}

export default Whatsapp;
