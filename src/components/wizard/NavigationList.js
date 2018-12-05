import React from 'react'
import NavigationItem from './NavigationItem'

class NavigationList extends React.Component {
  render() {
    return (
      <ul className="NavigationList">
        <NavigationItem />
        <li className="NavigationItem">
          <a href>Item 2</a>
        </li>
        <li className="NavigationItem">
          <a href>Item 2</a>
        </li>
      </ul>
    )
  }
}

export default NavigationList
