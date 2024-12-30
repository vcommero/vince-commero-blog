"use client";

import { useEffect, useState } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    // Sets initial theme
    useEffect(() => {
        let initialTheme = localStorage.getItem("theme") as Theme;
        if (!initialTheme) {
            initialTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light";
        }
        setTheme(initialTheme);
    }, []);

    // Toggles dark mode css class and stores theme in local storage
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
