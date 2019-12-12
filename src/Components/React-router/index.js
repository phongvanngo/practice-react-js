import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink, useRouteMatch, Switch } from 'react-router-dom'
import Home from './home';
import About from './about';
import Contact from './contact';
import './index.css';
import routes from './../../routes';

const menus = [
  {
    name: 'HOME',
    to: '/',
    exact: true
  },
  {
    name: 'ABOUT',
    to: '/About',
    exact: true
  },
  {
    name: 'CONTACT',
    to: '/Contact',
    exact: true
  },
  {
    name: 'PRODUCT',
    to: '/products',
    exact: false
  }
]

class index extends Component {
  render() {
    return (
      <Fragment>
        <Router>

          <nav id="sidebar">
            <div class="sidebar-header">
              <h3>Bootstrap Sidebar</h3>
            </div>

            <ul class="list-unstyled components">
              <p>Dummy Heading</p>
              <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                  <NavLink to="/home"> <li><a>Home 1</a></li> </NavLink>
                  <NavLink to="/about"><li><a>Home 2</a></li> </NavLink>
                  <NavLink to="/contact"><li><a>Home 3</a></li> </NavLink>
                </ul>
              </li>
              <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                  <NavLink to=""><li><a>Page 1</a></li></NavLink>
                  <NavLink to=""><li><a>Page 2</a></li></NavLink>
                  <NavLink to=""><li><a>Page 3</a></li></NavLink>
                </ul>
              </li>
              <NavLink to=""><li>
                <a>Portfolio</a>
              </li></NavLink>
              <NavLink to=""><li>
                <a>Contact</a>
              </li></NavLink>
            </ul>
          </nav>

          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
                  <i class="glyphicon glyphicon-align-left"></i>
                  <span>Toggle Sidebar</span>
                </button>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </Fragment>

    )
  }
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = menus;

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default index;