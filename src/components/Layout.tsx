import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resources', path: '/resources' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div className="min-h-screen relative">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-card shadow-2xl border-b border-white/[0.08]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="/netgain-logo.png"
                  alt="Netgain Logo"
                  className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute -inset-2 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
              <span className="text-2xl font-display font-bold">
                <span className="text-white">Net</span>
                <span className="text-gradient">gain</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative group ${
                    location.pathname === item.path
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full"></span>
                  )}
                  <span className="absolute inset-0 bg-cyan-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/contact">
                <Button className="glow-button group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>

            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-white/5"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden glass-card mt-4 mb-4 rounded-2xl border border-white/[0.08] animate-scale-in">
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                        : 'text-slate-300 hover:text-cyan-400 hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link to="/contact" className="block">
                    <Button className="glow-button w-full">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="pt-20 relative z-0">
        {children}
      </main>

      <footer className="relative mt-32 border-t border-white/[0.08]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img
                  src="/netgain-logo.png"
                  alt="Netgain Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-2xl font-display font-bold">
                  <span className="text-white">Net</span>
                  <span className="text-gradient">gain</span>
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">
                Building exceptional digital experiences that drive growth and innovation for modern businesses.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20">
                  <span className="text-xs font-medium text-cyan-400 flex items-center">
                    <Sparkles className="h-3 w-3 mr-1.5" />
                    Innovative
                  </span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-400/20">
                  <span className="text-xs font-medium text-teal-400">Reliable</span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-400/20">
                  <span className="text-xs font-medium text-cyan-400">Scalable</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Services</h3>
              <ul className="space-y-3">
                {['Web Development', 'Hosting & Domain', 'SEO & Maintenance', 'Digital Marketing'].map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                {[
                  { name: 'About', path: '/about' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'Contact', path: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Get Started</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Ready to transform your digital presence? Let's build something amazing together.
              </p>
              <Link to="/contact">
                <Button className="glow-button w-full group">
                  <span className="flex items-center justify-center">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.08]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                &copy; 2024 Netgain. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">Privacy Policy</span>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">Terms of Service</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
