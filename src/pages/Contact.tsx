
import { useState } from 'react';
import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    websiteType: '',
    budget: '',
    services: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    const whatsappMessage = `Hi Netgain! I'm interested in your services.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AWebsite Type: ${formData.websiteType}%0ABudget: ${formData.budget}%0AServices: ${formData.services}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/YOUR_WHATSAPP_NUMBER?text=${whatsappMessage}`, '_blank');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Get Your <span className="text-gradient">Free Quote</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 animate-slide-up">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-400">+91 XXXXX XXXXX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400">hello@netgain.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-400">India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">WhatsApp</p>
                    <p className="text-gray-400">Quick Response</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white font-semibold mb-2">Business Hours</p>
                  <p className="text-gray-400 text-sm">Mon - Fri: 9:00 AM - 6:00 PM IST</p>
                  <p className="text-gray-400 text-sm">Sat: 10:00 AM - 4:00 PM IST</p>
                  <p className="text-gray-400 text-sm">Sun: Emergency Support Only</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Tell Us About Your Project</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="glass-button"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="glass-button"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Phone</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="glass-button"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Website Type</label>
                      <Select onValueChange={(value) => handleInputChange('websiteType', value)}>
                        <SelectTrigger className="glass-button">
                          <SelectValue placeholder="Select website type" />
                        </SelectTrigger>
                        <SelectContent className="bg-royal-900 border-white/20">
                          <SelectItem value="personal">Personal/Portfolio</SelectItem>
                          <SelectItem value="business">Business Website</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="blog">Blog/Magazine</SelectItem>
                          <SelectItem value="custom">Custom Application</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Budget Range</label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="glass-button">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-royal-900 border-white/20">
                          <SelectItem value="5k-15k">₹5,000 - ₹15,000</SelectItem>
                          <SelectItem value="15k-35k">₹15,000 - ₹35,000</SelectItem>
                          <SelectItem value="35k-75k">₹35,000 - ₹75,000</SelectItem>
                          <SelectItem value="75k+">₹75,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Services Needed</label>
                      <Select onValueChange={(value) => handleInputChange('services', value)}>
                        <SelectTrigger className="glass-button">
                          <SelectValue placeholder="Select services" />
                        </SelectTrigger>
                        <SelectContent className="bg-royal-900 border-white/20">
                          <SelectItem value="web-dev">Web Development Only</SelectItem>
                          <SelectItem value="web-hosting">Web + Hosting</SelectItem>
                          <SelectItem value="web-marketing">Web + Marketing</SelectItem>
                          <SelectItem value="full-package">Complete Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Project Details</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="glass-button min-h-[120px]"
                      placeholder="Tell us more about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="glow-button w-full">
                    Send to WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-gray-400 text-sm text-center">
                    By submitting this form, you'll be redirected to WhatsApp to continue the conversation.
                    We typically respond within 2 hours during business hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-20 text-center glass-card p-12">
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            Why Choose Netgain?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-2xl font-bold text-gradient mb-2">Fast Response</div>
              <p className="text-gray-400">Quick replies within 2 hours</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient mb-2">Transparent Pricing</div>
              <p className="text-gray-400">No hidden costs or surprises</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient mb-2">Quality Assured</div>
              <p className="text-gray-400">Premium solutions guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
