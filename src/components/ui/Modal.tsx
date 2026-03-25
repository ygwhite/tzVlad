import React, { useEffect, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Button } from './Button'

type ModalProps = {
  open: boolean
  title: string
  description?: string
  children: React.ReactNode
  onClose: () => void
}

const getFocusableElements = (container: HTMLElement) => {
  const selectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ]
  return Array.from(container.querySelectorAll<HTMLElement>(selectors.join(',')))
}

export const Modal = ({ open, title, description, children, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null)

  const modalTitleId = useMemo(() => `modal-title-${title.replace(/\s+/g, '-').toLowerCase()}`, [title])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) return

    const container = modalRef.current
    if (!container) return

    const focusables = getFocusableElements(container)
    const first = focusables[0]

    if (first) first.focus()
  }, [open])

  if (!open) return null

  return createPortal(
    <div
      className="modalOverlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={modalTitleId}
    >
      <button
        type="button"
        className="modalBackdrop"
        aria-label="Закрыть модальное окно"
        onClick={onClose}
      />

      <div
        ref={modalRef}
        className="modalPanel"
      >
        <div className="modalHeader">
          <div>
            <h2 id={modalTitleId} className="modalTitle">
              {title}
            </h2>
            {description ? (
              <p className="mutedSm">{description}</p>
            ) : null}
          </div>
          <Button
            variant="ghost"
            ariaLabel="Закрыть"
            size="sm"
            className="modalCloseX"
            onClick={onClose}
          >
            <span aria-hidden="true">✕</span>
          </Button>
        </div>

        <div style={{ marginTop: 20 }}>{children}</div>
      </div>
    </div>,
    document.body
  )
}

