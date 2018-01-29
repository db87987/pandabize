import React from "react"
import PropTypes from "prop-types"
import Product from "./Product"
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <div>Products:</div>
        <div>{this.props.products.map((product) => <Product product={product} key={product.id} />)}</div>
      </div>
    );
  }
}

export default Products
