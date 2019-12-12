import React, { Component } from 'react';
import Home from './Components/React-router/home';
import About from './Components/React-router/about';
import Contact from './Components/React-router/contact';
import Products from './Components/React-router/products';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />
  },
  {
    path: '/About',
    exact: true,
    main: () => <About />
  },
  {
    path: '/Contact',
    exact: true,
    main: () => <Contact />
  },
  {
    path: '/Products',
    exact: false,
    main: ({match}) => <Products match={match} />
  }
]

export default routes;