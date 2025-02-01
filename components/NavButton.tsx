import React from "react"
import { Button } from "./ui/button"
import Link from "next/link"

export default function NavButton({
  text,
  href,
}: {
  text: string
  href: string
}) {
  return (
    <div className='w-full flex justify-center'>
      <Link href={href}>
        <Button className='bg-slate-900 mt-2 mx-auto hover:scale-110 hover:bg-grass'>
          {text}
        </Button>
      </Link>
    </div>
  )
}
