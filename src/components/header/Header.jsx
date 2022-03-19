import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import styles from './Header.module.css'


export default function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.ulist}>
        <li>
          <Link className={styles.header_link} smooth to='#home'>Home</Link>
        </li>
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
