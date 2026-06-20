import styles from './StreamDivider.module.css'

/**
 * Full-width banner that visually separates the two career "streams"
 * (e.g. full-time work vs. consulting / teaching / community).
 */
export default function StreamDivider({ id, index, label, title, description, variant = 'work', image, imageAlt }) {
  return (
    <section id={id} className={`${styles.divider} ${styles[variant] || ''}`.trim()}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.index} aria-hidden="true">
          {index}
        </span>
        <div className={styles.text}>
          <p className={styles.label}>{label}</p>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        {image && (
          <img className={styles.photo} src={image} alt={imageAlt || title} loading="lazy" />
        )}
      </div>
    </section>
  )
}
