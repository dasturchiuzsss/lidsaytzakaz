"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle, X, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const contactOptions = [
    {
      name: "Telefon",
      icon: Phone,
      href: "tel:+998950051545",
      color: "bg-green-600 hover:bg-green-700",
      label: "Qo'ng'iroq qilish",
    },
    {
      name: "Telegram",
      icon: MessageCircle,
      href: "https://t.me/roobotmee",
      color: "bg-blue-500 hover:bg-blue-600",
      label: "Telegram orqali",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 space-y-3"
          >
            {contactOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <motion.a
                  key={option.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  href={option.href}
                  target={option.href.startsWith("http") ? "_blank" : undefined}
                  rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-full text-white shadow-lg transition-all duration-300 ${option.color}`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium whitespace-nowrap">{option.label}</span>
                </motion.a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="contact"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Headphones className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </div>
  )
}
