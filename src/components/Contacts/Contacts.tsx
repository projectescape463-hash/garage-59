import { DEMO_ADDRESS, DEMO_HOURS, DEMO_PHONE, DEMO_PHONE_HREF } from '../../data/site'
import { scrollToBooking } from '../../hooks/useScrollTo'
import { useInView } from '../../hooks/useInView'
import styles from './Contacts.module.css'

/** Координаты-заглушка для карты (Пермь, центр) — замените на реальные */
const MAP_LAT = 58.0105
const MAP_LNG = 56.2502

export function Contacts() {
  const [ref, visible] = useInView<HTMLElement>()
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${MAP_LNG - 0.02}%2C${MAP_LAT - 0.015}%2C${MAP_LNG + 0.02}%2C${MAP_LAT + 0.015}&layer=mapnik&marker=${MAP_LAT}%2C${MAP_LNG}`

  return (
    <section id="contacts" className={styles.section} ref={ref} aria-labelledby="contacts-title">
      <div className="container">
        <div className={styles.grid}>
          <div className={`reveal ${visible ? 'is-visible' : ''}`}>
            <p className="section-label">Контакты</p>
            <h2 id="contacts-title" className="section-title">
              Как нас найти
            </h2>

            <dl className={styles.details}>
              <div>
                <dt>Адрес</dt>
                <dd>
                  {DEMO_ADDRESS}
                  <span className="demo-note"> — замените в site.ts</span>
                </dd>
              </div>
              <div>
                <dt>Часы работы</dt>
                <dd>{DEMO_HOURS}</dd>
              </div>
              <div>
                <dt>Телефон</dt>
                <dd>
                  <a href={DEMO_PHONE_HREF}>{DEMO_PHONE}</a>
                  <span className="demo-note"> — демо</span>
                </dd>
              </div>
            </dl>

            <button type="button" className="btn btn-primary" onClick={scrollToBooking}>
              Связаться с сервисом
            </button>
          </div>

          <div className={`${styles.mapWrap} reveal reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
            <iframe
              title="Схема расположения сервиса (демо-карта)"
              src={mapSrc}
              className={styles.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className={styles.mapNote}>Карта показывает ориентировочную точку для концепта сайта.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
