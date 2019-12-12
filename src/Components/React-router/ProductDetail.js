import React, { Component } from 'react';
class ProductDetail extends Component {
  
  render() {
    var {match} = this.props;
    var name = match.params.name;
    console.log(match)
    console.log(name)
    return (
      <div>chi tiet san pham: {name}</div>
    )
  }
}

export default ProductDetail;