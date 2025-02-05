import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Header } from "@/components/Header"
import { Analytics } from "@vercel/analytics/react"
import { Footer } from "@/components/Footer"

const roboto = Roboto({
  weight: ["400", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Football Classik Games",
  description: "Trouve les joueurs des matchs de légendes du football",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.variable} antialiased flex min-h-screen bg-gray-200 p-2 flex-col`}
      >
        <Header />
        <main className='bg-slate-50 w-full md:w-3/4 mx-auto flex-1 flex p-2 flex-col'>
          {children}
        </main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
