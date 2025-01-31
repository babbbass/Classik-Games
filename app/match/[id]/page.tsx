// import { prisma } from '@/lib/prisma';
import { GuessPlayer } from "@/components/GuessPlayer"
import { MATCHES } from "@/utils/matches"
export default async function MatchPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = await params
  const match = MATCHES.find((match) => match.id === parseInt(id))

  if (!match) return <p>Match introuvable</p>

  return (
    <div className='p-4 w-full md:w-3/4 mx-auto '>
      <header className='mb-4 flex justify-center flex-col items-center gap-1'>
        <h1 className='text-lg md:text-2xl font-bold'>
          {match.homeTeam.name} vs {match.awayTeam.name}
        </h1>
        <p className='text-gray-600'>
          {match.competition} - {match.date}
        </p>
        <p className='text-gray-600'>{match.score}</p>
        <p className='w-full md:w-3/4 font-semibold italic text-xs'>
          {match.description}
        </p>
      </header>
      <GuessPlayer
        players={match.players}
        teams={{ home: match.homeTeam, away: match.awayTeam }}
      />
    </div>
  )
}
