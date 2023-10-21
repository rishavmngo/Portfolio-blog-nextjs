import { getAllPostId, getPost } from "@/lib/posts";
import "./post.css";

export async function generateStaticParams() {
    const posts = getAllPostId();

    return posts.map((post) => ({
        slug: post.id,
    }));
}

export default async function Post({ params }) {
    const data = await getPost(params.slug);
    return (
        <main className="-mt-5 min-h-screen bg-white dark:bg-[#171717] w-full transition-colors ">
            <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
                <div
                    className="blogs"
                    dangerouslySetInnerHTML={{ __html: data.contentHtml }}
                />
            </section>
        </main>
    );
}
