import React from "react";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav>
            <Link href={'/testing'}>Test Page</Link>
        </nav>
    )
}