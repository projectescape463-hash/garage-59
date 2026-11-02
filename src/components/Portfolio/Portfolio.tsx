import { PORTFOLIO } from '../../data/portfolio'
import { useInView } from '../../hooks/useInView'
import styles from './Portfolio.module.css'

export function Portfolio() {
  const [ref, visible] = useInView<HTMLElement>()

  return (
    <section id="portfolio" className={styles.section} ref={ref} aria-labelledby="portfolio-title">
      <div className="container">
        <header className={`${styles.header} reveal ${visible ? 'is-visible' : ''}`}>
          <div>
            <p className="section-label">Галерея</p>
            <h2 id="portfolio-title" className="section-title">
              Атмосфера бокса
            </h2>
          </div>
          <p className={`section-lead ${styles.disclaimer}`}>
            Демонстрационные фотографии для концепта сайта — не портфолио подтверждённых заказов.
          </p>
        </header>

        <ul className={styles.grid}>
          {PORTFOLIO.map((item) => (
            <li
              key={item.id}
              className={`${styles.item} ${item.wide ? styles.wide : ''}`}
            >
              <figure className={styles.figure}>
                <img src={item.image} alt={item.title} width={item.wide ? 1200 : 800} height={600} loading="lazy" />
                <figcaption className={styles.caption}>
                  <span className={styles.captionTitle}>{item.title}</span>
                  <span className={styles.captionMeta}>{item.caption}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
