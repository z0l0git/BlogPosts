import React from "react";
import { useState } from "react";
import Image from "next/legacy/image";

function DetailPage({ data }) {
  const [loader, setLoader] = useState(true);
  console.log(data);
  return (
    <div className="flex flex-col gap-[32px] justify-center items-center align-center px-[5%] md:px-[20%] sansText">
      <div className="flex flex-col gap-5">
        <h1 className="text-[36px] font-[700]">{data.title}</h1>
        <div className="flex gap-9">
          <div className="flex gap-4 rounded-full ">
            <Image
              src={data.user.profile_image_90 ?? ""}
              width={28}
              height={28}
              alt=""
              className="rounded-full"
            />
            <p>{data.user.name}</p>
          </div>
          <p className="text-[16px] font-[400] text-[#97989F]">
            {data.readable_publish_date}
          </p>
        </div>
      </div>
      <Image
        src={data.cover_image ?? ""}
        width={1000}
        height={500}
        alt=""
        className="rounded-[12px]"
      />
      <p className="text-[20px] font-[400] text-[#3B3C4A] seriText"></p>
      <div className="align-center">
        {data.body_html && (
          <div dangerouslySetInnerHTML={{ __html: data.body_html }} />
        )}
      </div>
    </div>
  );
}

export default DetailPage;

export const getServerSideProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};
