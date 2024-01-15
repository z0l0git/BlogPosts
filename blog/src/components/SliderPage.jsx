import { SliderContent } from "@/components/SliderContent";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const SliderPage = (props) => {
  return (
    <div className="hidden md:flex w-[1216px] flex-col items-end gap-[11px]">
      <SliderContent />
      <div className="flex gap-[9px]">
        <div className="p-[10px] border-2 border-gray rounded-[6px] cursor-pointer">
          <IoIosArrowBack color="gray" size={20} />
        </div>
        <div className="p-[10px] border-2 border-gray rounded-[6px] cursor-pointer">
          <IoIosArrowForward color="gray" size={20} />
        </div>
      </div>
    </div>
  );
};
