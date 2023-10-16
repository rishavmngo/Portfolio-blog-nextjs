import React from "react";

export default function Header() {
    return (
        <div className="mt-10 mb-10">
            <span className="flex flex-row py-2 text-[1.6rem] text-[#BABABA]">
                <span className="border-r-[0.125rem] px-4 border-[#9A9A9A] hover:text-[#B87650] cursor-pointer ">
                    work
                </span>
                <span className="border-l-[0.125rem] px-4  border-[#9A9A9A] hover:text-[#B87650] cursor-pointer">
                    blog
                </span>
            </span>
        </div>
    );
}
