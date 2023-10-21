"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center">
            <div className="text-[#363636] dark:text-white mb-20 ">
                <h3 className="text-5xl">I am</h3>
                <h1 className="relative sm:text-8xl md:text-9xl text-7xl z-20 ">
                    Rishav Raj
                    <motion.div
                        className="absolute rounded-full -right-6 -top-2 -z-20 w-[80px] h-[80px] bg-[#B87650] max-[640px]:left-[125px] max-[640px]:top-[120px] max-[640px]:hidden"
                        // initial={{ opacity: 0, scale: 0, y: 500 }}
                        // animate={{ opacity: 1, scale: 1, y: 0 }}

                        animate={{
                            opacity: [0, 1],
                            scale: [0, 1],
                            backgroundColor: [
                                "black",
                                "black",
                                "black",
                                "black",
                                "#B87650",
                            ],

                            borderRadius: ["0%", "100%"],
                        }}
                        transition={{
                            ease: "easeIn",
                            duration: "1",
                        }}
                    ></motion.div>
                </h1>
            </div>
            <a
                href="/resume.pdf"
                download={true}
                className="mt-[4rem] mb-[5.5rem] sm:mb-[6.8rem] text-[#656565] dark:text-white p-1 px-2 rounded border border-[1.9px] border-[#656565] cursor-pointer hover:bg-[#B87650] hover:text-gray-200 active:bg-[#A8653F]"
            >
                Resume
            </a>
            <div className="text-[#363636] dark:text-white text-2xl sm:text-4xl">
                <h4>
                    <span className="text-[#B87650]">Developer</span> on duty
                </h4>
                <h4>
                    love making <span className="text-[#B87650]">web apps</span>
                </h4>
            </div>
        </section>
    );
}
