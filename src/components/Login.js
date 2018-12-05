import React from 'react'
import { navigate } from 'gatsby'
import { Auth } from '../services/auth'

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (Auth.isAuthenticated) {
      navigate(`/app/profile`)
    }

    return (
      <>
        <h1>Log in</h1>
        <form
          method="post"
          onSubmit={(event) => {
            this.handleSubmit(event)
            navigate(`/app/profile`)
          }}
        >
          <label>
            Username (john)
            <input
              style={{ width: 100 }}
              type="text"
              name="username"
              onChange={this.handleUpdate}
            />
          </label>
          <label>
            Password (pass)
            <input
              style={{ width: 100 }}
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>{' '}
          <input style={{ width: 100 }} type="submit" value="Log In" />
        </form>
      </>
    )
  }
}

export default Login
