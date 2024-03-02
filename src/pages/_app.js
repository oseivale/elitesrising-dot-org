import '@/styles/globals.css'
import { Arimo } from 'next/font/google'

const arimo = Arimo({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return <Component className={[arimo.className]} {...pageProps} />
}
