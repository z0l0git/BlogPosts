import Image from "next/legacy/image";
import { Badge } from "@/components/Badge";
import { useState } from "react";
import "flowbite";

export const SliderContent = (props) => {
  const {
    img,
    btext = "",
    title = "",
    date = "",
    carosel = "data-carousel-item",
  } = props;

  const getArticles = async () => {
    const data = await fetch("https://dev.to/api/articles?username=gereltuyamz")
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log(data);
  };

  return (
    <div
      className={`w-full h-full top-0 absolute transition
      duration-[4000] ease-in-out
      rounded-[12px] z-1 overflow-hidden`}
      onClick={getArticles}
      data-carousel-item={carosel}
    >
      <a>
        <Image
          src={img}
          layout="fill"
          // objectFit="cover"
          className="rounded-[12px] object-center overflow-hidden"
        />
        <div className="p-[40px] w-1/2 bottom-3 left-3 absolute bg-[#FFFFFF] rounded-[16px] flex flex-col gap-[16px]">
          <Badge text={btext} />
          <h2 className="text-[36px] font-[600] text-[#181A2A] leading-[40px]">
            {title}
          </h2>
          <p className="text-[16px] font-[400] text-[#97989F]">{date}</p>
        </div>
      </a>
    </div>
  );
};
