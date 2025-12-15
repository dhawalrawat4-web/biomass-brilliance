import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { label: 'netiBIO FLP Technology', href: '#technology' },
      { label: 'Paddy Straw Processing', href: '#solutions' },
      { label: 'Napier Grass Processing', href: '#solutions' },
      { label: 'Multi-Feedstock Systems', href: '#solutions' },
    ],
    resources: [
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Technical Specs', href: '#' },
      { label: 'ROI Calculator', href: '#calculator' },
      { label: 'Webinars', href: '#' },
    ],
    company: [
      { label: 'About STEER', href: '#' },
      { label: 'Installations Map', href: '#installations' },
      { label: 'Careers', href: '#' },
      { label: 'Contact Us', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-background leading-tight">STEER</span>
                <span className="text-xs text-background/60 leading-tight">netiBIO</span>
              </div>
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              India's leading provider of biomass pre-treatment technology for CBG plants. 
              Engineering excellence for sustainable energy.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="mailto:sales@steerworld.com"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {currentYear} STEER Engineering Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
