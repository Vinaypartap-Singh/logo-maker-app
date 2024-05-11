import { Download } from "lucide-react";
import { Button } from "../ui/button";

export default function Header({ DownloadIcon }) {
  return (
    <div className="flex justify-between px-10 py-6 ">
      <h3 className="text-md font-bold text-red-600">
        <span className="text-2xl text-black">Logo</span>Craft
      </h3>
      <Button
        className="flex gap-x-3 bg-red-600 items-center"
        onClick={() => DownloadIcon(Date.now())}
      >
        <Download className="h-4 w-4" /> Download Now
      </Button>
    </div>
  );
}
