import React, { Component } from 'react'
import CountdownTrackerItemValue from './CountdownTrackerItemValue'
import CountdownTrackerItemCount from './CountdownTrackerItemCount'

class CountdownTrackerItem extends Component {
  render() {
    return (
      <div className="CountdownTracker">
        <div className="CountdownTrackerItem">
          <CountdownTrackerItemValue value="32" />
          <CountdownTrackerItemCount count="days" />
        </div>
        <div className="CountdownTrackerItem">
          <CountdownTrackerItemValue value="24" />
          <CountdownTrackerItemCount count="hours" />
        </div>
        <div className="CountdownTrackerItem">
          <CountdownTrackerItemValue value="46" />
          <CountdownTrackerItemCount count="minutes" />
        </div>
      </div>
    )
  }
}

export default CountdownTrackerItem
