import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ArrowDown, Github, ExternalLink, Code2, Sparkles } from 'lucide-react';
import profileImage from '@assets/generated_images/Professional_developer_headshot_portrait_90c4fea3.png';

// Custom Typed Text Component
function TypedText() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const texts = [
    'HTML Developer',
    'CSS Developer', 
    'JavaScript Developer',
    'TypeScript Developer',
    'Python Developer',
    'React Developer',
    'Web Developer',
    'Full-Stack Developer'
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => setIsPaused(false), 2000);
    } else if (!isDeleting && displayText === currentText) {
      setIsPaused(true);
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    } else if (!isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, isPaused, texts]);

  return (
    <span className="font-bold bg-gradient-to-r from-chart-3 via-primary to-chart-2 bg-clip-text text-transparent">
      {displayText}
      <span className="animate-pulse ml-1 text-primary">|</span>
    </span>
  );
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1CEXBpd76tPv1SyaWT4fqcZ_SpvDUp3U7/view?usp=sharing', '_blank');
  };

  const openGithub = () => {
    window.open('https://github.com/kiandaga', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" data-testid="section-hero">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-chart-2/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>
      
      {/* Mouse Follow Effect */}
      <motion.div
        className="absolute w-96 h-96 pointer-events-none opacity-30"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30 }}
      >
        <div className="w-full h-full bg-gradient-radial from-primary/20 to-transparent rounded-full blur-xl" />
      </motion.div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/30 shadow-2xl shadow-primary/20" data-testid="img-profile">
              <AvatarImage src={profileImage} alt="Kian Daga" />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-chart-2 text-primary-foreground">KD</AvatarFallback>
            </Avatar>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent"
            data-testid="text-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm <span className="relative inline-block">
              Kian Daga
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary to-chart-2 rounded-lg blur opacity-25"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.25, 0.4, 0.25]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.h1>
          
          <motion.div 
            className="text-3xl md:text-4xl mb-6 h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="mr-3 text-muted-foreground">a</span>
            <TypedText />
          </motion.div>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            data-testid="text-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Passionate developer with multiple years of experience creating 
            <span className="text-primary font-semibold"> web applications</span> and 
            <span className="text-chart-2 font-semibold"> Python solutions</span>. 
            From AI-powered applications to intuitive GUI tools, I bring ideas to life through code.
          </motion.p>
          
          <motion.div 
            className="flex gap-6 justify-center flex-wrap mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Button 
              onClick={openResume}
              size="lg"
              className="gap-3 bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
              data-testid="button-resume"
            >
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              View Resume
              <Sparkles className="w-4 h-4 ml-1 opacity-70" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={openGithub}
              className="gap-3 border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300 group backdrop-blur-sm"
              data-testid="button-github"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              GitHub Profile
              <Code2 className="w-4 h-4 ml-1 opacity-70" />
            </Button>
          </motion.div>
          
          {/* Floating Icons */}
          <motion.div 
            className="relative h-24 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            {['💻', '🐍', '⚡', '🚀', '✨'].map((icon, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl"
                animate={{
                  x: [0, Math.random() * 200 - 100, 0],
                  y: [0, Math.random() * 100 - 50, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: '50%',
                }}
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="mt-8 hover:bg-primary/10 group"
            data-testid="button-scroll-down"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 group-hover:text-primary transition-colors" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}