import { useState } from "react";
import { cn } from "@/lib/utils";
import { Phone, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Trang chủ" },
    { href: "#about", label: "Về LUMIERE" },
    { href: "#services", label: "Dịch vụ" },
    { href: "#technology", label: "Công nghệ" },
    { href: "#showcase", label: "Hiệu quả" },
    { href: "#testimonials", label: "Khách hàng" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F7F4EF]/90 backdrop-blur-md border-b border-[#E3DDD4] transition-all duration-300">
      <div className="max-w-[1360px] mx-auto px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex flex-col group focus:outline-none"
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          <span className="font-[family-name:var(--font-heading)] text-2xl md:text-2xl tracking-[0.22em] font-semibold text-[#292521] group-hover:text-[#A8845C] transition-colors duration-200">
            LUMIERE
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#756E66] -mt-0.5 font-medium">
            Aesthetic Clinic
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-9">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors relative py-1",
                index === 0
                  ? "text-[#292521] hover:text-[#A8845C] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#A8845C]"
                  : "text-[#756E66] hover:text-[#292521]",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center space-x-6">
          <a
            href="tel:19006868"
            className="hidden xl:flex items-center gap-2 text-xs uppercase tracking-wider text-[#756E66] font-medium hover:text-[#A8845C] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#A8845C]" />
            1900 6868
          </a>
          <a
            href="#consultation"
            onClick={(e) => handleNavClick(e, "#consultation")}
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs uppercase tracking-[0.16em] font-semibold text-white bg-[#292521] hover:bg-[#A8845C] transition-all duration-300 rounded-[2px] shadow-sm"
          >
            Đặt lịch tư vấn
          </a>

          {/* Mobile Menu Sheet */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="md:hidden w-10 h-10 rounded-[2px] border border-[#E3DDD4] flex items-center justify-center text-[#292521] hover:bg-[#EFEAE3] transition-colors"
                aria-label="Mở menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#F7F4EF] border-l border-[#E3DDD4] w-[300px] sm:w-[400px]"
            >
              <SheetHeader>
                <SheetTitle className="font-[family-name:var(--font-heading)] text-2xl tracking-[0.22em] font-semibold text-[#292521] text-left">
                  LUMIERE
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-5 mt-8">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "font-[family-name:var(--font-heading)] text-lg font-medium px-4 border-b border-[#E3DDD4]/60 transition-colors",
                      index === 0
                        ? "text-[#A8845C]"
                        : "text-[#292521] hover:text-[#A8845C]",
                    )}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3">
                  <a
                    href="tel:19006868"
                    className="flex items-center gap-2 text-sm text-[#756E66] font-medium hover:text-[#A8845C] transition-colors px-4 mb-4"
                  >
                    <Phone className="w-4 h-4 text-[#A8845C]" />
                    1900 6868
                  </a>
                  <a
                    href="#consultation"
                    onClick={(e) => handleNavClick(e, "#consultation")}
                    className="block w-full text-center py-3 bg-[#292521] text-white text-xs font-semibold uppercase tracking-[0.18em] rounded-[2px] hover:bg-[#A8845C] transition-colors"
                  >
                    Đặt lịch tư vấn
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
