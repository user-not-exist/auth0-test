import React from 'react'
import { getCookie } from 'tiny-cookie'

const Profile = () => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: {getCookie('USER_NICKNAME')}</li>
      <li>E-mail: {getCookie('USER_EMAIL')}</li>
    </ul>
  </>
)

export default Profile
