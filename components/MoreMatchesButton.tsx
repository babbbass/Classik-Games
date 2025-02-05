"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { EmailCapture } from "./EmailCapture"

export function MoreMatchesButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='flex justify-end w-full md:w-1/2 mx-auto'>
        <Button
          className='bg-grass rounded-full font-sans hover:bg-grass flex hover:scale-110 transition-all duration-200 ease-in-out text-base p-6 mr-4 mt-4'
          onClick={() => setIsOpen(true)}
        >
          <span>+ de matchs</span>
          <ArrowRight size={20} />
        </Button>
      </div>
      <EmailCapture isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
