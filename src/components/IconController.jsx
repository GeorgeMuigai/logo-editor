import { useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'

import { Smile  } from "lucide-react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "./context/UpdateStorageContext";


const IconController = () => {

  const storageValues = JSON.parse(localStorage.getItem("values"));

  const [size, setSize] = useState(storageValues?.iconSize);
  const [degree, setDegree] = useState(storageValues?.iconRotate);
  const [color, setColor] = useState(storageValues?.iconColor);

  // context 
  const {updateStorage, setUpdateStorage} = useContext(UpdateStorageContext);


  useEffect(() => {

    const updatedValues = {
      ...storageValues,
      iconSize: size,
      iconRotate: degree,
      iconColor: color,
      icon: "Smile"
    }

    setUpdateStorage(updatedValues); // update context
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
        <p>{storageValues?.iconSize} px</p>
      </div>

      <div className="slider mb-8">
        <Slider defaultValue={[storageValues?.iconSize]} min={50} max={300} step={1} onValueChange={(value) => setSize(value)}/>
      </div>

      <div className="labels mb-2 flex items-center justify-between">
        <label>Rotate</label>
        <p>{storageValues?.iconRotate} {'\u00B0'}</p>
      </div>

      <div className="slider mb-8">
        <Slider defaultValue={[storageValues?.iconRotate]} min={0} max={360} step={1} onValueChange={(value) => setDegree(value)}/>
      </div>

      <div className="color">
        <label>Icon Color</label>
        <ColorPickerController hideController={false} selectedColor={(color)=> {
          setColor(color);
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