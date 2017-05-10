import React from 'react';
import './src/stylesheets/ui.scss';

export const MakeUpDayCount = React.createClass({
  render() {
    return (
      <div className="make-up-day-count">
        <div className="total-days">
          <span> 5 days</span>
        </div>
        <div className="concealer-days">
          <span> 2 days</span>
        </div>
        <div className="foundation-days">
          <span> 2 days</span>
        </div>
      </div>
    )
  }
})
