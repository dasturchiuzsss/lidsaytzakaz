"use client"

import { useLanguage } from "@/hooks/use-language"
import { Heart, ArrowUp, MessageCircle, Instagram, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Ismoiloff.ru
              </span>
            </div>
            <p className="text-slate-300 max-w-md mx-auto leading-relaxed mb-6">{t.footer.description}</p>

            {/* Social Media Links */}
            <div className="flex items-center justify-center space-x-6 mb-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="tel:+998950051545"
                className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full text-white hover:bg-green-700 transition-colors"
                title="Telefon"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://t.me/roobotmee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
                title="Telegram"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://instagram.com/ismoiloff.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:from-purple-600 hover:to-pink-600 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-t border-slate-700 pt-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-1 text-sm text-slate-400">
                <span>{t.footer.madeWith}</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Heart className="w-4 h-4 text-red-400 fill-current" />
                </motion.div>
                <span>{t.footer.by} Ismoiloff Team</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition-colors duration-300"
              >
                <ArrowUp className="w-4 h-4" />
                <span>{t.footer.backToTop}</span>
              </motion.button>
            </div>

            <div className="mt-6 text-xs text-slate-500">© 2024 Ismoiloff.ru. {t.footer.rights}</div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
