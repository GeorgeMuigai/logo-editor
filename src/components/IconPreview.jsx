import { icons, Smartphone } from "lucide-react"
import { useContext, useEffect, useState } from "react";
import { UpdateStorageContext } from "./context/UpdateStorageContext";
import PropTypes from 'prop-types';

const IconPreview = () => {

    const [storageValues, setStorageValues] = useState()

    // Context
    const {updateStorage, setUpdateStorage} = useContext(UpdateStorageContext);

    useEffect(() => {
        const storageData = JSON.parse(localStorage.getItem('values'));
        setStorageValues(storageData)

        // console.log(storageData)
    }, [updateStorage])

    const Icon = ({name, color, size}) => {
        const LucidIcon = icons[name]

        if (!LucidIcon) return null;

        console.log(LucidIcon);
        return <LucidIcon color={color} size={size} />
    }

  return (
    <div className="icon-prev flex justify-center items-center">

        <div className="icon-holder p-3 border-2 border-dotted border-gray-400 h-[400px] w-[400px]">
            <div className="icon-border w-full h-full flex justify-center items-center rounded-[100]" style={{
                background: storageValues?.iconBg,
                borderRadius: storageValues?.iconRadius[0],
                padding: storageValues?.padding,
            }}>
                <Icon name={storageValues?.Icon} color={storageValues?.iconColor} size={storageValues?.iconSize}/>
                <Icon />
                {/* {console.log(storageValues?.icon, storageValues?.iconColor, storageValues?.iconSize)} */}
                {/* <Smartphone size={"200px"} /> */}
            </div>
        </div>

    </div>
  )
}

IconPreview.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
}

export default IconPreview