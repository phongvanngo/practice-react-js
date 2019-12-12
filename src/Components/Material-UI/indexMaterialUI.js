import React, { Component } from 'react';
//import Index from './Components/React-router/index';
import NavBar from './NavBar.js';
import CouresList from './CouresList';
import ButtonDemo from './ButtonDemo'
import GridDemo from './GridDemo';
import { Button } from '@material-ui/core';
import CssInJs from './CssInJs';

class IndexMaterialUI extends Component {
  render() {
    return (
      <div>
        <GridDemo />
      </div>
    )
  }
}

export default IndexMaterialUI;