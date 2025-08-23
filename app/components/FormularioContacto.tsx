"use client";
import Image from "next/image";
import { useState } from "react";

interface FormularioContactoProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormularioContacto({ isOpen, onClose }: FormularioContactoProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-sm w-full">
        {/* Botón de cerrar */}
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10"
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
            <span className="text-black font-bold text-lg">×</span>
          </div>
        </button>
        
        {/* Formulario SVG */}
        <div className="relative">
          <Image
            src="/SVG/Fomulario_Contacto.svg"
            alt="Formulario de Contacto"
            width={308}
            height={602}
            className="w-full h-auto max-h-[80vh] object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
