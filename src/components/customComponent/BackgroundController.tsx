import { useContext, useEffect, useState } from "react";
import { Slider } from "../ui/slider";
import ColorPickerComponent from "./ColorPIckerComponenet";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

export default function BackgroundController() {
  const [rounded, setRounded] = useState(0);
  const [padding, setPadding] = useState(0);
  const [color, setColor] = useState("#000");
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };
    setUpdateStorage(updateValue);

    localStorage.setItem("value", JSON.stringify(updateValue));
  }, [rounded, padding, color]);
  return (
    <div className="p-10">
      <div>
        <label className="flex justify-between items-center my-3">
          Radius <span>{rounded}</span>
        </label>
        <Slider
          defaultValue={[0]}
          max={512}
          step={1}
          onValueChange={(value: any) => setRounded(value)}
        />
      </div>

      {/* padding component */}
      {/* <div>
        <label className="flex justify-between items-center my-3">
          Padding <span>{padding}px</span>
        </label>
        <Slider
          defaultValue={[0]}
          max={200}
          step={1}
          onValueChange={(value: any) => setPadding(value)}
        />
      </div> */}
      <div className="mt-10">
        <ColorPickerComponent selectedColor={(color: any) => setColor(color)} />
      </div>
    </div>
  );
}
