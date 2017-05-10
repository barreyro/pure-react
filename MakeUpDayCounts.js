import './src/stylesheets/ui.scss';

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}

export const MakeUpDayCount = ({total, concealer, foundation, goal}) => (
  <div className="make-up-day-count">
    <div className="total-days">
      <span>{total}</span>
      <span>days</span>
    </div>
    <div className="concealer-days">
      <span>{concealer}</span>
      <span>days</span>
    </div>
    <div className="foundation-days">
      <span>{foundation}</span>
      <span>days</span>
    </div>
    <div>
      <span>
        {calcGoalProgress(
            total,
            goal
        )}
      </span>
    </div>
  </div>
)
