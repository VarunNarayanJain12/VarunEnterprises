import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Industrial background"
          className="w-full h-full object-cover object-left sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/95 via-[#0a0f1e]/85 to-[#0a0f1e]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-36 pb-32 sm:pb-36 lg:pb-40">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-block bg-primary px-4 sm:px-5 py-1.5 sm:py-2 mb-6 sm:mb-8 animate-fade-in-up">
            <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-[0.2em] sm:tracking-[0.25em] uppercase">Industrial Materials Supplier</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] font-extrabold text-white leading-[0.92] tracking-tight mb-6 sm:mb-8 animate-fade-in-up animation-delay-150">
            POWERING<br />
            INDIA'S<br />
            <span className="text-primary">INDUSTRIAL</span><br />
            <span className="text-primary">GROWTH</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-xl mb-8 sm:mb-12 leading-relaxed animate-fade-in-up animation-delay-300">
            Varun Enterprises is a trusted supplier of industrial electronics,
            pumping equipment, and safety materials to government organizations
            and leading private enterprises.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-450">
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="h-12 sm:h-14 px-8 sm:px-10 text-[11px] sm:text-[12px] font-bold tracking-[0.2em] bg-primary hover:bg-primary-light text-white rounded-none group transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
            >
              EXPLORE PRODUCTS
              <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="/brochure.pdf"
              download
              className="inline-flex items-center justify-center gap-2 h-12 sm:h-14 px-8 sm:px-10 text-[11px] sm:text-[12px] font-bold tracking-[0.2em] border-2 border-white/30 text-white hover:border-primary hover:bg-primary/10 rounded-none transition-all duration-300"
            >
              <Download className="h-4 w-4" />
              BROCHURE
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card shadow-2xl border-t-2 border-primary">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
              {[
                { value: "15+", label: "YEARS EXPERIENCE" },
                { value: "500+", label: "PROJECTS COMPLETED" },
                { value: "150+", label: "CLIENTS SERVED" },
                { value: "4", label: "PRODUCT CATEGORIES" },
              ].map((stat, index) => (
                <div key={index} className="py-5 sm:py-7 md:py-9 px-4 sm:px-6 md:px-10 animate-count-up" style={{ animationDelay: (index * 150) + "ms" }}>
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-0.5 sm:mb-1">{stat.value}</p>
                  <p className="text-[8px] sm:text-[10px] md:text-xs font-bold text-muted-foreground tracking-[0.1em] sm:tracking-[0.15em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-28 sm:bottom-36 md:bottom-40 right-6 sm:right-8 animate-bounce hidden md:block">
        <ChevronDown className="h-6 w-6 text-white/30" />
      </div>
    </section>
  );
};

export default HeroSection;
