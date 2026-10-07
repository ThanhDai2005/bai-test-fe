import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: '"Không gian rất chỉn chu, bác sĩ tư vấn rất kỹ lưỡng và mình cảm nhận được sự khác biệt sau từng buổi chăm sóc. Không hề chEo kéo dịch vụ không cần thiết."',
      name: "Minh Anh",
      service: "Chăm sóc da chuyên sâu",
      age: "28 tuổi",
      initials: "MA",
    },
    {
      rating: 5,
      text: '"Làn da của mình từng rất nhạy cảm sau mụn. Sau lộ trình điều trị công nghệ cao tại LUMIERE, nền da khỏe lên rõ rệt, đều màu và không còn dễ ửng đỏ như trước."',
      name: "Thu Hương",
      service: "Điều trị da công nghệ cao",
      age: "34 tuổi",
      initials: "TH",
    },
    {
      rating: 5,
      text: '"Dịch vụ chăm sóc sau liệu trình chu đáo đến bất ngờ. Đội ngũ y tá gọi điện hỏi thăm và hướng dẫn chi tiết từng bước phục hồi da, mình cảm thấy rất được trân trọng."',
      name: "Ngọc Lan",
      service: "Trẻ hóa & Chăm sóc vóc dáng",
      age: "41 tuổi",
      initials: "NL",
    },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-[1360px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A8845C] mb-3 block">
            LỜI CHIA SẺ
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-[#292521] font-normal">
            Khách hàng nói gì về LUMIERE
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[3px] border border-[#E3DDD4] flex flex-col justify-between hover:border-[#A8845C]/40 transition-all duration-300"
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 text-[#A8845C] mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-[#292521] leading-relaxed italic mb-8">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#E3DDD4]">
                <div className="w-10 h-10 rounded-full bg-[#EFEAE3] flex items-center justify-center font-[family-name:var(--font-heading)] text-sm font-semibold text-[#A8845C]">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#292521]">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-[#756E66]">
                    {testimonial.service} • {testimonial.age}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
