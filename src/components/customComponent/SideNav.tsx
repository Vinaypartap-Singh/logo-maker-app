import { Image, Pen, Shield } from "lucide-react";
import { useState } from "react";

export default function SideNav({ selectedIndex }: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItem = [
    {
      logo: Pen,
      title: "Logo",
    },
    {
      logo: Image,
      title: "Background",
    },
    {
      logo: Shield,
      title: "Upgrade",
    },
  ];

  return (
    <div className="p-5">
      <div>
        {menuItem.map((data, index) => {
          return (
            <h2
              onClick={() => {
                setActiveIndex(index);
                selectedIndex(index);
              }}
              key={index}
              className={`p-4 cursor-pointer font-medium transition-all mt-5 hover:bg-red-600 hover:text-white rounded-sm flex items-center gap-3 ${
                activeIndex === index ? "bg-red-600 text-white" : ""
              } `}
            >
              <data.logo className="h-5 w-5" />
              {data.title}
            </h2>
          );
        })}
      </div>
    </div>
  );
}
