import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import JourneySection from '@/components/JourneySection';
import TransformationsSection from '@/components/TransformationsSection';
import MethodSection from '@/components/MethodSection';
import ApplicationForm from '@/components/ApplicationForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <JourneySection />
        <TransformationsSection />
        <MethodSection />
        <ApplicationForm />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-montserrat font-black text-primary glow-pulse mb-4">
              TrainWithNiru
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Elite fitness coaching for those committed to real results. 
              Transform your body, redefine your limits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-montserrat font-bold mb-3">Contact</h4>
              <p className="text-muted-foreground text-sm">
                Apply through the form above for coaching inquiries
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold mb-3">Follow</h4>
              <a
                href="https://www.instagram.com/_niranjan_k_n/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                {/* Instagram SVG icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.08"/>
                  <path d="M16.75 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-4.75.5a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5Zm0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm5.5-3.25H7.5A3.25 3.25 0 0 0 4.25 9.25v7.5A3.25 3.25 0 0 0 7.5 20h7.5a3.25 3.25 0 0 0 3.25-3.25v-7.5A3.25 3.25 0 0 0 15 6Zm1.75 10.75a1.75 1.75 0 0 1-1.75 1.75H7.5a1.75 1.75 0 0 1-1.75-1.75v-7.5A1.75 1.75 0 0 1 7.5 7.5h7.5a1.75 1.75 0 0 1 1.75 1.75v7.5Z" fill="currentColor"/>
                </svg>
                @_niranjan_k_n on Instagram
              </a>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold mb-3">Location</h4>
              <p className="text-muted-foreground text-sm">
                Online Coaching Worldwide
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-muted-foreground text-sm">
            <p>&copy; 2025 TrainWithNiru. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;