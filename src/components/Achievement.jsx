import Button from './ui/Button'
import { achievement } from '../data/portfolio'
import styles from './Achievement.module.css'

export default function Achievement() {
  return (
    <section id="achievement" className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.glow} aria-hidden="true" />
          <span className={styles.trophy} aria-hidden="true">
            🏆
          </span>
          <div className={styles.body}>
            <p className={styles.badge}>{achievement.badge}</p>
            <h2 className={styles.title}>{achievement.title}</h2>
            <p className={styles.issuer}>{achievement.issuer}</p>
            <p className={styles.description}>{achievement.description}</p>

            <div className={styles.stats}>
              {achievement.highlights.map((item) => (
                <div key={item.label} className={styles.stat}>
                  <span className={styles.statValue}>{item.value}</span>
                  <span className={styles.statLabel}>{item.label}</span>
                </div>
              ))}
            </div>

            <Button href={achievement.link} variant="primary" external>
              {achievement.linkLabel} ↗
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
