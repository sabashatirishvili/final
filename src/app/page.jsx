import Image from 'next/image'
import styles from './page.module.css'
import Slider from '@/components/Slider/Slider'
import Featured from '@/components/Featured/Featured'
import Offer from '@/components/Offer/Offer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Slider/>
      <Featured/>
      <Offer/>
    </div>
  )
}
