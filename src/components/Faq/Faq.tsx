import { useState } from 'react'
import { FAQ_ITEMS } from '../../data/faq'
import { useInView } from '../../hooks/useInView'
import styles from './Faq.module.css'

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null)
  const [ref, visible] = useInView<HTMLElement>()

  return (
    <section id="faq" className={styles.section} ref={ref} aria-labelledby="faq-title">
      <div className="container">
        <div className={styles.layout}>
          <header className={`reveal ${visible ? 'is-visible' : ''}`}>
            <p className="section-label">FAQ</p>
            <h2 id="faq-title" className="section-title">
              Частые вопросы
            </h2>
            <p className="section-lead">Коротко о том, как устроена работа в сервисе.</p>
          </header>

          <div className={`${styles.list} reveal reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
            {FAQ_ITEMS.map((item) => {
              const expanded = openId === item.id
              const panelId = `faq-panel-${item.id}`
              return (
                <div key={item.id} className={styles.item}>
                  <h3 className={styles.questionWrap}>
                    <button
                      type="button"
                      id={`faq-q-${item.id}`}
                      className={styles.trigger}
                      aria-expanded={expanded}
                      aria-controls={panelId}
                      onClick={() => setOpenId(expanded ? null : item.id)}
                    >
                      <span>{item.question}</span>
                      <span className={`${styles.icon} ${expanded ? styles.iconOpen : ''}`} aria-hidden="true" />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={`faq-q-${item.id}`}
                    aria-hidden={!expanded}
                    className={`${styles.panel} ${expanded ? styles.panelOpen : ''}`}
                  >
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
