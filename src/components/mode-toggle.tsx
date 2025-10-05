import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.5rem] w-[1.5rem] dark:hidden" />
      <Moon className="hidden h-[1.5rem] w-[1.5rem] dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
