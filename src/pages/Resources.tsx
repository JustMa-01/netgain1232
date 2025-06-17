
import { useState } from 'react';
import { Download, FileText, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Resources = () => {
  const [email, setEmail] = useState('');

  const resources = [
    {
      icon: FileText,
      title: "Website Planning Guide",
      description: "Complete checklist for planning your website project",
      type: "PDF Guide",
      size: "2.4 MB"
    },
    {
      icon: Wrench,
      title: "SEO Toolkit",
      description: "Essential tools and templates for SEO optimization",
      type: "Toolkit",
      size: "5.1 MB"
    },
    {
      icon: FileText,
      title: "Digital Marketing Starter Pack",
      description: "Templates and strategies for digital marketing success",
      type: "Templates",
      size: "3.2 MB"
    }
  ];

  const handleDownload = (resourceTitle: string) => {
    if (!email) {
      alert('Please enter your email to download the resource');
      return;
    }
    // Here you would typically handle the email collection and provide download
    alert(`Thank you! Your download for "${resourceTitle}" will begin shortly. Check your email for additional resources.`);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Free <span className="text-gradient">Resources</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Download our free tools, guides, and templates to help grow your business.
          </p>
        </div>

        {/* Email Collection */}
        <div className="glass-card p-8 mb-12 max-w-2xl mx-auto text-center animate-slide-up">
          <h3 className="text-2xl font-serif font-bold text-white mb-4">
            Get Instant Access
          </h3>
          <p className="text-gray-400 mb-6">
            Enter your email to unlock all our premium resources and get notified about new releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass-button"
            />
            <Button className="glow-button">
              Unlock Resources <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="glass-card border-white/10 hover:border-amber-400/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <resource.icon className="h-12 w-12 text-amber-400 mb-4" />
                <CardTitle className="text-white text-xl">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-amber-400">{resource.type}</span>
                  <span className="text-sm text-gray-500">{resource.size}</span>
                </div>
                <Button 
                  onClick={() => handleDownload(resource.title)}
                  className="w-full glass-button"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 glass-card p-12 text-center">
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our newsletter to get the latest resources, tips, and insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="glass-button"
            />
            <Button className="glow-button">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
