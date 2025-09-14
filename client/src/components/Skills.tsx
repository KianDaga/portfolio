import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Server, Wrench, Globe } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      gradient: 'from-primary to-blue-500',
      bgGradient: 'from-primary/10 to-blue-500/10',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS']
    },
    {
      title: 'Backend Development', 
      icon: Server,
      gradient: 'from-chart-2 to-green-500',
      bgGradient: 'from-chart-2/10 to-green-500/10',
      skills: ['Python', 'Node.js', 'Express.js', 'RESTful APIs', 'Database Design']
    },
    {
      title: 'Python Specializations',
      icon: Code,
      gradient: 'from-chart-3 to-yellow-500',
      bgGradient: 'from-chart-3/10 to-yellow-500/10',
      skills: ['GUI Development', 'OOP', 'API Integration', 'Automation', 'Discord Bots', 'Data Processing']
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      gradient: 'from-chart-4 to-purple-500',
      bgGradient: 'from-chart-4/10 to-purple-500/10',
      skills: ['Git', 'GitHub', 'VS Code', 'Replit', 'Chrome DevTools', 'Command Line']
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden" data-testid="section-skills">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-chart-2/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent" 
            data-testid="text-skills-title"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" 
            data-testid="text-skills-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A comprehensive toolkit built through hands-on experience and continuous learning
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card 
                  className={`p-8 hover-elevate relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm`} 
                  data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {/* Card Background Effects */}
                  <motion.div 
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.gradient} rounded-full opacity-20 blur-2xl`}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360] 
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center gap-4 mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`} data-testid={`text-skill-category-${index}`}>
                        {category.title}
                      </h3>
                    </motion.div>
                    
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.1 + skillIndex * 0.05 + 0.5,
                            type: "spring",
                            stiffness: 200 
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className={`hover-elevate bg-gradient-to-r ${category.bgGradient} border border-white/20 text-foreground font-medium px-4 py-2 text-sm backdrop-blur-sm`}
                            data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {skill}
                          </Badge>
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