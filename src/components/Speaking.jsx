import { useState } from 'react'
import Section from './ui/Section'
import { talks } from '../data/portfolio'
import styles from './Speaking.module.css'

export default function Speaking() {
  const [playing, setPlaying] = useState(null)

  return (
    <Section
      id="speaking"
      eyebrow="On stage"
      title="Speaking & Talks"
      subtitle="Sharing what I’ve learned about AI engineering with the wider community."
    >
      <div className={styles.grid}>
        {talks.map((talk) => (
          <article key={talk.title} className={styles.card}>
            <div className={styles.head}>
              <h3>{talk.title}</h3>
              <span className={styles.date}>{talk.date}</span>
            </div>
            <p className={styles.event}>{talk.event}</p>
            <p className={styles.audience}>🎤 {talk.audience}</p>
            <p className={styles.description}>{talk.description}</p>
            {talk.image && (
              <img
                className={styles.image}
                src={talk.image}
                alt={`${talk.title} — presenting at ${talk.event}`}
                loading="lazy"
              />
            )}
            {talk.post && (
              <iframe
                className={styles.post}
                src={talk.post}
                title={`${talk.title} — LinkedIn post`}
                style={{ height: talk.postHeight ? `${talk.postHeight}px` : '1000px' }}
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              />
            )}
            {talk.youtube && playing === talk.youtube && (
              <div className={styles.video}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${talk.youtube}?autoplay=1&rel=0&modestbranding=1`}
                  title={`${talk.title} — ${talk.event}`}
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}
            {talk.youtube && playing !== talk.youtube && (
              <button
                type="button"
                className={styles.video}
                onClick={() => setPlaying(talk.youtube)}
                aria-label={`Play "${talk.title}"`}
              >
                <img
                  src={talk.thumbnail || `https://i.ytimg.com/vi/${talk.youtube}/hqdefault.jpg`}
                  alt={`${talk.title} — ${talk.event}`}
                  loading="lazy"
                  onError={(e) => {
                    const fallback = `https://i.ytimg.com/vi/${talk.youtube}/hqdefault.jpg`
                    if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback
                  }}
                />
                <span className={styles.playButton} aria-hidden="true" />
              </button>
            )}
            {talk.video && (
              <video
                className={styles.video}
                src={talk.video}
                controls
                preload="metadata"
                playsInline
              />
            )}
            {talk.link && (
              <a href={talk.link} target="_blank" rel="noreferrer" className={styles.link}>
                View on LinkedIn ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
