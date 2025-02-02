import React from "react"
import { Button } from "./ui/button"
import Link from "next/link"

export function OtherMatchesButton() {
  return (
    <Link href={"/"} className='fixed bottom-4 left-4 z-50'>
      <Button className='w-full bg-blue-800 rounded-full font-bold flex flex-col hover:scale-110 hover:bg-blue-600 transition-all duration-200 ease-in-out text-xs p-6'>
        <span>Autre</span>
        <span>Match</span>
      </Button>
    </Link>
  )
}
