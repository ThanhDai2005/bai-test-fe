import { Sparkles, Smile, Globe } from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  label: string;
  title: string;
  description: string;
}

function ServiceCard({
  icon: Icon,
  label,
  title,
  description,
}: ServiceCardProps) {
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
    <div className="group bg-white p-9 rounded-[3px] border border-[#E3DDD4]/80 hover:border-[#A8845C]/60 transition-all duration-300 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(41,37,33,0.06)] flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-[2px] bg-[#F7F4EF] flex items-center justify-center text-[#A8845C] mb-8 group-hover:bg-[#A8845C] group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6" strokeWidth={1.6} />
        </div>
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#756E66] font-medium mb-2">
          {label}
        </p>
        <h3 className="font-[family-name:var(--font-heading)] text-2xl text-[#292521] font-normal mb-4">
          {title}
        </h3>
        <p className="text-sm text-[#756E66] leading-relaxed mb-8">
          {description}
        </p>
      </div>
      <div>
        <a
          href="#consultation"
          onClick={(e) => handleNavClick(e, "#consultation")}
          className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-[#292521] group-hover:text-[#A8845C] transition-colors"
        >
          Khám phá dịch vụ
          <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1.5">
            →
          </span>
        </a>
      </div>
    </div>
  );
}

const ServicesSection = () => {
  const services = [
    {
      icon: Sparkles,
      label: "Liệu trình 01",
      title: "Chăm sóc & trẻ hóa da",
      description:
        "Các liệu trình chăm sóc chuyên sâu giúp cải thiện làn da, hỗ trợ duy trì vẻ ngoài tươi trẻ và khỏe mạnh.",
    },
    {
      icon: Smile,
      label: "Liệu trình 02",
      title: "Điều trị da công nghệ cao",
      description:
        "Ứng dụng công nghệ hiện đại trong các liệu trình chăm sóc và cải thiện các vấn đề da theo từng nhu cầu.",
    },
    {
      icon: Globe,
      label: "Liệu trình 03",
      title: "Chăm sóc vóc dáng",
      description:
        "Các giải pháp chăm sóc vóc dáng được cá nhân hóa theo mục tiêu và thể trạng của từng khách hàng.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-[#EFEAE3]/50 border-t border-[#E3DDD4]"
    >
      <div className="max-w-[1360px] mx-auto px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A8845C] mb-3 block">
              DỊCH VỤ NỔI BẬT
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-[#292521] font-normal">
              Giải pháp chăm sóc được thiết kế cho bạn.
            </h2>
          </div>
          <p className="text-sm text-[#756E66] max-w-md font-normal leading-relaxed">
            Mỗi dịch vụ tại LUMIERE được định hình từ nền tảng y khoa da liễu
            hiện đại, tôn vinh nét hài hòa tự nhiên và an toàn dài lâu.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
