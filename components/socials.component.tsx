import React from "react";
import { socials } from "@/lib/data";

export default function Socials() {
    return (
        <section className="sm:fixed flex sm:flex-col left-3 sm:left-5  gap-4 sm:top-1/2 ">
            {socials.map((item, index) => {
                return (
                    <a
                        href={item.url}
                        target="_blank"
                        key={`socials-${index}`}
                        className="border border-black bg-red flex items-center p-4 rounded  text-[#B87650] hover:text-gray-100 text-[1.25rem] hover:bg-[#B87650] hover:border-[#B87650] transition-colors active:bg-[#A1603C]"
                    >
                        <item.icon />
                    </a>
                );
            })}
        </section>
    );
}
