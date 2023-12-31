import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
// import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";

import Link from "next/link";
import { Mdx } from "@/components/Mdx";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  console.log(post);
  // const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="text-gray-300">
      <div className="my-8 text-center border-b border-sky-500 pb-5">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {new Intl.DateTimeFormat("en-US").format(new Date(post.date))}
        </time>
        <div className="flex justify-center flex-column gap-2 mt-4">
          {post.stack?.map((stack) => (
            <p className="text-gray-400 rounded-lg bg-zinc-800 p-1 px-2 font-bold">
              {stack}
            </p>
          ))}
        </div>
      </div>
      <Mdx code={post.body.code} />
    </article>
  );
};

export default PostLayout;

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return { title: post.title };
};
