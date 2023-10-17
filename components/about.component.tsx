import Image from "next/image";
import React from "react";

export default function About() {
    return (
        <section className="w-full mb-24">
            <h4 className="text-[#363636] text-4xl flex-start mb-[40px]">
                About <span className="text-[#B87650]">me</span>
            </h4>
            <div className="flex gap-20">
                <div className="flex-1 flex flex-col justify-between flex-wrap">
                    <p className="text-1xl text-[#656565] ">
                        Hello, My name is Rishav Raj. I built apps for web. I
                        made many{" "}
                        <span className="text-[#B87650] ">web apps </span>and
                        few{" "}
                        <span className="text-[#B87650]">
                            command line tools
                        </span>
                        . I love exploring computers either software or
                        underling hardware.
                    </p>
                    <div className="">
                        <h5 className="text-1xl text-[#656565] font-bold mb-3">
                            I work with following technologies
                        </h5>
                        <ul className="columns-2 list-disc list-inside text-[#888888]">
                            <li>Typescript</li>
                            <li>Next js</li>
                            <li>Tailwind css</li>
                            <li>Golang</li>
                            <li>Postgres</li>
                            <li>C/C++</li>
                        </ul>
                    </div>
                </div>
                <Image
                    src="/profile.png"
                    alt="rishav raj profile pic"
                    width="400"
                    height="400"
                    className="object-fit hidden sm:block rounded-lg  shadow-xl"
                />
            </div>
        </section>
    );
}
