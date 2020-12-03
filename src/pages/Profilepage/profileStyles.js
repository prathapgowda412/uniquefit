const { makeStyles } = require('@material-ui/core');

const profileStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    // height: 224,
    paddingTop: '50px',
    // backgroundColor: '#f2f2f2',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabindicator: {
    backgroundColor: 'green',
  },
  tabselected: {
    color: 'red',
  },
  link: {
    textDecoration: 'none',
    margin: '4px 2px',
  },
  linkbuton: {
    width: '140px',
    height: '48px',
  },
  carddetails: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default profileStyles;
