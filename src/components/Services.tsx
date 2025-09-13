import React from 'react';
import { Search, Users, MousePointer, Mail, Palette, Waves, BarChart3, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Waves,
      title: "Sound Branding",
      description: "Create unique audio identities that make your brand instantly recognizable across all touchpoints.",
      featured: true,
      color: "from-calypso to-blue-bayoux"
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Boost your organic visibility with data-driven SEO strategies that deliver measurable results.",
      featured: false,
      color: "from-rock-blue to-calypso"
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      description: "Build engaged communities across all platforms with content that resonates and converts.",
      featured: false,
      color: "from-calypso to-rock-blue"
    },
    {
      icon: MousePointer,
      title: "Paid Advertising",
      description: "Maximize ROI with precision-targeted campaigns across Google, Facebook, and emerging platforms.",
      featured: false,
      color: "from-blue-bayoux to-calypso"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Design automated email sequences that nurture leads and drive consistent revenue growth.",
      featured: false,
      color: "from-rock-blue to-blue-bayoux"
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Develop cohesive visual identities that tell your story and connect with your audience.",
      featured: false,
      color: "from-calypso to-lola"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Transform data into actionable insights that guide strategic decisions and optimize performance.",
      featured: false,
      color: "from-blue-bayoux to-rock-blue"
    },
    {
      icon: Target,
      title: "Conversion Optimization",
      description: "Maximize your website's potential with systematic testing and optimization strategies.",
      featured: false,
      color: "from-calypso to-blue-bayoux"
    }
  ];

  return (
    <section id="services" className="py-20 bg-seashell-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-stormy-waters mb-6">
            Full-Spectrum Digital Marketing
          </h2>
          <p className="text-xl text-deep-teal max-w-3xl mx-auto leading-relaxed">
            From SEO to sound design, we provide comprehensive digital marketing solutions 
            that give your brand a complete competitive advantage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-seashell-blush ${
                  service.featured ? 'ring-2 ring-deep-teal ring-opacity-50' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-deep-teal to-stormy-waters text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Signature Service
                  </div>
                )}

                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-stormy-waters mb-3">
                  {service.title}
                </h3>

                <p className="text-deep-teal leading-relaxed">
                  {service.description}
                </p>

                {service.featured && (
                  <div className="mt-4 flex items-center text-deep-teal font-medium text-sm">
                    <Waves className="w-4 h-4 mr-2" />
                    <span>Our Unique Edge</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-deep-teal to-stormy-waters rounded-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Sound Different?
            </h3>
            <p className="text-seashell-blush mb-6 max-w-2xl mx-auto">
              Let's discuss how we can amplify your brand with both digital marketing excellence and signature sound design.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-deep-teal hover:bg-seashell-blush px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;