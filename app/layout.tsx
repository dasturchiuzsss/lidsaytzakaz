import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ismoiloff.ru - Professional Web Development",
  description:
    "Professional web development and design services for your business. Создаем современные веб-сайты и мобильные приложения.",
  keywords: "web development, веб-разработка, создание сайтов, мобильные приложения, Узбекистан, Ташкент",
  authors: [{ name: "Ismoiloff Team" }],
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
