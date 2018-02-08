import React from "react"
import PropTypes from "prop-types"
import { Redirect } from 'react-router-dom'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, redirectToHome: false };
  }

  componentDidMount() {
    fetch(`/api/v1/products/${this.props.match.params.id}`)
    .then(response => {
      if (!response.ok) { throw response }
      return response.json();
    }).then(data => {
      this.setState({ product: data })
    })
    .catch(error => {
      this.setState({ redirectToHome: true })
    })
  }

  render () {
    if (this.state.redirectToHome) {
      return (
        <Redirect to="/"/>
      )
    }

    return (
      <div>
        <h3>{ this.state.product.name }</h3>
        <div>{ this.state.product.description }</div>
      </div>
    );
  }
}

export default Product
