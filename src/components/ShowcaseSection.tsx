const ShowcaseSection = () => {
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

  const showcases = [
    {
      image: "/result1.jpg",
      alt: "Phục hồi & chăm sóc da",
      category: "Phục hồi & trẻ hóa",
      duration: "4 tuần (3 buổi)",
      title: "Phục hồi & chăm sóc da tầng sâu",
      description:
        "Cải thiện cấu trúc biểu bì, giảm mẩn đỏ và tăng độ căng bóng mướt mịn tự nhiên của bề mặt da.",
    },
    {
      image: "/result2.jpg",
      alt: "Điều trị sắc tố và làm sáng",
      category: "Nâng cơ & Định hình",
      duration: "6 tuần (1 buổi)",
      title: "Trẻ hóa đường viền hàm Ultra-Lift",
      description:
        "Nâng đỡ các vùng cơ chùng nhão, tái tạo collagen dưới da giúp thon gọn đường viền hàm tự nhiên.",
    },
    {
      image: "/result3.jpg",
      alt: "Không gian công nghệ điêu khắc và cải thiện độ săn chắc vóc dáng SculptSure",
      category: "Định hình cơ thể",
      duration: "8 tuần (4 buổi)",
      title: "Cải thiện độ săn chắc vóc dáng",
      description:
        "Tác động nhiệt sóng đa tầng giúp thu gọn số đo vòng eo, tăng sinh săn chắc mô mỡ cục bộ.",
    },
  ];

  return (
    <section
      id="showcase"
      className="py-24 bg-[#EFEAE3]/40 border-y border-[#E3DDD4]"
    >
      <div className="max-w-[1360px] mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A8845C] mb-3 block">
              KẾT QUẢ THỰC TẾ
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-[#292521] font-normal">
              Hành trình thay đổi
            </h2>
          </div>
          <p className="text-sm text-[#756E66] max-w-md font-normal leading-relaxed">
            Sự cải thiện rõ rệt nhưng giữ trọn nét tự nhiên. Mỗi ca thực hiện
            đều được lưu trữ hồ sơ minh bạch theo đúng quy trình y khoa.
          </p>
        </div>

        {/* Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcases.map((showcase, index) => (
            <div
              key={index}
              className="bg-white rounded-[3px] border border-[#E3DDD4] overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(41,37,33,0.06)] transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EFEAE3]">
                <img
                  src={showcase.image}
                  alt={showcase.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#25211E]/80 backdrop-blur-sm text-white px-3 py-1 rounded-[2px] text-[10px] uppercase tracking-widest font-medium">
                  Before → After
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-[11px] text-[#756E66] uppercase tracking-wider mb-2">
                  <span>{showcase.category}</span>
                  <span>{showcase.duration}</span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-[#292521] mb-2">
                  {showcase.title}
                </h3>
                <p className="text-xs text-[#756E66] leading-relaxed mb-5">
                  {showcase.description}
                </p>
                <a
                  href="#consultation"
                  onClick={(e) => handleNavClick(e, "#consultation")}
                  className="text-xs font-semibold uppercase tracking-wider text-[#A8845C] hover:text-[#292521] transition-colors"
                >
                  Xem chi tiết liệu trình →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
