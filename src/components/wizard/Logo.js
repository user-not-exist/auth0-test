import React from 'react'
import ketogainsLogo from '../../images/ketogains-logo.png'

class Logo extends React.Component {
  render() {
    return (
      <div className="Logo">
        <a className="Link" href="/">
          <img src={ketogainsLogo} alt="Ketogains logo" width={304} height={68} />
        </a>
      </div>
    )
  }
}

export default Logo
