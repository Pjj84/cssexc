//import { useState } from 'react'
import './App.css'
import work from './assets/images/icon-work.svg'
import study from './assets/images/icon-study.svg' 
import social from './assets/images/icon-social.svg'
import selfCare from './assets/images/icon-self-care.svg'
import play from './assets/images/icon-play.svg'
import exercise from './assets/images/icon-exercise.svg'
import ellipsis from './assets/images/icon-ellipsis.svg'
import profile from './assets/images/image-jeremy.png'
import { useState } from 'react'
import {daily} from './assets/daily.js'
import {weekly} from './assets/weekly.js'
import {monthly} from './assets/monthly.js'

function App() {
  const [data, setData] = useState(daily)
  const [timeFrame, setTimeFrame] = useState('day')

  function handleClick(e: Event){
    const inputTime: string = e.target.innerHTML;
    switch(inputTime){
      case 'Daily':{
        setData(daily)
        setTimeFrame('day')
        break
      }
      case 'Weekly':{
        setData(weekly)
        setTimeFrame('week')
        break
      }
      case 'Monthly':{
        setData(monthly)
        setTimeFrame('month')
        break
      }
      default:{
        setData(daily)
        setTimeFrame('day')
        break
      }
    }
  }


  return(
    <div className='container'>
      <div className='profile'>
        <div className='profile-upper'>
          <img alt='profileicon'src={profile}/>
          <h5>Report for</h5>
          <h2>Jeremy Robson</h2>
        </div>
        <div className='profile-downer'>
          <ul style={{'listStyleType': 'none'}}>
            <li onClick={handleClick}>Daily</li>
            <li onClick={handleClick}>Weekly</li>
            <li onClick={handleClick}>Monthly</li>
          </ul>
        </div>
      </div>
      <div className='orange'>
        <div className='upper'>
          <img alt='work' src={work}/>
        </div>
        <div className='downer'>
          <div style={{'display':'flex', 'flexDirection':'row', 'justifyContent':'space-around'}}>
            <h4>Work</h4>
            <img alt='ellipsis' src={ellipsis} />
          </div>
          <h2>{data.work.current}hrs</h2>
          <h5>Last {timeFrame} - {data.work.previous}hrs</h5>
        </div>
      </div>
      <div className='aqua'>
        <div className='upper'>
          <img alt='work' src={play}/>
        </div>
        <div className='downer'>
          <div style={{'display':'flex', 'flexDirection':'row', 'justifyContent':'space-around'}}>
            <h4>Play</h4>
            <img alt='ellipsis' src={ellipsis} />
          </div>
          <h2>{data.play.current}hrs</h2>
          <h5>Last {timeFrame} - {data.play.previous}hrs</h5>
        </div>
      </div>
      <div className='red'>
        <div className='upper'>
          <img alt='work' src={study}/>
        </div>
        <div className='downer'>
          <div style={{'display':'flex', 'flexDirection':'row', 'justifyContent':'space-around'}}>
            <h4>Study</h4>
            <img alt='ellipsis' src={ellipsis} />
          </div>
          <h2>{data.study.current}hrs</h2>
          <h5>Last {timeFrame} - {data.study.previous}hrs</h5>
        </div>
      </div>      
      <div className='green'>
        <div className='upper'>
          <img alt='work' src={exercise}/>
        </div>
        <div className='downer'>
          <div style={{'display':'flex', 'flexDirection':'row', 'justifyContent':'space-around'}}>
            <h4>Exercise</h4>
            <img alt='ellipsis' src={ellipsis} />
          </div>
          <h2>{data.exercise.current}hrs</h2>
          <h5>Last {timeFrame} - {data.exercise.previous}hrs</h5>
        </div>
      </div>
      <div className='purple'>
        <div className='upper'>
          <img alt='work' src={social}/>
        </div>
        <div className='downer'>
          <div style={{'display':'flex', 'flexDirection':'row', 'justifyContent':'space-around'}}>
            <h4>Social</h4>
            <img alt='ellipsis' src={ellipsis} />
          </div>
          <h2>{data.social.current}hrs</h2>
          <h5>Last {timeFrame} - {data.social.previous}hrs</h5>
        </div>
      </div>
      <div className='yellow'>
        <div className='upper'>
          <img alt='work' src={selfCare}/>
        </div>
        <div className='downer'>
          <div style={{'display':'flex', 'flexDirection':'row', 'justifyContent':'space-around'}}>
            <h4>Self-Care</h4>
            <img alt='ellipsis' src={ellipsis} />
          </div>
          <h2>{data.care.current}hrs</h2>
          <h5>Last {timeFrame} - {data.care.previous}hrs</h5>
        </div>
      </div>  
    </div>
  )
}

export default App
