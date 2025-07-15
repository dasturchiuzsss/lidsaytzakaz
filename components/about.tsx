"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { Users, Award, Clock, Star, Target, Heart } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
  const { t } = useLanguage()

  const stats = [
    { icon: Users, value: "500+", label: t.about.stats.clients, color: "from-blue-500 to-cyan-500" },
    { icon: Award, value: "50+", label: t.about.stats.projects, color: "from-purple-500 to-pink-500" },
    { icon: Clock, value: "3+", label: t.about.stats.experience, color: "from-green-500 to-teal-500" },
    { icon: Star, value: "4.9", label: t.about.stats.rating, color: "from-yellow-500 to-orange-500" },
  ]

  const values = [
    { icon: Target, title: t.about.values.quality.title, description: t.about.values.quality.description },
    { icon: Heart, title: t.about.values.passion.title, description: t.about.values.passion.description },
    { icon: Users, title: t.about.values.team.title, description: t.about.values.team.description },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.about.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.about.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">{t.about.mission.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{t.about.mission.description}</p>
              <p className="text-muted-foreground leading-relaxed">{t.about.mission.vision}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <Card className="border-0 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Team Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8">{t.about.team.title}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {t.about.team.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="border-0 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={`https://img.ibots.uz/img/man/ozim.jpg`}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                    />
                    <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                  
                </Card>
              </motion.div>
              
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
