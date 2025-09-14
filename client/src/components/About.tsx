import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code, Lightbulb, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden" data-testid="section-about">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-chart-2/5" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent" data-testid="text-about-title">
            About Me
          </h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-8 hover-elevate relative overflow-hidden border-primary/20 shadow-2xl">
            {/* Card Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 opacity-50" />
            <motion.div 
              className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360] 
              }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Code className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent" data-testid="text-about-subtitle">
                    Passionate Developer & Problem Solver
                  </h3>
                </div>
                <div className="space-y-6 text-muted-foreground">
                  <motion.p 
                    data-testid="text-about-paragraph-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    I'm Kian Daga, a dedicated web and Python developer with a passion for creating 
                    <span className="text-primary font-semibold"> innovative solutions</span>. My journey in programming began with HTML and CSS, and has 
                    evolved to encompass modern web technologies and advanced Python development.
                  </motion.p>
                  <motion.p 
                    data-testid="text-about-paragraph-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    With multiple years of hands-on experience, I've developed a diverse portfolio 
                    ranging from <span className="text-chart-2 font-semibold">AI-powered applications</span> like Future AI to practical GUI tools 
                    including YouTube downloaders, chatbots, and finance trackers.
                  </motion.p>
                  <motion.p 
                    data-testid="text-about-paragraph-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    I believe in <span className="text-chart-3 font-semibold">continuous learning</span> and have completed comprehensive Python courses 
                    from beginner to practical levels, always staying current with the latest 
                    technologies and best practices in software development.
                  </motion.p>
                </div>
              </motion.div>
            
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Target, value: '3+', label: 'Years Experience', color: 'primary', delay: 0.8 },
                    { icon: Zap, value: '10+', label: 'Projects Completed', color: 'chart-2', delay: 0.9 },
                    { icon: Lightbulb, value: '5', label: 'Certifications', color: 'chart-3', delay: 1.0 },
                    { icon: Code, value: '5', label: 'Languages', color: 'chart-4', delay: 1.1 }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className={`text-center p-6 bg-gradient-to-br from-${stat.color}/10 to-${stat.color}/5 rounded-xl border border-${stat.color}/20 hover-elevate group`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: stat.delay }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="flex justify-center mb-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                      </motion.div>
                      <motion.div 
                        className={`text-3xl font-bold text-${stat.color} mb-1`}
                        data-testid={`text-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 1, delay: stat.delay + 0.2 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}