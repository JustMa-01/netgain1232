
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Our <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the success stories and innovative solutions we've delivered for our clients.
          </p>
        </div>

        <Card className="glass-card text-center p-12 animate-slide-up">
          <CardContent>
            <div className="w-24 h-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ExternalLink className="h-12 w-12 text-black" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We're currently working on showcasing our amazing portfolio. 
              Our project gallery will feature detailed case studies, client testimonials, 
              and the impressive results we've achieved together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="glow-button">
                Get Your Project Featured <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="glass-button">
                Contact Us for Portfolio
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
