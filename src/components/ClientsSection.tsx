import { Badge } from "@/components/ui/badge";
import { useReveal } from "@/hooks/useReveal";

const ClientsSection = () => {
  useReveal();

  const majorClients = [
    { name: "UCIL", fullName: "Uranium Corporation of India Ltd.", sector: "Nuclear Energy" },
    { name: "BHEL", fullName: "Bharat Heavy Electricals Ltd.", sector: "Power Equipment" },
    { name: "IOCL", fullName: "Indian Oil Corporation Ltd.", sector: "Oil & Gas" },
    { name: "ONGC", fullName: "Oil and Natural Gas Corporation", sector: "Oil & Gas" },
    { name: "NTPC", fullName: "National Thermal Power Corp.", sector: "Power Generation" },
    { name: "SAIL", fullName: "Steel Authority of India Ltd.", sector: "Steel & Mining" },
    { name: "Coal India", fullName: "Coal India Limited", sector: "Mining" },
    { name: "GAIL", fullName: "Gas Authority of India Ltd.", sector: "Natural Gas" },
  ];

  const industries = [
    { name: "Power & Energy", projects: "120+", icon: "\u26A1" },
    { name: "Oil & Gas", projects: "85+", icon: "\uD83D\uDEE2\uFE0F" },
    { name: "Mining & Metals", projects: "95+", icon: "\u26CF\uFE0F" },
    { name: "Infrastructure", projects: "70+", icon: "\uD83C\uDFD7\uFE0F" },
  ];

  return (
    <section id="clients" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-16 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
            OUR PARTNERS<br />
            <span className="text-primary">TRUSTED BY INDUSTRY LEADERS</span>
          </h2>
          <div className="w-16 h-1 bg-primary mt-4 sm:mt-5" />
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-20 reveal-stagger">
          {majorClients.map((client, index) => (
            <div
              key={index}
              className="group p-4 sm:p-6 bg-card border border-border/50 hover:border-primary/60 transition-all duration-500 text-center hover:shadow-xl hover:-translate-y-1"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-500">
                {client.name}
              </p>
              <p className="text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3 line-clamp-1">{client.fullName}</p>
              <Badge variant="secondary" className="text-[10px] sm:text-xs font-semibold rounded-none">{client.sector}</Badge>
            </div>
          ))}
        </div>

        {/* Industries - Dark Section */}
        <div className="bg-secondary dark:bg-card p-6 sm:p-10 md:p-16 reveal-scale">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-secondary-foreground dark:text-foreground mb-3 sm:mb-4 tracking-tight">
                SECTORS WE <span className="text-primary">SERVE</span>
              </h3>
              <p className="text-sm sm:text-base text-secondary-foreground/60 dark:text-muted-foreground leading-relaxed mb-5 sm:mb-6">
                From nuclear energy to oil refineries, our products power India's most critical infrastructure. We understand the unique demands of each sector.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {industries.map((industry, i) => (
                  <div key={i} className="border border-secondary-foreground/20 dark:border-border p-3 sm:p-4 hover:border-primary transition-all duration-300 hover:bg-white/5">
                    <span className="text-xl sm:text-2xl mb-1.5 sm:mb-2 block">{industry.icon}</span>
                    <p className="text-secondary-foreground dark:text-foreground font-semibold text-xs sm:text-sm">{industry.name}</p>
                    <p className="text-primary font-bold text-base sm:text-lg">{industry.projects}</p>
                    <p className="text-secondary-foreground/40 dark:text-muted-foreground text-[10px] sm:text-xs">projects</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
              {[
                { value: "200+", label: "Active Clients" },
                { value: "500Cr+", label: "Total Transactions" },
                { value: "15+", label: "States Covered" },
                { value: "98%", label: "Success Rate" },
              ].map((stat, i) => (
                <div key={i} className="py-4 sm:py-6">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-0.5 sm:mb-1">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs font-bold text-secondary-foreground/50 dark:text-muted-foreground tracking-wider uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
