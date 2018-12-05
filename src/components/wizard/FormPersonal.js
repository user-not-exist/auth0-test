import React from 'react'
import FormItem from './FormItem'

class FormPersonal extends React.Component {
  render() {
    return (
      <form action className="FormPersonal">
        <p>Personal Data</p>
        <FormItem id="name" type="text" text="Name" />
        <FormItem id="lastName" type="text" text="Last name" />
        <FormItem id="email" type="email" text="Contact e-mail" />
      </form>
    )
  }
}

export default FormPersonal
