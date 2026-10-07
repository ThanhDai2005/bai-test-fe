import { useState } from "react";
import { Phone, Loader } from "lucide-react";
import { sendConsultationEmail } from "@/lib/emailjs";

const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Chăm sóc & trẻ hóa da",
    notes: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    if (!formData.name.trim() || !formData.phone.trim()) {
      setMessage({
        type: "error",
        text: "Vui lòng điền đầy đủ Họ tên và Số điện thoại",
      });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const result = await sendConsultationEmail(formData);

      if (result.success) {
        setMessage({
          type: "success",
          text: result.message,
        });
        // Reset form
        setFormData({
          name: "",
          phone: "",
          service: "Chăm sóc & trẻ hóa da",
          notes: "",
        });
        // Clear message after 5 seconds
        setTimeout(() => setMessage(null), 5000);
      } else {
        setMessage({
          type: "error",
          text: result.error || "Có lỗi xảy ra. Vui lòng thử lại.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Có lỗi kết nối. Vui lòng thử lại sau.",
      });
      console.error("Submit error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="consultation"
      className="py-24 md:py-28 bg-[#25211E] text-white relative overflow-hidden"
    >
      {/* Subtle architectural texture glow */}
      <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-[#A8845C]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-[#A8845C]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1360px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Hotline */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A8845C] mb-4">
              ĐỒNG HÀNH CÙNG CHUYÊN GIA
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] mb-6">
              Sẵn sàng dành thời gian cho chính mình?
            </h2>
            <p className="text-base text-stone-300 leading-relaxed mb-8 font-light max-w-lg">
              Đặt lịch tư vấn để được đội ngũ bác sĩ LUMIERE trực tiếp lắng nghe
              nhu cầu, soi da đa tầng và gợi ý liệu trình cá nhân hóa phù hợp
              nhất.
            </p>

            {/* Direct Hotline Call Block */}
            <div className="flex items-center gap-4 p-4 bg-[#2E2925] border border-stone-800 rounded-[2px] mb-8 w-full max-w-md">
              <div className="w-10 h-10 rounded-full bg-[#A8845C]/20 flex items-center justify-center text-[#A8845C] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-stone-400">
                  Tư vấn trực tiếp 24/7
                </p>
                <a
                  href="tel:19006868"
                  className="font-[family-name:var(--font-heading)] text-2xl font-normal text-white hover:text-[#A8845C] transition-colors"
                >
                  1900 6868
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Card */}
          <div className="lg:col-span-6 bg-[#2B2623] border border-stone-800 p-8 sm:p-10 rounded-[3px] shadow-2xl">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl text-white font-normal mb-2">
              Đăng ký lịch tư vấn
            </h3>
            <p className="text-xs text-stone-400 mb-6">
              Chuyên viên tư vấn y khoa sẽ liên hệ xác nhận trong vòng 15 phút.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {message && (
                <div
                  className={`p-4 rounded-[2px] text-sm ${
                    message.type === "success"
                      ? "bg-green-900/30 border border-green-500 text-green-100"
                      : "bg-red-900/30 border border-red-500 text-red-100"
                  }`}
                >
                  {message.text}
                </div>
              )}

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-300 mb-1.5 font-medium">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ví dụ: Nguyễn Minh Anh"
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-[#221E1B] border border-stone-700 rounded-[2px] text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#A8845C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-300 mb-1.5 font-medium">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="090 123 4567"
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-[#221E1B] border border-stone-700 rounded-[2px] text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#A8845C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-300 mb-1.5 font-medium">
                    Dịch vụ quan tâm
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-[#221E1B] border border-stone-700 rounded-[2px] text-sm text-white focus:outline-none focus:border-[#A8845C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option>Chăm sóc & trẻ hóa da</option>
                    <option>Điều trị da công nghệ cao</option>
                    <option>Chăm sóc vóc dáng</option>
                    <option>Tư vấn chuyên sâu cùng bác sĩ</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-300 mb-1.5 font-medium">
                  Ghi chú tình trạng da (tùy chọn)
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Ví dụ: da nhạy cảm sau mụn, cần tư vấn nâng cơ..."
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-[#221E1B] border border-stone-700 rounded-[2px] text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#A8845C] transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-[#A8845C] hover:bg-[#C5A885] disabled:bg-[#A8845C]/50 disabled:cursor-not-allowed text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-[2px] transition-colors duration-200 mt-2 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    ĐANG GỬI...
                  </>
                ) : (
                  "ĐẶT LỊCH TƯ VẤN NGAY"
                )}
              </button>
              <p className="text-[11px] text-stone-400 text-center mt-3">
                Cam kết bảo mật thông tin khách hàng tuyệt đối theo tiêu chuẩn y
                khoa.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
