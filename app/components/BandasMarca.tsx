type BandasMarcaProps = {
    heightClass?: string;
    className?: string;
  };
  
  export default function BandasMarca({ heightClass = "h-10", className }: BandasMarcaProps) {
    return (
      <div className={`w-full ${heightClass} origin-bottom scale-y-[1.485] ${className ?? ""}`}>
        <div className="w-full h-full flex flex-col">
          <div className="h-[20%] bg-green-neon pointer-events-none" />
          <div className="h-[20%] bg-purple pointer-events-none" />
          <div className="h-[60%] bg-orange relative">
            <div className="absolute inset-0 flex items-center justify-start pl-[30%] pr-2 md:pr-4 lg:pr-6 text-white font-bold text-[8px] md:text-[9px] lg:text-[10px]">
              <a 
                href="https://www.instagram.com/eltableroo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-purple transition-colors"
              >
                @eltableroo
              </a>
              <div className="flex-1 flex justify-center">
                <span>EST. 2024</span>
              </div>
              <span>THE CERTIFIED LIDIOSOS</span>
            </div>
          </div>
        </div>
      </div>
    );
  }



