import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, Trophy, Star } from 'lucide-react';

export default function Certifications() {
  // todo: remove mock functionality
  const certifications = [
    {
      title: 'Python Practical Projects Course',
      provider: 'The Young Maker',
      date: 'August 2025',
      status: 'completed',
      description: 'Advanced practical application of Python programming with real-world projects'
    },
    {
      title: 'Python Advanced Course', 
      provider: 'The Young Maker',
      date: 'May 2025',
      status: 'completed',
      description: 'Advanced Python concepts including OOP, data structures, and algorithms'
    },
    {
      title: 'Python Intermediate Course',
      provider: 'The Young Maker', 
      date: 'February 2025',
      status: 'completed',
      description: 'Intermediate Python programming concepts and application development'
    },
    {
      title: 'Python Beginner Course',
      provider: 'The Young Maker',
      date: 'November 2024', 
      status: 'completed',
      description: 'Foundational Python programming concepts and syntax'
    },
    {
      title: 'AdvancedHTML and CSS Course',
      provider: 'Cyborg Robotics',
      date: 'July 2022',
      status: 'completed', 
      description: 'Advanced web development skills in HTML and CSS'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden" data-testid="section-certifications">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-chart-2/5 to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Trophy className="w-8 h-8 text-chart-3" />
            </motion.div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-chart-3 via-primary to-chart-2 bg-clip-text text-transparent" data-testid="text-certifications-title">
              Certifications
            </h2>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Star className="w-8 h-8 text-primary fill-current" />
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-chart-3 to-primary mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.p 
            className="text-xl text-muted-foreground leading-relaxed" 
            data-testid="text-certifications-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Continuous learning journey from beginner to advanced Python development
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-chart-2 to-chart-3 rounded-full hidden md:block"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
          
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-6" 
                data-testid={`card-certification-${index}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 1 }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="hidden md:flex w-16 h-16 bg-gradient-to-br from-primary to-chart-2 rounded-full items-center justify-center flex-shrink-0 relative z-10 shadow-2xl shadow-primary/50"
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 1.2, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  className="flex-1"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="hover-elevate relative overflow-hidden border-primary/20 shadow-xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                    {/* Card Background Effect */}
                    <motion.div 
                      className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-full blur-2xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360] 
                      }}
                      transition={{ duration: 10, repeat: Infinity }}
                    />
                    
                    <CardHeader className="relative z-10">
                      <motion.div 
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 1.4 }}
                      >
                        <CardTitle className="text-xl bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent" data-testid={`text-cert-title-${index}`}>
                          {cert.title}
                        </CardTitle>
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 1.6, type: "spring" }}
                        >
                          <Badge variant="secondary" className="w-fit bg-gradient-to-r from-chart-3/20 to-primary/20 border border-primary/30" data-testid={`badge-cert-status-${index}`}>
                            <Calendar className="w-3 h-3 mr-1" />
                            {cert.date}
                          </Badge>
                        </motion.div>
                      </motion.div>
                      <motion.div 
                        className="text-chart-2 font-semibold" 
                        data-testid={`text-cert-provider-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 1.8 }}
                      >
                        {cert.provider}
                      </motion.div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <motion.p 
                        className="text-muted-foreground leading-relaxed" 
                        data-testid={`text-cert-description-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 2.0 }}
                      >
                        {cert.description}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}