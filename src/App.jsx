import { useEffect, useState } from 'react'

import './App.css'
import Header from './components/Header'
import IconController from './components/IconController'
import Sidebar from './components/Sidebar'
import BackgroundController from './components/BackgroundController'
import IconPreview from './components/IconPreview'
import { UpdateStorageContext } from './components/context/UpdateStorageContext'
// import { Button } from './components/ui/button'

function App() {

  let storageData = {}
  const prevData = JSON.parse(localStorage.getItem("values"));

  useEffect(() => {
    if (Object.keys(prevData).length  <= 1) {
      const defaultValues = {
        iconSize: 50,
        iconRotate: 0,
        iconColor: "fff",
        icon: "Smile",
        iconBg: "rgb(206, 206, 206)",
        iconRadius: 0,
        iconPadding: 0
      }

      storageData = localStorage.setItem("values", JSON.stringify(defaultValues));

      console.log(storageData);
    } else {
      console.log(prevData);
      return;
    }
  }, []);

  const [contId, setContId] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({})

  const storageValues = JSON.parse(localStorage.getItem("values"));
  return (
    <UpdateStorageContext.Provider value={{updateStorage, setUpdateStorage}}>
      <Header/>
      <Sidebar selectedIndex={(value) => {
        setContId(value)
      }} />
      <div className='a-controller ml-64 grid grid-cols-1 md:grid-cols-6 fixed'>
        <div className='icon-bg md:col-span-2 p-3 pb-5 overflow-auto h-screen'>
          {contId == 0 ? <IconController /> : contId == 1 ? <BackgroundController /> : setContId(contId)}
        </div>
        <div className='md:col-span-3 '>
          <IconPreview />
        </div>
        <div className={"bg-rgba(255, 25, 255, 1)"}>Ads Side</div>
      </div>
    </UpdateStorageContext.Provider>
  )
}

export default App
