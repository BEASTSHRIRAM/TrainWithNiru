import heroDeadlift from '@/assets/hero-deadlift.jpg';
import physiqueBack from '@/assets/physique-back.jpg';
import coachingSession from '@/assets/coaching-session.jpg';

const HeroSection = () => {
  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background Images */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={physiqueBack} 
          alt="Fitness transformation" 
          className="absolute top-10 right-10 w-64 h-64 object-cover rounded-lg float-up opacity-60"
        />
        <img 
          src={coachingSession} 
          alt="Personal training session" 
          className="absolute bottom-20 left-10 w-72 h-48 object-cover rounded-lg float-down opacity-50"
        />
        <img 
          src={heroDeadlift} 
          alt="Strength training" 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-64 object-cover rounded-lg float-up opacity-30"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-montserrat font-black mb-6 animate-fade-in-up">
          Transform Your Body,{' '}
          <span className="text-primary glow-pulse">Redefine Your Limits</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
          Elite 1:1 online coaching for those committed to real results,No fancy diets all natural.
        </p>

        <button
          onClick={scrollToApply}
          className="accent-gradient text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold glow-shadow hover:glow-shadow-intense transition-spring hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Apply For Coaching
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;