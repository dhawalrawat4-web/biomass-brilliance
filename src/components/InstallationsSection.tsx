import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cbgPlantImage from '@/assets/cbg-plant.jpg';

const caseStudies = [
  {
    id: 1,
    plantName: 'Green Valley CBG',
    location: 'Punjab',
    capacity: '10 TPD',
    feedstock: 'Paddy Straw',
    beforeBiogas: '2,800',
    afterBiogas: '3,920',
    improvement: '+40%',
    testimonial: 'netiBIO solved our silica wear problems completely. We\'ve seen consistent yields even with monsoon-season straw.',
    contactPerson: 'Rajinder Singh, Plant Director',
  },
  {
    id: 2,
    plantName: 'Saurashtra Bio Energy',
    location: 'Gujarat',
    capacity: '15 TPD',
    feedstock: 'Napier Grass',
    beforeBiogas: '3,200',
    afterBiogas: '4,800',
    improvement: '+50%',
    testimonial: 'The FLP technology handles different harvest ages without any parameter changes. Truly versatile.',
    contactPerson: 'Hitesh Patel, Technical Head',
  },
  {
    id: 3,
    plantName: 'Deccan Green Gas',
    location: 'Maharashtra',
    capacity: '20 TPD',
    feedstock: 'Mixed Residues',
    beforeBiogas: '4,100',
    afterBiogas: '5,535',
    improvement: '+35%',
    testimonial: 'We process 5 different feedstocks through the same netiBIO unit. The flexibility is unmatched.',
    contactPerson: 'Suresh Deshmukh, Operations Manager',
  },
];

const installationStats = [
  { region: 'North India', count: 42 },
  { region: 'West India', count: 28 },
  { region: 'South India', count: 22 },
  { region: 'Central India', count: 8 },
  { region: 'East India', count: 5 },
];

const InstallationsSection = () => {
  return (
    <section id="installations" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Our Track Record
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            100+ Installations{' '}
            <span className="text-primary">Across India</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real plants. Real results. Every installation represents a plant operator 
            who chose data over promises.
          </p>
        </div>

        {/* Installation Map Placeholder + Stats */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Map Visual */}
          <div className="lg:col-span-2 bg-background rounded-xl shadow-card overflow-hidden">
            <div className="relative aspect-[16/10]">
              <img
                src={cbgPlantImage}
                alt="CBG plant installation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-primary-foreground mb-2">
                      105 Active Installations
                    </h3>
                    <p className="text-primary-foreground/70">
                      Processing 1000+ TPD of biomass daily
                    </p>
                  </div>
                  <Button variant="heroOutline" size="lg">
                    <MapPin className="w-4 h-4" />
                    View Full Map
                  </Button>
                </div>
              </div>

              {/* Pin Indicators */}
              <div className="absolute top-[30%] left-[25%] w-4 h-4 bg-accent rounded-full animate-pulse shadow-glow-accent" />
              <div className="absolute top-[45%] left-[35%] w-4 h-4 bg-accent rounded-full animate-pulse shadow-glow-accent" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-[55%] left-[50%] w-4 h-4 bg-accent rounded-full animate-pulse shadow-glow-accent" style={{ animationDelay: '1s' }} />
              <div className="absolute top-[40%] left-[60%] w-4 h-4 bg-accent rounded-full animate-pulse shadow-glow-accent" style={{ animationDelay: '1.5s' }} />
              <div className="absolute top-[65%] left-[45%] w-4 h-4 bg-accent rounded-full animate-pulse shadow-glow-accent" style={{ animationDelay: '2s' }} />
            </div>
          </div>

          {/* Regional Stats */}
          <div className="bg-background rounded-xl shadow-card p-6">
            <h4 className="font-heading font-semibold text-foreground mb-6">
              Installations by Region
            </h4>
            <div className="space-y-4">
              {installationStats.map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">{stat.region}</span>
                    <span className="font-heading font-bold text-foreground">{stat.count}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${(stat.count / 42) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                States covered: Punjab, Haryana, Gujarat, Maharashtra, Karnataka, Tamil Nadu, UP, MP, Rajasthan, and more
              </p>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
            Featured Case Studies
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-background rounded-xl shadow-card overflow-hidden group hover:shadow-elevated transition-all duration-300"
              >
                {/* Header */}
                <div className="bg-primary p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-primary-foreground/70 text-sm">{study.location}</p>
                      <h4 className="font-heading font-bold text-primary-foreground text-lg">
                        {study.plantName}
                      </h4>
                    </div>
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                      {study.improvement}
                    </span>
                  </div>
                  <div className="flex gap-4 mt-4 text-sm text-primary-foreground/80">
                    <span>{study.capacity}</span>
                    <span>•</span>
                    <span>{study.feedstock}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* Before/After */}
                  <div className="flex gap-4 mb-6">
                    <div className="flex-1 text-center p-3 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground uppercase mb-1">Before</p>
                      <p className="font-heading font-bold text-foreground">{study.beforeBiogas}</p>
                      <p className="text-xs text-muted-foreground">m³/day</p>
                    </div>
                    <div className="flex-1 text-center p-3 bg-primary/10 rounded-lg">
                      <p className="text-xs text-primary uppercase mb-1">After</p>
                      <p className="font-heading font-bold text-primary">{study.afterBiogas}</p>
                      <p className="text-xs text-muted-foreground">m³/day</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="text-sm text-muted-foreground italic mb-4">
                    "{study.testimonial}"
                  </blockquote>
                  <p className="text-xs text-foreground font-medium">
                    — {study.contactPerson}
                  </p>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                  <Button variant="outline" className="w-full group-hover:bg-muted">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="hero" size="xl">
            Schedule a Plant Visit
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstallationsSection;
