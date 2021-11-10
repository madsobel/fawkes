import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'

function ModeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (theme === 'dark' || resolvedTheme === 'dark') {
    return (
      <button
        type="button"
        className="transition p-1 rounded-md bg-gray-900 text-gray-200 hover:bg-gray-800"
        onClick={() => setTheme('light')}
        suppressHydrationWarning
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
    );
  }
  if (theme === 'light' || resolvedTheme === 'light') {
    return (
      <button
        className="transition p-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
        onClick={() => setTheme('dark')}
        type="button"
        suppressHydrationWarning
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    );
  }
  return null;
}

export default ModeSwitch;
