import { HTMLAttributes } from 'react'
import { cn } from '../utils'

const badgeVariants = {
  variant: {
    default: 'bg-primary hover:bg-primary/80 border-transparent text-primary-foreground',
    secondary: 'bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground',
    destructive: 'bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground',
    outline: 'text-foreground border-border',
    success: 'bg-success hover:bg-success/80 border-transparent text-success-foreground',
    warning: 'bg-warning hover:bg-warning/80 border-transparent text-warning-foreground',
    info: 'bg-info hover:bg-info/80 border-transparent text-info-foreground',
  },
}

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants.variant
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        badgeVariants.variant[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
