import { SliderPage } from "@/components/SliderPage";
import { TrendingPage } from "@/components/TrendingPage";
import { PostsPage } from "@/components/PostsPage";

export default function Home() {
  return (
    <div className="flex flex-col gap-[30px] md:gap-[100px] w-full items-center sansText">
      <SliderPage />
      <TrendingPage />
      <PostsPage />
    </div>
  );
}
