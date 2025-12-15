import { AlertTriangle, TrendingDown, Clock, Wrench, Droplets, Zap } from 'lucide-react';

const challenges = [
  {
    icon: TrendingDown,
    title: 'Low BMP Yields',
    description: 'Untreated biomass has reduced Biomethane Potential, limiting your gas production per ton of feedstock.',
    stat: 'Up to 40% lower yields',
  },
  {
    icon: Clock,
    title: 'Extended HRT',
    description: 'Long Hydraulic Retention Times reduce digester throughput and overall plant efficiency.',
    stat: '30-45 day retention',
  },
  {
    icon: Droplets,
    title: 'Floating Layer Formation',
    description: 'Untreated fibers float in digesters, creating dead zones and reducing active digestion volume.',
    stat: '20% capacity loss',
  },
  {
    icon: Wrench,
    title: 'Equipment Wear',
    description: 'High silica content in paddy straw causes excessive wear on pumps, mixers, and downstream equipment.',
    stat: '3x maintenance costs',
  },
  {
    icon: AlertTriangle,
    title: 'Digester Choking',
    description: 'Long fibers tangle and clog feeding systems, causing frequent shutdowns and manual intervention.',
    stat: '15% downtime',
  },
  {
    icon: Zap,
    title: 'Feedstock Variability',
    description: 'Seasonal moisture and quality changes make consistent operation nearly impossible.',
    stat: 'Unpredictable output',
  },
];

const ChallengeSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5 grid-pattern" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            The Industry Challenge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Why Your CBG Plant Isn't{' '}
            <span className="text-primary">Performing at Full Potential</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Untreated biomass is costing you production capacity, maintenance hours, and profitability. 
            Understanding these challenges is the first step to solving them.
          </p>
        </div>

        {/* Challenge Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0 group-hover:bg-destructive/20 transition-colors">
                  <challenge.icon className="w-6 h-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {challenge.description}
                  </p>
                  <span className="inline-flex items-center text-xs font-medium text-destructive bg-destructive/10 px-3 py-1 rounded-full">
                    {challenge.stat}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <p className="text-foreground">
              <span className="font-semibold">netiBIO FLP Technology</span> solves all these challenges with one integrated solution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
