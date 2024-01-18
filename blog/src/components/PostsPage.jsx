import axios from "axios";
import { useState, useEffect } from "react";
import { PostsHeader } from "@/components/PostsHeader";
import { Posts } from "@/components/Posts";

export const PostsPage = (props) => {
  const { homeCheck = true } = props;
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(homeCheck ? 9 : 30);

  const clickHandler = () => {
    setPage(page + 4);
  };

  useEffect(() => {
    const url = `https://dev.to/api/articles?top=3&per_page=${page}`;
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
  }, [page]);

  const postsData = [
    { image: "/mock1.jpeg" },
    { image: "/mock1.jpeg" },
    { image: "/mock1.jpeg" },
    { image: "/mock1.jpeg" },
    { image: "/mock1.jpeg" },
    { image: "/mock1.jpeg" },
    { image: "/mock1.jpeg" },
    { image: "/mock1.jpeg" },
    { image: "/mock1.jpeg" },
  ];
  return (
    <div className="align-self md:align-self-start flex flex-col gap-[32px] items-center px-[16px] md:px-[0px]">
      <div className="flex flex-col gap-[32px] align-self">
        <h2 className="text-[24px] font-[700]">All Blog Posts</h2>
        {homeCheck ? <PostsHeader /> : null}
        <div className="flex w-full justify-center flex-wrap gap-[20px]">
          {loader && <div className="w-full bg-black">Loading...</div>}
          {data.map((post, index) => (
            <Posts
              key={index}
              image={post.cover_image ?? "/mockhead.jpeg"}
              btext={post.tag_list[0]}
              title={post.title}
              date={post.readable_publish_date}
              articleID={post.id}
            />
          ))}
        </div>
      </div>
      <div
        className="w-[123px] h-[48px] flex items-center justify-center border [3px solid #E5E5E5] rounded-[6px] cursor-pointer"
        onClick={() => clickHandler()}
      >
        <p className="text-[#696A75] text-[16px] font-[500]">Load More</p>
      </div>
    </div>
  );
};
