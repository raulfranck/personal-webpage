import { Post } from "contentlayer/generated";
import Link from "next/link";

export default function PostCard(post: Post) {
  return (
    <Link href={post.url}>
      <div className="mb-8 bg-zinc-900 w-[100%] flex flex-col gap-3 rounded-lg px-10 py-5">
        <h2 className="mb-1 text-2xl font-bold text-sky-100">{post.title}</h2>
        <p className="text-gray-400 ">{post.description}</p>
        <time dateTime={post.date} className="  text-gray-400 font-bold">
          {new Intl.DateTimeFormat("pt-BR").format(new Date(post.date))}
        </time>

        <div className="flex flex-column gap-2 mt-2">
          {post.stack?.map((stack) => (
            <p className="text-gray-400 rounded-lg bg-zinc-800 p-1 px-2 font-bold">
              {stack}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
}
