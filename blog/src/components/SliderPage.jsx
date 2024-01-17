import { SliderContent } from "@/components/SliderContent";
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "axios";

export const SliderPage = (props) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const url = "https://dev.to/api/articles?top=1&per_page=10";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoader(false);
      });
  }, []);

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
  // const str = "<p>kajshdksjhd</p>";
  // console.log(str.replace(/<\/?[^>]+(>|$)/g, ""));

  return (
    <div className="hidden md:flex w-[100%] md:align-self relative flex-col items-center gap-[11px]">
      <div className="max-w-[1216px] w-full h-[600px] rounded-[12px] flex overflow-x-scroll scrollhide">
        {loader && <div className="w-full bg-black">Loading...</div>}
        {data &&
          data?.map((item, index) => {
            return (
              <SliderContent
                key={index}
                id={`slide${index}`}
                img={item.cover_image ?? ""}
                btext={item.tag_list[0]}
                title={item.title}
                date={item.readable_publish_date}
                articleID={item.id}
              />
            );
          })}
      </div>
      <div className="flex gap-[9px] w-[63%] justify-end">
        <button className="p-[10px] border-2 border-gray rounded-[6px] cursor-pointer">
          <IoIosArrowBack color="gray" size={20} />
        </button>
        <button className="p-[10px] border-2 border-gray rounded-[6px] cursor-pointer">
          <IoIosArrowForward color="gray" size={20} />
        </button>
      </div>
    </div>
  );
};
