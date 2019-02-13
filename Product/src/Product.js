import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  onClick() {
    alert('Product Clicked!');
  }
  render() {
    return (
      <div className="app-product">
        Products
          <button onClick={() => this.onClick()}>Click</button>
      </div>
    );
  }
}

export default Product;
