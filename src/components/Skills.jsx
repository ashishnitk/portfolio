import Section from './ui/Section'
import Badge from './ui/Badge'
import { skills } from '../data/portfolio'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <Section
      id="skills"
      alt
      eyebrow="What I work with"
      title="Skills & Technologies"
      subtitle="A pragmatic, full-stack toolkit spanning AI, backend, frontend, and cloud."
    >
      <div className={styles.grid}>
        {skills.map((category) => (
          <article key={category.group} className={styles.card}>
            <h3>{category.group}</h3>
            <div className={styles.badges}>
              {category.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
