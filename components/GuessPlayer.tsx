"use client"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"
import { ScoreDisplay } from "@/components/ScoreDisplay"
import { PlayerInput } from "@/components/PlayerInput"
import { SoccerField } from "@/components/SoccerField"
import { NavButton } from "@/components/NavButton"
type Player = {
  name: string
  position: string
}

type Team = { name: string; formation: string; color: string }
type GuessPlayerProps = {
  players: { home: Player[]; away: Player[] }
  teams: {
    home: Team
    away: Team
  }
}
export function GuessPlayer({ players, teams }: GuessPlayerProps) {
  const [guessedPlayers, setGuessedPlayers] = useState<Player[]>([])
  const [score, setScore] = useState(0)
  const playersConcat = players.home.concat(players.away)
  const handleGuess = (playerName: string) => {
    const normalizedGuess = playerName.toLowerCase()

    const alreadyGuessed = guessedPlayers.some(
      (player) => player.name.toLowerCase() === normalizedGuess
    )
    if (alreadyGuessed) {
      toast({
        title: "Déjà deviné !",
        description: "Vous avez déjà trouvé ce joueur.",
        variant: "destructive",
      })
      return
    }

    const player = playersConcat.find((player) => {
      const playerName = player.name.toLowerCase()
      const [firstName, lastName] = playerName.split(" ")
      return (
        firstName === normalizedGuess ||
        lastName === normalizedGuess ||
        playerName === normalizedGuess
      )
    })

    if (player) {
      const isPlayerHome = players.home.find((p) => p.name === player.name)
      const playerHomeOrAway = isPlayerHome
        ? { ...player, team: "home" }
        : { ...player, team: "away" }
      setGuessedPlayers((prev) => [...prev, playerHomeOrAway])
      setScore((prev) => prev + 1)
      toast({
        title: "Correct !",
        description: "Bien joué ! Continuez comme ça !",
        className: "bg-grass text-slate-50",
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

      <ScoreDisplay score={score} total={playersConcat.length} />
      <div className='flex gap-2 w-full max-w-md mx-auto justify-around mb-5 mt-10'>
        <button
          className='bg-slate-900 text-slate-50 hover:scale-110 font-sans p-2 rounded-lg text-sm transition-all duration-200 ease-in-out'
          onClick={() => {
            const homePlayers = players.home.map((player) => ({
              ...player,
              team: "home",
            }))
            setGuessedPlayers([...homePlayers, ...players.away])
          }}
        >
          Voir tous les joueurs
        </button>
        <button
          className='bg-grass text-slate-50 hover:scale-110 font-sans p-2 rounded-lg text-sm transition-all duration-200 ease-in-out'
          onClick={() => {
            setGuessedPlayers([])
            setScore(0)
          }}
        >
          Réinitialiser
        </button>
      </div>
      <NavButton text='Autre match' href='/' />
      <SoccerField guessedPlayers={guessedPlayers} teams={teams} />
    </div>
  )
}
