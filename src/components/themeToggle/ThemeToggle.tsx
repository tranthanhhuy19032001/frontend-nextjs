'use client'

import * as React from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import Button from '../button/Button'
import { useState } from 'react'

export function ThemeToggle() {
    const { setTheme } = useTheme()
    const [isDark, setIsDark] = useState(false)

    const onToggle = () => {
        setIsDark(!isDark)
        if (isDark) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <Button
            onClick={onToggle}
            className="mt-1 p-2 border-2 rounded-full border-transparent hover:border-blue-600"
        >
            {isDark ? (
                <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            ) : (
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            )}
        </Button>
    )
}
