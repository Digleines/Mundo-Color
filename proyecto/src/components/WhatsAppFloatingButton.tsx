import React, { useState } from 'react';
import { STORE_INFO } from '../data/mockData';
import { MessageCircle, X, Send } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { label: '🎈 Quiero un bouquet de globos', text: '¡Hola! Me gustaría cotizar un bouquet de globos para sorprender en Valledupar.' },
    { label: '🥐 Quiero un desayuno sorpresa', text: '¡Hola! Quisiera ordenar un desayuno sorpresa para una ocasión especial.' },
    { label: '🎁 Quiero una caja personalizada', text: '¡Hola! Me gustaría información sobre las cajas rígidas personalizadas con chocolates.' },
    { label: '💬 Hablar con una asesora', text: '¡Hola Mundo Color! Quisiera hablar con una asesora para un detalle especial.' },
  ];

  const handleSend = (text: string) => {
    const url = `https://wa.me/${STORE_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-[#EEDBEE] overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#666699] to-[#7B4F7D] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                MC
              </div>
              <div>
                <h4 className="text-xs font-bold leading-tight">Mundo Color Valledupar</h4>
                <p className="text-[10px] text-white/80">En línea • Respuesta rápida</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1"
              aria-label="Cerrar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#FAF7FC] space-y-2">
            <p className="text-xs text-[#5A556B] mb-2 leading-relaxed">
              ¡Hola! 👋 ¿En qué detalle con amor te podemos ayudar hoy? Elige una opción:
            </p>

            <div className="space-y-1.5">
              {quickMessages.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(item.text)}
                  className="w-full text-left text-xs p-2.5 rounded-xl bg-white hover:bg-[#F2EBF5] text-[#2E2A3B] border border-[#EEDBEE] transition-all flex items-center justify-between group"
                >
                  <span className="font-medium">{item.label}</span>
                  <Send className="w-3 h-3 text-[#666699] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group relative"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
        
        {/* Subtle ping indicator */}
        <span className="absolute top-1 right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF9999]"></span>
        </span>
      </button>
    </div>
  );
};
