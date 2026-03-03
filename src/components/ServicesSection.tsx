import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  Zap,
  Shield,
  Wrench,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

interface DivisionItem {
  icon: React.ElementType;
  title: string;
  description: string;
  products: string[];
  image: string;
}

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  useReveal();

  const divisions: DivisionItem[] = [
    {
      icon: Cpu,
      title: "Industrial Electronics",
      description: "High-precision electronic components, PLCs, SCADA systems, and control panels for heavy industries and power plants.",
      products: ["PLC Systems & Controllers", "SCADA & Automation", "Control Panels", "Sensors & Instruments"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Zap,
      title: "Electrical Equipment",
      description: "Complete range of electrical equipment including transformers, switchgear, cables, and distribution panels.",
      products: ["Transformers & Switchgear", "HT/LT Cables", "Distribution Panels", "Power Quality Solutions"],
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Wrench,
      title: "Pumping Equipment",
      description: "Industrial-grade pumps, valves, and fluid management systems for mining, water treatment, and petrochemical sectors.",
      products: ["Centrifugal Pumps", "Submersible Pumps", "Industrial Valves", "Fluid Control Systems"],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: Shield,
      title: "Safety & PPE",
      description: "Comprehensive safety solutions including personal protective equipment, fire safety systems, and hazard management.",
      products: ["PPE Kits & Equipment", "Fire Safety Systems", "Gas Detection Systems", "Safety Signage & Barriers"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? divisions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === divisions.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-14 reveal">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
              INDUSTRIAL CATALOG<br />
              <span className="text-primary">OUR SPECIALIZED DIVISIONS</span>
            </h2>
            <div className="w-16 h-1 bg-primary mt-4 sm:mt-5" />
          </div>
          <div className="flex gap-3 mt-5 sm:mt-0">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-border hover:border-primary flex items-center justify-center transition-all duration-300 group hover:bg-primary"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-border hover:border-primary flex items-center justify-center transition-all duration-300 group hover:bg-primary"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 reveal-stagger">
          {divisions.map((division, index) => (
            <Card
              key={index}
              className={"group bg-card border-border/50 hover:border-primary/60 rounded-none transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 " + (activeIndex === index ? "ring-2 ring-primary shadow-lg" : "")}
              onClick={() => setActiveIndex(index)}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={division.image}
                  alt={division.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                  <division.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-card-foreground tracking-tight">{division.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">{division.description}</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {division.products.map((product, i) => (
                    <li key={i} className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{product}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-14 reveal">
          <Button
            size="lg"
            className="h-12 sm:h-14 px-8 sm:px-10 text-[11px] sm:text-[12px] font-bold tracking-[0.2em] bg-primary hover:bg-primary-light text-white rounded-none group shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            REQUEST FULL CATALOG
            <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
