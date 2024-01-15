import Image from "next/image";
import { Badge } from "@/components/Badge";
import { useState } from "react";
export const SliderContent = (props) => {
  return (
    <div className="w-full h-[600px] relative rounded-[12px]">
      <Image
        src={"/mock1.jpeg"}
        layout="fill"
        objectFit="cover"
        className="rounded-[12px]"
      />
      <div className="p-[40px] w-1/2 bottom-3 left-3 absolute bg-[#FFFFFF] rounded-[16px]">
        <Badge text="Technology" />
        <h2 className="text-[36px] font-[600] text-[#181A2A] leading-[40px]">
          Grid system for better Design User Interface
        </h2>
        <p className="text-[16px] font-[400] text-[#97989F]">August 20, 2022</p>
      </div>
    </div>
  );
};
