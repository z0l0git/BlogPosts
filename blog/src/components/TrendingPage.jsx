import { TrendingContent } from "@/components/TrendingContent";

export const TrendingPage = () => {
  const tredingData = [
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
    <div className="flex flex-col items-center gap-[30px] w-full md:w-[1216px] overflow-x-scroll">
      <h2 className="md:block hidden text-[24px] font-[700] w-[1216px] text-start">
        Trending
      </h2>
      <div className="flex gap-[30px] w-fit">
        {tredingData.map((item, index) => (
          <TrendingContent
            key={index}
            image={item.image}
            badge={item.badge}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};
