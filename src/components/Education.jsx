import Section from './ui/Section'
import Logo from './ui/Logo'
import { education } from '../data/portfolio'
import styles from './Education.module.css'

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Foundation"
      title="Education"
      subtitle="Where it all started."
      alt
    >
      <ul className={styles.grid}>
        {education.map((item) => (
          <li key={item.institution} className={styles.card}>
            <Logo name={item.institution} domain={item.logoDomain} size={56} />
            <div className={styles.text}>
              <h3>{item.institution}</h3>
              <p className={styles.degree}>
                {item.degree}
                {item.field ? ` · ${item.field}` : ''}
              </p>
              {item.period ? <p className={styles.period}>{item.period}</p> : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
