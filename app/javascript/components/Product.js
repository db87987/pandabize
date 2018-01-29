import React from "react"
import PropTypes from "prop-types"
class Product extends React.Component {
  render () {
    return (
      <div>
        <div>Name: {this.props.product.name}</div>
        <div>Description: {this.props.product.description}</div>
      </div>
    );
  }
}

export default Product
