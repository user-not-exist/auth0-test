import React, { Component } from 'react'
import { Link, navigate } from 'gatsby'
import { Auth } from '../services/auth'

export class NavBar extends Component {
  state = {
    isLoggedIn: false,
    message: '',
  }

  componentDidMount() {
    this.setState({ isLoggedIn: Auth.isAuthenticated() })
  }

  logout = (callback) => {
    Auth.logout()

    this.setState({ isLoggedIn: Auth.isAuthenticated() })
    callback()
  }

  render() {
    const { isLoggedIn, message } = this.state
    return (
      <div
        style={{
          display: 'flex',
          flex: '1',
          justifyContent: 'space-between',
          borderBottom: '1px solid #d1c1e0',
        }}
      >
        <span>{message}</span>

        <nav>
          <Link to="/">Home</Link>
          {` `}
          <Link to="/app/profile">Profile</Link>
          {` `}
          {isLoggedIn ? (
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault()
                this.logout(() => navigate(`/`))
              }}
            >
              Logout
            </a>
          ) : null}
        </nav>
      </div>
    )
  }
}
