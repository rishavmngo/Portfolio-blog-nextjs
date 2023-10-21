import Link from "next/link";
import React, { FC } from "react";

// const posts = [
//     {
//         title: "This is a heading of my block",
//         description:
//             "Lorem impums is underrated i don’t understand why people hate it so much",
//         tags: ["Go"],
//         date: "2023-10-07",
//     },
// ];

interface postProps {
    title: string;
    description: string;
    date: string;
    tags: string;
    id: string;
}

const BlogPreview: FC<postProps> = ({ date, title, description, tags, id }) => {
    // const { date, title, description, tags } = props.data;

    return (
        <Link
            href={`blog/post/${id}`}
            className="p-8  pb-4 cursor-pointer rounded-md bg-[#D9D9D9] dark:bg-[#23292D] dark:border dark:border-2 dark:border-white/10 shadow-md hover:ring ring-black/0 hover:bg-gray-300 active:ring-black/40"
        >
            <h3 className="text-2xl text-[#909090] dark:text-[#B8B8B8]">
                {date}
            </h3>
            <div className="flex flex-col-reverse sm:flex-row my-5 gap-5">
                <div className="flex-1 flex flex-col gap-3">
                    <h2 className="text-3xl font-semibold text-[#1C1B1B] text-[#2D2D2D] dark:text-[#F0F0F0]">
                        {title}
                    </h2>
                    <p className="text-2xl text-[#575757] dark:text-[#8A8A8A]">
                        {description}
                    </p>
                </div>
                <div className="w-[200px] h-[200px] bg-[#C3C3C3]"></div>
            </div>
            <div>
                <span className="text-2xl dark:text-[#F0F0F0]">{tags}</span>
            </div>
        </Link>
    );
};

export default BlogPreview;
