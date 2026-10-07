const TechnologySection = () => {
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

  const features = [
    {
      number: "01",
      title: "Cá nhân hóa từng liệu trình",
      description:
        "Mỗi khách hàng có một nhu cầu khác nhau. LUMIERE bắt đầu bằng việc lắng nghe và xây dựng giải pháp phù hợp dựa trên tình trạng sắc tố, độ đàn hồi và cấu trúc da riêng biệt.",
      highlights: [
        "Soi da và phân tích đa tầng bằng máy quang phổ chuyên dụng",
        "Tư vấn 1:1 cùng bác sĩ da liễu có chứng chỉ hành nghề y khoa",
      ],
      image: "/why1.jpg",
      alt: "Bác sĩ da liễu LUMIERE phân tích da 3D đa tầng cho khách hàng",
      imagePosition: "right",
      linkText: "Đặt lịch khám cùng bác sĩ →",
    },
    {
      number: "02",
      title: "Công nghệ được chọn lọc",
      description:
        "Chúng tôi ưu tiên những công nghệ có tính ứng dụng thực tế, phù hợp với quy trình chăm sóc chuyên nghiệp. Toàn bộ thiết bị đều có chứng nhận FDA (Hoa Kỳ) và CE (Châu Âu).",
      highlights: [
        "Thiết bị nhập khẩu chính hãng với mã xác thực định danh",
        "Không gian vô trùng theo quy chuẩn y tế nghiêm ngặt",
      ],
      image: "/why2.jpg",
      alt: "High-tech aesthetic treatment room with modern medical skincare equipment",
      imagePosition: "left",
      linkText: "Xem danh mục trang thiết bị →",
    },
    {
      number: "03",
      title: "Đồng hành sau liệu trình",
      description:
        "Hành trình chăm sóc không kết thúc khi khách hàng rời khỏi viện. Chúng tôi tiếp tục theo dõi, ghi nhận mức độ cải thiện và đồng hành cùng chế độ dưỡng da tại nhà khoa học.",
      highlights: [
        "Bác sĩ trực tiếp kiểm tra định kỳ sau 7 và 21 ngày",
        "Đường dây hotline tư vấn y khoa riêng 24/7",
      ],
      image: "/why3.jpg",
      alt: "Chuyên viên y tá tận tâm hướng dẫn và bàn giao bộ chăm sóc phục hồi da tại nhà",
      imagePosition: "right",
      linkText: "Tìm hiểu chính sách chăm sóc →",
    },
  ];

  return (
    <section id="technology" className="py-24 md:py-32">
      <div className="max-w-[1360px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A8845C] mb-3 block">
            VÌ SAO LUMIERE
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-[#292521] font-normal">
            Chăm sóc sắc đẹp bằng sự tận tâm và công nghệ.
          </h2>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}
            >
              {/* Text Content */}
              <div
                className={`lg:col-span-6 flex flex-col items-start ${
                  feature.imagePosition === "left"
                    ? "lg:order-2 lg:pl-8"
                    : "lg:pr-8"
                }`}
              >
                <span className="font-[family-name:var(--font-heading)] text-3xl text-[#A8845C]/50 mb-2 font-light">
                  {feature.number}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-3xl text-[#292521] font-normal mb-5">
                  {feature.title}
                </h3>
                <p className="text-base text-[#756E66] leading-relaxed mb-6 font-normal">
                  {feature.description}
                </p>
                <ul className="space-y-3 text-sm text-[#292521]/90 mb-8">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A8845C]"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <a
                  href="#consultation"
                  onClick={(e) => handleNavClick(e, "#consultation")}
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-[#292521] hover:text-[#A8845C] transition-colors pb-1 border-b border-[#292521] hover:border-[#A8845C]"
                >
                  {feature.linkText}
                </a>
              </div>

              {/* Image */}
              <div
                className={`lg:col-span-6 ${feature.imagePosition === "left" ? "lg:order-1" : ""}`}
              >
                <div className="w-full aspect-[4/3] rounded-[4px] overflow-hidden bg-[#EFEAE3] shadow-[0_20px_40px_-15px_rgba(41,37,33,0.06)] border border-[#E3DDD4]">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
