import { Link } from 'react-router-dom';
import { ArrowRight, Users, Shield, Heart, Target, Sparkles, Award, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About = () => {
  const teamMembers = [
    {
      name: "Hemanth Anala",
      role: "Founder & Project Lead",
      image: "/placeholder.svg",
      bio: "Visionary leader driving Netgain's innovation and commitment to exceptional digital solutions.",
      linkedin: "https://www.linkedin.com/in/hemanth-anala-1739b7267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Maheswar",
      role: "Co-Founder & Tech Lead",
      image: "/placeholder.svg",
      bio: "Technical excellence and quality assurance expert ensuring every project exceeds expectations.",
      linkedin: "https://www.linkedin.com/in/maheswar117?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  ];

  const milestones = [
    {
      icon: Target,
      year: "Q1 2025",
      title: "Founded Netgain",
      description: "Established with a vision to become the go-to solution for modern digital needs"
    },
    {
      icon: Award,
      year: "Q1 2025",
      title: "First Success",
      description: "Completed FoodRest Restaurant UI, setting the standard for quality delivery"
    },
    {
      icon: Users,
      year: "Q2 2025",
      title: "Team Growth",
      description: "Built a passionate team with complementary skills and shared vision"
    },
    {
      icon: TrendingUp,
      year: "Q2 2025",
      title: "Service Expansion",
      description: "Broadened offerings from web development to comprehensive digital solutions"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "We build lasting relationships founded on transparency, consistency, and dependability."
    },
    {
      icon: Heart,
      title: "Authentic Quality",
      description: "Every project is crafted with genuine care and attention to detail, tailored uniquely for you."
    },
    {
      icon: Users,
      title: "Partnership Mindset",
      description: "We treat every client as a long-term partner, invested in your sustained success."
    },
    {
      icon: Sparkles,
      title: "Continuous Innovation",
      description: "Staying ahead with cutting-edge technology and creative solutions that deliver results."
    }
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
              <span className="text-sm font-medium text-cyan-400">Our Story</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
              Building the <span className="text-gradient">Future Together</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A team driven by passion, excellence, and the mission to transform digital experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 backdrop-blur-sm">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">Who We Are</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                More Than a Service
                <br />
                <span className="text-gradient">We're a Brand</span>
              </h2>

              <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                <p>
                  Founded in 2025 by Hemanth Anala, Netgain emerged from a bold vision: to become the ultimate one-stop solution for every technical challenge modern businesses face.
                </p>
                <p>
                  What started as a passion project has rapidly evolved into a premium digital services brand, recognized for innovation, quality, and unwavering trust.
                </p>
                <p>
                  We're not just another service provider. We exist to solve your digital problems while elevating your vision beyond what you first imagined.
                </p>
              </div>

              <div className="flex items-start gap-3 glass-card p-5 rounded-xl border-white/[0.08]">
                <CheckCircle2 className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Our Promise</h3>
                  <p className="text-slate-400 text-sm">
                    Affordable. Reliable. Scalable. Every project delivered with excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl border-white/[0.08] animate-slide-in-right">
              <h3 className="text-2xl font-display font-bold text-white mb-8">Journey Milestones</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <milestone.icon className="h-6 w-6 text-cyan-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium text-cyan-400 mb-1">{milestone.year}</div>
                      <h4 className="text-white font-semibold mb-1">{milestone.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 backdrop-blur-sm mb-6">
              <Heart className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Our Values</span>
            </div>
            <h2 className="section-title">
              What <span className="text-gradient">Drives Us</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our core values shape every decision, interaction, and project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="glass-card border-white/[0.08] hover:border-cyan-400/30 transition-all duration-500 group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto">
                      <value.icon className="h-8 w-8 text-cyan-400" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 backdrop-blur-sm mb-6">
              <Users className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Meet the Team</span>
            </div>
            <h2 className="section-title">
              The People Behind <span className="text-gradient">Netgain</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Talented individuals united by a passion for creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl border-white/[0.08] hover:border-cyan-400/30 transition-all duration-500 group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <Avatar className="w-32 h-32 mx-auto border-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 text-cyan-400 text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -inset-4 bg-cyan-400/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                  </div>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg glass-button border-white/20 hover:border-cyan-400/30 text-cyan-400 transition-all duration-300 group/link"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764s1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.6v5.596z"/>
                      </svg>
                      <span className="text-sm font-medium group-hover/link:translate-x-0.5 transition-transform duration-300">Connect on LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 md:p-16 rounded-3xl border-white/[0.08] max-w-4xl mx-auto animate-scale-in">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">What Sets Us Apart</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                Netgain is More Than a Provider
              </h2>

              <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                <p>
                  We're a brand that exists to solve your business's digital challenges while elevating your vision beyond imagination.
                </p>
                <p>
                  Whether building your website, launching your brand digitally, or crafting your marketing strategy—we bring it all together with precision and care.
                </p>
              </div>

              <div className="pt-6">
                <blockquote className="text-2xl md:text-3xl font-display text-gradient italic">
                  "Let Netgain be the technical backbone of your business."
                </blockquote>
              </div>
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
              <span className="text-sm font-medium text-cyan-400">Join Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Ready to Work Together?
            </h2>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help you achieve your digital goals and transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="glow-button text-base px-8 py-6 group">
                  <span className="flex items-center">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="glass-button text-base px-8 py-6 border-white/20 text-white hover:text-cyan-400">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
