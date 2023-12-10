import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MeusTickets | AnimeGeek',
  description: 'Preencha os dados a seguir para receber seu ingresso'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  )
}
