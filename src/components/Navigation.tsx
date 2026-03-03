import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Download } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Map every section id to the nav item it belongs to
      const sectionToNav: Record<string, string> = {
        home: "home",
        services: "services",
        about: "about",
        clients: "about",
        process: "about",
        contact: "contact",
      };

      const sectionIds = ["home", "services", "about", "clients", "process", "contact"];
      let current = "home";
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = sectionToNav[sectionIds[i]] || sectionIds[i];
          break;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "#home", section: "home" },
    { name: "ABOUT", href: "#about", section: "about" },
    { name: "PRODUCTS", href: "#services", section: "services" },
    { name: "CONTACT", href: "#contact", section: "contact" },
  ];

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  const navBg = isScrolled
    ? "bg-secondary/95 dark:bg-card/95 backdrop-blur-xl shadow-xl"
    : "bg-secondary dark:bg-card";

  return (
    <header className={"fixed top-0 left-0 right-0 z-50 transition-all duration-500 " + navBg}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-[88px]">
          {/* Logo */}
          <a href="#home" className="flex items-end pb-1 z-10">
            <img
              src="/logo.png"
              alt="Varun Enterprises"
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
            />
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.section;
              const linkClass = isActive
                ? "text-primary"
                : "text-white/60 hover:text-white";
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={"relative px-5 py-2.5 text-[13px] font-bold tracking-[0.15em] transition-colors duration-300 " + linkClass}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-primary" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-4 z-10">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-white/50 hover:text-primary hover:bg-white/5 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
            </button>
            <a
              href="/brochure.pdf"
              download
              className="hidden lg:flex items-center gap-2 h-11 px-7 text-[12px] font-bold tracking-[0.2em] bg-primary hover:bg-primary-light text-white transition-all duration-300 rounded-none shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              <Download className="h-4 w-4" />
              BROCHURE
            </a>
            <button
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={"lg:hidden overflow-hidden transition-all duration-400 ease-in-out " + (isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0")}
      >
        <div className="bg-secondary dark:bg-card border-t border-white/10">
          <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.section;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={"py-3 px-4 text-sm font-bold tracking-wider transition-all duration-200 " + (isActive ? "text-primary bg-white/5 border-l-2 border-primary" : "text-white/70 hover:text-white hover:bg-white/5")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
            <a
              href="/brochure.pdf"
              download
              className="mt-3 w-full rounded-none bg-primary hover:bg-primary-light text-white font-bold tracking-[0.2em] h-12 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-[12px] transition-all duration-300"
            >
              <Download className="h-4 w-4" />
              BROCHURE
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
