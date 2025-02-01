import Link from "next/link"
import { MATCHES } from "@/utils/matches"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className='p-4 bg-slate-50 w-full md:w-3/4 mx-auto flex-1 justify-center'>
      <ul className='my-5'>
        {MATCHES.map((match) => (
          <li key={match.id} className='mb-2'>
            <Link href={`/match/${match.id}`}>
              <Card className='text-slate-700 font-bold  hover:text-slate-800 transition-all duration-200 py-4 ease-in-out hover:scale-105 bg-gradient-to-b from-yellow-200 to-yellow-500 flex items-center md:w-1/2 mx-auto rounded-xl shadow-2xl'>
                <CardContent className='flex flex-col items-center justify-center w-full text-base p-0'>
                  <span className='italic underline'>
                    {match.homeTeam.name} vs {match.awayTeam.name}
                  </span>{" "}
                  - <span>{match.competition}</span>
                  <span className='mt-4 font-sans italic text-sm'>
                    {match.short}
                  </span>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
