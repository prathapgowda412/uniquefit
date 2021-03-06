import { makeStyles } from '@material-ui/core';

const shopStyles = makeStyles((theme) => ({
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    position: 'sticky',
    [theme.breakpoints.down('sm')]: {
      height: '50px',
      padding: '0',
    },
  },
  productsbox: {
    height: 'fit-content',
  },

  cardproduct: {
    width: '100%',
  },
  filterproducts: {
    fontSize: '21px',
    marginBottom: '20px',
  },
  flitercont: {
    height: 'fit-content',
    width: '80%',
    position: 'relative',
    // justifyContent: 'center',
    // backgroundColor: 'grey',
  },
  ul: {
    listStyleType: 'none',
  },
  fliterhead: {
    fontSize: '24px',
  },
  li: {
    margin: '5px 0',
  },
  labeltext: {
    fontSize: '18px',
    marginLeft: '5px',
  },
  checkboxinput: {
    height: '0px',
  },
  inputcheckbox: {
    color: 'blue',
  },
  divider: {
    height: '1.5px',
    // width: '90%',
    margin: '20px 0',
    postion: 'relative',
    backgroundColor: '#d3d3d3',
  },
  hidecomp: {
    height: '50px',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'white',
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  applybutton: {
    backgroundColor: '#387a76',
    color: 'white',
    padding: '8px 48px',
  },
  mobfilterbox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mobFiltContainer: {
    width: 'fit-content',
    height: 'fit-content',
    padding: '10px 30px',
  },
}));

export default shopStyles;
