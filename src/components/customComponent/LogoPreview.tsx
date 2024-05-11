import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import { useContext, useEffect, useState } from "react";

export default function LogoPreview({ downloadIcon }) {
  // Get LocalStorage Data

  const [storageData, setStorageData] = useState<any>();
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageValue = JSON.parse(localStorage.getItem("value"));

    setStorageData(storageValue);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      downloadPngLogo();
    }
  }, [downloadIcon]);

  const downloadPngLogo = () => {
    const downloadLogoDiv = document.getElementById("downloadLogoDiv");
    html2canvas(downloadLogoDiv, {
      backgroundColor: null,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "Logo_craft";
      downloadLink.click();
    });
  };

  const Icon = ({ name, color, size, rotate }: any) => {
    const LuicdeIcon = icons[name];
    if (!LuicdeIcon) {
      return;
    }
    return (
      <LuicdeIcon
        color={color}
        size={size}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div
        id="downloadLogoDiv"
        className="w-[512px] h-[512px] flex justify-center items-center"
        style={{
          background: `${storageData?.bgColor}`,
          borderRadius: `${storageData?.bgRounded}px`,
        }}
      >
        <Icon
          color={storageData?.color}
          size={storageData?.iconSize}
          name={storageData?.icon}
          rotate={storageData?.degree}
        />
      </div>
    </div>
  );
}
