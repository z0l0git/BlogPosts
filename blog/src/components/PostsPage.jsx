import { document } from "postcss";
import { useState } from "react";

export const PostsPage = () => {
  const [color, setColor] = useState("");

  const menuData = ["Design", "Travel", "Fashion", "Technology", "Branding"];

  return (
    <div className="w-full md:w-[1216px] flex flex-col gap-[32px]">
      <h2 className="md:block hidden text-[24px] font-[700]">All Blog Posts</h2>
      <div className="text-[#495057] font-[700] text-[20px] flex justify-between">
        <div className="flex gap-[20px]">
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
