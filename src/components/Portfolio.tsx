import React from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign, Waves } from 'lucide-react';

const Portfolio = () => {
  const caseStudies = [
    {
      id: 1,
      client: "TechFlow Solutions",
      industry: "SaaS",
      challenge: "Low brand recognition in competitive market",
      solution: "Complete rebrand with signature sound identity",
      results: {
        brandRecall: "+340%",
        engagement: "+185%",
        conversions: "+120%"
      },
      soundElement: "Innovative notification chime for user onboarding",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      client: "GreenLeaf Organic",
      industry: "E-commerce",
      challenge: "Need to stand out in crowded organic food market",
      solution: "SEO optimization + unique checkout sound experience",
      results: {
        organicTraffic: "+275%",
        salesConversion: "+95%",
        customerRetention: "+160%"
      },
      soundElement: "Calming nature-inspired purchase confirmation sound",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 3,
      client: "UrbanFit Gym",
      industry: "Fitness",
      challenge: "Struggling to compete with larger fitness chains",
      solution: "Local SEO + social media + motivational sound branding",
      results: {
        localSearchRanking: "#1",
        membershipGrowth: "+210%",
        socialFollowing: "+890%"
      },
      soundElement: "Energizing achievement sounds for workout milestones",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-aqua-dream via-mystic-waters to-deep-current relative overflow-hidden border-t border-soft-aqua/20">
      {/* Underwater Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="light-ray"
            style={{
              left: `${12 + i * 12}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${i * 0.7}s`,
              transform: `rotate(${-10 + Math.random() * 20}deg)`,
            }}
          />
        ))}
      </div>

      {/* Floating Underwater Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="underwater-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${14 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif-elegant text-4xl md:text-6xl font-bold text-moonlight-pearl mb-8">
            Success Stories That Resonate
          </h2>
          <p className="font-sans-airy text-xl text-pearl-shimmer max-w-4xl mx-auto leading-relaxed">
            See how we've transformed brands with strategic digital marketing and signature sound identities 
            that create lasting impressions and drive measurable results.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                study.featured ? 'ring-2 ring-soft-aqua ring-opacity-30' : ''
              }`}
            >
              <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-full object-cover"
                    />
                    {study.featured && (
                      <div className="absolute top-4 left-4 bg-soft-aqua text-moonlight-pearl px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Featured Case
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-serif-elegant text-2xl md:text-3xl font-bold text-ocean-depths">
                        {study.client}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-soft-aqua" />
                    </div>
                    <p className="text-gentle-teal font-medium">{study.industry}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-ocean-depths mb-1">Challenge</h4>
                      <p className="text-mystic-waters">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ocean-depths mb-1">Solution</h4>
                      <p className="text-mystic-waters">{study.solution}</p>
                    </div>
                    <div className="bg-gradient-to-r from-soft-aqua/10 to-gentle-teal/10 p-4 rounded-lg border border-soft-aqua/20">
                      <h4 className="font-semibold text-ocean-depths mb-2 flex items-center">
                        <Waves className="w-4 h-4 mr-2 text-soft-aqua" />
                        Sound Branding Element
                      </h4>
                      <p className="text-mystic-waters text-sm">{study.soundElement}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(study.results).map(([key, value], resultIndex) => {
                      const icons = [TrendingUp, Users, DollarSign];
                      const Icon = icons[resultIndex % icons.length];
                      const labels = {
                        brandRecall: "Brand Recall",
                        engagement: "Engagement",
                        conversions: "Conversions",
                        organicTraffic: "Organic Traffic",
                        salesConversion: "Sales Conversion",
                        customerRetention: "Retention",
                        localSearchRanking: "Local Search",
                        membershipGrowth: "Growth",
                        socialFollowing: "Social Following"
                      };

                      return (
                        <div key={key} className="text-center">
                          <div className="flex justify-center mb-2">
                            <Icon className="w-5 h-5 text-soft-aqua" />
                          </div>
                          <div className="font-bold text-lg text-ocean-depths">{value}</div>
                          <div className="text-xs text-gentle-teal">{labels[key as keyof typeof labels]}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="ocean-card rounded-2xl p-12 text-moonlight-pearl">
            <h3 className="font-serif-elegant text-3xl md:text-4xl font-bold mb-6">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="font-sans-airy text-pearl-shimmer mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Join the brands that have transformed their market presence with our unique combination 
              of digital marketing expertise and signature sound design.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="ocean-button text-moonlight-pearl px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 ripple-container"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>

      {/* Underwater Ambient Light */}
      <div className="absolute inset-0 bg-underwater-light pointer-events-none opacity-15"></div>
    </section>
  );
};

export default Portfolio;