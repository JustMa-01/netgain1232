import { WhatsAppQuoteForm } from "@/components/WhatsAppQuoteForm";

const GetQuote = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Get a <span className="text-gradient">Quote</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tell us about your project, and we'll provide a custom quote tailored to your needs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-20">
          <WhatsAppQuoteForm />
        </div>

        <div className="glass-card border-white/10 p-8 rounded-xl max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">Why Choose Netgain?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="p-4">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-1">Premium Quality</h3>
              <p className="text-gray-400 text-sm">Every project is crafted with excellence and attention to detail.</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-1">Timely Delivery</h3>
              <p className="text-gray-400 text-sm">We respect deadlines and deliver projects on time, every time.</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-1">Dedicated Support</h3>
              <p className="text-gray-400 text-sm">Our team is always available to assist you with any questions or concerns.</p>
            </div>
          </div>
          <p className="text-gray-400">
            Join our growing list of satisfied clients and experience the Netgain difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;