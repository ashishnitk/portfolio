import Section from './ui/Section'
import { about } from '../data/portfolio'
import styles from './About.module.css'

export default function About() {
  return (
    <Section id="about" eyebrow="Who I am" title={about.heading}>
      <div className={styles.layout}>
        <div className={styles.text}>
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <ul className={styles.roles}>
          {about.roles.map((role) => (
            <li key={role.title} className={styles.role}>
              <span className={styles.roleTitle}>{role.title}</span>
              <span className={styles.roleDetail}>{role.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
