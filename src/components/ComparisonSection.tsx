import { Check, X, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const comparisonData = [
  {
    feature: 'Processing Type',
    netibio: 'Continuous FLP',
    hammerMill: 'Batch/Semi-continuous',
    silaging: 'Passive biological',
  },
  {
    feature: 'Biogas Yield Increase',
    netibio: '30-50%',
    netibioHighlight: true,
    hammerMill: '10-20%',
    silaging: '15-25%',
  },
  {
    feature: 'Specific Energy (kWh/ton)',
    netibio: '15-25',
    netibioHighlight: true,
    hammerMill: '30-50',
    silaging: 'N/A',
  },
  {
    feature: 'Silica Handling',
    netibio: 'Excellent',
    netibioHighlight: true,
    hammerMill: 'Poor',
    silaging: 'N/A',
  },
  {
    feature: 'Equipment Wear',
    netibio: 'Low',
    netibioHighlight: true,
    hammerMill: 'Very High',
    silaging: 'N/A',
  },
  {
    feature: 'Feedstock Flexibility',
    netibio: 'All types',
    netibioHighlight: true,
    hammerMill: 'Limited',
    silaging: 'Limited',
  },
  {
    feature: 'Processing Time',
    netibio: 'Immediate',
    netibioHighlight: true,
    hammerMill: 'Immediate',
    silaging: '2-4 weeks',
  },
  {
    feature: 'Space Requirement',
    netibio: 'Compact',
    netibioHighlight: true,
    hammerMill: 'Medium',
    silaging: 'Very Large',
  },
  {
    feature: 'Maintenance Frequency',
    netibio: 'Low',
    netibioHighlight: true,
    hammerMill: 'Very High',
    silaging: 'Low',
  },
  {
    feature: 'Indian Conditions Suitability',
    netibio: 'Designed for India',
    netibioHighlight: true,
    hammerMill: 'Adapted',
    silaging: 'Climate dependent',
  },
];

const ComparisonSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Technology Comparison
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            How netiBIO Compares to{' '}
            <span className="text-primary">Alternative Methods</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A transparent comparison of pre-treatment technologies. We believe in data-driven decisions.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-4 font-heading font-semibold text-foreground">
                  Feature
                </th>
                <th className="text-center py-4 px-4">
                  <div className="inline-flex flex-col items-center gap-1">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-1">
                      <span className="text-primary-foreground font-bold text-lg">S</span>
                    </div>
                    <span className="font-heading font-bold text-primary">netiBIO FLP</span>
                    <span className="text-xs text-muted-foreground">Recommended</span>
                  </div>
                </th>
                <th className="text-center py-4 px-4">
                  <div className="inline-flex flex-col items-center gap-1">
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-1">
                      <span className="text-muted-foreground font-bold text-lg">H</span>
                    </div>
                    <span className="font-heading font-semibold text-foreground">Hammer Mill</span>
                    <span className="text-xs text-muted-foreground">Traditional</span>
                  </div>
                </th>
                <th className="text-center py-4 px-4">
                  <div className="inline-flex flex-col items-center gap-1">
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-1">
                      <span className="text-muted-foreground font-bold text-lg">S</span>
                    </div>
                    <span className="font-heading font-semibold text-foreground">Silaging</span>
                    <span className="text-xs text-muted-foreground">Biological</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-border ${
                    index % 2 === 0 ? 'bg-muted/30' : 'bg-background'
                  }`}
                >
                  <td className="py-4 px-4 font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                        row.netibioHighlight
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground'
                      }`}
                    >
                      {row.netibioHighlight && <Check className="w-4 h-4" />}
                      {row.netibio}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">
                    {row.hammerMill === 'Poor' || row.hammerMill === 'Very High' ? (
                      <span className="inline-flex items-center gap-1 text-destructive">
                        <X className="w-4 h-4" />
                        {row.hammerMill}
                      </span>
                    ) : (
                      row.hammerMill
                    )}
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">
                    {row.silaging === 'N/A' ? (
                      <span className="inline-flex items-center gap-1">
                        <Minus className="w-4 h-4" />
                        N/A
                      </span>
                    ) : (
                      row.silaging
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Ready to see how netiBIO can transform your plant's performance?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg">
              Request Technical Consultation
            </Button>
            <Button variant="outline" size="lg">
              Download Detailed Comparison PDF
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
