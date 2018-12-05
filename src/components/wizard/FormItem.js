import React from 'react'

class FormItem extends React.Component {
  render() {
    return (
      <div className="FormItem">
        <label htmlFor={this.props.name}>{this.props.text}</label>{' '}
        <input type={this.props.type} id={this.props.name} />
      </div>
    )
  }
}

export default FormItem
