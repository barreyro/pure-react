import React from 'react';
import './src/stylesheets/ui.scss';

export const MakeUpDayCount = React.createClass({
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  },

  calcGoalProgress(total, goal){
    return this.percentToDecimal(total/goal)
  },

  render() {
    return (
      <div className="make-up-day-count">
        <div className="total-days">
          <span> {this.props.total}</span>
          <span>  days</span>
        </div>
        <div className="concealer-days">
          <span> {this.props.concealer}</span>
          <span>  days</span>
        </div>
        <div className="foundation-days">
          <span> {this.props.foundation}</span>
          <span>  days</span>
        </div>
        <div>
          <span>
            {this.calcGoalProgress(
                this.props.total,
                this.props.goal
            )}
          </span>
        </div>
      </div>
    )
  }
})
