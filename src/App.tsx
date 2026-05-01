import React from 'react'
import BirthdayLanding from './Landing'
import About from './About'
import Messages from './Messages'
// import Gallery from './Gallery'

const App : React.FC = () => {
  return (
    <div>
      <BirthdayLanding />
      <Messages />
      {/* <Gallery /> */}
      <About/>  
    </div>
  )
}

export default App
