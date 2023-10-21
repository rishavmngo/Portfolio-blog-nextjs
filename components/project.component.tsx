"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { projects } from "@/lib/data";

type ProjectProps = (typeof projects)[number];

export default function Project({
    title,
    description,
    tags,
    image,
    projectNumber,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group h-26 my-20 "
        >
            <h3 className="text-3xl text-[#363636] dark:text-white mb-10">
                <span className="text-[#B87650] mr-4">
                    {projectNumber.toString().padStart(2, "0")}.
                </span>
                {title}
            </h3>
            <div className="flex flex-row justify-between sm:group-even:flex-row-reverse ">
                <div className="">
                    <p className="text-[#656565] dark:text-[#cbcbcb] mb-8">
                        {description}
                    </p>
                    <ul className="flex gap-4">
                        {tags.map((tag, index) => (
                            <li
                                key={`tags-${index}`}
                                className="p-1 px-4 text-white bg-[#b87650] rounded-full"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <Image
                    src={image}
                    height="300"
                    width="350"
                    alt={title}
                    className=" hidden sm:block rounded-xl object-fit hover:opacity-90"
                />
            </div>
        </motion.div>
    );
}
