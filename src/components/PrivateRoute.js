import React from 'react'
import { navigate } from 'gatsby'
import { Auth } from '../services/auth'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!Auth.isAuthenticated()) {
    // If the user is not logged in, redirect to the login page.
    navigate(`/`)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
