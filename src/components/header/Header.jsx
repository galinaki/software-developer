import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Footer from '../footer/Footer'
import Projects from '../projects/Projects'
import Resume from '../resume/Resume'

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link smooth to='#projects'>My projects</Link>
        </li>
        <li>
          <Link smooth to='#resume'>Resume</Link>
        </li>
        <li>
          <Link smooth to='#contact'>Contact me</Link>
        </li>
      </ul>
    </div>
  )
}
