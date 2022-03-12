import React from 'react'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <div className={styles.projects} id='projects'>
      <h2>My projects</h2>
      <h4>Lyrics mood</h4>
      <a className={styles.project_link} href='https://galinaki.github.io/Lyrics/'>
        Click here
      </a>
      <h5>
        <a className={styles.gh_project_link} href='https://github.com/galinaki/Lyrics'>
        github
        </a>
      </h5>
      <h4>Name's secrets</h4>
      <a className={styles.project_link} href='https://galinakish-names-secrets.netlify.app/'>
        Click here
      </a>
      <h5>
        <a className={styles.gh_project_link} href='https://github.com/galinaki/Secrets'>
          github
        </a>
      </h5>
      <h4>L.A.G.A - Life After General Assembly</h4>
      <a className={styles.project_link} href='https://silly-kowalevski-1591fc.netlify.app/'>
        Click here
      </a>
      <h5>
        <a className={styles.gh_project_link} href='https://github.com/galinaki/proyecto-tres'>
          back-end github</a>
      </h5>
      <h5>
        <a className={styles.gh_project_link} href='https://github.com/bannersamuelson/Life-After-General-Assembly'>
          front-end github
        </a>
      </h5>
      <h5>groups linkedin</h5>
      <h4>Save Animals</h4>
      <a className={styles.project_link} href='https://galinak-saveanimals.netlify.app/animals'>
        Click here
      </a>
      <h5>
        <a className={styles.gh_project_link} href='https://github.com/galinaki/savelives'>
          github</a>
      </h5>
    </div>
  )
}
