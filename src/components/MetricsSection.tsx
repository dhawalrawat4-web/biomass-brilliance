import { TrendingUp, Clock, Target, Zap, Activity, CheckCircle } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    value: '30-50%',
    label: 'Increase in Specific Methane Yield',
    description: 'Higher biogas production from the same feedstock quantity',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Clock,
    value: '40-60%',
    label: 'Reduction in Digester HRT',
    description: 'Faster digestion means higher throughput capacity',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Target,
    value: '95%+',
    label: 'Sink Rate Achievement',
    description: 'Complete digestion with no floating layer formation',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Zap,
    value: '25-30%',
    label: 'Lower Energy Consumption',
    description: 'Reduced OPEX compared to hammer mills',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Activity,
    value: '<1%',
    label: 'Downtime in Operation',
    description: 'Continuous processing with minimal maintenance',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: CheckCircle,
    value: '18-24',
    label: 'Month Payback Period',
    description: 'Rapid ROI through increased production',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
];

const MetricsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 grid-pattern" style={{ backgroundSize: '60px 60px' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Performance Metrics
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Proven Results Across{' '}
            <span className="text-accent">100+ Installations</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            Real performance data from CBG plants using netiBIO FLP technology. 
            These aren't projections—they're verified outcomes from operational facilities.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:border-primary-foreground/30 transition-all duration-300 hover:bg-primary-foreground/10"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${metric.bgColor} flex items-center justify-center shrink-0`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div>
                  <p className={`text-3xl font-heading font-bold ${metric.color === 'text-primary' ? 'text-primary-foreground' : 'text-accent'}`}>
                    {metric.value}
                  </p>
                  <p className="font-heading font-medium text-primary-foreground mt-1">
                    {metric.label}
                  </p>
                  <p className="text-sm text-primary-foreground/60 mt-2">
                    {metric.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-primary-foreground/50">
            *Results may vary based on feedstock type, plant configuration, and operating conditions. 
            Contact us for site-specific projections.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
