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
    <section id="portfolio" className="py-20 bg-seashell-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-stormy-waters mb-6">
            Success Stories That Resonate
          </h2>
          <p className="text-xl text-deep-teal max-w-3xl mx-auto leading-relaxed">
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
                study.featured ? 'ring-2 ring-tidal-teal ring-opacity-20' : ''
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
                      <div className="absolute top-4 left-4 bg-deep-teal text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured Case
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-stormy-waters">
                        {study.client}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-deep-teal" />
                    </div>
                    <p className="text-deep-teal font-medium">{study.industry}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-stormy-waters mb-1">Challenge</h4>
                      <p className="text-deep-teal">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stormy-waters mb-1">Solution</h4>
                      <p className="text-deep-teal">{study.solution}</p>
                    </div>
                    <div className="bg-seashell-blush p-4 rounded-lg">
                      <h4 className="font-semibold text-stormy-waters mb-2 flex items-center">
                        <Waves className="w-4 h-4 mr-2 text-deep-teal" />
                        Sound Branding Element
                      </h4>
                      <p className="text-deep-teal text-sm">{study.soundElement}</p>
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
                            <Icon className="w-5 h-5 text-deep-teal" />
                          </div>
                          <div className="font-bold text-lg text-stormy-waters">{value}</div>
                          <div className="text-xs text-deep-teal">{labels[key as keyof typeof labels]}</div>
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
          <div className="bg-gradient-to-r from-deep-teal to-stormy-waters rounded-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-seashell-blush mb-6 max-w-2xl mx-auto">
              Join the brands that have transformed their market presence with our unique combination 
              of digital marketing expertise and signature sound design.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-deep-teal hover:bg-seashell-blush px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;