"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BandasMarca from "./BandasMarca";
import FormularioContacto from "./FormularioContacto";

export default function Paquete1() {
  const [isFormularioOpen, setIsFormularioOpen] = useState(false);

  return (
    <section id="paquete" className="h-screen relative">
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
      
      <div className="absolute top-1/2 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full flex justify-between items-center px-6 md:px-12 lg:px-24">
        <Link href="/">
          <Image
            src="/SVG/Flecha-1.svg"
            alt="Flecha 1"
            width={66}
            height={66}
            className="w-14 h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 cursor-pointer hover:scale-110 transition-transform"
          />
        </Link>
        <Link href="/paquete2#paquete">
          <Image
            src="/SVG/Flecha-2.svg"
            alt="Flecha 2"
            width={66}
            height={66}
            className="w-14 h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 cursor-pointer hover:scale-110 transition-transform"
          />
        </Link>
      </div>
      
      <div className="absolute inset-0 z-10 flex items-center justify-center transform translate-y-[2%]">
        <Image
          src="/Paquetote-Web.webp"
          alt="Paquetote Web"
          width={800}
          height={600}
          className="w-[72%] h-[72%] object-contain"
        />
      </div>
      
      {/* Botón invisible en la parte inferior de la imagen */}
      <button
        onClick={() => setIsFormularioOpen(true)}
        className="absolute bottom-40 sm:bottom-40 md:bottom-40 left-1/2 transform -translate-x-1/2 w-40 h-12 bg-transparent text-white opacity-100 hover:opacity-90 transition-opacity cursor-pointer z-30 rounded-md btn-movil-arriba"
        style={{ zIndex: 30 }}
      >
      </button>
      
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <BandasMarca />
      </div>

      {/* Modal del formulario */}
      <FormularioContacto 
        isOpen={isFormularioOpen} 
        onClose={() => setIsFormularioOpen(false)} 
      />
    </section>
  );
}
