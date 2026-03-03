import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Linkedin, Twitter, ArrowUp, Download } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary dark:bg-card text-secondary-foreground dark:text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-6 sm:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 space-y-4 sm:space-y-6">
            <a href="#home">
              <img
                src="/logo.png"
                alt="Varun Enterprises"
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
              />
            </a>
            <p className="text-secondary-foreground/60 dark:text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Your trusted partner for industrial materials supply and government tender solutions since 2008.
            </p>
            <a
              href="/brochure.pdf"
              download
              className="inline-flex items-center gap-2 h-10 sm:h-11 px-5 sm:px-6 text-[11px] sm:text-[12px] font-bold tracking-[0.15em] bg-primary hover:bg-primary-light text-white transition-all duration-300 rounded-none shadow-lg shadow-primary/20 hover:shadow-primary/40 w-full sm:w-auto justify-center sm:justify-start"
            >
              <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              DOWNLOAD BROCHURE
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-secondary-foreground/40 dark:text-muted-foreground mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "Products", href: "#services" },
                { name: "About Us", href: "#about" },
                { name: "Contact", href: "#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-xs sm:text-sm text-secondary-foreground/60 dark:text-muted-foreground hover:text-primary transition-colors duration-300">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-secondary-foreground/40 dark:text-muted-foreground mb-4 sm:mb-6">Products</h4>
            <ul className="space-y-2 sm:space-y-3">
              {["Industrial Electronics", "Electrical Equipment", "Pumping Equipment", "Safety & PPE"].map((item, i) => (
                <li key={i}>
                  <a href="#services" className="text-xs sm:text-sm text-secondary-foreground/60 dark:text-muted-foreground hover:text-primary transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-secondary-foreground/40 dark:text-muted-foreground mb-4 sm:mb-6">Contact</h4>
            <div className="space-y-2.5 sm:space-y-3">
              <a href="https://maps.google.com/?q=Varun+Enterprises+Ghatsila" className="flex items-center gap-2.5 sm:gap-3 text-secondary-foreground/60 dark:text-muted-foreground hover:text-white transition-colors duration-300 text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                <span>Ghatsila, Jharkhand</span>
              </a>
              <a href="tel:+919835542400" className="flex items-center gap-2.5 sm:gap-3 text-secondary-foreground/60 dark:text-muted-foreground hover:text-white transition-colors duration-300 text-xs sm:text-sm">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                <span>+91 98355 42400</span>
              </a>
              <a href="mailto:varun.ent22@rediffmail.com" className="flex items-center gap-2.5 sm:gap-3 text-secondary-foreground/60 dark:text-muted-foreground hover:text-white transition-colors duration-300 text-xs sm:text-sm">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                <span className="break-all">varun.ent22@rediffmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-secondary-foreground/10 dark:bg-border mb-6 sm:mb-8" />

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <p className="text-[10px] sm:text-xs text-secondary-foreground/40 dark:text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} Varun Enterprises. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {["ISO 9001:2015", "MSME Registered", "Govt. Approved"].map((badge, i) => (
              <span key={i} className="text-[9px] sm:text-xs text-secondary-foreground/30 dark:text-muted-foreground/60 font-semibold">{badge}</span>
            ))}
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-2.5 sm:gap-3">
            <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 border border-secondary-foreground/20 dark:border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300" aria-label="LinkedIn">
              <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary-foreground/40 dark:text-muted-foreground" />
            </a>
            <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 border border-secondary-foreground/20 dark:border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300" aria-label="Twitter">
              <Twitter className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-secondary-foreground/40 dark:text-muted-foreground" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 sm:w-9 sm:h-9 bg-primary hover:bg-primary-light flex items-center justify-center text-white transition-all duration-300 ml-1.5 sm:ml-2 shadow-lg shadow-primary/20"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
