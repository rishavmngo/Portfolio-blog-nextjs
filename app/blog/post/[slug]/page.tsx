import { getAllPostId, getPost } from "@/lib/posts";
import "./post.css";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

export async function generateStaticParams() {
    const posts = getAllPostId();

    return posts.map((post) => ({
        slug: post.id,
    }));
}

export default async function Post({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    const data = await getPost(params.slug);
    return (
        <main className="-mt-5 pt-20 min-h-screen bg-white dark:bg-[#171717] w-full transition-colors ">
            <section className=" mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 ">
                <div className="mb-10 flex justify-between">
                    <Link
                        href="/blog"
                        className="text-xl text-black p-2 px-3 border dark:border-white flex items-center rounded-lg hover:bg-[#06b6d4]/50 dark:text-white  border-black"
                    >
                        <BsArrowLeft />
                    </Link>
                    <Link
                        href="/"
                        className="text-xl p-2 dark:!text-white border dark:border-white flex items-center rounded-lg hover:bg-[#06b6d4]/50 border-black"
                    >
                        Home
                    </Link>
                </div>
                <div
                    className="blogs"
                    dangerouslySetInnerHTML={{ __html: data.contentHtml }}
                />
            </section>
        </main>
    );
}
