import React, { Component } from 'react';
//import Index from './Components/React-router/index';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


class NavBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              React & Material-UI Sample Application
                </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default NavBar;