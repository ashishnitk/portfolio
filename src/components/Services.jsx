import Section from './ui/Section'
import { services } from '../data/portfolio'
import styles from './Services.module.css'

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="How I can help"
      title="Services"
      subtitle="Beyond my full-time role, I partner with teams and individuals in a few focused ways."
    >
      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.title} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              {service.icon}
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
