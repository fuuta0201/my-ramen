"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const applyTheme = (theme: Theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
};

export default function ThemeToggle() {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme =
      storedTheme === "dark" || (!storedTheme && prefersDark)
        ? "dark"
        : "light";

    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";

    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted focus-visible:outline-ring inline-flex size-10 items-center justify-center rounded-md border shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
      aria-label="ライトモードとダークモードを切り替える"
    >
      <Moon className="size-4 dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-4 dark:block" aria-hidden="true" />
    </button>
  );
}
