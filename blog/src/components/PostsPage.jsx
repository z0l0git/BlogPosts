import { document } from "postcss";
import { useState } from "react";
import { PostsHeader } from "@/components/PostsHeader";

export const PostsPage = () => {
  return (
    <div className="w-full md:w-[1216px] flex flex-col gap-[32px]">
      <PostsHeader />
    </div>
  );
};
