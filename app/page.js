import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar';
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <Navbar />
      <main className={styles.main}>
        <div>
          <h1 className={inter.className}>This is my homepage</h1>
          <div><Link href="/about">Go to About</Link></div>
          <div><Link href="/rhino">Read about Rhinos</Link></div>
          <div><Link href="/tiger">Read about Tigers</Link></div>
          <div><Link href="/panda">Read about Pandas</Link></div>
          <Image src="/elephant.jpg" alt="Elephant" width={500} height={333} />
        </div>
      </main>
    </div>
  )
}


