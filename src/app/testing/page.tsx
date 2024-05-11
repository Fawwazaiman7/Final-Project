import List from '@/components/List';
import React from "react";
import Link from "next/link";


export default function page() {
  return (
      <>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">      
          <List />
          <Link href={'./'}>Home Page </Link> 
        </main>
      </>
  )
}