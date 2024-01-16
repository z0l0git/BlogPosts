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
    <div className="flex flex-col items-start gap-[30px] w-full md:w-[1216px] mx-auto overflow-auto scrollhide">
      <h2 className="text-[24px] font-[700] align-self-start w-full text-start sticky left-0">
        Trending
      </h2>
      <div className="flex gap-[30px] px-[20px] md:w-fit">
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
