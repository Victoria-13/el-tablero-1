import Image from "next/image";
import BandasMarca from "./BandasMarca";

export default function Hero() {
  return (
    <section className="min-h-screen relative">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/Fondo-Web.webp"
          alt="Fondo"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="absolute top-0 left-0 w-full z-5">
        <Image
          src="/Encabezado.webp"
          alt="Encabezado"
          width={1920}
          height={200}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full z-10">
        <BandasMarca heightClass="h-8 md:h-10 lg:h-12" />
      </div>
      

    </section>
  );
} 