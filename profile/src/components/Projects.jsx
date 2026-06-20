import Section from './ui/Section'
import Badge from './ui/Badge'
import { projects } from '../data/portfolio'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <Section
      id="projects"
      alt
      eyebrow="Selected work"
      title="Projects"
      subtitle="A few products and systems I’ve helped design, build, or ship."
    >
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.card}>
            <div className={styles.body}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tech}>
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>

            <div className={styles.links}>
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noreferrer">
                  Live demo ↗
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              )}
              {!project.links.demo && !project.links.github && (
                <span className={styles.private}>Enterprise / internal project</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
