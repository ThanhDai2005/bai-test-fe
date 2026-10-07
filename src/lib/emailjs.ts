import emailjs from "@emailjs/browser";

// Khởi tạo EmailJS với Public Key từ env
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

interface ConsultationFormData {
  name: string;
  phone: string;
  service: string;
  notes: string;
}

interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export async function sendConsultationEmail(
  formData: ConsultationFormData,
): Promise<EmailResponse> {
  try {
    // Template parameters khớp với template EmailJS của bạn
    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      note: formData.notes || "Không có ghi chú",
      email: "", // Để trống vì form không thu thập email
    };

    // Gửi email sử dụng service và template ID từ env
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
    );

    if (response.status === 200) {
      return {
        success: true,
        message:
          "✓ Đăng ký thành công! Chuyên viên LUMIERE sẽ liên hệ lại trong vòng 15 phút.",
      };
    } else {
      return {
        success: false,
        error: "Có lỗi xảy ra. Vui lòng thử lại.",
      };
    }
  } catch (error: any) {
    console.error("EmailJS Error:", error);

    // Xử lý các lỗi cụ thể từ EmailJS
    if (error.text) {
      return {
        success: false,
        error: `Lỗi: ${error.text}`,
      };
    }

    return {
      success: false,
      error:
        "Không thể gửi yêu cầu. Vui lòng kiểm tra kết nối mạng và thử lại.",
    };
  }
}
