import { Button } from "@/components/ui/button";
import {
  Search,
  FileText,
  CheckCircle,
  Send,
  Monitor,
  Truck,
  HandCoins,
  ArrowRight,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const ProcessSection = () => {
  useReveal();

  const steps = [
    { icon: Search, title: "Opportunity Identification", desc: "We monitor GeM, CPPP, and state portals to identify relevant tender opportunities." },
    { icon: FileText, title: "Documentation", desc: "Our experts prepare comprehensive tender documents meeting all technical and commercial specs." },
    { icon: CheckCircle, title: "Quality Review", desc: "Multi-stage quality checks ensure error-free submissions that maximize success rates." },
    { icon: Send, title: "Bid Submission", desc: "Timely submission through appropriate channels with complete compliance documentation." },
    { icon: Monitor, title: "Tracking & Follow-up", desc: "Continuous monitoring of bid status and prompt responses to clarification requests." },
    { icon: Truck, title: "Execution & Delivery", desc: "End-to-end supply chain management from procurement to doorstep delivery." },
    { icon: HandCoins, title: "Payment & Closure", desc: "Complete payment processing, warranty support, and project closure documentation." },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-muted/40 dark:bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-16 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
            OUR PROCESS<br />
            <span className="text-primary">HOW WE DELIVER RESULTS</span>
          </h2>
          <div className="w-16 h-1 bg-primary mt-4 sm:mt-5" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-10 sm:mb-16 reveal-stagger">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-card p-6 sm:p-8 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-500 relative"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-primary/20 group-hover:text-primary/50 transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <step.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-card-foreground mb-1.5 sm:mb-2 tracking-tight">{step.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
          {/* CTA cell */}
          <div className="bg-secondary dark:bg-accent p-6 sm:p-8 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-xl sm:text-2xl font-extrabold text-secondary-foreground dark:text-foreground mb-3 sm:mb-4">READY TO<br /><span className="text-primary">START?</span></p>
              <Button
                className="h-10 sm:h-12 px-6 sm:px-8 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] bg-primary hover:bg-primary-light text-white rounded-none group shadow-lg shadow-primary/20"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                CONTACT US
                <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
