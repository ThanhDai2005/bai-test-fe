import { CheckCircle, Lock, ArrowRight } from "lucide-react";

const AboutSection = () => {
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

  const pillars = [
    {
      icon: CheckCircle,
      title: "Phác đồ cá nhân",
      description: "Thiết kế chuẩn dựa trên phân tích da chuyên sâu",
    },
    {
      icon: Lock,
      title: "Bảo mật & An tâm",
      description: "Quy trình riêng tư, hồ sơ thẩm mỹ bảo mật tuyệt đối",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1360px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-[4px] overflow-hidden bg-[#EFEAE3] shadow-[0_20px_40px_-15px_rgba(41,37,33,0.06)] border border-[#E3DDD4]/60">
              <img
                src="/about.jpg"
                alt="Bác sĩ thẩm mỹ cao cấp tại LUMIERE trực tiếp thăm khám và tư vấn cá nhân cho khách hàng"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-[#756E66] italic">
              <span>
                Không gian tư vấn y khoa cá nhân hóa — LUMIERE Aesthetic
              </span>
              <span className="not-italic uppercase tracking-widest text-[10px] text-[#A8845C] font-medium">
                1:1 Consultation
              </span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A8845C] mb-4">
              VỀ LUMIERE
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-[42px] leading-[1.24] font-normal text-[#292521] mb-6">
              Không chạy theo vẻ đẹp hoàn hảo.{" "}
              <br className="hidden sm:inline" />
              Chúng tôi tôn trọng vẻ đẹp của{" "}
              <span className="italic text-[#A8845C]">riêng bạn.</span>
            </h2>
            <p className="text-base text-[#756E66] leading-relaxed mb-6 font-normal">
              Tại LUMIERE, mỗi khách hàng bắt đầu bằng một cuộc trò chuyện.
              Chúng tôi lắng nghe nhu cầu, phân tích tình trạng và xây dựng lộ
              trình chăm sóc phù hợp thay vì áp dụng một công thức cho tất cả.
            </p>
            <p className="text-base text-[#756E66] leading-relaxed mb-8 font-normal">
              Chúng tôi tin rằng thẩm mỹ hiện đại không phải là thay đổi đường
              nét vốn có, mà là đánh thức sự rạng ngời khỏe mạnh, mang lại sự tự
              tin bền vững thông qua phác đồ da liễu chuẩn xác và công nghệ tân
              tiến nhất.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-6 w-full pt-6 border-t border-[#E3DDD4] mb-8">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div key={index} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#F4EFEA] border border-[#A8845C]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon
                        className="w-4 h-4 text-[#A8845C]"
                        strokeWidth={1.8}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#292521]">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#756E66] mt-0.5">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#consultation"
              onClick={(e) => handleNavClick(e, "#consultation")}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#292521] hover:text-[#A8845C] transition-colors pb-1 border-b border-[#292521] hover:border-[#A8845C]"
            >
              Tìm hiểu thêm về triết lý LUMIERE
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
