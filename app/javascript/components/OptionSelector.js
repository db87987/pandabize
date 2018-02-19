import React from "react"

class OptionSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.list.options[0].value_id }
    this.selectOption = this.selectOption.bind(this);
  }

  selectOption(event) {
    this.setState({ value: event.target.value })
    let selectedOption = this.props.list.options.find(value => value.value_id == event.target.value)
    this.props.selectHandler(selectedOption);
    event.preventDefault();
  }

  render () {
    return (
      <div>
        <h5>{ this.props.list.name }</h5>
        <select className="form-control" id="variant" onChange={this.selectOption} value={this.state.value}>
          <option disabled value='0' key='0'>Select</option>
          {this.props.list.options.map((option) => <option key={option.value_id} value={option.value_id}>{ option.value }</option>)}
        </select>
      </div>
    );
  }
}

export default OptionSelector
