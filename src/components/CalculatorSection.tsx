import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calculator, ArrowRight, TrendingUp, DollarSign, Clock } from 'lucide-react';

const CalculatorSection = () => {
  const [feedstockType, setFeedstockType] = useState('paddy-straw');
  const [dailyCapacity, setDailyCapacity] = useState(10);
  const [currentYield, setCurrentYield] = useState(70);

  // Simple calculation logic
  const yieldMultiplier = {
    'paddy-straw': 1.35,
    'napier-grass': 1.45,
    'bagasse': 1.30,
    'mixed': 1.35,
  }[feedstockType] || 1.35;

  const projectedYield = Math.round(currentYield * yieldMultiplier);
  const yieldIncrease = projectedYield - currentYield;
  const annualAdditionalGas = Math.round(yieldIncrease * dailyCapacity * 365);
  const estimatedRevenue = Math.round((annualAdditionalGas * 45) / 100000); // Assuming ₹45/m³
  const paybackMonths = Math.round(24 / (yieldIncrease / 30)); // Simplified calculation

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              ROI Calculator
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Calculate Your{' '}
              <span className="text-primary">Yield Improvement</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Get instant estimates of how netiBIO can improve your plant's performance. 
              Our calculations are based on real data from 100+ installations across India.
            </p>

            {/* Calculator Form */}
            <div className="bg-card rounded-xl shadow-card p-6 space-y-6">
              {/* Feedstock Type */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Primary Feedstock Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'paddy-straw', label: 'Paddy Straw', emoji: '🌾' },
                    { id: 'napier-grass', label: 'Napier Grass', emoji: '🌿' },
                    { id: 'bagasse', label: 'Bagasse', emoji: '🎋' },
                    { id: 'mixed', label: 'Mixed Residues', emoji: '🌱' },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setFeedstockType(option.id)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all ${
                        feedstockType === option.id
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50 text-foreground'
                      }`}
                    >
                      <span>{option.emoji}</span>
                      <span className="text-sm font-medium">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Daily Capacity */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Daily Feedstock Capacity (TPD)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={dailyCapacity}
                    onChange={(e) => setDailyCapacity(Number(e.target.value))}
                    className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <span className="w-16 text-center font-heading font-bold text-foreground text-xl">
                    {dailyCapacity}
                  </span>
                </div>
              </div>

              {/* Current Yield */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Current Biogas Yield (m³/ton)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="40"
                    max="100"
                    value={currentYield}
                    onChange={(e) => setCurrentYield(Number(e.target.value))}
                    className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <span className="w-16 text-center font-heading font-bold text-foreground text-xl">
                    {currentYield}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Results */}
          <div>
            <div className="bg-primary rounded-2xl p-8 shadow-elevated">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary-foreground text-xl">
                    Projected Results
                  </h3>
                  <p className="text-primary-foreground/70 text-sm">
                    Based on your inputs
                  </p>
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-primary-foreground/10 rounded-xl p-4">
                  <TrendingUp className="w-5 h-5 text-accent mb-2" />
                  <p className="text-3xl font-heading font-bold text-primary-foreground">
                    {projectedYield}
                  </p>
                  <p className="text-sm text-primary-foreground/70">m³/ton projected</p>
                  <p className="text-xs text-accent mt-1">+{yieldIncrease} m³/ton</p>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-4">
                  <DollarSign className="w-5 h-5 text-accent mb-2" />
                  <p className="text-3xl font-heading font-bold text-primary-foreground">
                    ₹{estimatedRevenue}L
                  </p>
                  <p className="text-sm text-primary-foreground/70">Annual additional revenue</p>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-4">
                  <Clock className="w-5 h-5 text-accent mb-2" />
                  <p className="text-3xl font-heading font-bold text-primary-foreground">
                    {paybackMonths}
                  </p>
                  <p className="text-sm text-primary-foreground/70">Months payback</p>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-4">
                  <TrendingUp className="w-5 h-5 text-accent mb-2" />
                  <p className="text-3xl font-heading font-bold text-accent">
                    +{Math.round((yieldMultiplier - 1) * 100)}%
                  </p>
                  <p className="text-sm text-primary-foreground/70">Yield improvement</p>
                </div>
              </div>

              <p className="text-xs text-primary-foreground/50 mb-6">
                *Estimates based on average performance data. Actual results may vary based on plant configuration and operating conditions.
              </p>

              <Button variant="hero" size="lg" className="w-full">
                Get Detailed Assessment
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
