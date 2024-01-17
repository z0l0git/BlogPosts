import Image from "next/image";
import { Badge } from "@/components/Badge";
import { useRouter } from "next/router";

export const SliderContent = (props) => {
  const { img = "", btext = "", title = "", date = "", articleID = "" } = props;
  const router = useRouter();
  return (
    <div
      className={`w-full h-full top-0 relative transition
      duration-[4000] ease-in-out shrink-0
      rounded-[12px] z-1 overflow-hidden cursor-pointer hover:scale-105`}
      onClick={() => router.push(`/blog/${articleID}`)}
    >
      <Image
        src={img}
        layout="fill"
        priority="high"
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
    </div>
  );
};
