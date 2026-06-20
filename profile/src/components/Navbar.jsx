import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`.trim()}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} onClick={closeMenu}>
          {profile.name.split(' ')[0]}
          <span>.</span>
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.bar} ${open ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen3 : ''}`} />
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.links} ${open ? styles.open : ''}`.trim()}
          aria-label="Primary"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className={styles.cta} href="#contact" onClick={closeMenu}>
            Let’s talk
          </a>
        </nav>
      </div>
    </header>
  )
}
