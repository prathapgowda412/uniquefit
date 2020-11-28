import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import dummydata from '../../data/dummydata.json';
import Product from '../Product';
import { productContext } from '../../../contexts/ProductContext';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '800px',
    maxHeight: 'fit-content',
  },
  link: {
    textDecoration: 'none',
  },
  topbox: {
    minHeight: '120px',
    maxHeight: 'fit-content',
    marginTop: '10px',
    marginBottom: '25px',
    backgroundColor: '#f2f2f2',
  },
  shopbox: {
    height: 'fit-content',
    position: 'relative',
  },
  filterbox: {
    height: 'fit-content',
    marginTop: '20px',
    padding: '20px 0',
    overflow: 'hidden',
    backgroundColor: '#f2f2f2',
    position: 'sticky',
    [theme.breakpoints.down('sm')]: {
      height: '50px',
      padding: '0',
    },
  },
  productsbox: {
    height: 'fit-content',
  },

  ul: {
    listStyleType: 'none',
  },

  li: {
    margin: '5px 0',
  },
}));

function Printed() {
  const classes = useStyles();
  //   const [products, setproducts] = React.useState([]);

  const { products, setProducts: setproducts } = useContext(productContext);
  const [solidproducts, setsolidproducts] = React.useState();
  //   console.log(products);

  //   console.log(solids);

  return (
    <Grid item container xs={12} className={classes.root} justify='center'>
      <Container maxWidth='lg' className={classes.topbox}>
        <Typography variant='h2' align='center'>
          Shop Solids From Variety of Fabric and collection across india
        </Typography>
      </Container>
      <Grid
        item
        container
        xs={12}
        justify='space-evenly'
        className={classes.shopbox}
      >
        <Grid
          item
          container
          xs={12}
          sm={10}
          direction='row'
          className={classes.productsbox}
        >
          {products.map((product) => {
            if (product.productpattern == 'Printed') {
              return <Product key={product.productid} product={product} />;
            }
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Printed;
