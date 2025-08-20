import { HTMLAttributes } from 'react'
import { cn } from '../utils'

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'lead' | 'large' | 'small' | 'muted'
  as?: React.ElementType
}

const Typography = ({ 
  variant = 'p', 
  as, 
  className, 
  children, 
  ...props 
}: TypographyProps) => {
  const Component = as || getDefaultElement(variant)
  
  return (
    <Component
      className={cn(getVariantClasses(variant), className)}
      {...props}
    >
      {children}
    </Component>
  )
}

function getDefaultElement(variant: TypographyProps['variant']) {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return variant
    case 'lead':
    case 'large':
    case 'small':
    case 'muted':
    case 'p':
    default:
      return 'p'
  }
}

function getVariantClasses(variant: TypographyProps['variant']) {
  switch (variant) {
    case 'h1':
      return 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'
    case 'h2':
      return 'scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight first:mt-0'
    case 'h3':
      return 'scroll-m-20 text-2xl font-semibold tracking-tight'
    case 'h4':
      return 'scroll-m-20 text-xl font-semibold tracking-tight'
    case 'h5':
      return 'scroll-m-20 text-lg font-semibold tracking-tight'
    case 'h6':
      return 'scroll-m-20 text-base font-semibold tracking-tight'
    case 'lead':
      return 'text-xl text-muted-foreground'
    case 'large':
      return 'text-lg font-semibold'
    case 'small':
      return 'text-sm font-medium leading-none'
    case 'muted':
      return 'text-sm text-muted-foreground'
    case 'p':
    default:
      return 'leading-7 [&:not(:first-child)]:mt-6'
  }
}

export { Typography }
