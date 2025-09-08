
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const websitePlans = [
    {
      name: "Personal",
      price: "Starts from ₹5,000",
      description: "Perfect for personal websites and portfolios",
      features: [
        "Up to 5 pages",
        "Mobile responsive design",
        "Basic SEO setup",
        "Contact form",
        "1 year free domain",
        "SSL certificate",
        "Basic hosting (1 month)"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "Starts from ₹15,000",
      description: "Ideal for small to medium businesses",
      features: [
        "Up to 10 pages",
        "Custom design",
        "Advanced SEO optimization",
        "Contact & inquiry forms",
        "Social media integration",
        "Google Analytics setup",
        "Premium hosting (3 months)",
        "Admin panel"
      ],
      popular: true
    },
    {
      name: "Professional",
      price: "Starts from ₹35,000",
      description: "For large businesses and e-commerce",
      features: [
        "upto 50 pages",
        "E-commerce functionality",
        "Payment gateway integration",
        "Advanced SEO & speed optimization",
        "Custom features",
        "Priority support",
        "Premium hosting (6 months)",
        "Advanced admin panel"
      ],
      popular: false
    }
  ];

  const maintenancePlans = [
    {
      name: "Basic",
      monthlyPrice: "₹500",
      annualPrice: "₹5,000",
      description: "Essential maintenance for small websites",
      features: [
        "Monthly backups",
        "Security monitoring",
        "Uptime monitoring",
        "Basic support",
        "Plugin updates"
      ],
      popular: false
    },
    {
      name: "Pro",
      monthlyPrice: "₹3,000",
      annualPrice: "₹30,000",
      description: "Complete care for growing businesses",
      features: [
        "Weekly backups",
        "Advanced security",
        "Performance optimization",
        "Content updates (2 hrs/month)",
        "Priority support",
        "SEO monitoring",
        "Analytics reports"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Daily backups",
        "24/7 monitoring",
        "Unlimited updates",
        "Dedicated support",
        "Custom features",
        "Advanced analytics",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Simple <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that fits your needs.
          </p>
        </div>

        {/* Website Development Plans */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">
            <span className="text-gradient">Web Development</span> Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {websitePlans.map((plan, index) => (
              <Card key={index} className={`glass-card transition-all duration-300 animate-slide-up ${
                plan.popular ? 'border-amber-400/50 scale-105' : 'border-white/10 hover:border-amber-400/30'
              }`} style={{ animationDelay: `${index * 100}ms` }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-gradient mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Check className="h-4 w-4 text-amber-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className={`w-full ${plan.popular ? 'glow-button' : 'glass-button'}`}>
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Maintenance Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Maintenance Plans
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-amber-500"
              />
              <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Annual <span className="text-amber-400">(Save 17%)</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, index) => (
              <Card key={index} className={`glass-card transition-all duration-300 animate-slide-up ${
                plan.popular ? 'border-amber-400/50 scale-105' : 'border-white/10 hover:border-amber-400/30'
              }`} style={{ animationDelay: `${index * 100}ms` }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    {plan.monthlyPrice !== "Custom" && (
                      <span className="text-lg text-gray-400">/{isAnnual ? 'year' : 'month'}</span>
                    )}
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Check className="h-4 w-4 text-amber-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className={`w-full ${plan.popular ? 'glow-button' : 'glass-button'}`}>
                      {plan.monthlyPrice === "Custom" ? "Contact Us" : "Get Started"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hosting Details Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Hosting <span className="text-gradient">Details</span>
          </h2>
          <div className="glass-card border-white/10 p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-slide-up">
                <div className="w-16 h-16 bg-gradient-to-r from-royal-500 to-royal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Personal Plan</h3>
                <p className="text-amber-400 font-medium mb-1">Basic Hosting</p>
                <p className="text-gray-300">1 Month Included</p>
              </div>
              
              <div className="text-center animate-slide-up" style={{ animationDelay: '100ms' }}>
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                    <path d="M6 15h4" />
                    <path d="M14 15h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Business Plan</h3>
                <p className="text-amber-400 font-medium mb-1">Premium Hosting</p>
                <p className="text-gray-300">3 Months Included</p>
              </div>
              
              <div className="text-center animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                    <path d="M6 15h4" />
                    <path d="M14 15h4" />
                    <path d="M6 18h4" />
                    <path d="M14 18h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Professional Plan</h3>
                <p className="text-amber-400 font-medium mb-1">Premium Hosting</p>
                <p className="text-gray-300">6 Months Included</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400">
                All hosting plans include SSL certificates, daily backups, and 99.9% uptime guarantee.
                Extended hosting packages available upon request.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ or Additional Info */}
        <div className="text-center glass-card p-12 rounded-2xl mb-16">
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We understand every business is unique. Let's create a tailored package that fits your specific requirements and budget.
          </p>
          <Link to="/contact">
            <Button size="lg" className="glow-button">
              Get Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        
        {/* Contact Information */}
        <div className="text-center glass-card p-8 rounded-2xl border-amber-400/30">
          <h3 className="text-2xl font-serif font-bold text-white mb-4">
            Contact Information
          </h3>
          <div className="flex items-center justify-center space-x-2 text-xl text-amber-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="font-medium">Business Contact: 9347102347</span>
          </div>
          <p className="text-gray-400 mt-4">
            For inquiries and custom quotes, feel free to call us or use the contact form.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
