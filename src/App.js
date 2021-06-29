import React from 'react'
import './App.css';
const App = () => {
  return (
    <div className='container'>  
        <div className='main'>
            <h3 className='heading'>
              ToDo List
            </h3>
            <div className='inner'>
              <input type='text' placeholder='Enter your list' className='inp'/>
              <button className='btn'>
                +
              </button>
            </div>
            {/* place for next components */}
        </div>
    </div>
  )
}

export default App;
