import React from "react"
import PropTypes from "prop-types"
import { Redirect } from 'react-router-dom'
import OptionSelector from './OptionSelector'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: { variants: [] },
      availableVariants: [],
      groupedOptions: [],
      redirectToHome: false,
      selectedOptions: [],
      selectedVariant: { id: "none", sku: "none", options: [] }
    };

    this.initializeOptions = this.initializeOptions.bind(this);
    this.groupOptions = this.groupOptions.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.selectVariant = this.selectVariant.bind(this);
    this.optionsEqual = this.optionsEqual.bind(this);
    this.optionsFromSelection = this.optionsFromSelection.bind(this);
    this.variantOptions = this.variantOptions.bind(this);
  }

  componentDidMount() {
    fetch(`/api/v1/products/${this.props.match.params.id}`)
    .then(response => {
      if (!response.ok) { throw response }
      return response.json();
    }).then(data => {
      this.setState({ product: data, availableVariants: data.variants })
      this.initializeOptions()
    })
    .catch(error => {
      this.setState({ redirectToHome: true })
    })
  }

  initializeOptions() {
    let options = this.state.availableVariants.reduce((sum, variant) => {
      variant.options.forEach(option => {
        if (!sum.some(opt => opt.type_id == option.type_id && opt.value_id == option.value_id)) {
          return sum.push(option)
        }
      })
      return sum
    }, [])
    this.setState({ initialOptions: options })

    let selectedOptions = []
    options.forEach(option => {
      if (!selectedOptions.some(opt => opt.type_id == option.type_id)) {
        return selectedOptions.push(option)
      }
    })

    this.setState({ selectedOptions: selectedOptions })
    this.selectVariant()
    this.groupOptions(options)
  }

  selectVariant() {
    let variants = this.state.product.variants.reduce((sum, variant) => {
      if (this.optionsEqual(this.state.selectedOptions, variant.options)) {
        sum.push(variant)
      }
      return sum
    }, [])
    this.setState({ selectedVariant: variants[0] })
  }

  optionsEqual(selectedOptions, variantOptions) {
    return selectedOptions.every(option => {
      return variantOptions.find(opt => opt.type_id == option.type_id && opt.value_id == option.value_id)
    })
  }

  groupOptions(options) {
    let map = options.reduce((sum, option) => {
      let key = option.type_id
      sum[key] = sum[key] || []
      sum[key].push(option)
      return sum
    }, {})
    let groupedOptions = Object.keys(map).map(k => {
      return {type_id: k, name: map[k][0].type, options: map[k]};
    })
    this.setState({ groupedOptions: groupedOptions })
  }

  selectHandler(option) {
    let availableVariants = this.state.product.variants.filter(variant => {
      return variant.options.some(opt => opt.type_id == option.type_id && opt.value_id == option.value_id)
    })
    this.setState(
      { availableVariants: availableVariants },
      () => this.optionsFromSelection(option)
    );
  }

  optionsFromSelection(option) {
    let filtered = this.state.initialOptions.filter(opt => opt.type_id == option.type_id)
    let fromVariants = this.state.availableVariants.reduce((sum, variant) => {
      variant.options.forEach(option => {
        if (!sum.some(opt => opt.type_id == option.type_id && opt.value_id == option.value_id)) {
          return sum.push(option)
        }
      })
      return sum
    }, [])
    let subtotal = filtered.concat(fromVariants)
    let total = subtotal.reduce((x, y) => x.includes(y) ? x : [...x, y], [])
    this.groupOptions(total)
    this.updateSelectedOptions(option)
  }

  updateSelectedOptions(option) {
    let selectedOptions = this.state.selectedOptions.filter(opt => opt.type_id != option.type_id)
    selectedOptions.push(option)
    this.setState({ selectedOptions: selectedOptions })
  }

  variantOptions(variant) {
    return variant.options.map((option) => <span key={option.value_id}>{option.type}: {option.value} </span>)
  }

  render () {
    const { redirectToHome, selectedVariant, availableVariants, groupedOptions, selectedOptions } = this.state
    const { name, description, variants } = this.state.product

    if (redirectToHome) {
      return (
        <Redirect to="/"/>
      )
    }

    return (
      <div>
        <h3>{ name }</h3>
        <div>{ description }</div>
        <h4>Choose options:</h4>
        <div>{groupedOptions.map((option) => <OptionSelector key={option.type_id} list={option} selectHandler={this.selectHandler} />)}</div>
        <div>Selected variant: sku:{selectedVariant.sku} options: {this.variantOptions(selectedVariant)}</div>
        <div>
          <h5>Selected options:</h5>
          {selectedOptions.map(option => <div key={option.type_id}>type: {option.type} value: {option.value}</div>)}
        </div>
      </div>
    );
  }
}

export default Product
