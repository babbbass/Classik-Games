// import { prisma } from '@/lib/prisma';
import { GuessPlayer } from "@/components/GuessPlayer"
import { MATCHES } from "@/utils/matches"
import { Card } from "@/components/ui/card"
export default async function MatchPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  if (!id) return <p>Match introuvable</p>
  const match = MATCHES.find((match) => match.id === parseInt(id))

  if (!match) return <p>Match introuvable</p>

  return (
    <section className='p-2 bg-slate-50 flex-1 max-w-7xl mx-auto'>
      <article className='mb-4 flex justify-center flex-col items-center gap-1 '>
        <Card className='border border-gray-300 w-full md:w-2/3 p-2 text-center bg-gradient-to-t from-yellow-200 to-yellow-500'>
          <p className='text-black mb-3 capitalize text-sm md:text-base'>
            {match.competition}
            <br />
            <span className='text-sm'>
              {match.date} - {match.season}
            </span>
          </p>
          <h1 className='text-lg md:text-xl font-bold flex justify-center w-full items-center'>
            <span className='w-1/3 text-sm md:text-xl  text-center'>
              {match.homeTeam.name}
            </span>{" "}
            <span className='text-grass text-base md:text-2xl w-1/4 text-center'>
              {match.score}
            </span>{" "}
            <span className='w-1/3 text-base md:text-xl text-center '>
              {match.awayTeam.name}
            </span>
          </h1>
          <p className='w-full text-left font-medium italic text-sm  mt-6 p-2'>
            {match.description}
          </p>
        </Card>
      </article>

      <GuessPlayer
        players={match.players}
        teams={{ home: match.homeTeam, away: match.awayTeam }}
      />
    </section>
  )
}
