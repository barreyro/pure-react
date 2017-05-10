import React from 'react';
import { render } from 'react-dom';
import { MakeUpDayCount } from '../MakeUpDayCounts';

window.Reaact = React

render(
  <MakeUpDayCount total={50}
                  concealer={20}
                  foundation={10}
                  goal={100}/>,
  document.getElementById('react-container')
)
