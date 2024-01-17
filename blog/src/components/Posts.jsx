import Image from "next/legacy/image";
import { useRouter } from "next/router";

export const Posts = (props) => {
  const {
    image = "/mockhead.png",
    btext = "Technology",
    title = "",
    date = "",
    articleID = "",
  } = props;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${articleID}`);
  };
  return (
    <div
      className="align-self w-[360px] h-[476px] p-[16px] flex flex-col gap-[16px] cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-full h-[240px] relative">
        <Image
          src={image}
          alt="post"
          layout="fill"
          className="rounded-[6px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className="px-[10px] py-[4px] bg-transparent rounded-[6px] text-[#fff] font-[500] w-fit">
          <p className="text-[#4B6BFB] font-bold">{btext}</p>
        </div>
        <h2 className="text-[24px] font-[600] leading-[40px]">{title}</h2>
        <p className="text-[16px] font-[400] text-[#97989F]">{date}</p>
      </div>
    </div>
  );
};
