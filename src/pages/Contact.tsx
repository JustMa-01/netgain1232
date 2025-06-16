
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
    service: '',
    budget: '',
    details: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    service: false
  });

  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '' || !formData.email.includes('@'),
      service: formData.service.trim() === ''
    };
    
    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Construct the WhatsApp message
    let message = `Hello Netgain,\nI would like to get a quote.\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nService: ${formData.service.trim()}`;
    
    // Add budget if provided
    if (formData.budget && formData.budget.trim() !== "") {
      message += `\nBudget Range: ${formData.budget.trim()}`;
    }
    
    // Add project details if provided
    if (formData.details && formData.details.trim() !== "") {
      message += `\nProject Details: ${formData.details.trim()}`;
    }
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/9347102347?text=${encodedMessage}`, '_blank');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user types
    if (formErrors[field as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Get a <span className="text-gradient">WhatsApp Quote</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Fill out the form and get an instant quote via WhatsApp. We'll respond quickly to discuss your project details.
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
                    <p className="text-gray-400">+91 9347102347</p>
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
                    <p className="text-gray-400">+91 9347102347</p>
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
                <CardTitle className="text-white text-2xl">Get a Quote via WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`glass-button ${formErrors.name ? 'border-red-500' : ''}`}
                        placeholder="Your full name"
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-xs mt-1">Name is required</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`glass-button ${formErrors.email ? 'border-red-500' : ''}`}
                        placeholder="your@email.com"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1">Valid email is required</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Service Needed *</label>
                    <Select 
                      onValueChange={(value) => handleInputChange('service', value)}
                      value={formData.service}
                    >
                      <SelectTrigger className={`glass-button ${formErrors.service ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-royal-900 border-white/20">
                        <SelectItem value="Web Development">Web Development</SelectItem>
                        <SelectItem value="Web Dev + Hosting">Web Dev + Hosting</SelectItem>
                        <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                        <SelectItem value="Online Ads Marketing">Online Ads Marketing</SelectItem>
                        <SelectItem value="Database Management">Database Management</SelectItem>
                      </SelectContent>
                    </Select>
                    {formErrors.service && (
                      <p className="text-red-500 text-xs mt-1">Service selection is required</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Budget Range (Optional)</label>
                    <Select 
                      onValueChange={(value) => handleInputChange('budget', value)}
                      value={formData.budget}
                    >
                      <SelectTrigger className="glass-button">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-royal-900 border-white/20">
                        <SelectItem value="₹5,000 - ₹15,000">₹5,000 - ₹15,000</SelectItem>
                        <SelectItem value="₹15,000 - ₹35,000">₹15,000 - ₹35,000</SelectItem>
                        <SelectItem value="₹35,000 - ₹75,000">₹35,000 - ₹75,000</SelectItem>
                        <SelectItem value="₹75,000+">₹75,000+</SelectItem>
                        <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-gray-500 text-xs mt-1">This helps us tailor our solution to your budget</p>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Project Details (Optional)</label>
                    <Textarea
                      value={formData.details}
                      onChange={(e) => handleInputChange('details', e.target.value)}
                      className="glass-button min-h-[120px]"
                      placeholder="Tell us more about your project requirements..."
                    />
                    <p className="text-gray-500 text-xs mt-1">The more details you provide, the more accurate our quote will be</p>
                  </div>

                  <Button type="submit" size="lg" className="glow-button w-full">
                    Send to WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-center">
                    <p className="text-amber-400 font-medium mb-1">How it works:</p>
                    <p className="text-gray-400 text-sm">
                      When you submit this form, you'll be redirected to WhatsApp with your quote request pre-filled.
                      Just send the message to start the conversation with our team.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-20 text-center glass-card p-12">
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            Why Get a Quote via WhatsApp?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-2xl font-bold text-gradient mb-2">Instant Connection</div>
              <p className="text-gray-400">Direct line to our team, no waiting</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient mb-2">Convenient Discussion</div>
              <p className="text-gray-400">Chat at your own pace, anytime</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient mb-2">Quick Responses</div>
              <p className="text-gray-400">Get answers within 2 hours during business hours</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400 max-w-2xl mx-auto">
              At Netgain, we believe in making communication as seamless as possible. Our WhatsApp quote system allows for quick, convenient discussions about your project needs and helps us provide you with accurate, timely quotes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
