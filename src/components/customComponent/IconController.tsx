import { Smile, icons } from "lucide-react";
import { Slider } from "../ui/slider";
import { useContext, useEffect, useState } from "react";
import ColorPickerComponent from "./ColorPIckerComponenet";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

export default function IconController() {
  const [iconSize, setIconSize] = useState(280);
  const [degree, setDegree] = useState(0);
  const [color, setColor] = useState("#fff");
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      iconSize: iconSize,
      degree: degree,
      color: color,
      icon: "Smile",
    };
    setUpdateStorage(updateValue);

    localStorage.setItem("value", JSON.stringify(updateValue));
  }, [iconSize, degree, color]);

  return (
    <div className="p-10">
      <div className="space-y-5">
        <h3 className="font-bold text-2xl">Icon</h3>
        <div className="p-3 bg-gray-100 w-[50px] h-[50px] rounded-sm">
          <Smile />
        </div>
        <div>
          <label className="flex justify-between items-center my-3">
            Size <span>{iconSize} px</span>
          </label>
          <Slider
            defaultValue={[280]}
            max={512}
            step={1}
            onValueChange={(value: any) => setIconSize(value)}
          />
        </div>

        <div>
          <label className="flex justify-between items-center my-3">
            Degree <span>{degree}°</span>
          </label>
          <Slider
            defaultValue={[0]}
            max={360}
            step={1}
            onValueChange={(value: any) => setDegree(value)}
          />
        </div>

        <div>
          <ColorPickerComponent
            selectedColor={(color: any) => setColor(color)}
          />
        </div>
      </div>
    </div>
  );
}
