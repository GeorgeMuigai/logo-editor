import { Image, PenIcon, Shield } from "lucide-react"

const Sidebar = () => {

    const menuList = [
        {
            id:1,
            name: 'icon',
            icon: PenIcon
        },
        {
            id:2,
            name: "Background",
            icon: Image
        },
        {
            id:3,
            name: "Upgrade",
            icon: Shield
        }
    ]
  return (
    <div className="fixed w-64 h-screen shadow-md shadow-[#e1e6ee]">
        {
            menuList.map((menu, index) => 
                <div key={index}>                    
                    <h2 className="p-2 px-5 text-lg text-gray-500 
                    hover:text-white hover:bg-primary mb-1">{menu.name}</h2>
                </div>
            ) 
        }
    </div>
  )
}

export default Sidebar