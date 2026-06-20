import Section from './ui/Section'
import Logo from './ui/Logo'
import { bitsPilani } from '../data/portfolio'
import styles from './BitsPilani.module.css'

export default function BitsPilani() {
  return (
    <Section
      id="bits-pilani"
      eyebrow="Teaching & Academia"
      title="BITS Pilani Digital"
      subtitle="Designing and delivering industry-grade AI/ML education."
      alt
    >
      <div className={styles.intro}>
        <Logo name={bitsPilani.org} domain={bitsPilani.logoDomain} text="BITS" size={64} />
        <div>
          <h3 className={styles.role}>{bitsPilani.role}</h3>
          <p className={styles.blurb}>{bitsPilani.blurb}</p>
        </div>
      </div>

      <div className={styles.grid}>
        {bitsPilani.highlights.map((item) => (
          <article key={item.title} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              {item.icon}
            </span>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            {item.image && (
              <img
                className={styles.cardImage}
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
            )}
            {item.post && (
              <iframe
                className={styles.cardPost}
                src={item.post}
                title={`${item.title} — LinkedIn post`}
                style={{ height: item.postHeight ? `${item.postHeight}px` : '400px' }}
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              />
            )}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                View on LinkedIn ↗
              </a>
            )}
          </article>
        ))}
      </div>

      {bitsPilani.videos?.length ? (
        <div className={styles.videos}>
          <h4 className={styles.videosTitle}>Featured Videos</h4>
          <ul className={styles.videoList}>
            {bitsPilani.videos.map((video) => (
              <li key={video.link}>
                <a href={video.link} target="_blank" rel="noreferrer">
                  ▶ {video.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  )
}
