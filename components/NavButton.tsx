import React from "react"
import { Button } from "./ui/button"
import Link from "next/link"

export function NavButton({ text, href }: { text: string; href: string }) {
  return (
    <Link href={href}>
      <div className='w-3/4 flex justify-center mx-auto'>
        <Button className='w-full bg-blue-500 rounded-full mt-2 hover:scale-110'>
          {text}
        </Button>
      </div>
    </Link>
  )
}
