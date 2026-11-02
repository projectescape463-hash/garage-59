import { DEMO_PHONE_HREF, NAV_LINKS } from '../../data/site'
import { scrollToSection } from '../../hooks/useScrollTo'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <p className={styles.logo}>
            Garage <span>59</span>
          </p>
          <p className={styles.tagline}>Концепт сайта для портфолио веб-разработчика.</p>
        </div>

        <nav aria-label="Навигация в подвале">
          <ul className={styles.links}>
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <button type="button" onClick={() => scrollToSection(id)}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.meta}>
          <a href={DEMO_PHONE_HREF}>Позвонить</a>
          <span className={styles.copy}>© {year} GARAGE 59</span>
        </div>
      </div>
    </footer>
  )
}
