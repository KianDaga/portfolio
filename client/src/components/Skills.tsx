import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Server, Wrench, Globe, Star, Zap, Target, Award, TrendingUp, Brain } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderGradient: 'from-blue-400 to-cyan-400',
      skills: [
        { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'CSS', level: 90, color: 'from-blue-500 to-indigo-500' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-orange-500' },
        { name: 'TypeScript', level: 75, color: 'from-blue-600 to-blue-800' },
        { name: 'React', level: 80, color: 'from-cyan-500 to-blue-500' },
        { name: 'Tailwind CSS', level: 85, color: 'from-teal-500 to-cyan-500' }
      ]
    },
    {
      title: 'Backend Development', 
      icon: Server,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      borderGradient: 'from-green-400 to-emerald-400',
      skills: [
        { name: 'Python', level: 99, color: 'from-yellow-500 to-green-500' },
        { name: 'Node.js', level: 80, color: 'from-green-600 to-green-800' },
        { name: 'Express.js', level: 70, color: 'from-gray-600 to-gray-800' },
        { name: 'RESTful APIs', level: 75, color: 'from-purple-500 to-pink-500' },
        { name: 'Database Design', level: 80, color: 'from-blue-500 to-purple-500' }
      ]
    },
    {
      title: 'Python Specializations',
      icon: Code,
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-500/10 to-orange-500/10',
      borderGradient: 'from-yellow-400 to-orange-400',
      skills: [
        { name: 'GUI Development', level: 90, color: 'from-yellow-500 to-red-500' },
        { name: 'OOP', level: 88, color: 'from-orange-500 to-pink-500' },
        { name: 'API Integration', level: 85, color: 'from-red-500 to-purple-500' },
        { name: 'Automation', level: 82, color: 'from-pink-500 to-rose-500' },
        { name: 'Discord Bots', level: 70, color: 'from-indigo-500 to-purple-500' },
        { name: 'Data Processing', level: 72, color: 'from-purple-500 to-blue-500' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      borderGradient: 'from-purple-400 to-pink-400',
      skills: [
        { name: 'Git', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'GitHub', level: 88, color: 'from-gray-600 to-gray-800' },
        { name: 'VS Code', level: 99, color: 'from-blue-500 to-indigo-500' },
        { name: 'Replit', level: 85, color: 'from-orange-500 to-yellow-500' },
        { name: 'Chrome DevTools', level: 70, color: 'from-green-500 to-blue-500' },
        { name: 'Command Line', level: 75, color: 'from-gray-500 to-gray-700' }
      ]
    }
  ];

  return (
    <section ref={ref} id="skills" className="py-32 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-chart-2/10" data-testid="section-skills">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(236,72,153,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
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
            <h2 
              className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent" 
              data-testid="text-skills-title"
            >
              Technical Skills
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
          
          <motion.p 
            className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" 
            data-testid="text-skills-description"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A comprehensive portfolio of skills and techniques - percentages reflect proficiency levels
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card 
                  className={`p-10 relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br ${category.bgGradient} backdrop-blur-xl border border-border`} 
                  data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {/* Enhanced Card Background Effects */}
                  <motion.div 
                    className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${category.gradient} rounded-full opacity-10 blur-3xl`}
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360] 
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                  />
                  
                  <motion.div 
                    className={`absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br ${category.gradient} rounded-full opacity-5 blur-2xl`}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [360, 180, 0] 
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center gap-6 mb-8"
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    >
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-xl`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className={`text-3xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`} data-testid={`text-skill-category-${index}`}>
                        {category.title}
                      </h3>
                    </motion.div>
                    
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className="group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.2 + skillIndex * 0.1 + 0.5
                          }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-foreground font-medium text-lg">{skill.name}</span>
                            <span className="text-muted-foreground text-sm font-mono">{skill.level}%</span>
                          </div>
                          
                          <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : {}}
                              transition={{ 
                                duration: 1.5, 
                                delay: index * 0.2 + skillIndex * 0.1 + 0.8,
                                ease: "easeOut"
                              }}
                              onHoverStart={() => setHoveredSkill(skill.name)}
                              onHoverEnd={() => setHoveredSkill(null)}
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity, 
                                  ease: "easeInOut",
                                  delay: skillIndex * 0.2
                                }}
                              />
                            </motion.div>
                          </div>
                          
                          {hoveredSkill === skill.name && (
                            <motion.div
                              className="absolute -top-12 left-0 bg-card text-foreground px-3 py-1 rounded-lg text-sm font-medium shadow-lg border border-border"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                            >
                              {skill.level}% Proficiency
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}