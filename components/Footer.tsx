import { Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className='min-h-20 w-full border-t md:w-3/4 mx-auto border-grass p-2 text-slate-900 bg-slate-50'>
      <div className='flex items-start justify-between max-w-7xl w-full mx-auto h-full'>
        <div className='flex flex-col gap-2'>
          <h4 className='uppercase mb-3 text-gray-600 text-xs font-bold'>
            Classik Games
          </h4>
          <ul className='flex flex-col gap-4 text-xs'>
            <li className='hover:underline'>
              <Link href=''>{`Conditions d'utilisation`}</Link>
            </li>
            <li className='hover:underline'>
              <Link href=''>Politique de confidentialité</Link>
            </li>
            <li className='hover:underline'>
              <Link href=''>Contact</Link>
            </li>
            <li className='hover:underline'>
              <Link href=''>RGPD</Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-2'>
          <h4 className='uppercase mb-3 text-gray-600 text-xs font-bold'>
            Suivez Nous
          </h4>
          <ul className='flex flex-col gap-4'>
            <li>
              <a
                href='https://www.instagram.com/classikgames/'
                className='flex gap-2 items-center'
              >
                <Instagram size={18} />{" "}
                <span className='text-xs hover:underline'>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href='https://www.tiktok.com/@classik.games'
                className='flex gap-2'
              >
                <Image
                  src='/tiktok.svg'
                  alt='tiktok - classikgames'
                  width={18}
                  height={18}
                />
                <span className='text-xs hover:underline'>TikTok</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
