import React from "react";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav className='w-full h-24 bg-blue-500 text-black flex justify-center'>
            <div>
                <Link href={'/profile'}>|Profile Page|</Link>
            </div>
            <div>
                <Link href={'/testing'}>Testing Page|</Link>
            </div>
            <div>
                <Link href={'/todos'}>Todo Page|</Link>
            </div>
        </nav>
    )
}