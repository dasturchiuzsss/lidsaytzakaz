"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight, CheckCircle, Sparkles, Star, Users, Award, Phone, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { submitToGoogleSheets } from "@/actions/submit-form"

export function LeadForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Basic validation
    if (!formData.name.trim()) {
      setError("Iltimos, ismingizni kiriting")
      setIsLoading(false)
      return
    }

    if (!formData.phone.trim()) {
      setError("Iltimos, telefon raqamingizni kiriting")
      setIsLoading(false)
      return
    }

    // Phone number validation (basic)
    const phoneRegex = /^\+998\d{9}$/
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      setError("Telefon raqami noto'g'ri formatda. Masalan: +998901234567")
      setIsLoading(false)
      return
    }

    try {
      const result = await submitToGoogleSheets(formData)

      if (result.success) {
        setIsSubmitted(true)
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: "", phone: "" })
        }, 5000)
      } else {
        setError(result.error || "Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.")
      }
    } catch (err) {
      console.error("Form submission error:", err)
      setError("Ma'lumotlarni yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.")
    } finally {
      setIsLoading(false)
    }
  }

  const floatingElements = [
    { icon: Star, delay: 0, x: "10%", y: "20%" },
    { icon: Users, delay: 0.5, x: "80%", y: "30%" },
    { icon: Award, delay: 1, x: "15%", y: "70%" },
    { icon: Sparkles, delay: 1.5, x: "85%", y: "80%" },
  ]

  return (
    <section id="home" className="relative min-h-screen pt-20 pb-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-cyan-950/20" />

      {/* Floating Elements */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
              y: [-10, 10, -10],
            }}
            transition={{
              delay: element.delay,
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute hidden lg:block"
            style={{ left: element.x, top: element.y }}
          >
            <Icon className="w-8 h-8 text-primary/30" />
          </motion.div>
        )
      })}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-primary px-6 py-3 rounded-full text-sm font-medium border border-primary/20 mb-8"
            >
              <Sparkles className="w-5 h-5" />
              <span>{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              {t.hero.title.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={
                    index === 1 ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" : ""
                  }
                >
                  {word}{" "}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>
          </motion.div>

          {/* Form and Features Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form Section - Primary Focus */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="order-1"
            >
              <Card className="shadow-2xl border-0 bg-card/90 backdrop-blur-xl relative overflow-hidden">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />

                <CardContent className="p-8 lg:p-10 relative z-10">
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-center mb-8">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
                          >
                            <Sparkles className="w-10 h-10 text-white" />
                          </motion.div>
                          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {t.form.title}
                          </h2>
                          <p className="text-lg text-muted-foreground">{t.form.subtitle}</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-2"
                          >
                            <label className="text-sm font-semibold flex items-center space-x-2">
                              <span>{t.form.name}</span>
                              <span className="text-red-500">*</span>
                            </label>
                            <Input
                              type="text"
                              placeholder={t.form.namePlaceholder}
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                              className="h-14 text-lg border-2 focus:border-primary transition-all duration-300 bg-background/50"
                            />
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-2"
                          >
                            <label className="text-sm font-semibold flex items-center space-x-2">
                              <span>{t.form.phone}</span>
                              <span className="text-red-500">*</span>
                            </label>
                            <Input
                              type="tel"
                              placeholder={t.form.phonePlaceholder}
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              required
                              className="h-14 text-lg border-2 focus:border-primary transition-all duration-300 bg-background/50"
                            />
                          </motion.div>

                          {error && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                            >
                              <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                            </motion.div>
                          )}

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <Button
                              type="submit"
                              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                              disabled={isLoading}
                            >
                              {isLoading ? (
                                <div className="flex items-center space-x-3">
                                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                  <span>{t.form.sending}</span>
                                </div>
                              ) : (
                                <div className="flex items-center space-x-3">
                                  <span>{t.form.submit}</span>
                                  <ArrowRight className="w-5 h-5" />
                                </div>
                              )}
                            </Button>
                          </motion.div>
                        </form>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="mt-6 text-center text-sm text-muted-foreground"
                        >
                          🔒 {t.form.privacy}
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="text-center py-12"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8"
                        >
                          <CheckCircle className="w-12 h-12 text-green-600" />
                        </motion.div>
                        <h3 className="text-3xl font-bold mb-4 text-green-600">{t.form.success}</h3>
                        <p className="text-lg text-muted-foreground mb-6">{t.form.successMessage}</p>
                        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                          <span>⏱️</span>
                          <span>{t.form.responseTime}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>

            {/* Features and Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="order-2 space-y-8"
            >
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.hero.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-background/80 to-muted/50 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
              >
                {[
                  { value: "500+", label: t.hero.stats.clients, icon: Users },
                  { value: "98%", label: t.hero.stats.satisfaction, icon: Star },
                  { value: "24/7", label: t.hero.stats.support, icon: Phone },
                ].map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.3 + index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.1 }}
                      className="text-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-6 rounded-xl border border-primary/20"
              >
                <h3 className="text-lg font-bold mb-4 text-center">{t.form.contactInfo}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="tel:+998950051545"
                    className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="text-sm text-muted-foreground">{t.contact.phone}</div>
                      <div className="font-medium">+998 95 005 15 45</div>
                    </div>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="mailto:kh.ismoiloff@gmail.com"
                    className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-muted-foreground">{t.contact.email}</div>
                      <div className="font-medium">kh.ismoiloff@gmail.com</div>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
