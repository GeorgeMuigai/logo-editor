import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

import { Smile  } from "lucide-react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";


const IconController = ({selectedColor}) => {

  const [size, setSize] = useState(50);
  const [degree, setDegree] = useState(0);
  const [color, setColor] = useState("fff");

  const storageValues = JSON.parse(localStorage.getItem("values"));

  useEffect(() => {

    const updatedValues = {
      ...storageValues,
      iconSize: size,
      iconRotate: degree,
      iconColor: color,
      icon: "smile"
    }

    localStorage.setItem('values', JSON.stringify(updatedValues));

  }, [size, degree, color, storageValues])

  return (
    <div className="icon-controller h-full box-border">
      <div className="content h-150">
      <label>Icon</label>
      <div className="p-3 w-[50px] h-[50px] rounded-md my-2 cursor-pointer bg-gray-200">
        <Smile className="" />
      </div>

      <div className="labels mb-2 flex items-center justify-between">
        <label>Size</label>
        <p>{size} px</p>
      </div>

      <div className="slider mb-8">
        <Slider defaultValue={[size]} min={50} max={300} step={1} onValueChange={(value) => setSize(value)}/>
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
        <ColorPickerController hideController={false} selectedColor={(color)=> {
          setColor(color);
          selectedColor(color)
        }}/>
      </div>
      </div>
    </div>
  )
}

IconController.propTypes = {
  selectedColor: PropTypes.string,
}

export default IconController