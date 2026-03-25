import React from 'react'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={['container', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

