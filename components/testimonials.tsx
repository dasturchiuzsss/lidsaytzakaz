"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

export function Testimonials() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: "Akmal Karimov",
      position: t.testimonials.clients.akmal.position,
      company: "TechCorp",
      content: t.testimonials.clients.akmal.content,
      rating: 5,
      avatar: "https://img.ibots.uz/img/man/bola.jpg",
    },
    {
      name: "Dilnoza Rahimova",
      position: t.testimonials.clients.dilnoza.position,
      company: "StartupHub",
      content: t.testimonials.clients.dilnoza.content,
      rating: 5,
      avatar: "https://img.ibots.uz/img/man/qiz.jpg",
    },
    {
      name: "Bobur Toshmatov",
      position: t.testimonials.clients.bobur.position,
      company: "DigitalAgency",
      content: t.testimonials.clients.bobur.content,
      rating: 5,
      avatar: "https://img.ibots.uz/img/man/1.jpeg",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-muted/30 to-background">
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
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6"
          >
            <Star className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position} • {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
