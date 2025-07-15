"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight, CheckCircle, Sparkles, Star, Users, Award } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Hero() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)

    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", phone: "" })
    }, 4000)
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
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Form Section - Now First */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <Card className="w-full max-w-md shadow-2xl border-0 bg-card/80 backdrop-blur-xl relative overflow-hidden">
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />

              <CardContent className="p-8 relative z-10">
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
                          className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                          <Sparkles className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {t.form.title}
                        </h3>
                        <p className="text-muted-foreground">{t.form.subtitle}</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="space-y-2"
                        >
                          <label className="text-sm font-medium flex items-center space-x-2">
                            <span>{t.form.name}</span>
                            <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="text"
                            placeholder={t.form.namePlaceholder}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="h-12 border-2 focus:border-primary transition-all duration-300"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                          className="space-y-2"
                        >
                          <label className="text-sm font-medium flex items-center space-x-2">
                            <span>{t.form.phone}</span>
                            <span className="text-red-500">*</span>
                          </label>
                          <Input
                            type="tel"
                            placeholder={t.form.phonePlaceholder}
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                            className="h-12 border-2 focus:border-primary transition-all duration-300"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <Button
                            type="submit"
                            className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <div className="flex items-center space-x-2">
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <span>{t.form.sending}</span>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-2">
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
                        className="mt-6 text-center text-xs text-muted-foreground"
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
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-3 text-green-600">{t.form.success}</h3>
                      <p className="text-muted-foreground mb-4">{t.form.successMessage}</p>
                      <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
                        <span>⏱️</span>
                        <span>{t.form.responseTime}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-primary px-6 py-3 rounded-full text-sm font-medium border border-primary/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.hero.badge}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                {t.hero.title.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
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
                transition={{ delay: 0.6 }}
                className="text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                {t.hero.subtitle}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {t.hero.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
            >
              {[
                { value: "500+", label: t.hero.stats.clients },
                { value: "98%", label: t.hero.stats.satisfaction },
                { value: "24/7", label: t.hero.stats.support },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
