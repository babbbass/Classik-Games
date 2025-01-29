"use client"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"
import { ScoreDisplay } from "@/components/ScoreDisplay"
import { PlayerInput } from "@/components/PlayerInput"

type GuessPlayerProps = {
  players: { player: { name: string } }[]
}
export function GuessPlayer({ players }: GuessPlayerProps) {
  // const [guess, setGuess] = useState("")
  const [guessedPlayers, setGuessedPlayers] = useState<string[]>([])
  // const guessedPlayers: string[] = []
  const [score, setScore] = useState(0)
  console.log("guessedPlayers", guessedPlayers)

  const handleGuess = (playerName: string) => {
    const normalizedGuess = playerName.toLowerCase()

    const alreadyGuessed = guessedPlayers.some(
      (player) => player.toLowerCase() === normalizedGuess
    )
    if (alreadyGuessed) {
      toast({
        title: "Déjà deviné !",
        description: "Vous avez déjà trouvé ce joueur.",
        variant: "destructive",
      })
      return
    }

    const playerExists = players.some(
      (p) => p.player.name.toLowerCase() === normalizedGuess
    )

    if (playerExists) {
      console.log("playerExists", playerExists, playerName)
      setScore((prev) => prev + 1)
      setGuessedPlayers((prev) => [...prev, playerName])
      toast({
        title: "Correct !",
        description: "Bien joué ! Continuez comme ça !",
      })
    } else {
      toast({
        title: "Incorrect",
        description: "Ce joueur n'a pas participé à ce match.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className='mt-4'>
      <PlayerInput
        onSubmit={handleGuess}
        placeholder="Entrez le nom d'un joueur..."
      />

      {/* <ScoreDisplay score={score} total={players.length} /> */}
      <div className='mt-4'>
        <h2 className='text-lg font-semibold'>Joueurs trouvés :</h2>
        {guessedPlayers.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  )
}
