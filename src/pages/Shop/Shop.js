import {
  Container,
  Grid,
  Typography,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Hidden,
  Button,
} from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';

// import dummydata from '../../data/dummydata.json';
import Product from './Product';
import { productContext } from '../../contexts/ProductContext';
import shopStyles from './shopStyles';
import LoadingSkeleton from './components/loadingSkeleton';

const filterBluePrint = {
  color: '',
  pattern: '',
  category: '',
  material: '',
};

const useStyles = shopStyles;
function Shop() {
  // const [patternFilter,setPatternFilter]
  const classes = useStyles();
  const { products } = useContext(productContext);
  let [filteredProducts, setFilteredProducts] = useState([]);
  let [filter, setFilter] = useState(filterBluePrint);
  useEffect(() => {
    if (products && products.length) {
      setFilteredProducts(products);
    }
  }, [products]);

  useEffect(() => {
    console.log('filter changed');
    // let filtProducts = products.map((product) => {
    // 	if (product.productpattern === filter.productpattern || product.producttype === filter.category) {
    // 		console.log(product);
    // 		return product;
    // 	}
    // });
    let filtProducts = products.filter(
      (product) =>
        product.productpattern === filter.pattern ||
        product.producttype === filter.category
    );
    console.log(filtProducts);
    setFilteredProducts(filtProducts);
  }, [filter]);
  const handleFilterChange = (event) => {
    if (event.target.checked) {
      setFilter((oldFilter) => ({
        ...oldFilter,
        [event.target.name]: event.target.value,
      }));
    } else {
      setFilter((oldFilter) => ({ ...oldFilter, [event.target.name]: '' }));
    }
  };

  // const filteredProducts=products.filter()

  return (
    <Grid item container xs={12} className={classes.root} justify='center'>
      <Grid
        item
        container
        xs={12}
        justify='space-evenly'
        className={classes.shopbox}
      >
        <Hidden mdUp>
          <Container className={classes.hidecomp}>helo</Container>
        </Hidden>
        <Hidden smDown>
          <Grid
            xs={12}
            justify='center'
            sm={3}
            id='filterbox'
            className={classes.filterbox}
          >
            <Container className={classes.flitercont}>
              <Typography className={classes.filterproducts}>
                Filter Products
              </Typography>
              <FormControl>
                <FormLabel>Color</FormLabel>
                <FormGroup column>
                  <FormControlLabel
                    value='Blue'
                    control={
                      <Checkbox
                        size='small'
                        className={classes.inputcheckbox}
                      />
                    }
                    label='Blue'
                    labelPlacement='end'
                  />
                  <FormControlLabel
                    value='top'
                    control={
                      <Checkbox
                        size='small'
                        className={classes.inputcheckbox}
                      />
                    }
                    label='Blue'
                    labelPlacement='end'
                  />
                  <FormControlLabel
                    value='top'
                    control={
                      <Checkbox
                        size='small'
                        className={classes.inputcheckbox}
                      />
                    }
                    label='Blue'
                    labelPlacement='end'
                  />
                  <FormControlLabel
                    value='top'
                    control={
                      <Checkbox
                        size='small'
                        className={classes.inputcheckbox}
                      />
                    }
                    label='Blue'
                    labelPlacement='end'
                  />
                </FormGroup>
              </FormControl>
              <Container maxWidth='xs' className={classes.divider} />
              <FormControl>
                <FormLabel>Pattern</FormLabel>
                <FormGroup column>
                  <FormControlLabel
                    value='Stripes'
                    control={
                      <Checkbox
                        name='pattern'
                        value='Stripes'
                        onChange={handleFilterChange}
                        size='small'
                        className={classes.inputcheckbox}
                      />
                    }
                    label='Stripes'
                    labelPlacement='end'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        size='small'
                        onChange={handleFilterChange}
                        value='Solids'
                        name='pattern'
                        className={classes.inputcheckbox}
                      />
                    }
                    label='Solids'
                    labelPlacement='end'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        size='small'
                        onChange={handleFilterChange}
                        value='Checks'
                        name='pattern'
                        className={classes.inputcheckbox}
                      />
                    }
                    label='Checks'
                    labelPlacement='end'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        size='small'
                        onChange={handleFilterChange}
                        value='Printed'
                        name='pattern'
                        className={classes.inputcheckbox}
                      />
                    }
                    label='Printed'
                    labelPlacement='end'
                  />
                </FormGroup>
              </FormControl>
              <Container maxWidth='xs' className={classes.divider} />
              <FormControl>
                <FormLabel>Category</FormLabel>
                <FormGroup column>
                  <FormControlLabel
                    value='Formal'
                    control={
                      <Checkbox
                        size='small'
                        className={classes.inputcheckbox}
                      />
                    }
                    label='Formal'
                    labelPlacement='end'
                  />
                  <FormControlLabel
                    value='Casual'
                    control={
                      <Checkbox
                        size='small'
                        className={classes.inputcheckbox}
                      />
                    }
                    label='Casual'
                    labelPlacement='end'
                  />
                  <FormControlLabel
                    value='Semi Formal'
                    control={
                      <Checkbox
                        size='small'
                        className={classes.inputcheckbox}
                      />
                    }
                    label='Semi Formal'
                    labelPlacement='end'
                  />
                </FormGroup>
              </FormControl>
            </Container>
            <Button className={classes.applybutton}>
              {' '}
              <Typography style={{ color: 'white' }}>Apply</Typography>{' '}
            </Button>
          </Grid>
        </Hidden>

        <Grid
          item
          container
          xs={12}
          sm={9}
          direction='row'
          className={classes.productsbox}
        >
          {filteredProducts && filteredProducts.length ? (
            <>
              {' '}
              {filteredProducts.reverse().map((product) => {
                return <Product key={product.productid} product={product} />;
              })}{' '}
            </>
          ) : (
            <Grid
              container
              spacing={2}
              justify='center'
              xs={12}
              style={{ paddingTop: '50px' }}
            >
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
              <LoadingSkeleton />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Shop;
