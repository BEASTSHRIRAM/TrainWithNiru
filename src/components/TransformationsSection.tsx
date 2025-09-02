import { useState } from 'react';
import transformation1 from '@/assets/transformation-1.jpg';
import transformation2 from '@/assets/transformation-2.jpg';
import transformation3 from '@/assets/transformation-3.jpg';
import transform1 from '@/assets/transform1.jpg';
import transform2 from '@/assets/transform2.jpg';

const TransformationsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const transformations = [
    {
      image: transform1,
      client: '',
      result: 'Dropped 18kg in 4 months',
      testimonial: 'The transformation was not just physical but mental. The support and science-driven plan made all the difference.',
      stats: '18kg lost • 10% body fat reduced • Renewed energy'
    },
    {
      image: transform2,
      client: 'Nishant Kn.',
      result: 'Gained strength & confidence',
      testimonial: 'I never thought I could feel this strong. Every session was motivating and tailored to my needs.',
      stats: 'Strength doubled • Confidence boosted • Healthier lifestyle'
    },
  ];

  return (
    <section id="results" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-black mb-6">
            Proof, <span className="text-primary">Not Promises</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real transformations from real people. These are the results of commitment, 
            science-based training, and personalized coaching.
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <div
              key={index}
              className={`relative bg-card border border-border rounded-2xl overflow-hidden card-shadow cursor-pointer transition-spring ${
                hoveredCard === index ? 'scale-105 glow-shadow-intense' : 'hover:scale-102'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <div className="relative h-116 overflow-hidden">
                <img 
                  src={transformation.image} 
                  alt={`${transformation.client} transformation`}
                  className={`w-full h-full object-cover transition-smooth ${
                    hoveredCard === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Client Name Overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-montserrat font-bold text-lg">
                    {transformation.client}
                  </h4>
                  <p className="text-primary font-semibold">
                    {transformation.result}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 transition-smooth ${
                hoveredCard === index ? 'bg-primary/5' : ''
              }`}>
                {hoveredCard === index ? (
                  <div className="animate-fade-in-up">
                    <blockquote className="text-foreground mb-4 italic">
                      "{transformation.testimonial}"
                    </blockquote>
                    <div className="text-sm text-primary font-semibold">
                      {transformation.stats}
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-muted-foreground mb-3">
                      Hover to read their story and see the incredible results achieved 
                      through dedicated coaching.
                    </p>
                    <div className="text-primary font-semibold text-sm">
                      Click to learn more →
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-muted-foreground mb-6">
            Ready to be the next success story?
          </p>
          <button
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
            className="accent-gradient text-primary-foreground px-8 py-3 rounded-lg font-semibold glow-shadow hover:glow-shadow-intense transition-spring hover:scale-105"
          >
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;