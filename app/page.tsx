"use client"
import { LeadForm } from "@/components/lead-form"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/hooks/use-language"
import { FloatingContact } from "@/components/floating-contact"
import { ErrorBoundary } from "@/components/error-boundary"

export default function Home() {
  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LanguageProvider>
          <div className="min-h-screen bg-background">
            <Header />
            <main>
              <LeadForm />
              <Services />
              <Portfolio />
              <Testimonials />
              <About />
              <FAQ />
              <Contact />
            </main>
            <Footer />
            <FloatingContact />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
