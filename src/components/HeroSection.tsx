import { ArrowRight } from "lucide-react";

const HeroSection = () => {
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

  return (
    <section
      id="hero"
      className="relative pt-12 pb-24 md:pt-16 md:pb-28 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Editorial Content */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#EFEAE3] border border-[#E3DDD4] rounded-[2px] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8845C]"></span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#756E66]">
                Thẩm Mỹ Viện Công Nghệ Cao
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-[56px] leading-[1.18] font-normal text-[#292521] mb-6">
              Vẻ đẹp tự nhiên bắt đầu từ sự{" "}
              <span className="italic font-normal text-[#A8845C]">
                thấu hiểu.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#756E66] leading-relaxed mb-10 max-w-xl font-normal">
              LUMIERE kết hợp công nghệ thẩm mỹ hiện đại, đội ngũ chuyên môn và
              liệu trình cá nhân hóa để đồng hành cùng bạn trên hành trình chăm
              sóc và nâng tầm vẻ đẹp tự nhiên.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto mb-14">
              <a
                href="#consultation"
                onClick={(e) => handleNavClick(e, "#consultation")}
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white bg-[#292521] hover:bg-[#A8845C] transition-all duration-300 rounded-[2px] shadow-sm group"
              >
                Đặt lịch tư vấn
                <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "#services")}
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#292521] bg-transparent border border-[#E3DDD4] hover:border-[#292521] transition-all duration-300 rounded-[2px]"
              >
                Khám phá dịch vụ
              </a>
            </div>

            {/* Bottom Micro-metrics */}
            <div className="pt-8 border-t border-[#E3DDD4]/70 grid grid-cols-2 gap-8 w-full max-w-md">
              <div>
                <p className="font-[family-name:var(--font-heading)] text-2xl font-normal text-[#292521]">
                  100%
                </p>
                <p className="text-xs text-[#756E66] uppercase tracking-wider mt-0.5">
                  Bác sĩ chuyên khoa da liễu
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-heading)] text-2xl font-normal text-[#292521]">
                  FDA
                </p>
                <p className="text-xs text-[#756E66] uppercase tracking-wider mt-0.5">
                  Công nghệ chuẩn y khoa quốc tế
                </p>
              </div>
            </div>
          </div>

          {/* Right: Editorial Image + Floating Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-[4px] overflow-hidden bg-[#EFEAE3] shadow-[0_20px_40px_-15px_rgba(41,37,33,0.06)] border border-[#E3DDD4]/60">
              <img
                src="/banner.jpg"
                alt="Editorial beauty portrait of a radiant Vietnamese woman with healthy dewy skin"
                className="w-full h-full object-cover object-center"
                style={{ filter: "saturate(0.98) contrast(1.02)" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:-left-8 bg-white/95 backdrop-blur-md border border-[#E3DDD4] p-5 rounded-[3px] shadow-[0_25px_50px_-12px_rgba(41,37,33,0.12)] max-w-[210px] hidden sm:block">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-700 animate-pulse"></span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A8845C]">
                  Hành trình
                </span>
              </div>
              <p className="font-[family-name:var(--font-heading)] text-3xl font-medium text-[#292521] leading-tight">
                50.000+
              </p>
              <p className="text-xs text-[#756E66] mt-1 leading-snug">
                Khách hàng đồng hành & tìm lại tự tin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
