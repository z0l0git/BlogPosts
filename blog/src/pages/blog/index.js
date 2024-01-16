import { PostsPage } from "@/components/PostsPage";
export default function Home() {
  return (
    <div className="align-center">
      <PostsPage homeCheck={false} />
    </div>
  );
}
