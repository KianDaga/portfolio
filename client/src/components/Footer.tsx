import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t py-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold text-primary" data-testid="text-footer-name">
            Kian Daga
          </div>
          
          <p className="text-muted-foreground max-w-md mx-auto" data-testid="text-footer-tagline">
            Building the future with code, one project at a time.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>
          
          <div className="text-xs text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} Kian Daga. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}