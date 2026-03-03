import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const ContactSection = () => {
  useReveal();

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98355 42400",
      link: "tel:+919835542400",
    },
    {
      icon: Mail,
      title: "Email",
      content: "varun.ent22@rediffmail.com",
      link: "mailto:varun.ent22@rediffmail.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Ghatsila, Jharkhand",
      link: "https://maps.google.com/?q=Varun+Enterprises+Ghatsila+Jharkhand",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Sat: 9 AM - 6 PM",
      link: null,
    },
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your industrial supply services. Please provide more information.");
    window.open("https://wa.me/919835542400?text=" + message, "_blank");
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left - Info */}
          <div className="reveal-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight mb-3 sm:mb-4">
              GET IN<br />
              <span className="text-primary">TOUCH</span>
            </h2>
            <div className="w-16 h-1 bg-primary mb-6 sm:mb-8" />

            <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/70 leading-relaxed mb-8 sm:mb-10">
              Ready to source industrial materials or need a quote for your next project? Our team is here to help.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {contactInfo.map((info, index) => (
                <div key={index} className="group p-4 sm:p-5 bg-card border border-border/50 hover:border-primary/60 transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5">
                  <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary mb-2 sm:mb-3" />
                  <h4 className="font-bold text-card-foreground text-xs sm:text-sm mb-1">{info.title}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 break-all"
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-xs sm:text-sm text-muted-foreground">{info.content}</p>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                onClick={openWhatsApp}
                size="lg"
                className="h-12 sm:h-14 px-6 sm:px-8 text-[11px] sm:text-[12px] font-bold tracking-[0.15em] bg-green-600 hover:bg-green-500 text-white rounded-none group shadow-lg shadow-green-600/20 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                CHAT ON WHATSAPP
              </Button>
              <Button
                size="lg"
                className="h-12 sm:h-14 px-6 sm:px-8 text-[11px] sm:text-[12px] font-bold tracking-[0.15em] bg-primary hover:bg-primary-light text-white rounded-none group shadow-lg shadow-primary/20 transition-all duration-300"
                onClick={() => window.open("mailto:varun.ent22@rediffmail.com", "_blank")}
              >
                SEND EMAIL
                <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right - Map */}
          <div className="reveal-right">
            <div className="bg-card border border-border/50 overflow-hidden h-full min-h-[300px] sm:min-h-[400px] shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.123456789012!2d86.476543!3d22.585678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e123456789ab%3A0x123456789abcdef!2sVarun%20Enterprises%2C%20Ghatsila%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Varun Enterprises Ghatsila Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
