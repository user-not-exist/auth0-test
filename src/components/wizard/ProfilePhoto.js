import React from 'react'
import profilePhoto from '../../images/user.png'

class ProfilePhoto extends React.Component {
  render() {
    return (
      <a href className="ProfilePhoto">
        {' '}
        <img src={profilePhoto} alt="User photo" width={61} height={61} />{' '}
      </a>
    )
  }
}

export default ProfilePhoto
