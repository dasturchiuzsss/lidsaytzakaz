"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+998 95 005 15 45",
      color: "from-green-500 to-teal-500",
      href: "tel:+998950051545",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "kh.ismoiloff@gmail.com",
      color: "from-blue-500 to-cyan-500",
      href: "mailto:kh.ismoiloff@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: t.contact.addressValue,
      color: "from-purple-500 to-pink-500",
      href: "#",
    },
    {
      icon: Clock,
      label: t.contact.hours,
      value: t.contact.hoursValue,
      color: "from-orange-500 to-red-500",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
          >
            <Send className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full text-center hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm group cursor-pointer">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {info.label}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {info.value}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="max-w-2xl mx-auto border-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">{t.contact.cta.title}</h3>
              <p className="text-muted-foreground mb-6">{t.contact.cta.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+998950051545"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t.contact.cta.call}
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:kh.ismoiloff@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t.contact.cta.email}
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
