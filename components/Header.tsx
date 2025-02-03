import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <div className='flex items-center justify-between w-full border-b md:w-3/4 mx-auto border-grass p-2 text-slate-900 text-center bg-slate-50'>
      <Link href='/'>
        <Image src={`/classik-games.png`} alt='logo' width={80} height={80} />
      </Link>
      <Link href='/'>
        <p className='text-2xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-t from-yellow-200 to-yellow-500'>
          Football Classik Games
        </p>
        <p className='text-xs italic'>
          Trouve les joueurs des matchs de légendes
        </p>
      </Link>
    </div>
  )
}
