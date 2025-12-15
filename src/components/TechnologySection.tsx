import { Button } from '@/components/ui/button';
import { ArrowRight, Cog, Leaf, Zap, Shield, Settings2 } from 'lucide-react';
import biomassImage from '@/assets/biomass-fiber.jpg';

const features = [
  {
    icon: Cog,
    title: 'Fractional Lobe Processing',
    description: 'Patented twin-screw technology that opens up fiber structure without pulverizing, maximizing surface area for bacterial access.',
  },
  {
    icon: Leaf,
    title: 'Lignin Disruption',
    description: 'Mechanical stress breaks lignin bonds, releasing trapped cellulose and hemicellulose for enhanced digestion.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: '25-30% lower specific energy consumption compared to hammer mills and shredders.',
  },
  {
    icon: Shield,
    title: 'Wear Resistant',
    description: 'Hardened screw elements designed for high-silica feedstocks like paddy straw. Extended service life.',
  },
  {
    icon: Settings2,
    title: 'Continuous Operation',
    description: 'No batch processing limitations. 24/7 operation with <1% downtime for maximum throughput.',
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Our Technology
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              FLP Technology:{' '}
              <span className="text-primary">Engineering Biomass for Maximum Methane</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our patented Fractional Lobe Processing creates the ideal fiber structure for anaerobic digestion. 
              Unlike conventional shredding that simply cuts fibers, FLP opens and fibrillates biomass, 
              dramatically increasing the surface area available for bacterial colonization.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg">
              Download Technical Specifications
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={biomassImage}
                alt="Processed biomass fiber structure"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-2xl font-heading font-bold text-primary">95%+</p>
                    <p className="text-xs text-muted-foreground">Sink Rate</p>
                  </div>
                  <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-2xl font-heading font-bold text-accent">3x</p>
                    <p className="text-xs text-muted-foreground">Surface Area Increase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-elevated">
              <p className="text-xs font-medium uppercase tracking-wider opacity-80">Patented</p>
              <p className="text-lg font-heading font-bold">FLP Tech</p>
            </div>

            {/* Before/After Indicator */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background rounded-xl p-4 shadow-elevated border border-border">
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-destructive">B</span>
                </div>
                <div className="w-px h-6 bg-border" />
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
