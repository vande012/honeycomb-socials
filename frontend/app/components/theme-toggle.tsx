'use client'

import { useTheme } from './theme-provider'
import { Sun, Moon } from 'lucide-react'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  // Prevent hydration mismatch by showing default icon until mounted
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        className="text-white hover:text-white/80 hover:bg-white/10 dark:text-foreground dark:hover:text-foreground dark:hover:bg-accent"
      >
        <Moon className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
      className="text-white hover:text-white/80 hover:bg-white/10 dark:text-foreground dark:hover:text-foreground dark:hover:bg-accent"
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  )
}
