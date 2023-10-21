import Link from "next/link";
import React from "react";

// export default function Header() {
//     return (
//         <div className="mt-10 mb-10">
//             <span className="flex flex-row py-2 text-[1.6rem] text-[#BABABA]">
//                 <span className="border-r-[0.125rem] px-4 border-[#9A9A9A] hover:text-[#B87650] cursor-pointer ">
//                     work
//                 </span>
//                 <span className="border-l-[0.125rem] px-4  border-[#9A9A9A] hover:text-[#B87650] cursor-pointer">
//                     blog
//                 </span>
//             </span>
//         </div>
//     );
// }

export default function Header() {
    return (
        <div className="mt-10 mb-10 ml-auto">
            <Link
                href="/blog"
                className="px-5 py-2 rounded-[0.3rem] border border-[#B87650] text-[#B87650] hover:bg-[#B87650] hover:text-white active:bg-[#A8653F] "
            >
                Blog
            </Link>
        </div>
    );
}
