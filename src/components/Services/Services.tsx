import { SERVICES } from '../../data/services'
import { useInView } from '../../hooks/useInView'
import styles from './Services.module.css'

export function Services() {
  const [ref, visible] = useInView<HTMLElement>()

  return (
    <section id="services" className={styles.section} ref={ref} aria-labelledby="services-title">
      <div className="container">
        <header className={`${styles.header} reveal ${visible ? 'is-visible' : ''}`}>
          <div>
            <p className="section-label">Услуги</p>
            <h2 id="services-title" className="section-title">
              Что делаем в боксе
            </h2>
          </div>
          <p className={`section-lead ${styles.lead}`}>
            Ориентировочные цены указаны для концепта сайта — замените их на актуальный прайс сервиса.
          </p>
        </header>

        <ul className={styles.grid}>
          {SERVICES.map((service, index) => (
            <li
              key={service.id}
              className={`${styles.item} ${service.featured ? styles.featured : ''} reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${0.06 * index}s` }}
            >
              <div className={styles.itemInner}>
                <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.name}>{service.title}</h3>
                <p className={styles.desc}>{service.description}</p>
                <p className={styles.price}>
                  <span className="demo-note">демо · </span>
                  {service.priceFrom}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
