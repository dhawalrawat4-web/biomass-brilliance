import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Check, Droplets, Sun, Leaf } from 'lucide-react';

const feedstocks = [
  {
    id: 'paddy-straw',
    name: 'Paddy Straw',
    icon: Leaf,
    image: '🌾',
    challenges: ['High silica content', 'Seasonal availability', 'Variable moisture'],
    benefits: ['Silica handling without wear', '30-40% yield improvement', 'All-season processing'],
    yieldIncrease: '35%',
    popularRegions: ['Punjab', 'Haryana', 'UP', 'Bihar'],
  },
  {
    id: 'napier-grass',
    name: 'Napier Grass',
    icon: Sun,
    image: '🌿',
    challenges: ['Different harvest ages', 'High moisture content', 'Fibrous structure'],
    benefits: ['Optimized for all growth stages', 'Moisture tolerance', '40-50% yield increase'],
    yieldIncrease: '45%',
    popularRegions: ['Gujarat', 'Maharashtra', 'Karnataka', 'Tamil Nadu'],
  },
  {
    id: 'bagasse',
    name: 'Sugarcane Bagasse',
    icon: Droplets,
    image: '🎋',
    challenges: ['High lignin content', 'Variable particle size', 'Seasonal supply'],
    benefits: ['Lignin disruption', 'Consistent output', '25-35% yield improvement'],
    yieldIncrease: '30%',
    popularRegions: ['Maharashtra', 'UP', 'Karnataka', 'Tamil Nadu'],
  },
  {
    id: 'cotton-stalk',
    name: 'Cotton Stalk',
    icon: Leaf,
    image: '🌱',
    challenges: ['Woody structure', 'High ash content', 'Difficult handling'],
    benefits: ['Complete fiber opening', 'Reduced ash issues', '30-40% yield increase'],
    yieldIncrease: '35%',
    popularRegions: ['Gujarat', 'Maharashtra', 'Telangana', 'AP'],
  },
  {
    id: 'wheat-straw',
    name: 'Wheat Straw',
    icon: Leaf,
    image: '🌾',
    challenges: ['Lower BMP potential', 'Lignocellulosic content', 'Handling logistics'],
    benefits: ['Enhanced digestibility', 'Reduced retention time', '25-35% yield improvement'],
    yieldIncrease: '30%',
    popularRegions: ['Punjab', 'Haryana', 'MP', 'Rajasthan'],
  },
  {
    id: 'press-mud',
    name: 'Press Mud',
    icon: Droplets,
    image: '🧱',
    challenges: ['High moisture', 'Variable composition', 'Handling issues'],
    benefits: ['Homogeneous feed', 'Consistent output', '20-30% yield improvement'],
    yieldIncrease: '25%',
    popularRegions: ['Maharashtra', 'UP', 'Karnataka', 'Gujarat'],
  },
];

const FeedstockSection = () => {
  const [selectedFeedstock, setSelectedFeedstock] = useState(feedstocks[0]);

  return (
    <section id="solutions" className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Feedstock Versatility
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            One System,{' '}
            <span className="text-primary">Every Feedstock</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From high-silica paddy straw to fibrous Napier grass—netiBIO handles the full spectrum 
            of Indian agricultural residues with optimized processing parameters.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Feedstock Selector */}
          <div className="lg:col-span-4">
            <div className="bg-background rounded-xl shadow-card p-2 sticky top-24">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                Select Feedstock Type
              </p>
              <div className="space-y-1">
                {feedstocks.map((feedstock) => (
                  <button
                    key={feedstock.id}
                    onClick={() => setSelectedFeedstock(feedstock)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                      selectedFeedstock.id === feedstock.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted text-foreground'
                    }`}
                  >
                    <span className="text-2xl">{feedstock.image}</span>
                    <span className="font-medium flex-1">{feedstock.name}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        selectedFeedstock.id === feedstock.id ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Feedstock Details */}
          <div className="lg:col-span-8">
            <div className="bg-background rounded-xl shadow-card p-8 animate-fade-in" key={selectedFeedstock.id}>
              {/* Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border">
                <span className="text-5xl">{selectedFeedstock.image}</span>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    {selectedFeedstock.name}
                  </h3>
                  <p className="text-muted-foreground">
                    Optimized processing for maximum yield
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-4xl font-heading font-bold text-accent">
                    +{selectedFeedstock.yieldIncrease}
                  </p>
                  <p className="text-sm text-muted-foreground">Yield Increase</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Challenges */}
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-destructive rounded-full" />
                    Common Challenges
                  </h4>
                  <ul className="space-y-3">
                    {selectedFeedstock.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-destructive/50 rounded-full" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    netiBIO Solution
                  </h4>
                  <ul className="space-y-3">
                    {selectedFeedstock.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3 text-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Popular Regions */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Popular in:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedFeedstock.popularRegions.map((region, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-muted rounded-full text-sm text-foreground"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="default">
                  Get {selectedFeedstock.name} Case Study
                </Button>
                <Button variant="outline">
                  Calculate ROI for {selectedFeedstock.name}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedstockSection;
