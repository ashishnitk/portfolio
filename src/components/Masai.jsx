import Section from './ui/Section'
import Logo from './ui/Logo'
import { masai } from '../data/portfolio'
import styles from './Masai.module.css'

export default function Masai() {
  return (
    <Section
      id="masai"
      eyebrow="Community & Mentorship"
      title="Masai School"
      subtitle="Panel discussions and hackathon judging with the next generation of engineers."
      alt
    >
      <div className={styles.intro}>
        <Logo name={masai.org} domain={masai.logoDomain} text="MS" size={64} />
        <div>
          <h3 className={styles.role}>{masai.role}</h3>
          <p className={styles.blurb}>{masai.blurb}</p>
        </div>
      </div>

      <div className={styles.grid}>
        {masai.highlights.map((item) => (
          <article key={item.title} className={styles.card}>
            {item.image && (
              <img
                className={styles.image}
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
            )}
            <div className={styles.body}>
              <span className={styles.icon} aria-hidden="true">
                {item.icon}
              </span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      {masai.gallery?.length ? (
        <div className={styles.gallery}>
          {masai.gallery.map((src) => (
            <img
              key={src}
              className={styles.galleryItem}
              src={src}
              alt="Masai School event"
              loading="lazy"
            />
          ))}
        </div>
      ) : null}

      {masai.posts?.length ? (
        <div className={styles.posts}>
          {masai.posts.map((src) => (
            <iframe
              key={src}
              className={styles.post}
              src={src}
              title="Embedded LinkedIn post"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            />
          ))}
        </div>
      ) : null}
    </Section>
  )
}
