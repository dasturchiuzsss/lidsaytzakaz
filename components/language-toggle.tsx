"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/hooks/use-language"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative bg-transparent">
          <span className="text-lg">{language === "uz" ? "🇺🇿" : "🇷🇺"}</span>
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("uz")} className="flex items-center space-x-2">
          <span>🇺🇿</span>
          <span>O'zbek</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ru")} className="flex items-center space-x-2">
          <span>🇷🇺</span>
          <span>Русский</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
