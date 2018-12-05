import React from 'react'
import Navigation from './Navigation'
import Logo from './Logo'
import Profile from './Profile'

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <div className="wrap">
          <div className="wrap__inner">
            <Navigation />
            <Logo />
            <Profile />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
