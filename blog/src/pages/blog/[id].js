import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/legacy/image";
import { useRouter } from "next/router";

function id() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [userdata, setUserData] = useState([]);

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const url = `https://dev.to/api/articles/${router.query.id}`;
    axios
      .get(url)
      .then((res) => {
        setLoader(false);
        setData(res.data);
        setUserData(res.data.user);
        console.log(res.data.url);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoader(false);
      });
  }, []);

  return (
    <div className="flex flex-col gap-[32px] justify-center items-center align-center px-[5%] md:px-[20%] sansText">
      <div className="flex flex-col gap-5">
        <h1 className="text-[36px] font-[700]">{data.title}</h1>
        <div className="flex gap-9">
          <div className="flex gap-4 rounded-full ">
            <Image
              src={userdata.profile_image_90 ?? ""}
              width={28}
              height={28}
              alt=""
              className="rounded-full"
            />
            <p>{userdata.name}</p>
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

export default id;
