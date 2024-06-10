"use client";

import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white px-5">
            <div className="max-w-screen-lg mx-auto py-4 flex flex-row justify-between">
                <div className="flex flex-row">
                    <h1 className="text-black text-2xl">VNDB</h1>
                    <h1 className="text-[#FF90B4] text-2xl">ID</h1>
                </div>
                <div className="flex-row gap-x-7 hidden md:flex">
                    <h1 className="text-black text-xl cursor-pointer border-b-2 border-[#FF90B4]">Home</h1>
                    <h1 className="text-black text-xl cursor-pointer border-b-0 hover:border-b-2 border-[#FF90B4]">Post</h1>
                    <h1 className="text-black text-xl cursor-pointer border-b-0 hover:border-b-2 border-[#FF90B4]">Information</h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 block md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className={`bg-white ${open ? "flex" : "hidden"} md:hidden flex-col gap-3 border-t-2 border-[#FF90B4] py-3`}>
                <div className="text-xl border-[#FF90B4] hover:border-l-2 hover:pl-2 cursor-pointer">
                    Home
                </div>
                <div className="text-xl border-[#FF90B4] hover:border-l-2 hover:pl-2 cursor-pointer">
                    Post
                </div>
                <div className="text-xl border-[#FF90B4] hover:border-l-2 hover:pl-2 cursor-pointer">
                    Information
                </div>
            </div>
        </nav>
    )
}