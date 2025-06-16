
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
      price: "₹5,000",
      description: "Perfect for personal websites and portfolios",
      features: [
        "Up to 5 pages",
        "Mobile responsive design",
        "Basic SEO setup",
        "Contact form",
        "1 year free domain",
        "SSL certificate",
        "Basic hosting (1 year)"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "₹15,000",
      description: "Ideal for small to medium businesses",
      features: [
        "Up to 15 pages",
        "Custom design",
        "Advanced SEO optimization",
        "Contact & inquiry forms",
        "Social media integration",
        "Google Analytics setup",
        "Premium hosting (1 year)",
        "Admin panel"
      ],
      popular: true
    },
    {
      name: "Professional",
      price: "₹35,000",
      description: "For large businesses and e-commerce",
      features: [
        "Unlimited pages",
        "E-commerce functionality",
        "Payment gateway integration",
        "Advanced SEO & speed optimization",
        "Custom features",
        "Priority support",
        "Premium hosting (2 years)",
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
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that fits your needs.
          </p>
        </div>

        {/* Website Development Plans */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Website Development
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

        {/* FAQ or Additional Info */}
        <div className="text-center glass-card p-12 rounded-2xl">
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
      </div>
    </div>
  );
};

export default Pricing;
