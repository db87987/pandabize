import React from "react"
import { Link } from 'react-router-dom'

class ProductsListItem extends React.Component {
  render () {
    return (
      <div className="col-xs-6 col-lg-4">
        <h4>{this.props.product.name}</h4>
        <div>Description: {this.props.product.description}</div>
        <p><Link className="btn btn-default" to={`/products/${this.props.product.id}`} role="button">View details »</Link></p>
      </div>
    );
  }
}

export default ProductsListItem
