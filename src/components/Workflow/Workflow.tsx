import { useInView } from '../../hooks/useInView'
import styles from './Workflow.module.css'

const STEPS = [
  { num: '01', title: 'Запись', text: 'Выбираете удобное время по телефону или через форму на сайте.' },
  { num: '02', title: 'Диагностика', text: 'Проверяем автомобиль, фиксируем неисправности и причины.' },
  { num: '03', title: 'Согласование стоимости', text: 'Передаём смету и обсуждаем каждую позицию до старта работ.' },
  { num: '04', title: 'Ремонт и выдача', text: 'Выполняем ремонт, показываем результат и передаём автомобиль.' },
]

export function Workflow() {
  const [ref, visible] = useInView<HTMLElement>()

  return (
    <section id="workflow" className={styles.section} ref={ref} aria-labelledby="workflow-title">
      <div className="container">
        <header className={`${styles.header} reveal ${visible ? 'is-visible' : ''}`}>
          <p className="section-label">Процесс</p>
          <h2 id="workflow-title" className="section-title">
            Четыре шага до результата
          </h2>
        </header>

        <ol className={styles.track}>
          {STEPS.map((step, index) => (
            <li
              key={step.num}
              className={`${styles.step} reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <span className={styles.num} aria-hidden="true">
                {step.num}
              </span>
              <div className={styles.body}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.text}>{step.text}</p>
              </div>
              {index < STEPS.length - 1 && <span className={styles.connector} aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
