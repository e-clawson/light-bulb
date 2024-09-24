import bulbOn from './assets/bulb-on.png'
import bulbOff from  './assets/bulb-off.png'

import './App.css'
import { useState } from 'react'

export default function App({handleClick}) {
  const [light, setLight] = useState(true); 
  
  function changeLight() {
    setLight(!light);
    handleClick()
  }

  const lightOn = light ? bulbOn : bulbOff;
  
  return (
    <div>
      <h1>This room is LIT</h1>
      <img src={lightOn} alt="light bulb on" />
      <div className='switch'>
        <div className='switch-button'onClick={changeLight} ></div>
      </div>

      <input type="range" ></input>
    </div>
  )
}

