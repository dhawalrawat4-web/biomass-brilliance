import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    plantCapacity: '',
    feedstock: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      plantCapacity: '',
      feedstock: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const benefits = [
    'Free site assessment by our technical team',
    'Custom ROI analysis for your plant',
    'No-obligation consultation',
    'Reference plant visits arranged',
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Request a{' '}
              <span className="text-primary">Demo or Consultation</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Talk to our technical team about your specific requirements. 
              We'll help you understand exactly how netiBIO can improve your plant's performance.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-background rounded-xl shadow-card p-6 space-y-4">
              <h4 className="font-heading font-semibold text-foreground">
                Direct Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 98765 43210</span>
                </a>
                <a
                  href="mailto:sales@steerworld.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>sales@steerworld.com</span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>
                    STEER Engineering Pvt. Ltd.<br />
                    Bangalore, Karnataka, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-background rounded-xl shadow-elevated p-8"
            >
              <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                Request Demo / Consultation
              </h3>

              <div className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Plant Capacity (TPD)
                    </label>
                    <select
                      name="plantCapacity"
                      value={formData.plantCapacity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    >
                      <option value="">Select capacity</option>
                      <option value="5-10">5-10 TPD</option>
                      <option value="10-20">10-20 TPD</option>
                      <option value="20-50">20-50 TPD</option>
                      <option value="50+">50+ TPD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Primary Feedstock
                    </label>
                    <select
                      name="feedstock"
                      value={formData.feedstock}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    >
                      <option value="">Select feedstock</option>
                      <option value="paddy-straw">Paddy Straw</option>
                      <option value="napier-grass">Napier Grass</option>
                      <option value="bagasse">Sugarcane Bagasse</option>
                      <option value="cotton-stalk">Cotton Stalk</option>
                      <option value="mixed">Mixed Residues</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your current setup, challenges, or questions..."
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full mt-2">
                  Submit Request
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to receive communications from STEER. 
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
