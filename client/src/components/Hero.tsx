import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ArrowDown, Github, ExternalLink, Code2, Sparkles } from 'lucide-react';
const profileImage = 'https://avatars.githubusercontent.com/u/105967581?v=4';

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

const Hero = memo(function Hero() {
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-40 md:pt-32" data-testid="section-hero">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-chart-2/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>
      
      
      {/* Mouse Follow Effect */}
      <motion.div
        className="absolute w-64 h-64 pointer-events-none opacity-20 gpu-accelerated"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 100 }}
      >
        <div className="w-full h-full bg-gradient-radial from-primary/15 to-transparent rounded-full blur-2xl" />
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
            className="relative"
          >
            {/* Glowing rings around avatar */}
            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary/20 to-chart-2/20 animate-pulse-glow" />
            <div className="absolute inset-2 w-28 h-28 mx-auto rounded-full bg-gradient-to-r from-primary/10 to-chart-2/10 animate-float" />
            
            <Avatar className="relative w-32 h-32 mx-auto mb-6 border-4 border-primary/50 shadow-2xl shadow-primary/30 gpu-accelerated" data-testid="img-profile">
              <AvatarImage src={profileImage} alt="Kian Daga" className="object-cover" />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-chart-2 text-primary-foreground font-bold">KD</AvatarFallback>
            </Avatar>
            
            {/* Floating particles around avatar */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full"
                animate={{
                  x: [0, Math.cos(i * 60 * Math.PI / 180) * 50, 0],
                  y: [0, Math.sin(i * 60 * Math.PI / 180) * 50, 0],
                  scale: [0.3, 0.8, 0.3],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            data-testid="text-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm <span className="relative bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
              <span className="relative z-10">Kian Daga</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">
                Kian Daga
              </div>
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
              className="gap-3 bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden hover:scale-105"
              data-testid="button-resume"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">View Resume</span>
              <Sparkles className="w-4 h-4 ml-1 opacity-70 group-hover:animate-bounce relative z-10" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={openGithub}
              className="gap-3 border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-500 group backdrop-blur-sm relative overflow-hidden hover:scale-105"
              data-testid="button-github"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">GitHub Profile</span>
              <Code2 className="w-4 h-4 ml-1 opacity-70 group-hover:animate-bounce relative z-10" />
            </Button>
          </motion.div>
          
           {/* Static Tech Icons */}
           <div className="flex justify-center gap-6 mt-8">
             {['💻', '🐍', '⚡', '🚀', '✨', '🎯'].map((icon, i) => (
               <div
                 key={i}
                 className="text-2xl opacity-60 hover:opacity-100 transition-opacity duration-300"
               >
                 {icon}
               </div>
             ))}
           </div>
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
});

export default Hero;