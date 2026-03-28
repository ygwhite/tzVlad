import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logoUrl from '../../logo.svg?url'
import { Container } from '../components/Container'
import { AnimatedReveal } from '../components/AnimatedReveal'
import { SectionTitle } from '../components/SectionTitle'
import { Button } from '../components/ui/Button'
import { Modal } from '../components/ui/Modal'
import { LeadForm } from '../components/forms/LeadForm'
import { company, docs, timeline, values } from '../lib/content'
import { siteMedia, siteMediaAlt } from '../lib/siteMedia'

export const HomePage = () => {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const [docTitle, setDocTitle] = useState('Документы')

  const modalDescription = useMemo(() => {
    return `Запрос на получение копий: ${docTitle}`
  }, [docTitle])

  const handleRequestDoc = (title: string) => {
    setDocTitle(title)
    setModalOpen(true)
  }

  return (
    <div style={{ paddingBottom: 48 }}>
      <section className="section section--hero">
        <Container>
          <div className="heroHomeGrid">
            <div className="heroHomeGrid__intro">
              <AnimatedReveal>
                <div className="heroKicker" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div
                    style={{
                      height: 44,
                      width: 44,
                      borderRadius: 18,
                      border: '1px solid var(--border)',
                      background: 'rgba(255,255,255,.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'var(--blur)'
                    }}
                  >
                    <img alt="Логотип" src={logoUrl} style={{ height: 28, width: 28 }} />
                  </div>
                  <div>Поставщик мясосырья</div>
                </div>

                <h1 className="heroH1">Надежность поставок и прозрачный документооборот</h1>
                <p className="heroLead">
                  {company.short}. Компания работает с учетом требований качества и ритмичности
                  — от производителя до переработчика.
                </p>

                <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  <Button
                    variant="primary"
                    ariaLabel="Перейти к контактам"
                    onClick={() => navigate('/partners')}
                  >
                    Связаться
                  </Button>
                  <Button
                    variant="ghost"
                    ariaLabel="Перейти к разделу для инвесторов"
                    onClick={() => navigate('/investors')}
                  >
                    Для инвесторов
                  </Button>
                </div>

                <div style={{ marginTop: 32 }} className="listRow listRow--3">
                  {[
                    { label: 'Ритмичные поставки', value: '12–36 мес.' },
                    { label: 'Температурная цепь', value: 'Контроль' },
                    { label: 'Документы по запросу', value: 'PDF' }
                  ].map((item) => (
                    <div key={item.label} className="miniStat" style={{ flex: '1 1 0' }}>
                      <div className="miniStat__label">{item.label}</div>
                      <div className="miniStat__value">{item.value}</div>
                    </div>
                  ))}
                </div>
              </AnimatedReveal>
            </div>

            <div className="heroHomeGrid__media">
              <AnimatedReveal delayMs={80} className="heroHomeGrid__mediaReveal">
                <figure className="heroPhotoFrame heroPhotoFrame--heroSpan">
                  <img
                    className="heroPhotoFrame__img"
                    src={siteMedia.heroButcher}
                    alt={siteMediaAlt.heroButcher}
                    width={960}
                    height={1350}
                    loading="eager"
                    decoding="async"
                  />
                  <figcaption className="heroPhotoFrame__cap">
                    Ручной контроль партий и документирование на линии обвалки
                  </figcaption>
                </figure>
              </AnimatedReveal>
            </div>

            <div className="heroHomeGrid__growth">
              <AnimatedReveal delayMs={90}>
                <div className="card" style={{ padding: 24 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(11,27,20,.7)' }}>
                    Ключевые этапы роста
                  </div>

                  <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {timeline.slice(0, 3).map((t) => (
                      <div
                        key={t.period}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          gap: 18,
                          borderRadius: 18,
                          border: '1px solid var(--border)',
                          background: 'rgba(255,255,255,.3)',
                          padding: 16
                        }}
                      >
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--brand)' }}>
                            {t.period}
                          </div>
                          <div style={{ marginTop: 6, fontSize: 12.5, lineHeight: 1.6, color: 'rgba(11,27,20,.7)' }}>
                            {t.title}
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(11,27,20,.6)' }}>Объем</div>
                          <div style={{ fontSize: 14.5, fontWeight: 900 }}>{t.stats[0]?.value ?? '—'}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <Button
                      variant="secondary"
                      ariaLabel="Запросить пакет документов"
                      onClick={() => handleRequestDoc('Пакет документов')}
                    >
                      Запросить документы
                    </Button>
                    <Button
                      variant="ghost"
                      ariaLabel="Перейти к разделу партнеров"
                      onClick={() => navigate('/partners')}
                    >
                      Партнерство
                    </Button>
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
                <SectionTitle title="О компании" subtitle="Миссия и ориентиры" />
              </AnimatedReveal>

              <AnimatedReveal delayMs={90}>
                <div className="card" style={{ padding: 22 }}>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: 'rgba(11,27,20,.8)' }}>
                    {company.mission}
                  </p>
                </div>
              </AnimatedReveal>
            </div>

            <div className="col-7">
              <AnimatedReveal delayMs={140}>
                <div className="grid grid--2" style={{ gap: 14 }}>
                  {values.map((v, idx) => (
                    <AnimatedReveal key={v.title} delayMs={idx * 60}>
                      <div className="card" style={{ padding: 20, transition: 'transform 150ms ease' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14 }}>
                          <div style={{ fontSize: 16, fontWeight: 900 }}>{v.title}</div>
                          <div style={{ height: 40, width: 40, borderRadius: 16, background: 'rgba(4,82,58,.1)' }} />
                        </div>
                        <p style={{ margin: '10px 0 0', fontSize: 14, lineHeight: 1.7, color: 'rgba(11,27,20,.75)' }}>
                          {v.description}
                        </p>
                        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {v.points.map((p) => (
                            <div key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'rgba(11,27,20,.7)' }}>
                              <span style={{ marginTop: 8, height: 6, width: 6, borderRadius: 9999, background: 'var(--accent)' }} aria-hidden="true" />
                              <span>{p}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AnimatedReveal>
                  ))}
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <AnimatedReveal>
            <SectionTitle
              title="Инфраструктура и контроль качества"
              subtitle="От фермы и логистики — до технологического цикла на площадке клиента."
            />
          </AnimatedReveal>

          <div className="mediaMosaic">
            {[
              {
                media: siteMedia.dairyHerd,
                alt: siteMediaAlt.dairyHerd,
                title: 'Сырье с проверенных ферм',
                text: 'Базируемся на стадах с устойчивым качеством молочного и мясного направления.',
                className: 'mediaMosaic__figure--tall'
              },
              {
                media: siteMedia.supplyNetwork,
                alt: siteMediaAlt.supplyNetwork,
                title: 'Логистическая сеть',
                text: 'Температурная цепь и мониторинг партий по всей траектории.'
              },
              {
                media: siteMedia.agriculturalLandscape,
                alt: siteMediaAlt.agriculturalLandscape,
                title: 'Масштабируемые площади',
                text: 'Запас мощности по полям и переработке для наращивания объемов.'
              }
            ].map((item) => (
              <AnimatedReveal key={item.title} delayMs={90}>
                <figure className={['mediaMosaic__figure', item.className].filter(Boolean).join(' ')}>
                  <img
                    className="mediaMosaic__img"
                    src={item.media}
                    alt={item.alt}
                    width={1600}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="mediaMosaic__cap">
                    <div className="mediaMosaic__title">{item.title}</div>
                    <div className="mediaMosaic__text">{item.text}</div>
                  </figcaption>
                </figure>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <AnimatedReveal>
            <SectionTitle
              title="История развития"
              subtitle="Этапы, которые сформировали надежную модель поставок и контроля качества."
            />
          </AnimatedReveal>

          <div className="grid grid--2" style={{ gap: 16, marginTop: 28 }}>
            {timeline.map((item, idx) => (
              <AnimatedReveal key={item.period} delayMs={idx * 60}>
                <div className="card" style={{ padding: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
                    <div>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          color: 'rgba(11,27,20,.6)'
                        }}
                      >
                        {item.period}
                      </div>
                      <div style={{ marginTop: 10, fontSize: 18, fontWeight: 900 }}>{item.title}</div>
                    </div>
                    <div
                      style={{
                        borderRadius: 14,
                        background: 'rgba(4,82,58,.1)',
                        padding: '8px 12px',
                        fontSize: 12,
                        fontWeight: 900,
                        color: 'var(--brand)'
                      }}
                    >
                      рост
                    </div>
                  </div>

                  <p style={{ margin: '14px 0 0', fontSize: 14, lineHeight: 1.6, color: 'rgba(11,27,20,.75)' }}>
                    {item.description}
                  </p>

                  <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
                    {item.stats.map((s) => (
                      <div
                        key={s.label}
                        style={{
                          borderRadius: 16,
                          border: '1px solid var(--border)',
                          background: 'rgba(255,255,255,.3)',
                          padding: 14
                        }}
                      >
                        <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(11,27,20,.6)' }}>{s.label}</div>
                        <div style={{ marginTop: 4, fontSize: 14.5, fontWeight: 900 }}>{s.value}</div>
                      </div>
                    ))}
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
            <SectionTitle title="Руководители" subtitle="Компетенции и управленческий опыт" />
          </AnimatedReveal>

          <div className="grid grid--2" style={{ gap: 16, marginTop: 28 }}>
            {[
              {
                title: 'Генеральный директор',
                subtitle: 'Стратегия и развитие',
                avatarLabel: 'ГД',
                text: 'Руководитель с глубокими знаниями рынка мясного сырья, логистики и корпоративного управления.'
              },
              {
                title: 'Коммерческий директор',
                subtitle: 'Клиенты и контрактная политика',
                avatarLabel: 'КД',
                text: 'Управленческий подход к долгосрочным контрактам, обеспечению качества и предсказуемости поставок.'
              }
            ].map((d, idx) => (
              <AnimatedReveal key={d.title} delayMs={idx * 120}>
                <div className="card" style={{ padding: 24 }}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div
                      style={{
                        height: 56,
                        width: 56,
                        borderRadius: 18,
                        background: 'rgba(4,82,58,.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        color: 'var(--brand)'
                      }}
                    >
                      {d.avatarLabel}
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 900 }}>{d.title}</div>
                      <div style={{ marginTop: 6, fontSize: 14, fontWeight: 700, color: 'rgba(11,27,20,.6)' }}>
                        {d.subtitle}
                      </div>
                    </div>
                  </div>
                  <p style={{ margin: '14px 0 0', fontSize: 14, lineHeight: 1.7, color: 'rgba(11,27,20,.75)' }}>
                    {d.text}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <AnimatedReveal>
            <SectionTitle title="Документы и сертификаты" subtitle="Запросите копии в удобной форме" />
          </AnimatedReveal>

          <div className="grid grid--2" style={{ gap: 16, marginTop: 28 }}>
            {docs.map((doc, idx) => (
              <AnimatedReveal key={doc.title} delayMs={idx * 70}>
                <div className="card" style={{ padding: 24 }}>
                  <div style={{ fontSize: 16, fontWeight: 900 }}>{doc.title}</div>
                  <p style={{ margin: '10px 0 0', fontSize: 14, lineHeight: 1.7, color: 'rgba(11,27,20,.75)' }}>
                    {doc.description}
                  </p>
                  <div style={{ marginTop: 18 }}>
                    <Button
                      variant="secondary"
                      ariaLabel={`Запросить копию: ${doc.title}`}
                      onClick={() => handleRequestDoc(doc.title)}
                    >
                      Запросить копию
                    </Button>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <Modal
        open={modalOpen}
        title="Запросить копии документов"
        description={modalDescription}
        onClose={() => setModalOpen(false)}
      >
        <LeadForm
          title="Заявка на документы"
          description="Оставьте контакты — мы подготовим копии документов и свяжемся с вами."
          submitLabel="Отправить запрос"
          onSuccess={() => setModalOpen(false)}
        />
      </Modal>
    </div>
  )
}
