import { ReactNode } from 'react'
import './globals.css'
import { Teko, Roboto_Flex as Roboto } from 'next/font/google'

const teko = Teko({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-teko',
})
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'CodeGem',
  description: 'Your learning platform for coding',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${teko.variable} bg-[#C7E0ED] font-sans`}
      >
        {children}
      </body>
    </html>
  )
}