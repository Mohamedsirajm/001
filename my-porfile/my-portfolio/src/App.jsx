import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Topcontent from './topcontent/topcontent'
import Sckills from './skills/sckills'
import Procontainer from './projectss/procontainer'
import Contact from './contact/contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<Topcontent/>
<Sckills/>
<Procontainer/>
<Contact />
    </>
  )
}

export default App
