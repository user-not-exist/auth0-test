import React, { Component, Fragment } from 'react'
import Header from './Header'
import Hero from './Hero'
import SetupSteps from './SetupSteps'
import Form from './Form'

class WizardWrap extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <main>
          <SetupSteps />
          <Form />
        </main>
      </Fragment>
    )
  }
}

export default WizardWrap
