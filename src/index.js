import React from 'react'
import { render } from 'react-dom'
import { hello, goodbye } from './lib'

const style = {
  backgroundColor: '#151837',
  color: 'white',
  fontFamily: 'verdana'
}

render(
  <div>
    {hello},
    {goodbye}
  </div>,
  document.getElementById('react-container')
)
