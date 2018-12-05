/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import { Auth } from '../services/auth'

const SuccessSignUp = () => {
  const auth = new Auth()
  auth.handleAuthentication()

  return <div>You are sign up.</div>
}

export default SuccessSignUp
