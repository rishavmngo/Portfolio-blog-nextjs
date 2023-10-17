"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center">
            <div className="text-[#363636] dark:text-white mb-20">
                <h3 className="text-5xl">I am</h3>
                <motion.h1
                    className="relative text-9xl z-20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        duration: ".9",
                        delay: "0.2",
                    }}
                >
                    Rishav Raj
                    <motion.div
                        className="absolute rounded-full -right-6 -top-2 -z-20 w-[80px] h-[80px] bg-[#B87650]"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            duration: ".9",
                            delay: "0.2",
                        }}
                    ></motion.div>
                </motion.h1>
            </div>
            <div className=" mb-[1.8rem] sm:mb-[6.8rem] text-[#656565] dark:text-white p-1 px-2 rounded border border-[1.9px] border-[#656565] cursor-pointer hover:bg-[#B87650] hover:text-gray-200">
                Resume
            </div>
            <div className="text-[#363636] text-4xl">
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
