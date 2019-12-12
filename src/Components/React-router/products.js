import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'
import ProductDetail from './ProductDetail';
class Products extends Component {
  render() {
    var productList = [

      {
        id: 1,
        slug: 'samsumg',
        name: 'samsung',
        price: 1234
      },
      {
        id: 2,
        slug: 'fsfdsung',
        name: 'ssdfung',
        price: 1234
      },
      {
        id: 3,
        slug: 'sdfsfg',
        name: 'sdfsfg',
        price: 13234
      }
    ]
    var { match } = this.props;
    var url = match.url;
    var result = productList.map((product, index) => {
      return (
        <NavLink to={`${url}/${product.name}`} key={index} >
          <li className="list-group-item">
            {product.id}-{product.name} -{product.price}
          </li>
        </NavLink >
      )
    })
    return (
      <div>
        <h1>danhsachsanpham</h1>
        <ul className="list-group">
          {result}
        </ul>
        <div className="row">
          <Route path="/products/:name" component={ProductDetail} />
        </div>
      </div >
    )
  }
}

export default Products;