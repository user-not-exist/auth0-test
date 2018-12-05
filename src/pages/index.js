import React from 'react'
import { Link } from 'gatsby'
import { getUser, isLoggedIn } from '../services/auth'
import 'antd/dist/antd.css'
import Layout from '../components/Layout'

// import { Button } from 'antd'
// const StyledButton = styled(Button)`
//   && {
//     border: 2px solid red;
//   }
// `

const IndexPage = (props) => {
  console.log({ props })
  return (
    <Layout style="background: white">
      <h1>Hi {isLoggedIn() ? getUser().name : 'people'}</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your <Link to="/app/profile">profile</Link>
          </>
        ) : (
          <>
            You should <Link to="/app/login">log in</Link> to see restricted content
          </>
        )}
      </p>
      <div>
        <h3>
          <b>Page examples:</b>
        </h3>
        <Link to="/resetPassword">resetPassword</Link>
        <br />
        <Link to="/countdown">countdown</Link>
        <br />
        <Link to="/wizard">wizard</Link>
      </div>
    </Layout>
  )
}

export default IndexPage
