import React from "react";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center">
            <div className="text-[#363636] mb-20">
                <h3 className="text-5xl">I am</h3>
                <h1 className="text-9xl">Rishav Raj</h1>
            </div>
            <div className=" mb-[1.8rem] sm:mb-[6.8rem] text-[#656565] p-1 px-2 rounded border border-[1.9px] border-[#656565] cursor-pointer hover:bg-[#B87650] hover:text-gray-200">
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
