import bulbOn from './assets/bulb-on.png'
import bulbOff from  './assets/bulb-off.png'
import clickSound from './assets/light-switch-sound.mp3'

import './App.css'
import { useState } from 'react'

export default function App() {
  const [light, setLight] = useState(true); 
  const [audio] = useState(new Audio (clickSound))
  
  const changeLight = () => {
    setLight(!light);
    audio.currentTime = 0;
    audio.play()
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

