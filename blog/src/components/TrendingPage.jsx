import { TrendingContent } from "@/components/TrendingContent";
import axios from "axios";
import { useEffect, useState } from "react";

export const TrendingPage = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const url = "https://dev.to/api/articles?top=10&per_page=10";
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

  const tredingData = [
    {
      cover_image: "/mock1.jpeg",
      badge: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "/mock1.jpeg",
      badge: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "/mock1.jpeg",
      badge: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "/mock1.jpeg",
      badge: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "/mock1.jpeg",
      badge: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: "/mock1.jpeg",
      badge: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ];
  return (
    <div className="flex flex-col items-start gap-[30px] w-full md:w-[1216px] mx-auto overflow-auto cursor-pointer scrollhide">
      <h2 className="text-[24px] font-[700] align-self-start w-full text-start sticky left-0">
        Trending
      </h2>
      <div className="flex gap-[30px] px-[20px] md:w-fit">
        {loader && <div className="w-full bg-black">Loading...</div>}
        {data.map((item, index) => (
          <TrendingContent
            key={index}
            image={item.cover_image ?? "/mock1.jpeg"}
            badge={item.tag_list[0]}
            title={item.title}
            articleID={item.id}
          />
        ))}
      </div>
    </div>
  );
};
