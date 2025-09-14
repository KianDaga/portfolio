import { Card } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-20 bg-card/30" data-testid="section-about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-about-title">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <Card className="p-8 hover-elevate">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary" data-testid="text-about-subtitle">
                Passionate Developer & Problem Solver
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p data-testid="text-about-paragraph-1">
                  I'm Kian Daga, a dedicated web and Python developer with a passion for creating 
                  innovative solutions. My journey in programming began with HTML and CSS, and has 
                  evolved to encompass modern web technologies and advanced Python development.
                </p>
                <p data-testid="text-about-paragraph-2">
                  With multiple years of hands-on experience, I've developed a diverse portfolio 
                  ranging from AI-powered applications like Future AI to practical GUI tools 
                  including YouTube downloaders, chatbots, and finance trackers.
                </p>
                <p data-testid="text-about-paragraph-3">
                  I believe in continuous learning and have completed comprehensive Python courses 
                  from beginner to practical levels, always staying current with the latest 
                  technologies and best practices in software development.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary" data-testid="text-stat-experience">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-chart-2/10 rounded-lg">
                  <div className="text-2xl font-bold text-chart-2" data-testid="text-stat-projects">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-chart-3/10 rounded-lg">
                  <div className="text-2xl font-bold text-chart-3" data-testid="text-stat-certifications">5</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div className="text-center p-4 bg-chart-4/10 rounded-lg">
                  <div className="text-2xl font-bold text-chart-4" data-testid="text-stat-languages">5</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}