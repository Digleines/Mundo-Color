import React from 'react';
import { STORE_INFO } from '../data/mockData';
import { MessageCircle } from 'lucide-react';

export const HowToOrder: React.FC = () => {
  const steps = [
    {
      num: 1,
      numBg: 'bg-[#666699] text-white',
      title: 'Escríbenos por WhatsApp',
      description:
        'Haz clic en cualquiera de nuestros botones y escríbenos directamente con un solo toque desde tu teléfono o computador.',
    },
    {
      num: 2,
      numBg: 'bg-[#BA7ABA] text-white',
      title: 'Cuéntanos la ocasión y lo que imaginas',
      description:
        'Dinos si es cumpleaños, aniversario o sorpresa. Elige tus colores, mensajes y detalles favoritos con nuestra asesoría.',
    },
    {
      num: 3,
      numBg: 'bg-[#DFAD47] text-[#2E2A3B]',
      title: 'Recibe tu detalle',
      description:
        'Preparamos tu pedido con el máximo de amor y cuidado para que lo recojas en nuestro local o lo recibas con emoción.',
    },
  ];

  const whatsappUrl = `https://wa.me/${STORE_INFO.phoneClean}?text=${encodeURIComponent(
    '¡Hola Mundo Color! Quiero iniciar mi pedido para sorprender a alguien especial.'
  )}`;

  return (
    <section className="py-16 md:py-24 bg-[#FAF7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#666699] inline-block">
            PROCESO SIMPLE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2E2A3B] tracking-tight">
            Cómo pedir en 3 pasos
          </h2>
          <p className="text-sm sm:text-base text-[#706A82] leading-relaxed">
            Hacer feliz a alguien especial es muy sencillo. Nosotros nos encargamos de todo.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl p-7 border border-[#EEDBEE]/80 shadow-[0_4px_16px_rgba(102,102,153,0.05)] hover:shadow-[0_8px_24px_rgba(102,102,153,0.1)] transition-all duration-200 flex flex-col items-center text-center space-y-4"
            >
              <div
                className={`w-12 h-12 rounded-full ${step.numBg} flex items-center justify-center font-bold text-lg shadow-sm`}
              >
                {step.num}
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2E2A3B]">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#706A82] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FF9999] hover:bg-[#F28585] text-[#2E2A3B] font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 fill-[#2E2A3B]/20" />
            <span>Escribir ahora por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
