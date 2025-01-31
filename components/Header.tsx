import Link from "next/link"

export function Header() {
  return (
    <div className='w-full border-b md:w-3/4 mx-auto border-grass p-2 text-slate-900 text-center'>
      <Link href='/'>
        <p className='text-2xl font-bold italic text-grass'>
          Football Classik Games
        </p>
      </Link>
    </div>
  )
}
