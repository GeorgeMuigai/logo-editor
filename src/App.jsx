// import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
// import { Button } from './components/ui/button'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Sidebar />
      <div className='ml-64'>Body</div>
    </>
  )
}

export default App
