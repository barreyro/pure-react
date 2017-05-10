import './src/stylesheets/ui.scss';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';

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
        <Calendar />
      <span>days</span>
        
    </div>
    <div className="concealer-days">
      <span>{concealer}</span>
        <SnowFlake />
      <span>days</span>
    </div>
    <div className="foundation-days">
      <span>{foundation}</span>
        <Terrain />
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
