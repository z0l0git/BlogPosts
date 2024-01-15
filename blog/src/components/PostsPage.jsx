import { document } from "postcss";
import { useState } from "react";
import { PostsHeader } from "@/components/PostsHeader";
import { Posts } from "@/components/Posts";
import { Button } from "@/components/Button";

export const PostsPage = (props) => {
  const { homeCheck = true } = props;
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
    <div className="align-self md:w-[1216px] flex flex-col gap-[32px] items-center">
      <div className="flex flex-col gap-[32px] align-self">
        <h2 className="text-[24px] font-[700]">All Blog Posts</h2>
        {homeCheck ? <PostsHeader /> : null}
        <div className="flex w-full flex-wrap gap-[20px]">
          {postsData.map((post, index) => (
            <Posts key={index} image={post.image} />
          ))}
        </div>
      </div>
      <Button />
    </div>
  );
};
