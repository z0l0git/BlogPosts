import { SliderContent } from "@/components/SliderContent";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "flowbite";

export const SliderPage = (props) => {
  const slideData = [
    {
      img: "/mock1.jpeg",
      btext: "Technology",
      title: "Grid system for better Design User Interface",
      date: "August 20, 2022",
    },
    {
      img: "/mockhead.jpg",
      btext: "Technology",
      title: "This is not a fucking joke bro",
      date: "August 24, 2024",
    },
  ];

  return (
    <div
      id="animation-carousel"
      data-carousel="static"
      className="hidden md:flex w-[1216px] relative flex-col items-end gap-[11px] overflow-hidden"
    >
      <div className="w-full h-[600px] relative flex overflow-hidden ">
        {slideData.map((item, index) => (
          <SliderContent
            key={index}
            id={`slide${index}`}
            img={item.img}
            btext={item.btext}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>

      <div className="flex gap-[9px]">
        <button
          className="p-[10px] border-2 border-gray rounded-[6px] cursor-pointer"
          data-carousel-prev
        >
          <IoIosArrowBack color="gray" size={20} />
        </button>
        <button
          className="p-[10px] border-2 border-gray rounded-[6px] cursor-pointer"
          data-carousel-next
        >
          <IoIosArrowForward color="gray" size={20} />
        </button>
      </div>
    </div>
  );
};
