import React from "react";
import "./style.css";
import BlogPreview from "@/components/blogPreview.component";
import { getPostData } from "@/lib/posts";
import Link from "next/link";

export default function Blog() {
    const posts = getPostData();
    return (
        <main className="pt-10 dark:bg-[#1A1D20]">
            <section className="min-h-screen max-w-[900px] border  border-2 border-white/10 flex-1 bg-white rounded-xl drop-shadow-xl m-auto p-10 flex flex-col items-center bg-[#E3EAD5] dark:bg-[#181B1E] transition-bg">
                <Link href="/" className="text-[#06b6d4] hover:underline">
                    Home
                </Link>
                <section>
                    <h1 className="text-3xl dark:text-white mb-10">Blogs</h1>
                </section>
                <section className="mt-10 flex flex-col gap-10 ">
                    {posts.map((post, index) => {
                        return (
                            <BlogPreview
                                key={index}
                                title={post.data.title}
                                description={post.data.description}
                                date={post.data.date}
                                tags={post.data.tags}
                                id={post.data.id}
                            />
                        );
                    })}
                </section>
            </section>
        </main>
    );
}
