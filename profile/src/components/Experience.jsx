import Section from './ui/Section'
import Logo from './ui/Logo'
import { experience } from '../data/portfolio'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="My journey"
      title="Experience"
      subtitle="A decade of engineering — growing from analyst to AI/ML engineering leadership."
    >
      <div className={styles.companies}>
        {experience.map((company) => (
          <article key={company.org} className={styles.company}>
            <header className={styles.companyHead}>
              <Logo name={company.org} domain={company.logoDomain} text={company.logoText} size={56} />
              <div className={styles.companyMeta}>
                <h3>{company.org}</h3>
                <p>
                  {company.type} · {company.duration}
                  {company.location ? ` · ${company.location}` : ''}
                </p>
              </div>
            </header>

            <ol className={styles.roles}>
              {company.roles.map((role) => (
                <li key={role.title + role.period} className={styles.role}>
                  <span className={styles.dot} aria-hidden="true" />
                  <div className={styles.roleBody}>
                    <h4>{role.title}</h4>
                    <p className={styles.period}>{role.period}</p>
                    {role.location ? (
                      <p className={styles.location}>{role.location}</p>
                    ) : null}
                    <p className={styles.summary}>{role.summary}</p>
                    {role.tags?.length ? (
                      <ul className={styles.tags}>
                        {role.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </Section>
  )
}
