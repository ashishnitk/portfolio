import { useState } from 'react'
import styles from './Logo.module.css'

/**
 * Renders a company / institution logo.
 * Pulls the real logo from the org's favicon and falls back to a
 * clean monogram tile if the image can't be loaded.
 */
export default function Logo({ name, domain, text, src, size = 56 }) {
  const [failed, setFailed] = useState(false)

  const monogram =
    text ||
    name
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase()

  if (!failed && src) {
    return (
      <img
        className={styles.logo}
        style={{ width: size, height: size }}
        src={src}
        alt={`${name} logo`}
        width={size}
        height={size}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    )
  }

  if (!domain || failed) {
    return (
      <span
        className={styles.fallback}
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        {monogram}
      </span>
    )
  }

  return (
    <img
      className={styles.logo}
      style={{ width: size, height: size }}
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
      alt={`${name} logo`}
      width={size}
      height={size}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
