import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Shield, Heart, Sparkles, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About = () => {
  const teamMembers = [
    {
      name: "Hemanth Anala",
      role: "Founder & Project Lead",
      image: "/placeholder.svg",
      bio: "The visionary behind Netgain, Hemanth oversees all projects and operations with a passion for innovation and premium service.",
      linkedin: "https://www.linkedin.com/in/hemanth-anala-1739b7267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Maheswar",
      role: "Co-Founder & Tech Lead",
      image: "/placeholder.svg",
      bio: "As the second lead of Netgain, Maheswar plays a critical role in maintaining project quality and technical excellence.",
      linkedin: "https://www.linkedin.com/in/maheswar117?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  ];

  const milestones = [
    {
      year: "2025",
      title: "Company Founded",
      description: "Netgain was established by Hemanth Anala with a vision to become a one-stop solution for all technical needs."
    },
    {
      year: "2025",
      title: "First Demo Project",
      description: "Completed our first successful demo project: FoodRest Restaurant UI."
    },
    {
      year: "2025",
      title: "Team Formation",
      description: "Building a strong, passionate team with complementary skills and shared vision."
    },
    {
      year: "2025",
      title: "Service Expansion",
      description: "Expanding our services from web development to digital marketing and beyond."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust",
      description: "We build relationships that last, founded on reliability and transparency."
    },
    {
      icon: Heart,
      title: "Purity",
      description: "Our work is authentic, honest, and tailored with care for each client's unique needs."
    },
    {
      icon: Users,
      title: "Loyalty",
      description: "We treat our clients like long-term partners, not just customers."
    },
    {
      icon: Crown,
      title: "Luxury & Premium",
      description: "Every touchpoint reflects excellence and elegance in service delivery."
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "We transform ideas into powerful digital outcomes that exceed expectations."
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="hero-bg py-32 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        
        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-royal-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
              About <span className="text-gradient">Netgain</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our story, our team, and our mission to deliver exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-serif font-bold text-white mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-gray-400 mb-4">
                Netgain was founded in 2025 by Hemanth Anala with a bold vision—to become a one-stop solution for all technical needs that modern businesses face. What began as a passion project has quickly evolved into a premium digital services brand known for innovation, quality, and trust.
              </p>
              <p className="text-gray-400 mb-4">
                Our journey started with a single demo project, built not just to showcase our capabilities, but to set the tone for the kind of service we deliver—complete, strategic, and premium. From that very first project, our focus has been on transforming ideas into digital realities that are clearer, more powerful, and more valuable than what our clients first imagined.
              </p>
              <p className="text-gray-400 mb-6">
                We're not just a service provider or a product—we're a brand. A brand that exists to solve your business's digital problems while elevating your vision beyond what you imagine.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Affordable. Reliable. Scalable.
              </div>
            </div>
            <div className="glass-card border-white/10 p-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Company Milestones</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-black font-bold">
                        {milestone.year.substring(2)}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{milestone.title}</h4>
                      <p className="text-gray-400 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-royal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              At Netgain, we don't just offer services—we deliver experiences that feel like full meals for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass-card border-white/10 hover:border-amber-400/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-8 text-center">
                  <value.icon className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              The talented individuals behind Netgain's success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="glass-card border-white/10 p-6 text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-amber-400 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-blue-500 hover:text-blue-700 transition-colors" aria-label={`LinkedIn profile of ${member.name}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764s1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.6v5.596z"/></svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-royal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Netgain is not just a service provider or a product—it's a brand. A brand that exists to solve your business's digital problems while elevating your vision beyond what you imagine.
            </p>
          </div>
          
          <div className="glass-card border-white/10 p-8 max-w-3xl mx-auto">
            <p className="text-gray-300 mb-4">
              Whether it's building your website, launching your brand digitally, or crafting your next marketing strategy—we're here to bring it all together.
            </p>
            <p className="text-gray-300 mb-4">
              Every project we undertake is a reflection of our dedication to turning ideas into high-impact solutions. With a hands-on approach to problem-solving and a shared commitment to client success, we support development, strategy, and client communication at every step.
            </p>
            <p className="text-xl text-amber-400 font-serif text-center mt-8">
              "Let Netgain be the technical backbone of your business, with a premium touch."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-royal-900/50 to-amber-900/50"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <Link to="/contact">
            <Button size="lg" className="glow-button text-lg px-8 py-4">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;