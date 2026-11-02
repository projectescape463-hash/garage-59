import { useState, type FormEvent } from 'react'
import { BOOKING_SECTION_ID, DEMO_PHONE, DEMO_PHONE_HREF } from '../../data/site'
import { useInView } from '../../hooks/useInView'
import styles from './BookingForm.module.css'

type FormState = {
  name: string
  phone: string
  date: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initial: FormState = { name: '', phone: '', date: '', message: '' }

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Укажите имя'
  const phoneDigits = values.phone.replace(/\D/g, '')
  if (phoneDigits.length < 10) errors.phone = 'Введите корректный номер телефона'
  if (!values.date) errors.date = 'Выберите желаемую дату'
  return errors
}

export function BookingForm() {
  const [values, setValues] = useState<FormState>(initial)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [ref, visible] = useInView<HTMLElement>()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSubmitted(true)
  }

  const update = (field: keyof FormState, value: string) => {
    setValues((v) => ({ ...v, [field]: value }))
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }))
  }

  return (
    <section
      id={BOOKING_SECTION_ID}
      className={styles.section}
      ref={ref}
      aria-labelledby="booking-title"
    >
      <div className="container">
        <div className={`${styles.wrap} reveal ${visible ? 'is-visible' : ''}`}>
          <div className={styles.intro}>
            <p className="section-label">Запись</p>
            <h2 id="booking-title" className="section-title">
              Оставьте заявку
            </h2>
            <p className="section-lead">
              Форма работает на стороне браузера: заявка не отправляется на сервер, пока не подключён backend.
            </p>
            <p className={styles.alt}>
              Или позвоните:{' '}
              <a href={DEMO_PHONE_HREF} className={styles.phoneLink}>
                {DEMO_PHONE}
              </a>
            </p>
          </div>

          {submitted ? (
            <div className={styles.success} role="status">
              <p className={styles.successTitle}>Заявка принята (демо)</p>
              <p className={styles.successText}>
                Мы свяжемся с вами для подтверждения времени. В рабочем проекте здесь будет отправка на сервер или
                CRM.
              </p>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  setSubmitted(false)
                  setValues(initial)
                }}
              >
                Отправить ещё одну
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="booking-name">Имя</label>
                <input
                  id="booking-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(e) => update('name', e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'booking-name-error' : undefined}
                />
                {errors.name && (
                  <span id="booking-name-error" className={styles.error} role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="booking-phone">Телефон</label>
                <input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+7"
                  value={values.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
                />
                {errors.phone && (
                  <span id="booking-phone-error" className={styles.error} role="alert">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="booking-date">Желаемая дата</label>
                <input
                  id="booking-date"
                  name="date"
                  type="date"
                  value={values.date}
                  onChange={(e) => update('date', e.target.value)}
                  aria-invalid={Boolean(errors.date)}
                  aria-describedby={errors.date ? 'booking-date-error' : undefined}
                />
                {errors.date && (
                  <span id="booking-date-error" className={styles.error} role="alert">
                    {errors.date}
                  </span>
                )}
              </div>

              <div className={`${styles.field} ${styles.full}`}>
                <label htmlFor="booking-message">Комментарий</label>
                <textarea
                  id="booking-message"
                  name="message"
                  rows={3}
                  value={values.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Марка, модель, симптомы — по желанию"
                />
              </div>

              <button type="submit" className={`btn btn-primary ${styles.submit}`}>
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
