import React from "react"
import PropTypes from "prop-types"
import ProductsListItem from "./ProductsListItem"

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    fetch('/api/v1/products.json')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({ products: data })
    })
  }

  render () {
    return (
      <div>
        <h3>Products:</h3>
        <div className="row">
          <div>{this.state.products.map((product) => <ProductsListItem product={product} key={product.id} />)}</div>
        </div>
      </div>
    );
  }
}

export default ProductsList
