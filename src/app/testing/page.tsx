"use client"
import Image from "next/image";

import Link from "next/link";

import List from '@/components/list'

export default function Home() {
    function greetUser(){
        alert("Halo");
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={'/page.tsx'}>

    </main>
  )
}
