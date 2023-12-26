import { allPosts } from "contentlayer/generated";
import PostCard from "@/components/PostCard";

export default function BlogPage() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl text-sky-100">
        Next.js + Contentlayer Example
      </h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
