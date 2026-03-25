import React, { type ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type AnimatedRevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
}

export const AnimatedReveal = ({
  children,
  className,
  delayMs = 0
}: AnimatedRevealProps) => {
  const { ref, inView } = useInView({ once: true })

  return (
    <div
      ref={ref as unknown as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={['reveal', inView ? 'reveal--in' : undefined, className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}

