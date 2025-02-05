import Link from "next/link"
import { MATCHES } from "@/utils/matches"
import { Card, CardContent } from "@/components/ui/card"
import { MoreMatchesButton } from "@/components/MoreMatchesButton"
import Image from "next/image"

export default function Home() {
  return (
    <div className='p-4 flex flex-col justify-start items-center w-full flex-1 max-w-7xl mx-auto'>
      <h1 className='text-base md:text-2xl font-bold text-center text-slate-900 '>
        Trouve les joueurs des matchs de légendes
      </h1>
      <ul className='my-4 w-full'>
        {MATCHES.map((match) => (
          <li key={match.id} className='my-3'>
            <Link href={`/match/${match.id}`}>
              <Card className='w-full md:w-3/4 min-h-32 mx-auto text-slate-700 hover:text-slate-800 transition-all duration-200 py-4 ease-in-out hover:scale-105 bg-gradient-to-t from-yellow-200 to-yellow-500 flex items-around rounded-xl shadow-xl'>
                <CardContent className='flex flex-col items-center justify-center w-full text-sm md:text-base p-0'>
                  <div className='flex flex-col items-center'>
                    <div className='italic font-semibold w-full flex items-center justify-center gap-2'>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_PICTURES_CLUBS_URL}${match.homeTeam.flag}`}
                        alt={match.homeTeam.name}
                        width={25}
                        height={25}
                      />
                      <span className='flex items-center'>
                        {match.homeTeam.name} vs {match.awayTeam.name}
                      </span>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_PICTURES_CLUBS_URL}${match.awayTeam.flag}`}
                        alt={match.awayTeam.name}
                        width={25}
                        height={25}
                      />
                    </div>
                    <span>{match.competition}</span>
                  </div>
                  <span className='mt-4 font-sans italic'>{match.short}</span>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
      <MoreMatchesButton />
    </div>
  )
}
