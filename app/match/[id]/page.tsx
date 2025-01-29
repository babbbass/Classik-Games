// import { prisma } from '@/lib/prisma';
import { GuessPlayer } from "@/components/GuessPlayer"
import { SoccerField } from "@/components/SoccerField"
import Image from "next/image"
export default async function MatchPage({ id }) {
  //
  const match = {
    id: 2,
    homeTeam: "France",
    awayTeam: "Argentine",
    competition: "Coupe du monde 2022",
    date: "Finale",
    score: "3-3",
    players: [
      { player: { name: "Mbappe" } },
      { player: { name: "Messi" } },
      { player: { name: "Dembélé" } },
      { player: { name: "Maignan" } },
      { player: { name: "Alvarez" } },
      // { name: "Pippen" },
      // { name: "Rodman" },
      // { name: "Malone" },
      // { name: "Stockton" },
    ],
  }

  if (!match) return <p>Match introuvable</p>

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>
        {match.homeTeam} vs {match.awayTeam}
      </h1>
      <p className='text-gray-600'>
        {match.competition} - {match.date}
      </p>
      <p className='text-gray-600'>{match.score}</p>
      <GuessPlayer players={match.players} />
      <SoccerField />
      <Image src={"/soocer-field.svg"} alt='field' width={500} height={500} />
    </div>
  )
}
