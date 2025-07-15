"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

export function Portfolio() {
  const { t } = useLanguage()

  const projects = [
    {
      title: "Mikro Pul Uz ",
      description: t.portfolio.projects.ecommerce,
      image: "http://img.ibots.uz/img/mikropul.png",
      tags: ["React", "Node.js", "MongoDB"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "LINDL School ",
      description: t.portfolio.projects.corporate,
      image: "http://img.ibots.uz/img/LINDL.png",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "AJ Academy",
      description: t.portfolio.projects.mobile,
      image: "http://img.ibots.uz/img/ajacademy.png",
      tags: ["React Native", "Firebase"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Sts Market",
      description: t.portfolio.projects.dashboard,
      image: "http://img.ibots.uz/img/stsmarker.png",
      tags: ["Vue.js", "Laravel", "MySQL"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Tridmo Shop",
      description: t.portfolio.projects.landing,
      image: "http://img.ibots.uz/img/tridmo.png",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Web Application",
      description: t.portfolio.projects.webapp,
      image: "http://img.ibots.uz/img/uvix.png",
      tags: ["React", "Node.js", "MongoDB"],
      color: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.portfolio.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.portfolio.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/90 text-black hover:bg-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.portfolio.view}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 border-white/90 text-black hover:bg-white"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t.portfolio.code}
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-muted rounded-full text-xs font-medium hover:bg-primary hover:text-white transition-colors duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
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
