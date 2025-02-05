import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Header } from "@/components/Header"
import { Analytics } from "@vercel/analytics/react"
import { Footer } from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex items-center justify-start bg-gray-200 p-2 flex-col`}
      >
        <Header />
        <main className='bg-slate-50 w-full md:w-3/4 mx-auto min-h-screen'>
          {children}
        </main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
