import { IMG } from '../../data/images'
import { useInView } from '../../hooks/useInView'
import styles from './About.module.css'

const STEPS = [
  'Сначала диагностика — фиксируем симптомы и данные с блоков управления.',
  'Объясняем, что не так простым языком, без лишней терминологии.',
  'Согласовываем стоимость и сроки до начала ремонта.',
  'Выполняем только согласованные работы — без «сюрпризов» в счёте.',
]

export function About() {
  const [ref, visible] = useInView<HTMLElement>()

  return (
    <section id="about" className={styles.section} ref={ref} aria-labelledby="about-title">
      <div className="container">
        <div className={styles.layout}>
          <div className={`${styles.visual} reveal ${visible ? 'is-visible' : ''}`}>
            <figure className={styles.figureMain}>
              <img src={IMG.workshop} alt="Интерьер автомастерской" width={900} height={600} loading="lazy" />
            </figure>
            <figure className={`${styles.figureInset} reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
              <img src={IMG.detail} alt="Рабочий процесс в сервисе" width={700} height={500} loading="lazy" />
            </figure>
          </div>

          <div className={styles.text}>
            <p className={`section-label reveal ${visible ? 'is-visible' : ''}`}>О сервисе</p>
            <h2 id="about-title" className={`section-title reveal reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
              Ремонт, который можно обсудить
            </h2>
            <blockquote className={`${styles.quote} reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
              «Мы не начинаем работу, пока вы не понимаете, за что платите.»
            </blockquote>
            <ol className={styles.list}>
              {STEPS.map((text, i) => (
                <li
                  key={text}
                  className={`reveal ${visible ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${0.1 + i * 0.06}s` }}
                >
                  <span className={styles.listNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
