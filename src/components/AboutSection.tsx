import { CheckCircle, Target, Shield, Award, Users } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const AboutSection = () => {
  useReveal();

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To be the most reliable industrial supply partner for India's critical infrastructure sectors.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every product undergoes rigorous quality checks and meets national & international standards.",
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "ISO 9001:2015 certified operations ensuring consistent quality and process excellence.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We work as an extension of your team, understanding your needs at every stage.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-muted/40 dark:bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          <div className="reveal-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
              ABOUT US<br />
              <span className="text-primary">WHO WE ARE</span>
            </h2>
            <div className="w-16 h-1 bg-primary mt-4 sm:mt-5" />
          </div>
          <div className="flex items-center reveal-right">
            <div>
              <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/70 leading-relaxed mb-4 sm:mb-6">
                Since 2008, Varun Enterprises has been a cornerstone in India's industrial supply chain. Based in Ghatsila, Jharkhand, we specialize in supplying high-quality industrial electronics, pumping equipment, and safety materials to government organizations and leading private enterprises.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Our deep expertise in government tendering processes and longstanding relationships with PSUs like UCIL, BHEL, IOCL, and NTPC have made us a trusted name in the industry.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 reveal-stagger">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 bg-card border border-border/50 hover:border-primary/60 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary transition-colors duration-500">
                <value.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-card-foreground mb-2 sm:mb-3 tracking-tight">{value.title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 reveal">
          {["ISO 9001:2015 Certified", "Government Approved Vendor", "MSME Registered", "GST Compliant"].map((cert, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 bg-card border border-border/50 px-3 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-foreground/80 font-medium hover:border-primary/40 transition-colors duration-300"
            >
              <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
