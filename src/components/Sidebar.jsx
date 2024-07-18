import { useState } from "react";
import { Image, Shield, Smile } from "lucide-react"

const Sidebar = ({selectedIndex}) => {

    // useState
    const [activeIndex, setActiveIndex] = useState(0);

    const menuList = [
        {
            id:1,
            name: 'Icon',
            icon: <Smile/>,
            clickable: true
        },
        {
            id:2,
            name: "Background",
            icon: <Image/>,
            clickable: true
        },
        {
            id:3,
            name: "Upgrade",
            icon: <Shield/>,
            clickable: false
        }
    ]

  return (
    <div className="pt-1 fixed w-36 md:w-64 h-screen shadow-md shadow-[#e1e6ee]">
        {
            menuList.map((menu, index) => 
                <div key={index} onClick={menu.clickable ? () => {
                    setActiveIndex(index);
                    selectedIndex(index)    
                } : null}>                   
                    <h2 className={`p-2 px-5 text-lg text-gray-500 
                    hover:text-white hover:bg-primary mb-1
                    cursor-pointer flex items-center gap-2 ${activeIndex == index && "bg-primary text-white"}`}>{menu.icon} {menu.name}</h2>
                </div>
            ) 
        }
    </div>
  )
}

export default Sidebar