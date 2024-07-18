import { useState } from "react";

import { Smile  } from "lucide-react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";


const IconController = () => {

  const [Size, setSize] = useState(50);
  const [degree, setDegree] = useState(0);

  return (
    <div className="icon-controller">
      <label>Icon</label>
      <div className="p-3 w-[50px] h-[50px] rounded-md my-2 cursor-pointer bg-gray-200">
        <Smile className="" />
      </div>

      <div className="labels mb-2 flex items-center justify-between">
        <label>Size</label>
        <p>{Size} px</p>
      </div>

      <div className="slider mb-8">
        <Slider defaultValue={[Size]} min={50} max={300} step={1} onValueChange={(value) => setSize(value)}/>
      </div>

      <div className="labels mb-2 flex items-center justify-between">
        <label>Rotate</label>
        <p>{degree} {'\u00B0'}</p>
      </div>

      <div className="slider mb-8">
        <Slider defaultValue={[degree]} min={0} max={360} step={1} onValueChange={(value) => setDegree(value)}/>
      </div>

      <div className="color">
        <label>Icon Color</label>
        <ColorPickerController hideController={false} />
      </div>
    </div>
  )
}

export default IconController