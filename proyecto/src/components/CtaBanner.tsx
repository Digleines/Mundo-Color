import React from 'react';
import { STORE_INFO } from '../data/mockData';
import { Gift, HeartHandshake } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  const whatsappUrl = `https://wa.me/${STORE_INFO.phoneClean}?text=${encodeURIComponent(
    '¡Hola Mundo Color! Quiero sorprender a alguien muy especial hoy en Valledupar. ¿Me pueden ayudar?'
  )}`;

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#5A5A88] via-[#745077] to-[#6A5A85] p-8 sm:p-12 md:p-16 text-center text-white shadow-[0_16px_40px_rgba(78,78,127,0.2)]">
          
          {/* Subtle floral/sparkle decoration background */}
          <div
            className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#FF9999]/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FFD6FC] px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              SORPRESAS INOLVIDABLES EN VALLEDUPAR
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white tracking-tight">
              ¿Tienes a alguien especial a quien sorprender?
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              Escríbenos ahora mismo. Diseñamos con amor bouquets de globos, cajas personalizadas, desayunos sorpresa y arreglos que llegan al corazón.
            </p>

            <div className="pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FF9999] hover:bg-[#F28585] text-[#2E2A3B] font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] group"
              >
                <Gift className="w-5 h-5 text-[#2E2A3B] transition-transform group-hover:scale-110" />
                <span>Quiero sorprender hoy</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
