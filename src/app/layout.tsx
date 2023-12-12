import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MeusTickets | AnimeGeek',
  description: 'Verificação de código para cortesias de eventos AnimeGeek'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <body className={inter.className}>
        <Toaster />
        <div className={`flex-col`}>
          <div className={`flex-1 space-y-4 p-8 pt-20`}>{children}</div>
        </div>
      </body>
    </html>
  )
}
