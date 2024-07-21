import PropTypes from 'prop-types';

import { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from './context/UpdateStorageContext';

const BackgroundController = () => {

  const storageValues = JSON.parse(localStorage.getItem('values'));

  const [bg, setBg] = useState(storageValues?.iconBg ? storageValues?.iconBg : "rgb(210, 198, 198)");
  const [rounded, setRounded] = useState(storageValues?.iconRadius ? storageValues?.iconRadius : 0);
  const [padding, setPadding] = useState(storageValues?.iconPadding ? storageValues?.iconPadding : 0);

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
  }, [bg, rounded, padding, storageValues])

  const invertedPadding = 170 - storageValues?.iconPadding[0];

  return (
    <div className="bg-controller h-full box-border pt-5">
      <div className="content h-150">

      <div className="labels mb-2 flex items-center justify-between">
        <label>Border Radius</label>
        <p>{rounded} px</p>
      </div>
      <div className="slider mb-8">
        <Slider defaultValue={[rounded]} min={0} max={300} step={1} onValueChange={(value) => setRounded(value)}/>
      </div>

      <div className="labels mb-2 flex items-center justify-between">
        <label>Padding</label>
        <p>{invertedPadding} px</p>
      </div>
      <div className="slider mb-8">
        <Slider defaultValue={[padding]} min={0} max={170} step={1} onValueChange={(value) => setPadding(value)}/>
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