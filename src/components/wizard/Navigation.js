import React from 'react'
import NavigationToggler from './NavigationToggler'
import NavigationList from './NavigationList'

class Navigation extends React.Component {
  render() {
    return (
      <nav className="Navigation">
        <NavigationToggler />
        <NavigationList />
      </nav>
    )
  }
}

export default Navigation
