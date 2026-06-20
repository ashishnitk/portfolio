import styles from './Section.module.css'

/**
 * Standard page section with an anchor id, an optional eyebrow + title,
 * and a constrained content container. Uses semantic <section>.
 */
export default function Section({ id, eyebrow, title, subtitle, children, alt = false }) {
  return (
    <section id={id} className={`${styles.section} ${alt ? styles.alt : ''}`.trim()}>
      <div className="container">
        {(eyebrow || title) && (
          <header className={styles.header}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
