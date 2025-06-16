
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ExternalLink, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "FoodRest – Modern Restaurant UI",
      description: "A modern, responsive restaurant website showcasing UI design and smooth user experience. Built with performance and aesthetics in mind.",
      link: "https://foodrest11.netlify.app/",
      category: "Web Development"
    }
  ];

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

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card border-white/10 hover:border-amber-400/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Globe className="h-8 w-8 text-amber-400" />
                  <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full glow-button">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <Card className="glass-card text-center p-12 animate-slide-up">
          <CardContent>
            <div className="w-24 h-24 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ExternalLink className="h-12 w-12 text-black" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mb-4">More Projects Coming Soon</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We're continuously working on amazing projects and will be showcasing more of our portfolio soon. 
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
