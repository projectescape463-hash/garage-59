import { IMG } from '../../data/images'
import { useInView } from '../../hooks/useInView'
import { scrollToBooking, scrollToSection } from '../../hooks/useScrollTo'
import styles from './Hero.module.css'

export function Hero() {
  const [ref, visible] = useInView<HTMLElement>()

  return (
    <section id="top" className={styles.hero} ref={ref} aria-labelledby="hero-title">
      <div className={styles.media}>
        <img
          src={IMG.hero}
          alt="Автомобиль в профессиональной мастерской"
          className={styles.image}
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className={styles.mediaOverlay} aria-hidden="true" />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={`${styles.copy} ${visible ? styles.visible : ''}`}>
          <p className={styles.eyebrow}>Автосервис · Пермь</p>
          <h1 id="hero-title" className={styles.title}>
            Точная диагностика.
            <span className={styles.titleLine}>Честный ремонт.</span>
          </h1>
          <p className={styles.subtitle}>
            Обслуживаем автомобили с вниманием к деталям. Согласовываем стоимость до начала работ.
          </p>
          <div className={styles.actions}>
            <button type="button" className="btn btn-primary" onClick={scrollToBooking}>
              Записаться в сервис
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => scrollToSection('services')}
            >
              Наши услуги
            </button>
          </div>
        </div>

        <aside className={`${styles.statStrip} ${visible ? styles.visible : ''}`} aria-label="Ключевые принципы">
          <div>
            <span className={styles.statLabel}>Подход</span>
            <p className={styles.statText}>Сначала диагностика — потом смета</p>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div>
            <span className={styles.statLabel}>Прозрачность</span>
            <p className={styles.statText}>Без скрытых допработ</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
