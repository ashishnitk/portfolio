import { useState } from 'react'
import Button from './ui/Button'
import { profile, stats } from '../data/portfolio'
import styles from './Hero.module.css'

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{profile.role}</p>
          <h1>{profile.tagline}</h1>
          <p className={styles.intro}>{profile.intro}</p>

          <div className={styles.actions}>
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
            <Button href={profile.bookingUrl} variant="ghost">
              Book a Consultation
            </Button>
          </div>

          <dl className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className={styles.cardWrap}>
          {photoFailed ? (
            <div className={`${styles.avatar} ${styles.avatarFallback}`} aria-hidden="true">
              {initials}
            </div>
          ) : (
            <img
              className={styles.avatar}
              src="/profile.png"
              alt={`${profile.name}, ${profile.role}`}
              width="220"
              height="220"
              onError={() => setPhotoFailed(true)}
            />
          )}
          <div className={styles.glow} aria-hidden="true" />
        </aside>
      </div>
    </section>
  )
}
