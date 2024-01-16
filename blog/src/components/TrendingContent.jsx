import Image from "next/legacy/image";
import { Badge } from "@/components/Badge";

export const TrendingContent = (props) => {
  const { image, badge = "", title = "" } = props;
  return (
    <div className="relative w-[280px] h-[310px] ">
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
