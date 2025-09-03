import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  mobile: '',
    age: '',
    bodyweight: '',
    height: '',
    diet: '',
    goals: '',
    experience: '',
    commitment: '',
    social: '',
    challenges: '',
    timeline: '',
    budget: ''
  });

  const totalSteps = 3;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send to FormSubmit (replace with your email)
    try {
      await fetch('https://formsubmit.co/ajax/niranjankn09@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  // WhatsApp message generator
  const whatsappNumber = '+919902554790';
  const whatsappMessage = encodeURIComponent(
    `New Application:\n` +
    Object.entries(formData).map(([k, v]) => `${k}: ${v}`).join('\n')
  );

  if (isSubmitted) {
    return (
      <section id="apply" className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 accent-gradient rounded-full flex items-center justify-center mx-auto mb-8 glow-shadow">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-montserrat font-black mb-6">
              Application Received!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for your application. I'll review your information and get back to you 
              within 24 hours to discuss next steps. 
            </p>
            <p className="text-lg text-primary font-semibold mb-8">
              Check your email for confirmation and further instructions.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block accent-gradient text-primary-foreground px-8 py-3 rounded-lg font-semibold glow-shadow hover:glow-shadow-intense transition-spring hover:scale-105"
            >
              Send Application to WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-black mb-6">
              Ready to Commit? <span className="text-primary">Let's Start</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Serious inquiries only. Coaching spots are limited to ensure quality results.
            </p>
            
            {/* Progress Bar */}
            <div className="flex items-center justify-center gap-4 mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-smooth ${
                    step <= currentStep 
                      ? 'accent-gradient text-primary-foreground glow-shadow' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-12 h-1 mx-2 rounded transition-smooth ${
                      step < currentStep ? 'bg-primary' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 card-shadow">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-2xl font-montserrat font-bold mb-6 text-center">
                  Basic Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      inputMode="tel"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                      placeholder="e.g. 1234567890"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Age *</label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-medium mb-2">Current Bodyweight (kg) *</label>
                    <input
                      type="number"
                      value={formData.bodyweight}
                      onChange={(e) => handleInputChange('bodyweight', e.target.value)}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-foreground font-medium mb-2">Height (cm) *</label>
                    <input
                      type="number"
                      value={formData.height}
                      onChange={(e) => handleInputChange('height', e.target.value)}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-foreground font-medium mb-2">Diet Preference *</label>
                    <select
                      value={formData.diet}
                      onChange={(e) => handleInputChange('diet', e.target.value)}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                      required
                    >
                      <option value="">Select your diet preference</option>
                      <option value="Veg">Veg</option>
                      <option value="Nonveg">Nonveg</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Goals & Experience */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-2xl font-montserrat font-bold mb-6 text-center">
                  Goals & Experience
                </h3>
                
                <div>
                  <label className="block text-foreground font-medium mb-2">Primary Fitness Goals *</label>
                  <textarea
                    value={formData.goals}
                    onChange={(e) => handleInputChange('goals', e.target.value)}
                    rows={4}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                    placeholder="Describe what you want to achieve (e.g., lose fat, build muscle, improve performance...)"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-foreground font-medium mb-2">Training Experience *</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                    required
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner (0-1 year)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="advanced">Advanced (3+ years)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-foreground font-medium mb-2">Biggest Challenges *</label>
                  <textarea
                    value={formData.challenges}
                    onChange={(e) => handleInputChange('challenges', e.target.value)}
                    rows={3}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                    placeholder="What's been holding you back from achieving your goals?"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 3: Commitment & Contact */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="text-2xl font-montserrat font-bold mb-6 text-center">
                  Commitment & Details
                </h3>
                
                <div>
                  <label className="block text-foreground font-medium mb-2">Commitment Level *</label>
                  <select
                    value={formData.commitment}
                    onChange={(e) => handleInputChange('commitment', e.target.value)}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                    required
                  >
                    <option value="">Select your commitment level</option>
                    <option value="ready-now">Ready to start immediately</option>
                    <option value="serious-questions">Serious, but have questions</option>
                    <option value="considering">Still considering options</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-foreground font-medium mb-2">Timeline for Results *</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                    required
                  >
                    <option value="">Select your desired timeline</option>
                    <option value="3-months">3 months</option>
                    <option value="6-months">6 months</option>
                    <option value="12-months">12 months</option>
                    <option value="long-term">Long-term lifestyle change</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-foreground font-medium mb-2">Instagram Handle (Optional)</label>
                  <input
                    type="text"
                    value={formData.social}
                    onChange={(e) => handleInputChange('social', e.target.value)}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                    placeholder="@yourusername"
                  />
                </div>
                
                <div>
                  <label className="block text-foreground font-medium mb-2">Investment Range *</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-smooth"
                    required
                  >
                    <option value="">Select your budget range</option>
                    <option value="500-1000">4000/3-month</option>
                    <option value="1000-2000">7000/6-month</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-6 py-3 border border-border rounded-lg text-foreground hover:border-primary transition-smooth"
                >
                  Previous
                </button>
              )}
              
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className={`accent-gradient text-primary-foreground px-6 py-3 rounded-lg glow-shadow hover:glow-shadow-intense transition-spring hover:scale-105 flex items-center gap-2 ${
                    currentStep === 1 ? 'ml-auto' : ''
                  }`}
                >
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="accent-gradient text-primary-foreground px-8 py-3 rounded-lg glow-shadow hover:glow-shadow-intense transition-spring hover:scale-105 font-semibold ml-auto"
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;