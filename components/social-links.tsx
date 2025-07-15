"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, Instagram, Mail } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    {
      name: "Telefon",
      icon: Phone,
      href: "tel:+998950051545",
      color: "bg-green-600 hover:bg-green-700",
      label: "+998 95 005 15 45",
    },
    {
      name: "Telegram",
      icon: MessageCircle,
      href: "https://t.me/roobotmee",
      color: "bg-blue-500 hover:bg-blue-600",
      label: "@roobotmee",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/ismoiloff.ru",
      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      label: "@ismoiloff.ru",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:kh.ismoiloff@gmail.com",
      color: "bg-blue-600 hover:bg-blue-700",
      label: "kh.ismoiloff@gmail.com",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {socialLinks.map((link, index) => {
        const Icon = link.icon
        return (
          <motion.a
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`flex flex-col items-center p-4 rounded-xl text-white transition-all duration-300 ${link.color}`}
          >
            <Icon className="w-8 h-8 mb-2" />
            <span className="text-sm font-medium text-center">{link.name}</span>
            <span className="text-xs opacity-90 text-center">{link.label}</span>
          </motion.a>
        )
      })}
    </div>
  )
}
