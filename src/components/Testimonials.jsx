import Section from './ui/Section'
import { reviewShots } from '../data/portfolio'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      alt
      eyebrow="Kind words"
      title="Testimonials"
      subtitle="Feedback from students and participants across system design, DSA, microservices, and AI sessions."
    >
      {reviewShots?.length ? (
        <div className={styles.shots}>
          <div className={styles.shotsGrid}>
            {reviewShots.map((src, i) => (
              <img
                key={src}
                className={styles.shot}
                src={src}
                alt={`Review screenshot ${i + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  )
}
