import { Dumbbell, Utensils, MessageCircle } from 'lucide-react';

const MethodSection = () => {
  const methods = [
    {
      icon: Dumbbell,
      title: 'Personalized Training',
      description: 'Custom workouts tailored to your body, goals, and lifestyle. Every rep has a purpose.',
      features: [
        'Progressive overload programming',
        'No fancy diet given',
        'Injury prevention protocols',
        'Performance tracking'
        
      ]
    },
    {
      icon: Utensils,
      title: 'Science-Based Nutrition',
      description: 'No fads. Just sustainable, effective nutrition plans that fuel your transformation.',
      features: [
        'Macro-nutrient optimization',
        'Metabolic flexibility training',
        'Meal timing strategies',
        'Supplement guidance'
      ]
    },
    {
      icon: MessageCircle,
      title: '24/7 Accountability',
      description: 'Constant support through direct messaging and weekly check-ins. You\'re never alone.',
      features: [
        'Daily check-in protocols',
        'Form video analysis',
        'Progress photo reviews',
        'Mindset coaching'
      ]
    }
  ];

  return (
    <section id="method" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-black mb-6">
            About My <span className="text-primary">Method</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach that combines cutting-edge exercise science, 
            personalized nutrition, and psychological support for lasting results.
          </p>
        </div>

        {/* Methods Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-2xl p-8 card-shadow hover:glow-shadow transition-spring hover:scale-105 group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 accent-gradient rounded-2xl mb-6 group-hover:glow-shadow-intense transition-smooth">
                <method.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-montserrat font-bold mb-4 group-hover:text-primary transition-smooth">
                {method.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 text-lg">
                {method.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {method.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:glow-shadow transition-smooth"></div>
                    <span className="group-hover:text-foreground transition-smooth">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bottom Accent */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-primary font-semibold text-sm group-hover:glow-pulse">
                  Results-driven approach →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '95%', label: 'Client Success Rate' },
            { number: '6 months', label: 'Average Transformation' },
            { number: '24/7', label: 'Support Available' },
            { number: '100%', label: 'Science-Based' }
          ].map((stat, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl font-montserrat font-black text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;