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
      className='flex gap-2 w-full max-w-md mx-auto mt-10 mb-5 z-50 sticky right-2 left-2 top-1 items-center'
    >
      <Input
        type='text'
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder={placeholder}
        className='flex-1 text-base bg-gradient-to-r from-green-800 to-green-900 text-slate-50 h-14 placeholder:text-slate-50 rounded-xl'
      />
      <Button
        type='submit'
        className='bg-gradient-to-l from-green-800 to-green-900 text-slate-50 hover:text-slate-50 font-sans h-14 rounded-xl'
      >
        Valider
      </Button>
    </form>
  )
}
