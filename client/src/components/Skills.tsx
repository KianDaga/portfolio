import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'bg-primary/10 text-primary',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS']
    },
    {
      title: 'Backend Development', 
      color: 'bg-chart-2/10 text-chart-2',
      skills: ['Python', 'Node.js', 'Express.js', 'RESTful APIs', 'Database Design']
    },
    {
      title: 'Python Specializations',
      color: 'bg-chart-3/10 text-chart-3', 
      skills: ['GUI Development', 'OOP', 'API Integration', 'Automation', 'Discord Bots', 'Data Processing']
    },
    {
      title: 'Tools & Technologies',
      color: 'bg-chart-4/10 text-chart-4',
      skills: ['Git', 'GitHub', 'VS Code', 'Replit', 'Chrome DevTools', 'Command Line']
    }
  ];

  return (
    <section id="skills" className="py-20" data-testid="section-skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-skills-title">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="text-skills-description">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                <h3 className="text-xl font-semibold" data-testid={`text-skill-category-${index}`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="hover-elevate"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}