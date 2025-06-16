import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Server, Search, Megaphone, Bot, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom-designed websites that are fast, responsive, and optimized for all devices. Whether you need a simple site or a complex web application, we've got you covered.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"]
    },
    {
      icon: Megaphone,
      title: "Online Ads Management",
      description: "We manage and optimize your ad campaigns across platforms like Google, Facebook, and Instagram to drive results and maximize ROI.",
      features: ["Google Ads", "Facebook Ads", "Instagram Ads", "ROI Optimization"]
    },
    {
      icon: Server,
      title: "Hosting & Domain Setup",
      description: "From registering your domain to setting up fast, reliable hosting—our team ensures your online presence is smooth, secure, and always live.",
      features: ["Domain Registration", "Fast Hosting", "Security Setup", "24/7 Monitoring"]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "We provide robust database solutions including setup, optimization, maintenance, and security to ensure your data is handled safely and efficiently.",
      features: ["Database Setup", "Optimization", "Maintenance", "Security"]
    },
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Boost customer engagement with smart, conversational AI chatbots. We build bots tailored to your business that can handle FAQs, capture leads, and more.",
      features: ["FAQ Handling", "Lead Capture", "24/7 Support", "Custom Training"]
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including SEO, content creation, email marketing, and analytics to grow your audience and convert leads into customers.",
      features: ["SEO Strategy", "Content Creation", "Email Marketing", "Analytics"]
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
                <Link to="/contact">
                  <Button className="w-full glass-button">
                    Get Started
                  </Button>
                </Link>
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
