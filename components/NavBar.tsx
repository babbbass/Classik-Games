"use client"
import { useState } from "react"
import Link from "next/link"
import { EmailCapture } from "./EmailCapture"
import Image from "next/image"

const Links = [
  {
    name: "Real Madrid",
    href: "#",
    logo: "real-madrid.png",
  },
  {
    name: "FC Barcelone",
    href: "#",
    logo: "fc-barcelone.png",
  },
  {
    name: "Paris saint Germain",
    href: "#",
    logo: "psg.png",
  },
  {
    name: "Autres clubs...",
    href: "#",
  },
]
export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className='w-full md:w-3/4 flex border-b justify-center gap-3 text-xs md:text-sm p-2 bg-slate-50 mx-auto'>
        {Links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className='hover:underline hover:font-semibold flex items-center gap-1'
            onClick={() => setIsOpen(true)}
          >
            {link.logo && (
              <Image
                src={`${process.env.NEXT_PUBLIC_PICTURES_CLUBS_URL}${link.logo}`}
                alt={link.name}
                width={15}
                height={15}
              />
            )}
            {link.name}
          </Link>
        ))}
      </nav>
      <EmailCapture isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
