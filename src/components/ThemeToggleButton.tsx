'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or null on the server and during initial client render
    // A button shell ensures layout consistency.
    return <Button variant="ghost" size="icon" className="h-8 w-8 md:h-7 md:w-7" disabled />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="h-8 w-8 md:h-7 md:w-7" // Adjusted for consistency with nav links
    >
      {theme === 'dark' ? <Sun className="h-[1.1rem] w-[1.1rem] md:h-4 md:w-4" /> : <Moon className="h-[1.1rem] w-[1.1rem] md:h-4 md:w-4" />}
    </Button>
  );
}
