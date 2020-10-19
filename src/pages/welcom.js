import React, { Component } from 'react';
import { render } from 'react-dom';
// import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
// import AppBar from '@material-ui/AppBar';
// import FontIcon from '@material-ui/FontIcon';
// import Drawer from '@material-ui/Drawer';
// import MenuItem from '@material-ui/MenuItem';
// import './style.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	AppBar,
	Avatar,
	Box,
	Icon,
	List,
	ListItem,
	makeStyles,
	Menu,
	MenuItem,
	MenuList,
	Toolbar,
	Typography,
	Drawer,
	IconButton,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
const styles =theme=>( {
  navBar: {'top': AppBar.height},
  root:{
        height:'100px',
        backgroundCplor:'red',
    },
    baricon:{
        fonntSize:'24px',
        display:'none',
        [theme.breakpoints.up('md')]: {
            display:'block',
          },
    }
})



// const useStyles =makeStyles(theme=>({
//     root:{
//         height:'100px',
//     }
// }))

class Welcom extends Component {
  constructor() {
    super();
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  render() {
      const {classes}=this.props;
    return (
    //   <MuiThemeProvider>
        <div>
          <AppBar
            zDepth={10}
            title="Some title"
            className={classes.root}
          >
          <FontAwesomeIcon icon={faBars} className={classes.baricon} onClick={this.handleToggle}     >menu</FontAwesomeIcon>
              helo
          </AppBar>
          {/* <FontIcon onClick={this.handleToggle} className="material-icons">menu</FontIcon> */}
          <Drawer
            open={this.state.open}
            width={200}
            containerStyle={styles.navBar}>
          <FontAwesomeIcon icon={faBars} onClick={this.handleToggle}  style={{fontSize:'28px',}}   >menu</FontAwesomeIcon>

            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </div>
    //   </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Welcom);
