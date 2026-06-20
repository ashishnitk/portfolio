import { useState } from 'react'
import Section from './ui/Section'
import Button from './ui/Button'
import { profile } from '../data/portfolio'
import styles from './Contact.module.css'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // No backend yet: open the user's email client with a prefilled message.
  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let’s work together"
      subtitle="Recruiters, clients, students, and collaborators — I’d love to hear from you."
    >
      <div className={styles.layout}>
        <aside className={styles.details}>
          <a className={styles.detail} href={`mailto:${profile.email}`}>
            <span className={styles.detailLabel}>Email</span>
            <span>{profile.email}</span>
          </a>
          <a className={styles.detail} href={profile.social.linkedin} target="_blank" rel="noreferrer">
            <span className={styles.detailLabel}>LinkedIn</span>
            <span>/in/ashishnitk</span>
          </a>
          <a className={styles.detail} href={profile.social.github} target="_blank" rel="noreferrer">
            <span className={styles.detailLabel}>GitHub</span>
            <span>@ashishnitk</span>
          </a>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>Location</span>
            <span>{profile.location}</span>
          </div>
        </aside>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a little about what you need…"
            />
          </div>

          <Button type="submit">Send Message</Button>

          {submitted && (
            <p className={styles.note} role="status">
              Thanks! Your email client should now open with your message ready to send.
            </p>
          )}
        </form>
      </div>
    </Section>
  )
}
