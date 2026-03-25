import React, { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import logoUrl from '../../logo.svg?url'
import { Container } from './Container'

type NavItem = {
  label: string
  to: string
}

const navItems: NavItem[] = [
  { label: 'Главная', to: '/' },
  { label: 'Инвесторам', to: '/investors' },
  { label: 'Партнёрам', to: '/partners' }
]

type PillRect = {
  left: number
  width: number
}

export const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const menuId = useId()
  const [isOpen, setIsOpen] = useState(false)

  const navRef = useRef<HTMLElement | null>(null)
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map())
  const [pill, setPill] = useState<PillRect | null>(null)
  const [pillReady, setPillReady] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const prevPillRef = useRef<PillRect | null>(null)
  const animTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const activePath = useMemo(() => {
    return location.pathname || '/'
  }, [location.pathname])

  const handleNavigate = (to: string) => {
    setIsOpen(false)
    navigate(to)
  }

  const measurePill = useCallback(() => {
    const navEl = navRef.current
    if (!navEl) return

    const activeLink = linkRefs.current.get(activePath)
    if (!activeLink) return

    const navRect = navEl.getBoundingClientRect()
    const linkRect = activeLink.getBoundingClientRect()

    const newLeft = linkRect.left - navRect.left
    const newWidth = linkRect.width
    const prev = prevPillRef.current

    const isMoving = prev && (prev.left !== newLeft || prev.width !== newWidth)

    if (isMoving) {
      setIsAnimating(true)
      if (animTimerRef.current) clearTimeout(animTimerRef.current)
      animTimerRef.current = setTimeout(() => setIsAnimating(false), 550)
    }

    const newPill = { left: newLeft, width: newWidth }
    prevPillRef.current = newPill
    setPill(newPill)

    if (!pillReady) {
      requestAnimationFrame(() => setPillReady(true))
    }
  }, [activePath, pillReady])

  useLayoutEffect(() => {
    measurePill()
  }, [measurePill])

  useEffect(() => {
    window.addEventListener('resize', measurePill)
    return () => window.removeEventListener('resize', measurePill)
  }, [measurePill])

  const setLinkRef = useCallback(
    (to: string) => (el: HTMLAnchorElement | null) => {
      if (el) {
        linkRefs.current.set(to, el)
      } else {
        linkRefs.current.delete(to)
      }
    },
    []
  )

  return (
    <header className="siteHeader">
      <Container className="headerInner">
        <button
          type="button"
          className="brandButton"
          aria-label="На главную"
          onClick={() => handleNavigate('/')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleNavigate('/')
          }}
        >
          <img
            alt="Логотип"
            src={logoUrl}
            style={{ height: 36, width: 36 }}
          />
          <span className="headerBrandText">Агрофорвард</span>
        </button>

        <nav ref={navRef} className="nav" aria-label="Навигация">
          {pill ? (
            <span
              aria-hidden="true"
              className={`glassPill ${isAnimating ? 'glassPill--animating' : ''}`}
              style={{
                transform: `translateX(${pill.left}px) scale(${isAnimating ? 1.02 : 1})`,
                width: pill.width,
                opacity: pillReady ? 1 : 0,
                transition: pillReady
                  ? 'transform 550ms cubic-bezier(0.34, 1.56, 0.64, 1), width 550ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 300ms ease, box-shadow 350ms ease'
                  : 'none'
              }}
            >
              <span className="glassPill__shine" />
              <span className="glassPill__glow" />
            </span>
          ) : null}

          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              ref={setLinkRef(item.to)}
              className={({ isActive }) => {
                const active = isActive || activePath === item.to
                return ['navLink', active ? 'navLink--active' : undefined]
                  .filter(Boolean)
                  .join(' ')
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mobileBurger">
          <button
            type="button"
            className="burger"
            aria-label="Открыть меню"
            aria-expanded={isOpen}
            aria-controls={menuId}
            onClick={() => setIsOpen((v) => !v)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setIsOpen((v) => !v)
            }}
          >
            <span className="sr-only">Меню</span>
            <div className="burgerLines" aria-hidden="true">
              <span className="burgerLine" />
              <span className="burgerLine" />
              <span className="burgerLine" />
            </div>
          </button>
        </div>
      </Container>

      {isOpen ? (
        <div id={menuId} className="mobileMenu">
          <div className="mobileMenuInner">
            {navItems.map((item) => (
              <button
                key={item.to}
                type="button"
                className={[
                  'mobileItem',
                  location.pathname === item.to
                    ? 'mobileItem--active'
                    : undefined
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-label={item.label}
                onClick={() => handleNavigate(item.to)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
