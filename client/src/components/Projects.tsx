import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Star, Zap, Filter, Eye, Code, Rocket, Award, Sparkles } from 'lucide-react';
import futureaiss from '@assets/futureaiss.png';

interface Project {
  title: string;
  description: string;
  image: string | null;
  technologies: string[];
  category: string;
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // todo: remove mock functionality
  const projects: Project[] = [
    {
      title: 'Future AI',
      description: 'Futuristic AI Startup Company Website. Has advanced animations and a clean design. Built with HTML, CSS, JavaScript, SQLAlchemy, and Python (flask).',
      image:futureaiss,
      technologies: ['HTML', 'CSS', 'JavaScript', 'SQLAlchemy', 'Python'],
      category: 'Web',
      liveUrl: 'https://futureai.up.railway.app',
      githubUrl: null,
      featured: true
    },
    {
      title: 'YouTube Downloader',
      description: 'Easy to use Python GUI which downloads YouTube videos to MP3 or MP4. Just provide the link of the video and watch the magic unfold!',
      image: null,
      technologies: ['Python', 'GUI', 'API'],
      category: 'Python',
      githubUrl: 'https://github.com/KianDaga/Youtube-Downloader',
      liveUrl: null,
      featured: true
    },
    {
      title: 'AI Master Chatbot V1',
      description: 'Simple discord bot that replies to questions. Just add this to your server and put in a valid discord token. You can add additional answers in the responses.py file.',
      image: null,
      technologies: ['Python', 'Discord API', 'Bot'],
      category: 'Python',
      githubUrl: 'https://github.com/KianDaga/AiMaster-Chatbot-V1',
      liveUrl: null,
      featured: true
    },
    {
      title: 'Finance Tracker',
      description: 'Finance tracker that uses OOP (Object-Oriented-Programming) in Python',
      image: null,
      technologies: ['Python', 'OOP', 'CLI'],
      category: 'Python',
      githubUrl: 'https://github.com/KianDaga/Finance-Tracker',
      liveUrl: null,
      featured: false
    },
    {
      title: 'Password Generator',
      description: 'Password generator with various parameters that uses a simple python GUI',
      image: null,
      technologies: ['Python', 'GUI', 'Security'],
      category: 'Python',
      githubUrl: 'https://github.com/KianDaga/Password-Generator',
      liveUrl: null,
      featured: false
    },
    {
      title: 'QR Generator',
      description: 'Python QR code generator with a basic GUI',
      image: null,
      technologies: ['Python', 'GUI', 'QR'],
      category: 'Python',
      githubUrl: 'https://github.com/KianDaga/QR-Generator',
      liveUrl: null,
      featured: false
    },
    {
      title: 'Who Wants to be a Millionaire',
      description: 'ASCII + Python Who wants to be a millionaire game. Questions can be added and removed in the question.py file.',
      image: null,
      technologies: ['Python', 'Game', 'CLI'],
      category: 'Python',
      githubUrl: 'https://github.com/KianDaga/Who-Wants-to-be-a-Millionaire',
      liveUrl: null,
      featured: false
    },
    {
      title: 'Catching Shapes',
      description: 'Basic catching shapes game made with turtle in python',
      image: null,
      technologies: ['Python', 'Game', 'Turtle'],
      category: 'Python',
      githubUrl: 'https://github.com/KianDaga/Catching-Shapes',
      liveUrl: null,
      featured: false
    },
    {
      title: 'Vanta Industries',
      description: 'A web development project showcasing modern HTML structure and design',
      image: null,
      technologies: ['HTML', 'CSS'],
      category: 'Web',
      githubUrl: 'https://github.com/KianDaga/vantaindustries',
      liveUrl: null,
      featured: false
    },
    {
      title: 'Countdown Timer',
      description: 'Countdown timer with a Python GUI',
      image: null,
      technologies: ['Python', 'GUI', 'Timer'],
      category: 'Python',
      githubUrl: 'https://github.com/KianDaga/Count-Down-Timer',
      liveUrl: null,
      featured: false
    }
  ];

  const categories = ['All', 'Web', 'Python'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section ref={ref} id="projects" className="py-32 relative overflow-hidden bg-gradient-to-br from-background via-card/30 to-primary/10" data-testid="section-projects">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.08),transparent_50%)]" />
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
            className="flex items-center justify-center gap-6 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Rocket className="w-12 h-12 text-blue-400" />
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent" data-testid="text-projects-title">
              Featured Projects
            </h2>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-12 h-12 text-yellow-400" />
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
            data-testid="text-projects-description"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A showcase of my development work spanning web applications and Python solutions
          </motion.p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div 
          className="flex justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center gap-4 p-3 bg-card/50 backdrop-blur-xl rounded-3xl border border-border shadow-2xl">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Filter className="w-6 h-6 text-blue-400" />
            </motion.div>
            {categories.map((category, index) => (
              <motion.div 
                key={category} 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Button
                  variant={selectedCategory === category ? 'default' : 'ghost'}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-gradient-to-r from-primary to-chart-2 text-primary-foreground shadow-lg' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                  data-testid={`button-filter-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <>
            <motion.h3 
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent" 
              data-testid="text-featured-projects"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
            >
              Featured Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <Card 
                    className="overflow-hidden group relative bg-card/50 backdrop-blur-xl border border-border shadow-2xl cursor-pointer" 
                    data-testid={`card-featured-project-${index}`}
                    onClick={() => {
                      if (project.liveUrl) {
                        window.open(project.liveUrl, '_blank');
                      } else if (project.githubUrl) {
                        window.open(project.githubUrl, '_blank');
                      }
                    }}
                  >
                    {/* Card Background Effects */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    
                    {project.image && (
                      <div className="aspect-video overflow-hidden relative">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          data-testid={`img-project-${index}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Hover Overlay */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        >
                          {project.liveUrl && (
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Button
                                size="icon"
                                className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (project.liveUrl) {
                                    window.open(project.liveUrl, '_blank');
                                  }
                                }}
                                data-testid={`button-live-${index}`}
                              >
                                <Eye className="w-6 h-6" />
                              </Button>
                            </motion.div>
                          )}
                          {project.githubUrl && (
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Button
                                size="icon"
                                className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (project.githubUrl) {
                                    window.open(project.githubUrl, '_blank');
                                  }
                                }}
                                data-testid={`button-github-${index}`}
                              >
                                <Github className="w-6 h-6" />
                              </Button>
                            </motion.div>
                          )}
                        </motion.div>
                      </div>
                    )}
                    
                    <CardHeader className="p-6">
                      <div className="flex justify-between items-start gap-3 mb-3">
                        <CardTitle className="text-xl font-bold text-foreground" data-testid={`text-project-title-${index}`}>
                          {project.title}
                        </CardTitle>
                        <motion.div
                          animate={{ rotate: hoveredProject === index ? 360 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Award className="w-6 h-6 text-yellow-400" />
                        </motion.div>
                      </div>
                      <CardDescription className="text-muted-foreground text-base leading-relaxed" data-testid={`text-project-description-${index}`}>
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-6 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            whileHover={{ scale: 1.05, y: -2 }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 1.4 + index * 0.2 + techIndex * 0.1 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="bg-gradient-to-r from-primary/20 to-chart-2/20 text-primary border border-primary/30 px-3 py-1 text-sm font-medium"
                              data-testid={`badge-tech-${tech.toLowerCase()}-${index}`}
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3 
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent" 
              data-testid="text-other-projects"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5 }}
            >
              Other Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index + featuredProjects.length}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card 
                    className="group relative bg-card/30 backdrop-blur-xl border border-border shadow-xl hover:shadow-2xl transition-all duration-300" 
                    data-testid={`card-project-${index + featuredProjects.length}`}
                  >
                    <CardHeader className="p-6">
                      <div className="flex justify-between items-start gap-3 mb-3">
                        <CardTitle className="text-lg font-bold text-foreground" data-testid={`text-project-title-${index + featuredProjects.length}`}>
                          {project.title}
                        </CardTitle>
                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <Button
                                size="icon"
                                variant="outline"
                                className="w-8 h-8 rounded-lg border-border text-foreground hover:bg-primary/20"
                                onClick={() => {
                                  if (project.liveUrl) {
                                    window.open(project.liveUrl, '_blank');
                                  }
                                }}
                                data-testid={`button-live-${index + featuredProjects.length}`}
                              >
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </motion.div>
                          )}
                          {project.githubUrl && (
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <Button
                                size="icon"
                                variant="outline"
                                className="w-8 h-8 rounded-lg border-border text-foreground hover:bg-secondary/20"
                                onClick={() => {
                                  if (project.githubUrl) {
                                    window.open(project.githubUrl, '_blank');
                                  }
                                }}
                                data-testid={`button-github-${index + featuredProjects.length}`}
                              >
                                <Github className="w-4 h-4" />
                              </Button>
                            </motion.div>
                          )}
                        </div>
                      </div>
                      <CardDescription className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-project-description-${index + featuredProjects.length}`}>
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            whileHover={{ scale: 1.05, y: -1 }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 2 + index * 0.1 + techIndex * 0.05 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="bg-gradient-to-r from-primary/20 to-chart-2/20 text-primary border border-primary/30 px-2 py-1 text-xs font-medium"
                              data-testid={`badge-tech-${tech.toLowerCase()}-${index + featuredProjects.length}`}
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}