import React, { Component } from 'react'
import ProfilePhoto from './ProfilePhoto'
import ProfileBadge from './ProfileBadge'

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <ProfilePhoto />
        <ProfileBadge />
      </div>
    )
  }
}

export default Profile
