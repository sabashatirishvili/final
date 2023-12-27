import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">MASSIMO</Link>
      <p>© ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default Footer