import { useState } from "react";

export const PostsHeader = () => {
  const [color, setColor] = useState("");

  const menuData = ["Design", "Travel", "Fashion", "Technology", "Branding"];

  return (
    <div className="w-[100%] md:block hidden">
      <div className="text-[#495057] font-[700] text-[12px] md:text-[20px] flex justify-between">
        <div className="flex gap-[15px] md:gap-[20px]">
          {menuData.map((item, index) => {
            return (
              <p
                id={index}
                className={`cursor-pointer ${
                  color === item ? "text-green-500" : ""
                }`}
                key={index}
                onClick={() => {
                  setColor(item);
                }}
              >
                {item}
              </p>
            );
          })}
        </div>
        <div>
          <p>View All</p>
        </div>
      </div>
    </div>
  );
};
