import { useState } from "react";
import "./App.css";
import Header from "./components/customComponent/Header";
import SideNav from "./components/customComponent/SideNav";
import IconController from "./components/customComponent/IconController";
import BackgroundController from "./components/customComponent/BackgroundController";
import LogoPreview from "./components/customComponent/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();
  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div>
        <Header DownloadIcon={setDownloadIcon} />
        <div className="w-64 fixed h-full border">
          <SideNav selectedIndex={(value: any) => setSelectedIndex(value)} />
        </div>
        <div className="ml-64 grid grid-cols-1 lg:grid-cols-6 h-full">
          <div className="md:col-span-2">
            {selectedIndex === 0 ? (
              <IconController />
            ) : (
              <BackgroundController />
            )}
          </div>
          <div className="md:col-span-3">
            <LogoPreview downloadIcon={downloadIcon} />
          </div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
}

export default App;
