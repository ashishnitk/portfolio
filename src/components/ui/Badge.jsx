import styles from './Badge.module.css'

/** Small pill-shaped label used for skills and tech stacks. */
export default function Badge({ children }) {
  return <span className={styles.badge}>{children}</span>
}
