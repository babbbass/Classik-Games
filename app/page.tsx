import Link from "next/link"
// Données de test pour le match
const matches = [
  {
    id: 1,
    homeTeam: "PSG",
    awayTeam: "Manchester City",
    competition: "Ligue des champions",
    date: "1997 NBA Finals - Game 6",
    score: "90-86",
    players: [
      "Michael Jordan",
      "Scottie Pippen",
      "Dennis Rodman",
      "Karl Malone",
      "John Stockton",
    ],
  },
  {
    id: 2,
    homeTeam: "France",
    awayTeam: "Argentine",
    competition: "Coupe du monde 2022",
    date: "Finale",
    score: "3-3",
    players: [
      "Michael Jordan",
      "Scottie Pippen",
      "Dennis Rodman",
      "Karl Malone",
      "John Stockton",
    ],
  },
]

export default function Home() {
  // const matches = await prisma.match.findMany();

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Football Classic Games</h1>
      <ul>
        {matches.map((match) => (
          <li key={match.id} className='mb-2'>
            <Link href={`/match/${match.id}`} className='text-blue-500'>
              {match.homeTeam} vs {match.awayTeam} - {match.competition}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
