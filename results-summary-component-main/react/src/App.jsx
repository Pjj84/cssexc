import './App.css'

function App() {

  return (
    <div className='box'>
      <div className='card'>
        <div className='resultHeading'><span>Your Result</span></div>
        <div className='circle'>
          <h1>76</h1>
          <h5>of 100</h5>
        </div>
        <div className='description'>
          <h3>Great</h3>
          <p>You scored higher than 65% of the people who have taken these test</p>
        </div>
      </div>
      <div className='summery'>
        <span className='summeryHeading'><h3>Summery</h3></span>
        <div className='reaction'>
          <div className='content'>
          <img alt='icon' src='/assets/images/icon-reaction.svg'></img>
          <h5>Reaction</h5>
          </div>
          <div className='content'>
            <span style={{'color':'hsl(224, 30%, 27%)','marginRight':'7px'}}>80</span><span style={{'color':'hsl(224, 30%, 27%)', 'opacity':0.5}}> / 100</span>
          </div>
        </div>
        <div className='memory'>
        <div className='content'>
          <img alt='icon' src='/assets/images/icon-reaction.svg'></img>
          <h5>Memory</h5>
          </div>
          <div className='content'>
            <span style={{'color':'hsl(224, 30%, 27%)','marginRight':'7px'}}>92</span><span style={{'color':'hsl(224, 30%, 27%)', 'opacity':0.5}}> / 100</span>
          </div>
        </div>
        <div className='verbal'>
        <div className='content'>
          <img alt='icon' src='/assets/images/icon-reaction.svg'></img>
          <h5>Verbal</h5>
          </div>
          <div className='content'>
            <span style={{'color':'hsl(224, 30%, 27%)','marginRight':'7px'}}>61 </span><span style={{'color':'hsl(224, 30%, 27%)', 'opacity':0.5}}> / 100</span>
          </div>
        </div>
        <div className='visual'>
        <div className='content'>
          <img alt='icon' src='/assets/images/icon-reaction.svg'></img>
          <h5>Visual</h5>
          </div>
          <div className='content'>
            <span style={{'color':'hsl(224, 30%, 27%)','marginRight':'7px'}}>72 </span><span style={{'color':'hsl(224, 30%, 27%)', 'opacity':0.5}}> / 100</span>
          </div>
        </div>
        <div className='continue'>
          <h5>Continue</h5>
        </div>
      </div>
    </div>
  )
}

export default App
