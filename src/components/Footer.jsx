import { profile } from '../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {year} {profile.name}. Built with React.
        </p>
        <nav className={styles.social} aria-label="Social links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.social.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  )
}
