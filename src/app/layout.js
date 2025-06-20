import { Poppins, Roboto } from 'next/font/google'
import Navbar from '../app/components/Navbar'
import Footer from '../app/components/Footer'
import './globals.css'
import './styles/special.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export const metadata = {
  title: 'The Soy Joy',
  description: 'Thoughtfully curated gift baskets for every occasion.',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${poppins.variable} ${roboto.variable} font-roboto`}>
        <div className="font-poppins">
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
