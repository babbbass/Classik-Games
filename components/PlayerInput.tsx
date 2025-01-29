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
      className='flex gap-2 w-full max-w-md mx-auto'
    >
      <Input
        type='text'
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder={placeholder}
        className='flex-1 text-xs sm:text-base'
      />
      <Button type='submit' className='bg-gold hover:bg-primary text-white'>
        Valider
      </Button>
    </form>
  )
}
