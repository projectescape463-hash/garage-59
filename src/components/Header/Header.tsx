import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { DEMO_PHONE, DEMO_PHONE_HREF, NAV_LINKS } from '../../data/site'
import { scrollToBooking, scrollToSection } from '../../hooks/useScrollTo'
import styles from './Header.module.css'

type HeaderProps = {
  menuOpen: boolean
  onMenuToggle: () => void
  onMenuClose: () => void
}

export function Header({ menuOpen, onMenuToggle, onMenuClose }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      return
    }

    const scrollY = window.scrollY
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollY)
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onMenuClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen, onMenuClose])

  const handleNav = (id: string) => {
    onMenuClose()
    scrollToSection(id)
  }

  const handleNavClick = (id: string) => {
    onMenuClose()
    window.requestAnimationFrame(() => scrollToSection(id))
  }

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <a
            href="#top"
            className={styles.logo}
            onClick={(e) => {
              e.preventDefault()
              onMenuClose()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span className={styles.logoMain}>Garage</span>
            <span className={styles.logoNum}>59</span>
          </a>

          <nav className={styles.nav} aria-label="Основная навигация">
            <ul className={styles.navList}>
              {NAV_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <button type="button" className={styles.navLink} onClick={() => handleNav(id)}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <a href={DEMO_PHONE_HREF} className={styles.phone}>
              {DEMO_PHONE}
            </a>
            <button type="button" className={`btn btn-primary ${styles.cta}`} onClick={scrollToBooking}>
              Запись
            </button>
            <button
              type="button"
              className={`btn btn-primary ${styles.ctaCompact}`}
              onClick={scrollToBooking}
            >
              Запись
            </button>
            <button
              type="button"
              className={styles.burger}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              onClick={onMenuToggle}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {menuOpen &&
        createPortal(
          <div className={styles.mobileOverlayRoot} role="presentation">
            <button
              type="button"
              className={styles.mobileBackdrop}
              aria-label="Закрыть меню"
              onClick={onMenuClose}
            />
            <div id="mobile-menu" className={styles.mobilePanel} role="dialog" aria-modal="true" aria-label="Меню">
              <nav aria-label="Мобильная навигация" className={styles.mobileNavInner}>
                <ul className={styles.mobileList}>
                  {NAV_LINKS.map(({ id, label }) => (
                    <li key={id}>
                      <button
                        type="button"
                        className={styles.mobileLink}
                        onClick={() => handleNavClick(id)}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
                <a href={DEMO_PHONE_HREF} className={styles.mobilePhone}>
                  {DEMO_PHONE}
                </a>
                <button
                  type="button"
                  className={`btn btn-primary ${styles.mobileCta}`}
                  onClick={() => {
                    onMenuClose()
                    scrollToBooking()
                  }}
                >
                  Записаться
                </button>
              </nav>
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}
