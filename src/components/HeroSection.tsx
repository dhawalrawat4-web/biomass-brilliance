import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-biomass.jpg';

const HeroSection = () => {
  const highlights = [
    '100+ Installations Across India',
    'Up to 50% Higher Biogas Yields',
    'Made for Indian Biomass Conditions',
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="netiBIO biomass processing machinery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[1] opacity-10 grid-pattern" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-primary-foreground/90 font-medium">
              India's Leading FLP Technology Provider
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Maximize Your CBG Yields with{' '}
            <span className="text-accent">Precision Biomass Conditioning</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Transform paddy straw, Napier grass & agri-residues into high-digestibility feedstock 
            with netiBIO's patented Fractional Lobe Processing technology.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-primary-foreground/90"
              >
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl">
              Calculate Your Yield Improvement
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5" />
              See Live Operation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm text-primary-foreground/60 mb-4">Trusted by leading CBG plant operators</p>
            <div className="flex flex-wrap items-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-primary-foreground">100+</p>
                <p className="text-xs text-primary-foreground/60">Installations</p>
              </div>
              <div className="w-px h-10 bg-primary-foreground/20" />
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-primary-foreground">15+</p>
                <p className="text-xs text-primary-foreground/60">States Covered</p>
              </div>
              <div className="w-px h-10 bg-primary-foreground/20" />
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-primary-foreground">1000+</p>
                <p className="text-xs text-primary-foreground/60">TPD Capacity</p>
              </div>
              <div className="w-px h-10 bg-primary-foreground/20" />
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-accent">50%</p>
                <p className="text-xs text-primary-foreground/60">Yield Increase</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
