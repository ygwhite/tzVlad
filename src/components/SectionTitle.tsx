import React from 'react'

type SectionTitleProps = {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export const SectionTitle = ({ title, subtitle, align = 'left' }: SectionTitleProps) => {
  return (
    <div
      className={[
        'sectionTitle',
        align === 'center' ? 'sectionTitle--center' : undefined
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <h2 className="sectionTitle__h2">{title}</h2>
      {subtitle ? (
        <p className="sectionTitle__p">{subtitle}</p>
      ) : null}
    </div>
  )
}

