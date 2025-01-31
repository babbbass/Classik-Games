import Link from "next/link"
import { MATCHES } from "@/utils/matches"

export default function Home() {
  return (
    <div className='p-4'>
      {/* <h1 className='text-2xl font-bold mb-4'>Football Classic Games</h1> */}
      <ul className='my-5'>
        {MATCHES.map((match) => (
          <li key={match.id} className='mb-2'>
            <Link href={`/match/${match.id}`}>
              <p className='text-grass hover:underline hover:text-slate-900 transition-all duration-200 ease-in-out hover:scale-105'>
                {match.homeTeam.name} vs {match.awayTeam.name} -{" "}
                {match.competition}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
