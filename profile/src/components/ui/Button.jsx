import styles from './Button.module.css'

/**
 * Reusable button that renders as a link (<a>) or a native <button>.
 * variant: 'primary' | 'secondary' | 'ghost'
 */
export default function Button({
  children,
  href,
  variant = 'primary',
  type = 'button',
  external = false,
  className = '',
  ...rest
}) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim()

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
