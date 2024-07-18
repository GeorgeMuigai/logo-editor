import { Download } from "lucide-react"
import Logo from "./Logo"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <div className="p-4 shadow-sm flex justify-between border-b border-[#e1e6ee]">
        <Logo />
        <Button className="text-center flex justify-between gap-2"> <Download className="h-4 w-4"/> Download</Button>
    </div>
  )
}

export default Header