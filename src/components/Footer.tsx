import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FooterAccordionProps {
  title: string;
  children: React.ReactNode;
}

function FooterAccordion({ title, children }: FooterAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      className="group py-3.5"
      open={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      <summary className="flex justify-between items-center text-xs font-semibold uppercase tracking-[0.16em] text-[#292521] cursor-pointer list-none">
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#756E66] transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </summary>
      <div className="pt-3 pb-1">{children}</div>
    </details>
  );
}

const Footer = () => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const exploreLinks = [
    { href: "#about", label: "Về LUMIERE" },
    { href: "#services", label: "Dịch vụ" },
    { href: "#technology", label: "Công nghệ" },
    { href: "#showcase", label: "Hiệu quả" },
    { href: "#testimonials", label: "Khách hàng" },
  ];

  const serviceLinks = [
    { href: "#services", label: "Chăm sóc & trẻ hóa da" },
    { href: "#services", label: "Điều trị da công nghệ cao" },
    { href: "#services", label: "Chăm sóc vóc dáng" },
    { href: "#consultation", label: "Phác đồ cá nhân hóa 1:1" },
  ];

  return (
    <footer className="bg-[#F7F4EF] border-t border-[#E3DDD4] pt-20 pb-12">
      <div className="max-w-[1360px] mx-auto px-8">
        {/* Desktop 4-Column Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#E3DDD4]">
          {/* COLUMN 01: Brand Identity */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex flex-col mb-4">
              <span className="font-[family-name:var(--font-heading)] text-2xl tracking-[0.22em] font-semibold text-[#292521]">
                LUMIERE
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#756E66] -mt-0.5 font-medium">
                Thẩm Mỹ Viện Công Nghệ Cao
              </span>
            </div>
            <p className="text-xs text-[#756E66] leading-relaxed mb-6 max-w-sm font-normal">
              Hệ thống thẩm mỹ công nghệ cao kết hợp y khoa chuẩn mực, định hình
              vẻ đẹp tự nhiên và đồng hành bền vững cùng phụ nữ Việt.
            </p>
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#A8845C] font-medium">
              <span>Đẹp tự nhiên. Tự tin theo cách riêng.</span>
            </div>
          </div>

          {/* COLUMN 02: Khám Phá */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#292521] mb-6">
              KHÁM PHÁ
            </h4>
            <ul className="space-y-3.5 text-xs text-[#756E66]">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#A8845C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 03: Dịch Vụ */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#292521] mb-6">
              DỊCH VỤ
            </h4>
            <ul className="space-y-3.5 text-xs text-[#756E66]">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#A8845C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 04: Liên Hệ & Social */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#292521] mb-6">
              LIÊN HỆ
            </h4>
            <ul className="space-y-3.5 text-xs text-[#756E66]">
              <li className="flex items-start gap-2.5">
                <span className="text-[#A8845C] font-semibold">Hotline:</span>
                <a
                  href="tel:19006868"
                  className="text-[#292521] font-medium hover:text-[#A8845C] transition-colors"
                >
                  1900 6868
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#A8845C] font-semibold">Email:</span>
                <a
                  href="mailto:hello@lumiere-aesthetic.vn"
                  className="hover:text-[#A8845C] transition-colors"
                >
                  hello@lumiere-aesthetic.vn
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#A8845C] font-semibold">Địa chỉ:</span>
                <span>123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</span>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-[#E3DDD4]/60">
              <p className="text-[10px] uppercase tracking-widest text-[#756E66] mb-2 font-medium">
                Theo dõi chúng tôi
              </p>
              <div className="flex items-center gap-4 text-xs font-medium text-[#292521]">
                <a href="#" className="hover:text-[#A8845C] transition-colors">
                  Facebook
                </a>
                <span className="text-[#E3DDD4]">•</span>
                <a href="#" className="hover:text-[#A8845C] transition-colors">
                  Instagram
                </a>
                <span className="text-[#E3DDD4]">•</span>
                <a href="#" className="hover:text-[#A8845C] transition-colors">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="md:hidden mb-8">
          <div className="mb-8">
            <span className="font-[family-name:var(--font-heading)] text-xl tracking-[0.2em] font-semibold text-[#292521]">
              LUMIERE
            </span>
            <p className="text-[9px] uppercase tracking-[0.25em] text-[#756E66] mt-0.5">
              Thẩm Mỹ Viện Công Nghệ Cao
            </p>
            <p className="text-xs text-[#756E66] mt-3 leading-relaxed">
              Đẹp tự nhiên. Tự tin theo cách riêng.
            </p>
          </div>

          <div className="border-t border-[#E3DDD4] divide-y divide-[#E3DDD4]">
            <FooterAccordion title="Khám phá">
              <ul className="space-y-2 text-xs text-[#756E66]">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block py-1 hover:text-[#A8845C]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterAccordion>

            <FooterAccordion title="Dịch vụ chính">
              <ul className="space-y-2 text-xs text-[#756E66]">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block py-1 hover:text-[#A8845C]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterAccordion>

            <FooterAccordion title="Thông tin liên hệ">
              <div className="space-y-2.5 text-xs text-[#756E66]">
                <p>
                  <strong className="text-[#A8845C]">Hotline:</strong> 1900 6868
                </p>
                <p>
                  <strong className="text-[#A8845C]">Email:</strong>{" "}
                  hello@lumiere-aesthetic.vn
                </p>
                <p>
                  <strong className="text-[#A8845C]">Địa chỉ:</strong> 123
                  Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="#"
                    className="font-medium text-[#292521] hover:text-[#A8845C]"
                  >
                    Facebook
                  </a>
                  <span>•</span>
                  <a
                    href="#"
                    className="font-medium text-[#292521] hover:text-[#A8845C]"
                  >
                    Instagram
                  </a>
                  <span>•</span>
                  <a
                    href="#"
                    className="font-medium text-[#292521] hover:text-[#A8845C]"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </FooterAccordion>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#756E66] gap-4 border-t border-[#E3DDD4] md:border-t-0">
          <p>© 2026 LUMIERE AESTHETIC. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center">
            <a href="#" className="hover:text-[#292521] transition-colors">
              Điều khoản dịch vụ
            </a>
            <a href="#" className="hover:text-[#292521] transition-colors">
              Chính sách bảo mật y khoa
            </a>
            <a href="#" className="hover:text-[#292521] transition-colors">
              Giấy phép hoạt động số 0824/BYT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
