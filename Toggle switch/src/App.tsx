import { useState } from 'react'
import './App.css'

function App() {
  return (
    <SwitchBox />
  )
}

function SwitchBox(){
  const [toggled, setToggled] = useState(false)
  
  function handleClick(){
    setToggled(!toggled)
  }

  return(
    <div id='switchBackground'>
        <label htmlFor='switch' className={toggled ? 'switchBoxOn' : 'switchBoxOff'}>
            <input type='checkbox' className='switch' id='switch' onClick={handleClick}/>
        </label>
    </div>
  )
}

export default App
