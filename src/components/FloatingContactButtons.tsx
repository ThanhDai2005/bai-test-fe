import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FloatingContactButtons = () => {
  const zaloUrl = "https://zalo.me/0906868686";
  const hotline = "1900 6868";
  const messengerUrl = "https://m.me/lumiere.clinic";

  const handleScrollToConsultation = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    const element = document.querySelector("#consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <TooltipProvider>
      {/* Desktop: Floating Buttons - Góc dưới bên phải */}
      <div className="hidden md:flex fixed right-5 bottom-10 flex-col gap-3 z-50">
        {/* 1. Zalo Chat - Ưu tiên cao nhất với hiệu ứng ping */}
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-14 h-14 bg-[#0068FF] hover:bg-[#0052CC] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Chat qua Zalo"
            >
              {/* Hiệu ứng ping/pulse để thu hút chú ý */}
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#0068FF] opacity-75 animate-ping"></span>

              {/* Icon Zalo từ public */}
              <img
                src="/zalo.webp"
                alt="Zalo"
                className="relative w-7 h-7 object-contain"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat Zalo ngay</p>
          </TooltipContent>
        </Tooltip>

        {/* 2. Hotline - Gọi điện khẩn cấp với pulse */}
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={`tel:${hotline}`}
              className="relative w-14 h-14 bg-[#4AAA4D] hover:bg-[#4AAA4D] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Gọi hotline"
            >
              <img
                src="/phone.png"
                alt="Phone"
                className="relative w-6 h-6 object-contain"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>{hotline}</p>
          </TooltipContent>
        </Tooltip>

        {/* 3. Facebook Messenger */}
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-14 h-14 bg-[#FFFFFF] hover:bg-[#F3F4F6] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Chat qua Messenger"
            >
              <img
                src="/messenger.webp"
                alt="Messenger"
                className="relative w-6 h-6 object-contain"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat Messenger</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Mobile: Sticky Bottom Bar - Thanh cố định dưới cùng */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#25211E] border-t border-stone-800 shadow-2xl z-50">
        <div className="flex items-center gap-2 px-3 py-2.5 max-w-screen-sm mx-auto">
          {/* Gọi điện */}
          <a
            href={`tel:${hotline}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#2E2925] hover:bg-[#3A3530] border border-stone-700 rounded-[2px] transition-colors"
            aria-label="Gọi hotline"
          >
            <img
              src="/phone.png"
              alt="Phone"
              className="w-4 h-4 object-contain"
            />
            <span className="text-xs text-stone-300 font-semibold">
              {hotline}
            </span>
          </a>

          {/* Chat Zalo - Nổi bật nhất */}
          <a
            href={zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#0068FF] hover:bg-[#0052CC] rounded-[2px] transition-colors flex-1"
            aria-label="Chat qua Zalo"
          >
            <img
              src="/zalo.webp"
              alt="Zalo"
              className="w-4 h-4 object-contain"
            />
            <span className="text-xs text-white font-bold uppercase tracking-wider">
              ZALO
            </span>
          </a>

          {/* Đặt lịch tư vấn */}
          <a
            href="#consultation"
            onClick={handleScrollToConsultation}
            className="flex items-center justify-center py-2.5 px-4 bg-[#A8845C] hover:bg-[#C5A885] rounded-[2px] transition-colors flex-1"
            aria-label="Đặt lịch tư vấn"
          >
            <span className="text-xs text-white font-bold uppercase tracking-wider">
              Đặt lịch
            </span>
          </a>
        </div>
      </div>

      {/* Spacer cho mobile để nội dung không bị che bởi bottom bar */}
      <div className="md:hidden h-[60px]"></div>
    </TooltipProvider>
  );
};

export default FloatingContactButtons;
