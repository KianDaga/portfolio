import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code, Lightbulb, Target, Zap, Brain, Rocket, Award, Star, TrendingUp, Users, Clock } from 'lucide-react';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="py-32 relative overflow-hidden bg-gradient-to-br from-background via-card/30 to-background" data-testid="section-about">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>
      
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Brain className="w-12 h-12 text-blue-400" />
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent" data-testid="text-about-title">
              About Me
            </h2>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-12 h-12 text-yellow-400" />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-12 relative overflow-hidden border-border shadow-2xl bg-card/50 backdrop-blur-xl">
            {/* Enhanced Card Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
            <motion.div 
              className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360] 
              }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [360, 180, 0] 
              }}
              transition={{ duration: 15, repeat: Infinity }}
            />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Code className="w-10 h-10 text-blue-400" />
                  </motion.div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent" data-testid="text-about-subtitle">
                    Passionate Developer & Problem Solver
                  </h3>
                </div>
                <div className="space-y-8 text-muted-foreground text-lg leading-relaxed">
                  <motion.p 
                    data-testid="text-about-paragraph-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    I'm Kian Daga, a dedicated web and Python developer with a passion for creating 
                    <span className="text-primary font-semibold"> innovative solutions</span>. My journey in programming began with HTML and CSS, and has 
                    evolved to encompass modern web technologies and advanced Python development.
                  </motion.p>
                  <motion.p 
                    data-testid="text-about-paragraph-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    With multiple years of hands-on experience, I've developed a diverse portfolio 
                    ranging from <span className="text-chart-2 font-semibold">AI-powered applications</span> like Future AI to practical GUI tools 
                    including YouTube downloaders, chatbots, and finance trackers.
                  </motion.p>
                  <motion.p 
                    data-testid="text-about-paragraph-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    I believe in <span className="text-chart-3 font-semibold">continuous learning</span> and have completed comprehensive Python courses 
                    from beginner to practical levels, always staying current with the latest 
                    technologies and best practices in software development.
                  </motion.p>
                </div>
              </motion.div>
            
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Target, value: '3+', label: 'Years Experience', gradient: 'from-blue-500 to-cyan-500', bgGradient: 'from-blue-500/20 to-cyan-500/20', delay: 0.8 },
                    { icon: Zap, value: '4', label: 'Projects Completed', gradient: 'from-purple-500 to-pink-500', bgGradient: 'from-purple-500/20 to-pink-500/20', delay: 0.9 },
                    { icon: Award, value: '5', label: 'Certifications', gradient: 'from-yellow-500 to-orange-500', bgGradient: 'from-yellow-500/20 to-orange-500/20', delay: 1.0 },
                    { icon: Code, value: '5', label: 'Languages', gradient: 'from-green-500 to-emerald-500', bgGradient: 'from-green-500/20 to-emerald-500/20', delay: 1.1 }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className={`text-center p-8 bg-gradient-to-br ${stat.bgGradient} rounded-2xl border border-white/10 hover-elevate group relative overflow-hidden`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: stat.delay }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      {/* Card Background Effect */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10`}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <motion.div
                        className="flex justify-center mb-4 relative z-10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                          <stat.icon className="w-8 h-8 text-white" />
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 relative z-10`}
                        data-testid={`text-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ type: "spring", duration: 1, delay: stat.delay + 0.2 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-muted-foreground font-medium relative z-10">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Additional Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Users, value: '94%', label: 'Client Satisfaction', gradient: 'from-indigo-500 to-blue-500' },
                    { icon: Clock, value: '24/7', label: 'Availability', gradient: 'from-pink-500 to-rose-500' },
                    { icon: TrendingUp, value: '∞', label: 'Growth Mindset', gradient: 'from-emerald-500 to-teal-500' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-slate-700/30 rounded-xl border border-white/5 hover-elevate group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="flex justify-center mb-2"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <stat.icon className={`w-5 h-5 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} />
                      </motion.div>
                      <div className={`text-lg font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/60">{stat.label}</div>
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