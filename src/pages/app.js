import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/Layout'
import PrivateRoute from '../components/PrivateRoute'
import Profile from '../components/Profile'
import Login from '../components/Login'
import { Auth } from '../services/auth'
import SuccessSignUp from './success-sign-up'

const auth = new Auth()

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <SuccessSignUp path="/app/success-sign-up" component={SuccessSignUp} />
    </Router>
  </Layout>
)

export default App
