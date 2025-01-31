// import { prisma } from '@/lib/prisma';
import { GuessPlayer } from "@/components/GuessPlayer"
import { MATCHES } from "@/utils/matches"
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
    <div className='p-2 w-full md:w-3/4 mx-auto bg-slate-50 flex-1'>
      <header className='mb-4 flex justify-center flex-col items-center gap-1 '>
        <section className='border border-gray-300 w-full md:w-2/3 p-2 text-center'>
          <p className='text-black mb-3 capitalize text-sm md:text-base'>
            {match.competition} - {match.date}
          </p>
          <h1 className='text-lg md:text-xl font-bold flex justify-center w-full items-center'>
            <span className='w-1/3 text-sm md:text-xl  text-center'>
              {match.homeTeam.name}
            </span>{" "}
            <span className='text-grass text-base md:text-2xl w-1/4  text-center'>
              {match.score}
            </span>{" "}
            <span className='w-1/3 text-base md:text-xl text-center '>
              {match.awayTeam.name}
            </span>
          </h1>
        </section>
        <p className='w-full md:w-2/3 flex justify-start font-semibold italic text-sm md:text-base mt-6'>
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
