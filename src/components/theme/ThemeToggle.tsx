"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
        >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
        </button>
    );
}
