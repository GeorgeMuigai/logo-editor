import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import IconController from './components/IconController'
import Sidebar from './components/Sidebar'
import BackgroundController from './components/BackgroundController'
// import { Button } from './components/ui/button'

function App() {
  const [contId, setContId] = useState(0);
  return (
    <>
      <Header/>
      <Sidebar selectedIndex={(value) => {
        setContId(value)
      }} />
      <div className='ml-64 grid grid-cols-1 md:grid-cols-6 overflow-hidden'>
        <div className='icon-bg md:col-span-2 p-3 pb-5 overflow-auto h-screen'>
          {contId == 0 ? <IconController /> : contId == 1 ? <BackgroundController /> : setContId(contId)}
        </div>
        <div className='md:col-span-3 bg-yellow-200'>Icon Preview</div>
        <div className='bg-yellow-300'>Ads Side</div>
      </div>
    </>
  )
}

export default App
