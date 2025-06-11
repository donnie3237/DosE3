"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "dark"
        ? <Sun className="h-[1.1rem] w-[1.1rem]" />
        : <Moon className="h-[1.1rem] w-[1.1rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
