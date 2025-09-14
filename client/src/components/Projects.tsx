import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
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
    <section id="projects" className="py-20 bg-card/30" data-testid="section-projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-projects-title">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="text-projects-description">
            A showcase of my development work spanning web applications and Python solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              data-testid={`button-filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

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