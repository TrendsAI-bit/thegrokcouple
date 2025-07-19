import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import './globals.css'
import { WalletProvider } from '@/components/WalletProvider'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'Grok Couple - Find Your Match with ANI & Valentine',
  description: 'A futuristic dating platform powered by the Grok Couple. Hold $AV tokens to unlock your profile and connect with other verified holders.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} ${orbitron.variable}`}>
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  )
} 