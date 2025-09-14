import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  Mail, 
  ExternalLink,
  MessageSquare,
  Youtube,
  Users
} from 'lucide-react';
import { SiX, SiFacebook, SiInstagram, SiReddit, SiMedium, SiDiscord } from 'react-icons/si';

export default function Contact() {
  const contactMethods = [
    {
      name: 'Email',
      value: 'kiandaga3@gmail.com',
      link: 'mailto:kiandaga3@gmail.com',
      icon: Mail,
      color: 'text-red-500'
    },
    {
      name: 'GitHub',
      value: '@kiandaga',
      link: 'https://github.com/kiandaga',
      icon: Github,
      color: 'text-foreground'
    }
  ];

  const socialLinks = [
    {
      name: 'X (Twitter)',
      username: '@DagaKian81085',
      link: 'https://x.com/DagaKian81085',
      icon: SiX,
      color: 'text-foreground'
    },
    {
      name: 'Facebook',
      username: 'Kian Daga',
      link: 'https://www.facebook.com/Kian%20Daga',
      icon: SiFacebook,
      color: 'text-blue-600'
    },
    {
      name: 'Instagram',
      username: '@dagakian',
      link: 'https://www.instagram.com/dagakian',
      icon: SiInstagram,
      color: 'text-pink-600'
    },
    {
      name: 'Reddit',
      username: 'u/Far-Cantaloupe-6156',
      link: 'https://www.reddit.com/user/u/Far-Cantaloupe-6156',
      icon: SiReddit,
      color: 'text-orange-600'
    },
    {
      name: 'YouTube',
      username: '@BloxDudeKD',
      link: 'https://www.youtube.com/@BloxDudeKD',
      icon: Youtube,
      color: 'text-red-600'
    },
    {
      name: 'Medium',
      username: 'Kian daga',
      link: 'https://medium.com/@Kian%20daga',
      icon: SiMedium,
      color: 'text-foreground'
    },
    {
      name: 'Discord',
      username: 'fifabros.official',
      link: 'https://discord.com/app',
      icon: SiDiscord,
      color: 'text-indigo-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/30" data-testid="section-contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-testid="text-contact-title">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="text-contact-description">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Primary Contact Methods */}
          <Card className="hover-elevate" data-testid="card-primary-contact">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Primary Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              {contactMethods.map((method, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-accent/50 to-primary/10 rounded-xl hover-elevate border border-primary/10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 1.0 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <method.icon className={`w-6 h-6 ${method.color}`} />
                    </motion.div>
                    <div>
                      <div className="font-semibold" data-testid={`text-contact-${method.name.toLowerCase()}`}>
                        {method.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{method.value}</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(method.link, '_blank')}
                    className="hover:bg-primary/20"
                    data-testid={`button-contact-${method.name.toLowerCase()}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </motion.div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="hover-elevate" data-testid="card-quick-actions">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full justify-start gap-3"
                onClick={() => window.open('https://drive.google.com/file/d/1CEXBpd76tPv1SyaWT4fqcZ_SpvDUp3U7/view?usp=sharing', '_blank')}
                data-testid="button-download-resume"
              >
                <ExternalLink className="w-4 h-4" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-3"
                onClick={() => window.open('https://github.com/kiandaga', '_blank')}
                data-testid="button-view-github"
              >
                <Github className="w-4 h-4" />
                View GitHub Profile
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-3"
                onClick={() => window.open('mailto:kiandaga3@gmail.com', '_blank')}
                data-testid="button-send-email"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Social Media Links */}
        <Card className="hover-elevate" data-testid="card-social-media">
          <CardHeader>
            <CardTitle className="text-center">Connect on Social Media</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="flex flex-col items-center gap-2 h-auto py-4 hover-elevate"
                  onClick={() => window.open(social.link, '_blank')}
                  data-testid={`button-social-${social.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  <social.icon className={`w-6 h-6 ${social.color}`} />
                  <div className="text-center">
                    <div className="font-medium text-xs">{social.name}</div>
                    <div className="text-xs text-muted-foreground truncate w-full">
                      {social.username}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}