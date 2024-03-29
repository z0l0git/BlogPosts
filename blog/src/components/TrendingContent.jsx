import Image from "next/legacy/image";
import { Badge } from "@/components/Badge";
import { useRouter } from "next/router";

export const TrendingContent = (props) => {
  const { image, badge = "", title = "", articleID = "" } = props;
  const router = useRouter();
  const handleClick = () => {
    router.push(`/blog/${articleID}`);
  };
  return (
    <div
      className="relative w-[350px] md:w-[270px] h-[310px]"
      onClick={handleClick}
    >
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        className="rounded-[12px]"
      />
      <div className="flex flex-col gap-[16px] absolute bottom-0 items-start p-[30px]">
        <Badge text={badge} />
        <p className="text-[18px] font-[600] text-white">{title}</p>
      </div>
    </div>
  );
};
