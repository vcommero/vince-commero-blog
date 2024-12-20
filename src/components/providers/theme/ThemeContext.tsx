'use client';

import { createContext, useContext } from "react";

export type Theme = 'light' | 'dark';

interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) throw new Error('useTheme must be used within ThemeProvider.');
    return context;
}