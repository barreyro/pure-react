import React from 'react';
import { render } from 'react-dom';
import { MakeUpDayCount } from '../MakeUpDayCounts.js';

window.React = React

render(
  <MakeUpDayCount total={50}
                  concealer={20}
                  foundation={10}
                  goal={100}/>,
  document.getElementById('react-container')
)
