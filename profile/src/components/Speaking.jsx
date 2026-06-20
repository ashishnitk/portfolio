import Section from './ui/Section'
import { talks } from '../data/portfolio'
import styles from './Speaking.module.css'

export default function Speaking() {
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
