import Section from './ui/Section'
import { testimonials } from '../data/portfolio'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      alt
      eyebrow="Kind words"
      title="Testimonials"
      subtitle="Feedback from clients, students, and collaborators. (Placeholders — ready for real quotes.)"
    >
      <div className={styles.grid}>
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className={styles.card}>
            <span className={styles.mark} aria-hidden="true">
              “
            </span>
            <blockquote>{testimonial.quote}</blockquote>
            <figcaption>
              <span className={styles.name}>{testimonial.name}</span>
              <span className={styles.title}>{testimonial.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
