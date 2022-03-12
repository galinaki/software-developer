import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import styles from './Header.module.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway+Dots&display=swap');
</style>

export default function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.ulist}>
        <li>
          <Link className={styles.header_link} smooth to='#projects'>My projects</Link>
        </li>
        <li>
          <Link className={styles.header_link} smooth to='#resume'>Resume</Link>
        </li>
        <li>
          <Link className={styles.header_link} smooth to='#contact'>Contact me</Link>
        </li>
      </ul>
    </div>
  )
}
