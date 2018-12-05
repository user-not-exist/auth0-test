import React from 'react'
import CountdownHeader from './CountdownHeader'
import CountdownContent from './CountdownContent'

class CountdownWrap extends React.Component {
  render() {
    return (
      <div className="CountdownWrap">
        <CountdownHeader />
        <CountdownContent />
      </div>
    )
  }
}

export default CountdownWrap
