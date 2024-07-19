import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";

const BackgroundController = ({selectedColor}) => {

  const [bg, setBg] = useState("fff")
  const [rounded, setRounded] = useState(0);
  const [padding, setPadding] = useState(0);

  const storageValues = JSON.parse(localStorage.getItem('values'));

  useEffect(() => {

    const updatedValues = {
      ...storageValues,
      iconBg: bg,
      iconRadius: rounded,
      iconPadding: padding,
    }

    localStorage.setItem("values",JSON.stringify(updatedValues));
  })

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
        <p>{padding} px</p>
      </div>
      <div className="slider mb-8">
        <Slider defaultValue={[padding]} min={0} max={300} step={1} onValueChange={(value) => setPadding(value)}/>
      </div>

      <div className="color">
        <label>Background {bg}</label>
        <ColorPickerController hideController={false} selectedColor={(color)=> {
          setBg(color);
          selectedColor(color)
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