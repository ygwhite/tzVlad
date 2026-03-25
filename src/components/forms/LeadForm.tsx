import React, { useMemo, useState } from 'react'
import { Button } from '../ui/Button'

type LeadFormValues = {
  name: string
  phone: string
  email: string
  message: string
  consent: boolean
}

type LeadFormProps = {
  title: string
  submitLabel?: string
  description?: string
  initialMessage?: string
  onSuccess?: () => void
}

const normalizePhone = (value: string) => {
  const digits = value.replace(/\D/g, '')
  if (!digits) return ''
  // Simple normalization: keep up to 11 digits, assume Russian style if input starts with 7
  return digits.length <= 11 ? digits : digits.slice(0, 11)
}

const isValidEmail = (value: string) => {
  if (!value.trim()) return true
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

const isValidPhone = (value: string) => {
  const digits = value.replace(/\D/g, '')
  return digits.length >= 10
}

export const LeadForm = ({
  title,
  submitLabel = 'Отправить заявку',
  description,
  initialMessage,
  onSuccess
}: LeadFormProps) => {
  const [values, setValues] = useState<LeadFormValues>({
    name: '',
    phone: '',
    email: '',
    message: initialMessage ?? '',
    consent: false
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [touched, setTouched] = useState<Record<keyof LeadFormValues, boolean>>({
    name: false,
    phone: false,
    email: false,
    message: false,
    consent: false
  })

  const errors = useMemo(() => {
    const next: Partial<Record<keyof LeadFormValues, string>> = {}

    if (values.name.trim().length < 2) next.name = 'Укажите имя'
    if (!isValidPhone(values.phone)) next.phone = 'Укажите номер телефона'
    if (!isValidEmail(values.email)) next.email = 'Проверьте email'
    if (values.message.trim().length < 10) next.message = 'Опишите ваш запрос (минимум 10 символов)'
    if (!values.consent) next.consent = 'Нужно согласие на обработку данных'

    return next
  }, [values])

  const handleChange =
    (key: keyof LeadFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValue =
        key === 'phone' ? normalizePhone(e.target.value) : e.target.value
      setValues((v) => ({ ...v, [key]: nextValue }))
    }

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((v) => ({ ...v, consent: e.target.checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({
      name: true,
      phone: true,
      email: true,
      message: true,
      consent: true
    })

    if (Object.keys(errors).length > 0) return

    setStatus('submitting')
    window.setTimeout(() => {
      setStatus('success')
      onSuccess?.()
    }, 900)
  }

  if (status === 'success') {
    return (
      <div className="formCard" style={{ padding: 16 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--brand)' }}>
          {title}
        </div>
        <div style={{ marginTop: 8, fontSize: 14, color: 'rgba(11,27,20,.8)', lineHeight: 1.6 }}>
          Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div style={{ fontSize: 18, fontWeight: 800 }}>{title}</div>
        {description ? (
          <p style={{ margin: '8px 0 0', fontSize: 14, color: 'rgba(11,27,20,.7)', lineHeight: 1.6 }}>
            {description}
          </p>
        ) : null}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 12
        }}
        className="formGrid2"
      >
        <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span className="fieldTitle">Имя</span>
          <input
            value={values.name}
            onChange={handleChange('name')}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            className="input"
            placeholder="Как к вам обращаться"
            aria-label="Имя"
            required
          />
          {touched.name && errors.name ? (
            <span className="helpError">{errors.name}</span>
          ) : null}
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span className="fieldTitle">Номер телефона</span>
          <input
            value={values.phone}
            onChange={handleChange('phone')}
            onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
            className="input"
            placeholder="+7 (___) ___-__-__"
            aria-label="Номер телефона"
            inputMode="tel"
            autoComplete="tel"
            required
          />
          {touched.phone && errors.phone ? (
            <span className="helpError">{errors.phone}</span>
          ) : null}
        </label>
      </div>

      <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span className="fieldTitle" style={{ marginBottom: 0 }}>Email (необязательно)</span>
        <input
          value={values.email}
          onChange={handleChange('email')}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          className="input"
          placeholder="name@example.com"
          aria-label="Email"
          inputMode="email"
          autoComplete="email"
        />
        {touched.email && errors.email ? (
          <span className="helpError">{errors.email}</span>
        ) : null}
      </label>

      <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span className="fieldTitle" style={{ marginBottom: 0 }}>Ваше сообщение</span>
        <textarea
          value={values.message}
          onChange={handleChange('message')}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          className="textarea"
          placeholder="Коротко расскажите, что вы хотите обсудить"
          aria-label="Сообщение"
          required
        />
        {touched.message && errors.message ? (
          <span className="helpError">{errors.message}</span>
        ) : null}
      </label>

      <label className="checkboxLabel">
        <input
          type="checkbox"
          checked={values.consent}
          onChange={handleConsentChange}
          onBlur={() => setTouched((t) => ({ ...t, consent: true }))}
          className="checkboxInput"
          aria-label="Согласие на обработку персональных данных"
          required
        />
        <span style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(11,27,20,.75)' }}>
          Согласен на обработку персональных данных и обработку запроса для обратной связи.
          {touched.consent && errors.consent ? (
            <span style={{ marginLeft: 8 }} className="helpError">
              {errors.consent}
            </span>
          ) : null}
        </span>
      </label>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 12 }}>
        <Button type="submit" disabled={status === 'submitting'} ariaLabel={submitLabel}>
          {status === 'submitting' ? 'Отправляем...' : submitLabel}
        </Button>
      </div>
    </form>
  )
}

