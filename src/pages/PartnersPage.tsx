import React, { useMemo, useState } from 'react'
import { Container } from '../components/Container'
import { AnimatedReveal } from '../components/AnimatedReveal'
import { SectionTitle } from '../components/SectionTitle'
import { Button } from '../components/ui/Button'
import { Modal } from '../components/ui/Modal'
import { LeadForm } from '../components/forms/LeadForm'
import { geography, partnersCategories } from '../lib/content'

export const PartnersPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [requestTitle, setRequestTitle] = useState('Реквизиты')

  const modalDescription = useMemo(() => {
    return `Запрос: ${requestTitle}`
  }, [requestTitle])

  const handleOpenRequest = (title: string) => {
    setRequestTitle(title)
    setModalOpen(true)
  }

  return (
    <div style={{ paddingBottom: 48 }}>
      <section className="section section--hero">
        <Container>
          <AnimatedReveal>
            <SectionTitle
              title="Партнёрам, география и контакты"
              subtitle="Поставки мясосырья для долгосрочных B2B-партнерств"
            />
          </AnimatedReveal>

          <div style={{ marginTop: 24 }} className="grid grid--3">
            {[
              {
                title: 'Долгосрочные контракты',
                text: '12–36 месяцев и индивидуальные условия под технологические требования.'
              },
              {
                title: 'Прозрачный документооборот',
                text: 'Запрос копий документов и сертификатов — в удобном формате.'
              },
              {
                title: 'Контроль качества',
                text: 'Стандарты хранения и безопасность цепочки поставок.'
              }
            ].map((b, idx) => (
              <AnimatedReveal key={b.title} delayMs={idx * 90}>
                <div className="card" style={{ padding: 20, boxShadow: 'none' }}>
                  <div style={{ fontSize: 16, fontWeight: 900 }}>{b.title}</div>
                  <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.7, color: 'rgba(11,27,20,.75)' }}>
                    {b.text}
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <AnimatedReveal>
            <SectionTitle
              title="Партнёры"
              subtitle="Категории организаций-потребителей и интеграционных игроков"
            />
          </AnimatedReveal>

          <div style={{ marginTop: 24 }} className="grid grid--3">
            {partnersCategories.map((cat, idx) => (
              <AnimatedReveal key={cat} delayMs={idx * 50}>
                <div className="card" style={{ padding: 18, boxShadow: 'none' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span aria-hidden="true" style={{ marginTop: 8, height: 8, width: 8, borderRadius: 999, background: 'var(--accent)' }} />
                    <div style={{ fontSize: 14.5, fontWeight: 700, lineHeight: 1.6 }}>{cat}</div>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid--12">
            <div className="col-6">
              <AnimatedReveal>
                <SectionTitle title="География поставок" subtitle="Основные регионы и операционные направления" />
              </AnimatedReveal>
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {geography.regions.map((r, idx) => (
                  <AnimatedReveal key={r} delayMs={idx * 70}>
                    <div className="card" style={{ padding: 18, boxShadow: 'none' }}>
                      <div style={{ fontSize: 14, fontWeight: 900 }}>
                        {r.split(':')[0]}
                      </div>
                      <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.7, color: 'rgba(11,27,20,.75)' }}>
                        {r.includes(':') ? r.split(':').slice(1).join(':').trim() : r}
                      </div>
                    </div>
                  </AnimatedReveal>
                ))}
              </div>
            </div>

            <div className="col-6">
              <AnimatedReveal delayMs={120}>
                <SectionTitle title="Логистическая инфраструктура" subtitle="Партнерства, склады и мониторинг" />
              </AnimatedReveal>

              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {geography.logistics.map((l, idx) => (
                  <AnimatedReveal key={l} delayMs={idx * 70}>
                    <div className="card" style={{ padding: 18, boxShadow: 'none' }}>
                      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <span aria-hidden="true" style={{ marginTop: 8, height: 8, width: 8, borderRadius: 999, background: 'var(--brand)' }} />
                        <div style={{ fontSize: 14.3, lineHeight: 1.7, color: 'rgba(11,27,20,.8)' }}>
                          {l}
                        </div>
                      </div>
                    </div>
                  </AnimatedReveal>
                ))}
              </div>

              <AnimatedReveal delayMs={160}>
                <div className="card card--brand" style={{ padding: 20, boxShadow: 'none', marginTop: 18 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--brand)' }}>Планы расширения</div>
                  <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {geography.plans.map((p) => (
                      <div key={p} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <span aria-hidden="true" style={{ marginTop: 8, height: 8, width: 8, borderRadius: 999, background: 'var(--accent)' }} />
                        <div style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(11,27,20,.8)' }}>{p}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div id="contacts">
            <AnimatedReveal>
              <SectionTitle title="Контакты" subtitle="Свяжитесь с нами по любому вопросу сотрудничества" />
            </AnimatedReveal>

            <div className="grid--12" style={{ marginTop: 24 }}>
              <div className="col-7">
                <AnimatedReveal>
                  <div className="card" style={{ padding: 22, boxShadow: 'none' }}>
                    <LeadForm
                      title="Оставить заявку"
                      description="Мы обработаем запрос и вернемся с ответом. Детали документов и реквизитов — по согласованию."
                      submitLabel="Отправить"
                    />
                  </div>
                </AnimatedReveal>
              </div>

              <div className="col-5">
                <AnimatedReveal delayMs={120}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div className="card" style={{ padding: 22, boxShadow: 'none' }}>
                      <div style={{ fontSize: 16, fontWeight: 900 }}>Контактная информация</div>
                      <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.7, color: 'rgba(11,27,20,.75)' }}>
                        Для связи используйте форму слева. Мы организуем коммуникацию с профильным отделом и предоставим документы по запросу.
                      </div>
                      <div style={{ marginTop: 16 }}>
                        <Button
                          variant="secondary"
                          ariaLabel="Запросить реквизиты"
                          onClick={() => handleOpenRequest('Реквизиты компании')}
                        >
                          Реквизиты
                        </Button>
                      </div>
                    </div>

                    <div className="card" style={{ padding: 22, boxShadow: 'none' }}>
                      <div style={{ fontSize: 16, fontWeight: 900 }}>Карта проезда</div>
                      <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.7, color: 'rgba(11,27,20,.75)' }}>
                        Схема проезда предоставляется после согласования встречи.
                      </div>

                      <div
                        style={{
                          marginTop: 16,
                          height: 170,
                          borderRadius: 24,
                          border: '1px solid var(--border)',
                          background:
                            'radial-gradient(circle at 20% 20%, rgba(4,82,58,0.22), transparent 55%), radial-gradient(circle at 80% 60%, rgba(213,97,84,0.18), transparent 55%), linear-gradient(135deg, rgba(4,82,58,0.08), rgba(213,97,84,0.08))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        aria-label="Заглушка карты"
                      >
                        <div
                          style={{
                            borderRadius: 16,
                            border: '1px solid var(--border)',
                            background: 'rgba(255,255,255,.35)',
                            padding: '10px 14px',
                            fontSize: 14,
                            fontWeight: 900,
                            color: 'rgba(11,27,20,.8)'
                          }}
                        >
                          Россия / логистика поставок
                        </div>
                      </div>

                      <div style={{ marginTop: 12, fontSize: 12.5, lineHeight: 1.6, color: 'rgba(11,27,20,.6)' }}>
                        Без указания фактического адреса на странице (по согласованию).
                      </div>
                    </div>
                  </div>
                </AnimatedReveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Modal
        open={modalOpen}
        title="Запрос реквизитов"
        description={modalDescription}
        onClose={() => setModalOpen(false)}
      >
        <LeadForm
          title="Запрос реквизитов"
          description="Оставьте контакты — мы направим реквизиты и согласуем формат предоставления."
          submitLabel="Отправить запрос"
        />
      </Modal>
    </div>
  )
}

