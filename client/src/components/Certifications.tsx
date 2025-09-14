import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar } from 'lucide-react';

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
      title: 'Basic HTML and CSS Course',
      provider: 'Cyborg Robotics',
      date: 'July 2022',
      status: 'completed', 
      description: 'Fundamental web development skills in HTML and CSS'
    }
  ];

  return (
    <section id="certifications" className="py-20" data-testid="section-certifications">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-certifications-title">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4" data-testid="text-certifications-description">
            Continuous learning journey from beginner to advanced Python development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
          
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="relative flex items-start gap-6" data-testid={`card-certification-${index}`}>
                {/* Timeline dot */}
                <div className="hidden md:flex w-16 h-16 bg-primary rounded-full items-center justify-center flex-shrink-0 relative z-10">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <Card className="flex-1 hover-elevate">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl" data-testid={`text-cert-title-${index}`}>
                        {cert.title}
                      </CardTitle>
                      <Badge variant="secondary" className="w-fit" data-testid={`badge-cert-status-${index}`}>
                        <Calendar className="w-3 h-3 mr-1" />
                        {cert.date}
                      </Badge>
                    </div>
                    <div className="text-primary font-medium" data-testid={`text-cert-provider-${index}`}>
                      {cert.provider}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground" data-testid={`text-cert-description-${index}`}>
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}