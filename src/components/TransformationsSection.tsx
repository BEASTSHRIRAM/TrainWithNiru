import { useState } from 'react';
import transform1 from '@/assets/transform1.jpg';
import transform2 from '@/assets/transform2.jpg';

const TransformationsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  // track current image index for each transformation card
  const [imageIndexes, setImageIndexes] = useState<Record<number, number>>({});

  const transformations = [
    {
       images: ['/img10.jpg', '/img2.jpg' /* , '/your-extra-image.jpg' */],
      client: '',
      result: 'From Heavy Bulk to Muscular ,Never gave up on myself',
      testimonial: 'It wasnt easy worked hard for it never skipped gym.',
      stats: 'Competed at ICN,Bangalore'

    },
    {
      images: [transform1],
      client: '',
      result: 'Dropped 4kg in 3 weeks',
      testimonial: 'The transformation was not just physical but mental. The support and science-driven plan made all the difference.',
      stats: '4kg lost in 3 weeks • 3% body fat reduced • Renewed energy'
    },
    {
      images: [transform2, '/img8.jpg', '/img9.jpg' /* , '/your-extra-image.jpg' */],
      client: '',
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
              {/* Image (carousel when multiple images provided) */}
              <div className="relative h-116 overflow-hidden">
                {(() => {
                  const imgs: string[] = (transformation as any).images || [];
                  const len = imgs.length;
                  const rawIndex = imageIndexes[index] ?? 0;
                  const currentIndex = len ? Math.min(rawIndex, len - 1) : 0;
                  const current = len ? imgs[currentIndex] : transform1; // fallback to a local image if none provided
                  return (
                    <>
                      <img
                        src={current}
                        alt={`${transformation.client} transformation`}
                        className={`w-full h-full object-cover transition-smooth ${
                          hoveredCard === index ? 'scale-110' : 'scale-100'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Left / Right arrows */}
                      {imgs.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setImageIndexes(prev => ({
                                ...prev,
                                [index]: (currentIndex - 1 + imgs.length) % imgs.length
                              }));
                            }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
                            aria-label="Previous image"
                          >
                            ‹
                          </button>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setImageIndexes(prev => ({
                                ...prev,
                                [index]: (currentIndex + 1) % imgs.length
                              }));
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
                            aria-label="Next image"
                          >
                            ›
                          </button>

                          {/* indicator */}
                          <div className="absolute right-3 bottom-3 bg-black/40 text-white text-xs px-2 py-1 rounded">
                            {currentIndex + 1}/{imgs.length}
                          </div>
                        </>
                      )}

                      {/* Client Name Overlay */}
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="font-montserrat font-bold text-lg">
                          {transformation.client}
                        </h4>
                        <p className="text-primary font-semibold">
                          {transformation.result}
                        </p>
                      </div>
                    </>
                  );
                })()}
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