import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
  ariaLabel?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'btn--primary',
  secondary: 'btn--secondary',
  ghost: 'btn--ghost'
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'btn--sm',
  md: 'btn--md',
  lg: 'btn--lg'
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  onClick,
  disabled,
  ariaLabel
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={['btn', variantStyles[variant], sizeStyles[size], className]
        .filter(Boolean)
        .join(' ')}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

