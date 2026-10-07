const TrustSection = () => {
  const stats = [
    { value: "50K+", label: "Khách hàng đồng hành" },
    { value: "10+", label: "Năm kinh nghiệm y khoa" },
    { value: "30+", label: "Công nghệ & liệu trình chuẩn" },
    { value: "98%", label: "Khách hàng hài lòng" },
  ];

  const mediaLogos = [
    "VOGUE",
    "ELLE",
    "HARPER'S BAZAAR",
    "LIFESTYLE",
    "BEAUTY INSIDER",
  ];

  return (
    <section className="py-14 bg-[#EFEAE3]/70 border-y border-[#E3DDD4]">
      <div className="max-w-[1360px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A8845C] mb-2">
            Sự tin chọn chuẩn mực
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl text-[#292521] font-normal">
            Được tin tưởng bởi hàng nghìn khách hàng
          </h2>
        </div>

        {/* Media Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {mediaLogos.map((logo, index) => (
            <span key={index} className="flex items-center gap-8">
              <span className="font-[family-name:var(--font-heading)] text-lg md:text-xl tracking-[0.25em] font-semibold text-[#292521]">
                {logo}
              </span>
              {index < mediaLogos.length - 1 && (
                <span
                  className="w-1 h-1 rounded-full bg-[#E3DDD4] hidden md:inline-block"
                  aria-hidden="true"
                ></span>
              )}
            </span>
          ))}
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-8 border-t border-[#E3DDD4]/60">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4">
              <p className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-[#292521] font-normal">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wider text-[#756E66] mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
