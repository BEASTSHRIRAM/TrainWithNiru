import { useEffect, useRef, useState } from 'react';

const JourneySection = () => {
  const stats = [
    {label: ' 3 Years Experience' },
    {label: 'Transforming My Clients' },
    {label: 'Guaranteed Results ' },
  ];

  // Carousel images (add your image filenames in public/)
  const images = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg',
    '/img5.jpg',
    '/img6.jpg',
    '/img7.jpg',
    '/img10.jpg',
  ];
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, images.length]);

  const goTo = (idx: number) => {
    setCurrent((idx + images.length) % images.length);
  };
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  return (
    <section id="journey" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div className="relative animate-fade-in-up">
            <div className="relative overflow-hidden rounded-2xl card-shadow h-[600px] flex items-center justify-center">
              {/* Carousel Images */}
              {images.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt={`Coach ${idx + 1}`}
                  className={`absolute w-full h-[600px] object-cover transition-all duration-700 ease-in-out rounded-2xl shadow-lg ${
                    idx === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
                  }`}
                  style={{
                    transitionProperty: 'opacity, transform',
                  }}
                />
              ))}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none"></div>
              {/* Left Arrow */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-2 shadow-lg z-20 transition-colors"
                aria-label="Previous image"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
              </button>
              {/* Right Arrow */}
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background border border-border rounded-full p-2 shadow-lg z-20 transition-colors"
                aria-label="Next image"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
              </button>
              {/* Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goTo(idx)}
                    className={`w-3 h-3 rounded-full border border-primary transition-all duration-300 ${idx === current ? 'bg-primary' : 'bg-background'}`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-28 -right-6 bg-background border border-border rounded-xl p-6 card-shadow">
              <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="px-2">
                    <div className="text-xs font-semibold text-blue-400 drop-shadow-[0_0_3px_rgba(56,189,248,0.5)]" style={{textShadow: '0 0 3px #38bdf8'}}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-montserrat font-black mb-6">
              His Journey
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                What started as a personal battle with self-doubt and an out-of-shape body 
                became a complete life transformation. After years of failed attempts and 
                cookie-cutter programs, I discovered the science behind sustainable results.
              </p>
              
              <p>
                My mission became clear: to help ambitious individuals break through their 
                limitations using proven, science-based methods. No gimmicks. No shortcuts. 
                Just relentless commitment to excellence.
              </p>
              
              <p className="text-primary font-semibold">
                "Your transformation starts with the decision to never settle for average."
              </p>
            </div>

            {/* Key Philosophy Points */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Results-Driven', desc: 'Every program is designed for measurable outcomes' },
                { title: 'Personalized', desc: 'Your unique body, goals, and lifestyle matter' },
              ].map((point, index) => (
                <div key={index} className="bg-background border border-border rounded-lg p-4">
                  <h4 className="font-montserrat font-bold text-primary mb-2">
                    {point.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;