import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '../components/Container'
import { AnimatedReveal } from '../components/AnimatedReveal'
import { SectionTitle } from '../components/SectionTitle'
import { Button } from '../components/ui/Button'
import { Modal } from '../components/ui/Modal'
import { LeadForm } from '../components/forms/LeadForm'
import { investors } from '../lib/content'

export const InvestorsPage = () => {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const [requestTitle, setRequestTitle] = useState('Инвест-пакет')

  const modalDescription = useMemo(() => {
    return `Запрос инвест-пакета: ${requestTitle}`
  }, [requestTitle])

  const handleOpenRequest = (title: string) => {
    setRequestTitle(title)
    setModalOpen(true)
  }

  return (
    <div style={{ paddingBottom: 48 }}>
      <section className="section section--hero">
        <Container>
          <div className="grid--12">
            <div className="col-7">
              <AnimatedReveal>
                <SectionTitle
                  title="Инвесторам и стратегия"
                  subtitle="Прозрачные условия, управляемая модель и понятные приоритеты развития."
                />
              </AnimatedReveal>

              <AnimatedReveal delayMs={120}>
                <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Button
                    variant="primary"
                    ariaLabel="Запросить инвест-пакет"
                    onClick={() => handleOpenRequest('Запрос инвест-пакета')}
                  >
                    Запросить инвест-пакет
                  </Button>
                  <Button
                    variant="ghost"
                    ariaLabel="Перейти к партнерам"
                    onClick={() => navigate('/partners')}
                  >
                    Партнерство
                  </Button>
                </div>
              </AnimatedReveal>
            </div>

            <div className="col-5">
              <AnimatedReveal delayMs={180}>
                <div className="card card--brand" style={{ padding: 24, boxShadow: 'none' }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--brand)' }}>
                    Ключевой фокус
                  </div>
                  <p style={{ margin: '10px 0 0', fontSize: 14, lineHeight: 1.7, color: 'rgba(11,27,20,.8)' }}>
                    {investors.strategyIntro}
                  </p>
                  <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
                    {[
                      { label: 'География', value: 'Рост присутствия' },
                      { label: 'Финансы', value: 'Устойчивость' },
                      { label: 'Операции', value: 'Эффективность' },
                      { label: 'Сервисы', value: 'Диверсификация' }
                    ].map((m) => (
                      <div
                        key={m.label}
                        style={{
                          borderRadius: 18,
                          border: '1px solid var(--border)',
                          background: 'rgba(255,255,255,.3)',
                          padding: 14
                        }}
                      >
                        <div style={{ fontSize: 12, fontWeight: 800, color: 'rgba(11,27,20,.6)' }}>
                          {m.label}
                        </div>
                        <div style={{ marginTop: 4, fontSize: 14.5, fontWeight: 900 }}>{m.value}</div>
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
          <div className="grid--12">
            <div className="col-5">
              <AnimatedReveal>
                <SectionTitle title={investors.whyUsTitle} subtitle="Коротко о подходе" />
              </AnimatedReveal>
              <AnimatedReveal delayMs={90}>
                <div className="card" style={{ padding: 24 }}>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: 'rgba(11,27,20,.8)' }}>
                    {investors.whyUsQuote}
                  </p>
                  <div style={{ marginTop: 14, fontSize: 14, fontWeight: 800, color: 'var(--brand)' }}>
                    По запросу подготовим документы и формат участия
                  </div>
                </div>
              </AnimatedReveal>
            </div>

            <div className="col-7">
              <AnimatedReveal delayMs={130}>
                <SectionTitle title="Инвестиционные преимущества" />
              </AnimatedReveal>

              <div style={{ marginTop: 20 }} className="grid grid--2">
                {investors.advantages.map((a, idx) => (
                  <AnimatedReveal key={a.title} delayMs={idx * 60}>
                    <div className="card" style={{ padding: 20, boxShadow: 'none' }}>
                      <div style={{ fontSize: 16, fontWeight: 900 }}>{a.title}</div>
                      <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.7, color: 'rgba(11,27,20,.75)' }}>
                        {a.description}
                      </div>
                    </div>
                  </AnimatedReveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="grid--12">
            <div className="col-6">
              <AnimatedReveal>
                <SectionTitle title="Корпоративное управление" subtitle="Принципы и ответственность" />
              </AnimatedReveal>
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {investors.governance.map((g, idx) => (
                  <AnimatedReveal key={g} delayMs={idx * 60}>
                    <div className="card" style={{ padding: 18, boxShadow: 'none' }}>
                      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <span
                          aria-hidden="true"
                          style={{ marginTop: 7, height: 8, width: 8, borderRadius: 999, background: 'var(--accent)' }}
                        />
                        <div style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(11,27,20,.8)' }}>{g}</div>
                      </div>
                    </div>
                  </AnimatedReveal>
                ))}
              </div>
            </div>

            <div className="col-6">
              <AnimatedReveal delayMs={120}>
                <SectionTitle title="Политики и кодексы" subtitle="Документы предоставляются по запросу" />
              </AnimatedReveal>
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {investors.policies.map((p, idx) => (
                  <AnimatedReveal key={p} delayMs={idx * 60}>
                    <div className="card" style={{ padding: 18, boxShadow: 'none' }}>
                      <div style={{ fontSize: 14.5, fontWeight: 900 }}>{p}</div>
                      <div style={{ marginTop: 14 }}>
                        <Button
                          variant="secondary"
                          ariaLabel={`Запросить документ: ${p}`}
                          onClick={() => handleOpenRequest(p)}
                        >
                          Запросить PDF
                        </Button>
                      </div>
                    </div>
                  </AnimatedReveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <AnimatedReveal>
            <SectionTitle title={investors.strategyTitle} subtitle={investors.strategyIntro} />
          </AnimatedReveal>

          <div style={{ marginTop: 24 }} className="grid grid--2">
            {investors.priorities.map((p, idx) => (
              <AnimatedReveal key={p.title} delayMs={idx * 70}>
                <div className="card" style={{ padding: 20, boxShadow: 'none' }}>
                  <div style={{ fontSize: 16, fontWeight: 900 }}>{p.title}</div>
                  <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.7, color: 'rgba(11,27,20,.75)' }}>
                    {p.description}
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>

          <AnimatedReveal delayMs={140}>
            <div className="card card--brand" style={{ padding: 24, marginTop: 24, boxShadow: 'none' }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--brand)' }}>Инвестиционные детали</div>
              <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.7, color: 'rgba(11,27,20,.8)' }}>
                {investors.investorNeeds}
              </div>
              <div style={{ marginTop: 18, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Button
                  variant="primary"
                  ariaLabel="Обсудить условия"
                  onClick={() => handleOpenRequest('Обсуждение условий')}
                >
                  Обсудить условия
                </Button>
                <Button
                  variant="ghost"
                  ariaLabel="Связаться с партнерским отделом"
                  onClick={() => navigate('/partners')}
                >
                  Связаться
                </Button>
              </div>
              <div style={{ marginTop: 12, fontSize: 12.5, lineHeight: 1.6, color: 'rgba(11,27,20,.6)' }}>
                {investors.expectedReturns}
              </div>
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      <Modal
        open={modalOpen}
        title="Запрос для инвесторов"
        description={modalDescription}
        onClose={() => setModalOpen(false)}
      >
        <LeadForm
          title="Заявка инвестору"
          description="Оставьте контакты — мы свяжемся и согласуем формат предоставления информации."
          submitLabel="Отправить запрос"
          onSuccess={() => setModalOpen(false)}
        />
      </Modal>
    </div>
  )
}

