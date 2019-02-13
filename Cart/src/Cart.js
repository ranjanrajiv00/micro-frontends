import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  onClick() {
    alert('Cart Clicked!');
  }
  render() {
    return (
      <div className="app-cart">
        Cart
          <button onClick={() => this.onClick()}>Click</button>
      </div>
    );
  }
}

export default Cart;
