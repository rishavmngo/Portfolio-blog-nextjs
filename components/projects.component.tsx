import { projects } from "@/lib/data";
import Image from "next/image";
import React from "react";

export default function Projects() {
    return (
        <section className="w-full">
            {projects.map((items, index) => {
                return (
                    <div key={`project-${index}`} className="group h-26 my-20 ">
                        <h3 className="text-3xl text-[#363636] mb-10">
                            <span className="text-[#B87650] mr-4">
                                {(index + 1).toString().padStart(2, "0")}.
                            </span>
                            {items.title}
                        </h3>
                        <div className="flex flex-row justify-between sm:group-even:flex-row-reverse ">
                            <div className="">
                                <p className="text-[#656565] my-8">
                                    {items.description}
                                </p>
                                <ul className="flex gap-4">
                                    {items.tags.map((tag, index) => (
                                        <li
                                            key={`tags-${index}`}
                                            className="p-1 px-4 text-white bg-[#E1B399] rounded-full"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Image
                                src={items.image}
                                height="300"
                                width="350"
                                alt={items.title}
                                className=" hidden sm:block rounded-xl object-fit hover:opacity-90"
                            />
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
