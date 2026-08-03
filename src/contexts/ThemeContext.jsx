import { createContext, useMemo, useState } from 'react'

export const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')

    const value = useMemo(() => ({ theme, setTheme }), [theme])

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
