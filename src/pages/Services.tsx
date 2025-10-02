import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Server, Search, Megaphone, Bot, Database, Sparkles, Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom-designed websites that are fast, responsive, and optimized for all devices. Built with the latest technologies for maximum performance.",
      features: ["Responsive Design", "SEO Optimized", "Lightning Fast", "Mobile-First Approach"],
      gradient: "from-cyan-500/20 to-teal-500/20",
      iconColor: "text-cyan-400"
    },
    {
      icon: Megaphone,
      title: "Online Ads Management",
      description: "Strategic ad campaign management across Google, Facebook, and Instagram to maximize ROI and drive conversions.",
      features: ["Google Ads", "Facebook Ads", "Instagram Ads", "ROI Optimization"],
      gradient: "from-teal-500/20 to-cyan-500/20",
      iconColor: "text-teal-400"
    },
    {
      icon: Server,
      title: "Hosting & Domain",
      description: "Reliable, fast, and secure hosting solutions with 99.9% uptime guarantee. Domain registration and management included.",
      features: ["Domain Registration", "Fast Hosting", "SSL Security", "24/7 Monitoring"],
      gradient: "from-cyan-500/20 to-teal-500/20",
      iconColor: "text-cyan-400"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Robust database solutions with setup, optimization, and security. Your data handled safely and efficiently.",
      features: ["Database Setup", "Performance Tuning", "Regular Maintenance", "Security Audits"],
      gradient: "from-teal-500/20 to-cyan-500/20",
      iconColor: "text-teal-400"
    },
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Smart conversational AI chatbots tailored to your business needs. Handle FAQs, capture leads, and engage customers 24/7.",
      features: ["FAQ Automation", "Lead Generation", "24/7 Support", "Custom Training"],
      gradient: "from-cyan-500/20 to-teal-500/20",
      iconColor: "text-cyan-400"
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies including SEO, content creation, and analytics to grow your audience and boost conversions.",
      features: ["SEO Strategy", "Content Marketing", "Email Campaigns", "Analytics & Insights"],
      gradient: "from-teal-500/20 to-cyan-500/20",
      iconColor: "text-teal-400"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your business goals, target audience, and project requirements through detailed consultation."
    },
    {
      number: "02",
      title: "Strategy",
      description: "Creating a customized roadmap with clear milestones, timelines, and deliverables tailored to your needs."
    },
    {
      number: "03",
      title: "Development",
      description: "Building your solution using cutting-edge technology with regular updates and transparent communication."
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Going live with thorough testing, followed by ongoing maintenance, updates, and dedicated support."
    }
  ];

  const benefits = [
    "Transparent pricing with no hidden fees",
    "Dedicated project manager",
    "Regular progress updates",
    "Post-launch support included",
    "Scalable solutions that grow with you",
    "Money-back guarantee"
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative py-32">
        <div className="hero-bg absolute inset-0"></div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Premium Digital Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
              Services That <span className="text-gradient">Transform</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to accelerate your business growth and elevate your online presence.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-card border-white/[0.08] hover:border-cyan-400/30 transition-all duration-500 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button className="w-full glass-button border-white/20 hover:border-cyan-400/30 group/btn">
                      <span className="flex items-center justify-center">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 backdrop-blur-sm mb-6">
              <Zap className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Our Process</span>
            </div>
            <h2 className="section-title">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A transparent, collaborative approach that ensures your project's success from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl border-white/[0.08] hover:border-cyan-400/30 transition-all duration-500 text-center group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center text-3xl font-bold text-gradient group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 backdrop-blur-sm">
                <Check className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">Why Choose Us</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                Built on Trust &
                <span className="text-gradient"> Excellence</span>
              </h2>

              <p className="text-lg text-slate-300 leading-relaxed">
                We don't just deliver projects, we build lasting partnerships. Every service is backed by
                our commitment to quality, transparency, and your success.
              </p>

              <Link to="/contact">
                <Button size="lg" className="glow-button group">
                  <span className="flex items-center">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>

            <div className="space-y-4 animate-slide-in-right">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="glass-card p-5 rounded-xl border-white/[0.08] hover:border-cyan-400/30 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Check className="h-5 w-5 text-cyan-400" />
                    </div>
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/20 to-teal-950/20"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 md:p-16 rounded-3xl border-white/[0.08] text-center space-y-8 animate-scale-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Let's Talk</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Ready to Get Started?
            </h2>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and create a custom solution that fits your needs and budget perfectly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="glow-button text-base px-8 py-6 group">
                  <span className="flex items-center">
                    Contact Us Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="glass-button text-base px-8 py-6 border-white/20 text-white hover:text-cyan-400">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
