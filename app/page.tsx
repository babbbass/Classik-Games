import Link from "next/link"
import { MATCHES } from "@/utils/matches"
import { Card, CardContent } from "@/components/ui/card"
import { MoreMatchesButton } from "@/components/MoreMatchesButton"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className='p-4 flex-1 justify-center items-center'>
        <ul className='my-5'>
          {MATCHES.map((match) => (
            <li key={match.id} className='my-3'>
              <Link href={`/match/${match.id}`}>
                <Card className='text-slate-700 hover:text-slate-800 transition-all duration-200 py-4 ease-in-out hover:scale-105 bg-gradient-to-t from-yellow-200 to-yellow-500 flex items-center md:w-1/2 mx-auto rounded-xl shadow-xl'>
                  <CardContent className='flex flex-col items-center justify-center w-full text-base p-0'>
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
    </>
  )
}
