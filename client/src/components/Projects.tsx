import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Star, Zap, Filter } from 'lucide-react';
import futureAiScreenshot from '@assets/screenshot-1757811492138.png';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // todo: remove mock functionality
  const projects = [
    {
      title: 'Future AI',
      description: 'Pioneering next-generation artificial intelligence that transforms industries, enhances human capabilities, and shapes the future of intelligent technology.',
      image: futureAiScreenshot,
      technologies: ['HTML', 'CSS', 'JavaScript', 'AI'],
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
    <section id="projects" className="py-20 relative overflow-hidden" data-testid="section-projects">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/30 via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-8 h-8 text-primary" />
            </motion.div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent" data-testid="text-projects-title">
              Featured Projects
            </h2>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-8 h-8 text-chart-3" />
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-primary to-chart-2 mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" 
            data-testid="text-projects-description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A showcase of my development work spanning web applications and Python solutions
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center gap-3 p-2 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-lg">
            <Filter className="w-5 h-5 text-primary" />
            {categories.map((category, index) => (
              <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={selectedCategory === category ? 'default' : 'ghost'}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 
                    'bg-gradient-to-r from-primary to-chart-2 shadow-lg' : 
                    'hover:bg-primary/10'
                  }
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
            <h3 className="text-2xl font-semibold mb-6 text-center" data-testid="text-featured-projects">
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover-elevate group" data-testid={`card-featured-project-${index}`}>
                  {project.image && (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        data-testid={`img-project-${index}`}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-lg" data-testid={`text-project-title-${index}`}>
                        {project.title}
                      </CardTitle>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                            data-testid={`button-live-${index}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                            data-testid={`button-github-${index}`}
                          >
                            <Github className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <CardDescription data-testid={`text-project-description-${index}`}>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" data-testid={`badge-tech-${tech.toLowerCase()}-${index}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold mb-6 text-center" data-testid="text-other-projects">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index + featuredProjects.length} className="hover-elevate" data-testid={`card-project-${index + featuredProjects.length}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-lg" data-testid={`text-project-title-${index + featuredProjects.length}`}>
                        {project.title}
                      </CardTitle>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                            data-testid={`button-live-${index + featuredProjects.length}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                            data-testid={`button-github-${index + featuredProjects.length}`}
                          >
                            <Github className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <CardDescription data-testid={`text-project-description-${index + featuredProjects.length}`}>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" data-testid={`badge-tech-${tech.toLowerCase()}-${index + featuredProjects.length}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}