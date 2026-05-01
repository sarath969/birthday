import React from 'react'
import BirthdayLanding from './Landing'
import About from './About'
import Messages from './Messages'
import Galleryphotos from './Galleryphotos'
// import Gallery from './Gallery'

const App : React.FC = () => {
  return (
    <div>
      <BirthdayLanding />
      <Messages />
      <Galleryphotos />
      <About/>  
    </div>
  )
}

export default App
