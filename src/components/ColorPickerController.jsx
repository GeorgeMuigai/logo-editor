import { useState } from "react"
import ColorPicker from "react-best-gradient-color-picker"


const ColorPickerController = ({hideController = false, selectedColor}) => {
  const [color, setColor] = useState("rgba(255, 255, 255, 1)")

  return (
    <div className="mt-3">
        <ColorPicker value={color} onChange={(e)=> {
          setColor(e);
          selectedColor(e)
        }} />
    </div>
  )
}

export default ColorPickerController