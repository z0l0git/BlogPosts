import { SliderContent } from "@/components/SliderContent";
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import "flowbite";

export const SliderPage = (props) => {
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    getArticles();
    console.log("data Items =", data);
  }, [click]);

  const getArticles = async () => {
    await fetch("https://dev.to/api/articles?username=gereltuyamz")
      .then((response) => response.json())
      .then((data) => setData(data), console.log(data));
  };

  // const mockData = props.data;

  const mockData = [
    {
      cover_image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--mxsa0VKl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r65dvo7hg07josz81xyq.jpeg",
      tags: "Technology",
      title: "Grid system for better Design User Interface",
      readable_publish_date: "August 20, 2022",
    },
    {
      cover_image: "/mock1.jpeg",
      tags: "Technology",
      title: "Grid system for fucking retards",
      readable_publish_date: "August 20, 2022",
    },
    {
      cover_image: "/mockhead.jpg",
      tags: "Technology",
      title: "Grid System this you fucking casual",
      readable_publish_date: "August 20, 2022",
    },
  ];

  return (
    <div
      id="animation-carousel"
      data-carousel="static"
      className="hidden md:flex w-[100%] md:align-self relative flex-col items-center gap-[11px]"
    >
      <div
        className="max-w-[1216px] w-[100%] h-[600px] relative flex flex-col overflow-hidden scrollhide"
        onClick={() => {
          setClick(!click);
        }}
      >
        {mockData.map((item, index) => (
          <SliderContent
            key={index}
            id={`slide${index}`}
            img={item.cover_image}
            btext={item.tags}
            title={item.title}
            date={item.readable_publish_date}
          />
        ))}
      </div>
      <div className="flex gap-[9px] w-[63%] justify-end">
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
