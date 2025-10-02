import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles, Rocket, Shield, Zap, Globe, TrendingUp, Star, Code, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const features = [
    {
      icon: Rocket,
      title: "Blazing Fast Performance",
      description: "Optimized code and modern infrastructure ensure lightning-fast load times and seamless user experiences"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols with SSL encryption, regular updates, and 24/7 monitoring"
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Built to grow with your business using cloud-native solutions and microservices architecture"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "CDN-powered delivery ensures optimal performance for users worldwide, no matter where they are"
    },
    {
      icon: Code,
      title: "Clean, Modern Code",
      description: "Following industry best practices with maintainable, documented code that's built to last"
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused",
      description: "Data-driven strategies and conversion optimization to help your business thrive online"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Star },
    { number: "99.9%", label: "Uptime Guarantee", icon: Zap },
    { number: "24/7", label: "Support Available", icon: Shield },
    { number: "5K+", label: "Starting From", icon: TrendingUp }
  ];

  const benefits = [
    "Custom-built solutions tailored to your needs",
    "Responsive design for all devices",
    "SEO optimization included",
    "Free SSL certificate",
    "Regular backups and updates",
    "Comprehensive documentation"
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="hero-bg absolute inset-0"></div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-cyan-300/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Building the Future of Digital</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
              Transform Your Business
              <br />
              <span className="text-gradient">With Cutting-Edge Tech</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We craft premium web solutions that combine stunning design, powerful functionality,
              and scalable infrastructure to drive real business results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="glow-button text-base px-8 py-6 group">
                  <span className="flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="glass-button text-base px-8 py-6 border-white/20 text-white hover:text-cyan-400">
                  Explore Services
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-cyan-400" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-teal-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-cyan-400" />
                <span>30-Day Money Back</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-transparent to-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center glass-card p-6 rounded-2xl border-white/[0.08] hover:border-cyan-400/30 transition-all duration-500 animate-slide-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Why Choose Netgain</span>
            </div>
            <h2 className="section-title">
              Built for <span className="text-gradient">Performance</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge technology with thoughtful design to create digital experiences
              that engage users and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="glass-card border-white/[0.08] hover:border-cyan-400/30 transition-all duration-500 group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-7 w-7 text-cyan-400" />
                    </div>
                    <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 backdrop-blur-sm">
                <Check className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">Complete Package</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                Everything You Need to
                <span className="text-gradient"> Succeed Online</span>
              </h2>

              <p className="text-lg text-slate-300 leading-relaxed">
                From initial concept to final deployment, we handle every aspect of your digital presence
                with precision and care.
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
              <span className="text-sm font-medium text-cyan-400">Let's Get Started</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Ready to Build Something
              <br />
              <span className="text-gradient">Extraordinary?</span>
            </h2>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Join 50+ successful businesses who trust Netgain for their digital transformation.
              Let's discuss your project today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="glow-button text-base px-8 py-6 group">
                  <span className="flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="glass-button text-base px-8 py-6 border-white/20 text-white hover:text-cyan-400">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
