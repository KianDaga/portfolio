import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ArrowDown, Github, ExternalLink } from 'lucide-react';
import profileImage from '@assets/generated_images/Professional_developer_headshot_portrait_90c4fea3.png';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Web & Python Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
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
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-accent/10" data-testid="section-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/20" data-testid="img-profile">
            <AvatarImage src={profileImage} alt="Kian Daga" />
            <AvatarFallback>KD</AvatarFallback>
          </Avatar>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4" data-testid="text-name">
            Hi, I'm <span className="text-primary">Kian Daga</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-muted-foreground mb-6 h-12 flex items-center justify-center">
            <span data-testid="text-role">{displayText}</span>
            <span className="animate-pulse ml-1">|</span>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-description">
            Passionate developer with multiple years of experience creating web applications and Python solutions. 
            From AI-powered applications to intuitive GUI tools, I bring ideas to life through code.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={openResume}
              size="lg"
              className="gap-2"
              data-testid="button-resume"
            >
              <ExternalLink className="w-4 h-4" />
              View Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={openGithub}
              className="gap-2"
              data-testid="button-github"
            >
              <Github className="w-4 h-4" />
              GitHub Profile
            </Button>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="animate-bounce mt-8"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
}