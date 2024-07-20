import PropTypes from 'prop-types';

import { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from './context/UpdateStorageContext';

const BackgroundController = () => {

  const storageValues = JSON.parse(localStorage.getItem('values'));

  const [bg, setBg] = useState(storageValues?.iconBg);
  const [rounded, setRounded] = useState(storageValues?.iconRadius);
  const [padding, setPadding] = useState(storageValues?.iconPadding);

  // context
  const {updateStorage, setUpdateStorage} = useContext(UpdateStorageContext);


  useEffect(() => {

    const updatedValues = {
      ...storageValues,
      iconBg: bg,
      iconRadius: rounded,
      iconPadding: padding,
    }

    setUpdateStorage(updatedValues); // update context
    localStorage.setItem("values",JSON.stringify(updatedValues));
  })

  return (
    <div className="bg-controller h-full box-border pt-5">
      <div className="content h-150">

      <div className="labels mb-2 flex items-center justify-between">
        <label>Border Radius</label>
        <p>{storageValues?.iconRadius} px</p>
      </div>
      <div className="slider mb-8">
        <Slider defaultValue={[storageValues?.iconRadius]} min={0} max={300} step={1} onValueChange={(value) => setRounded(value)}/>
      </div>

      <div className="labels mb-2 flex items-center justify-between">
        <label>Padding</label>
        <p>{storageValues?.iconPadding} px</p>
      </div>
      <div className="slider mb-8">
        <Slider defaultValue={[storageValues?.iconPadding]} min={0} max={300} step={1} onValueChange={(value) => setPadding(value)}/>
      </div>

      <div className="color">
        <label>Background {bg}</label>
        <ColorPickerController hideController={false} selectedColor={(color)=> {
          setBg(color);
        }}/>
      </div>
      </div>
    </div>
  )
}

BackgroundController.propTypes = {
  selectedColor: PropTypes.string,
}

export default BackgroundController