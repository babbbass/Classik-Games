"use client"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"
// import { ScoreDisplay } from "@/components/ScoreDisplay"
import { PlayerInput } from "@/components/PlayerInput"
import { SoccerField } from "@/components/SoccerField"

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
  // const [guess, setGuess] = useState("")
  const [guessedPlayers, setGuessedPlayers] = useState<Player[]>([])
  // const [score, setScore] = useState(0)
  // console.log("guessedPlayers", guessedPlayers, "players", players)
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
      {/* <div className='mt-4'>
        <h2 className='text-lg font-semibold'>Joueurs trouvés :</h2>
        {guessedPlayers.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div> */}
      <SoccerField guessedPlayers={guessedPlayers} teams={teams} />
    </div>
  )
}
