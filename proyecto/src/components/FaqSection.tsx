import React, { useState } from 'react';
import { FAQS, STORE_INFO } from '../data/mockData';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const whatsappFaqUrl = `https://wa.me/${STORE_INFO.phoneClean}?text=${encodeURIComponent(
    '¡Hola Mundo Color! Tengo una consulta sobre sus detalles y me gustaría que me asesoren.'
  )}`;

  return (
    <section id="preguntas" className="py-16 md:py-24 bg-[#FAF7FC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#666699] inline-block">
            DUDAS Y RESPUESTAS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2E2A3B] tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="text-sm sm:text-base text-[#706A82] leading-relaxed">
            Todo lo que necesitas saber antes de pedir tu detalle con nosotros.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-10">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#EEDBEE]/80 shadow-[0_2px_8px_rgba(102,102,153,0.03)] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-[#2E2A3B]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF7FC] flex items-center justify-center shrink-0 text-[#666699] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#EBD6EB]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm sm:text-base text-[#5A556B] leading-relaxed border-t border-[#FAF7FC] pt-2 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <a
            href={whatsappFaqUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#FF9999] hover:bg-[#F28585] text-[#2E2A3B] font-semibold text-sm transition-all shadow-sm hover:shadow active:scale-[0.98]"
          >
            <MessageCircleQuestion className="w-4 h-4" />
            <span>Tengo otra pregunta</span>
          </a>
        </div>

      </div>
    </section>
  );
};
