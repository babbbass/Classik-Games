import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface PlayerInputProps {
  onSubmit: (playerName: string) => void
  placeholder: string
}

export const PlayerInput = ({ onSubmit, placeholder }: PlayerInputProps) => {
  const [playerName, setPlayerName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (playerName.trim()) {
      onSubmit(playerName.trim())
      setPlayerName("")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex gap-2 w-full max-w-md mx-auto mt-10 mb-5 z-50 sticky right-2 left-2 top-1'
    >
      <Input
        type='text'
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder={placeholder}
        className='flex-1 text-xs sm:text-base bg-grass text-slate-50 h-12 placeholder:text-slate-50'
      />
      <Button
        type='submit'
        className='bg-grass text-slate-50 hover:text-slate-50 font-sans h-12'
      >
        Valider
      </Button>
    </form>
  )
}
