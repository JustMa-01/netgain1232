
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Server, Search, Megaphone, Smartphone, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"],
      startingPrice: "₹5,000"
    },
    {
      icon: Server,
      title: "Hosting & Domain",
      description: "Reliable hosting solutions with premium domain management",
      features: ["99.9% Uptime", "SSL Certificate", "Daily Backups", "24/7 Support"],
      startingPrice: "₹500/mo"
    },
    {
      icon: Search,
      title: "SEO & Maintenance",
      description: "Keep your website optimized and running smoothly",
      features: ["SEO Optimization", "Regular Updates", "Security Monitoring", "Performance Tuning"],
      startingPrice: "₹500/mo"
    },
    {
      icon: Megaphone,
      title: "Ad Campaigns",
      description: "Strategic advertising across Meta, Google, and YouTube platforms",
      features: ["Meta Ads", "Google Ads", "YouTube Ads", "Campaign Analytics"],
      startingPrice: "₹3,000/mo"
    },
    {
      icon: Smartphone,
      title: "Social Media Management",
      description: "Complete social media strategy and content management",
      features: ["Content Creation", "Post Scheduling", "Engagement Management", "Analytics"],
      startingPrice: "₹2,000/mo"
    },
    {
      icon: Globe,
      title: "Digital Strategy",
      description: "Comprehensive digital marketing and business growth planning",
      features: ["Market Analysis", "Strategy Planning", "ROI Optimization", "Consulting"],
      startingPrice: "Custom Quote"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business and accelerate growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-white/10 hover:border-amber-400/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <service.icon className="h-12 w-12 text-amber-400 mb-4" />
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 font-semibold">Starting from {service.startingPrice}</span>
                  <Link to="/contact">
                    <Button size="sm" variant="outline" className="glass-button">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Simple, transparent, and results-driven approach to every project.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your needs and goals" },
              { step: "02", title: "Strategy", desc: "Creating a customized plan" },
              { step: "03", title: "Development", desc: "Building your solution" },
              { step: "04", title: "Launch", desc: "Going live and ongoing support" }
            ].map((item, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-black font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card p-12 rounded-2xl">
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that fits your needs and budget.
          </p>
          <Link to="/contact">
            <Button size="lg" className="glow-button">
              Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
