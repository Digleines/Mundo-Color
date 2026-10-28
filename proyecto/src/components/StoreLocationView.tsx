import React from 'react';
import { STORE_INFO } from '../data/mockData';
import { Images } from '../assets/images';
import { MapPin, Clock, Phone, Instagram, Navigation, MessageCircle, Sparkles } from 'lucide-react';

interface StoreLocationViewProps {
  onBackToHome: () => void;
}

export const StoreLocationView: React.FC<StoreLocationViewProps> = ({ onBackToHome }) => {
  const whatsappUrl = `https://wa.me/${STORE_INFO.phoneClean}?text=${encodeURIComponent(
    '¡Hola Mundo Color! Quiero saber cómo llegar a su local en Valledupar o coordinar una entrega.'
  )}`;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Transversal 23 # 19A - 12 Valledupar Cesar Colombia Mundo Color'
  )}`;

  return (
    <div className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
      
      {/* Breadcrumb / Back button */}
      <button
        onClick={onBackToHome}
        className="mb-8 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#666699] hover:underline cursor-pointer"
      >
        <span>← Volver al inicio</span>
      </button>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#666699] inline-block">
          TIENDA FÍSICA & TALLER ARTESANAL
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2E2A3B] tracking-tight">
          Visítanos en Valledupar
        </h1>
        <p className="text-sm sm:text-base text-[#706A82] leading-relaxed">
          Encuentra peluches gigantes, globos de helio, papelería fina y asesórate con nuestro equipo artesanal directamente en nuestro local comercial.
        </p>
      </div>

      {/* Store Highlights Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
        
        {/* Photos side */}
        <div className="lg:col-span-7 space-y-5">
          <div className="overflow-hidden rounded-3xl border border-[#EEDBEE] shadow-[0_8px_24px_rgba(102,102,153,0.08)] bg-white">
            <div className="relative aspect-[16/10]">
              <img
                src={Images.facade}
                alt="Fachada de Mundo Color en Valledupar"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#666699] border border-[#EEDBEE] shadow-sm">
                Local Comercial Principal
              </div>
            </div>
            <div className="p-5 bg-white border-t border-[#F0EBF5]">
              <h3 className="font-serif text-lg font-semibold text-[#2E2A3B]">
                Papelería y Detalles Mundo Color
              </h3>
              <p className="text-xs text-[#706A82] mt-0.5">
                {STORE_INFO.address}
              </p>
            </div>
          </div>

          {/* Workshop Secondary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl border border-[#EEDBEE] bg-white">
              <img
                src={Images.workshop}
                alt="Taller de arreglos artesanales"
                className="w-full h-44 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 text-xs text-[#5A556B]">
                <strong className="block text-[#2E2A3B]">Taller de Diseño</strong>
                Confección en vivo de tus sorpresas
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#EEDBEE] bg-white">
              <img
                src={Images.plushCollection}
                alt="Vitrina de peluches"
                className="w-full h-44 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 text-xs text-[#5A556B]">
                <strong className="block text-[#2E2A3B]">Galería de Peluches</strong>
                Opciones gigantes y medianas listas para llevar
              </div>
            </div>
          </div>
        </div>

        {/* Info & Map Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EEDBEE] shadow-[0_8px_24px_rgba(102,102,153,0.06)] space-y-6">
            <h2 className="font-serif text-2xl font-semibold text-[#2E2A3B]">
              Información de Visita
            </h2>

            <div className="space-y-4 text-sm text-[#5A556B]">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAF7FC] border border-[#EEDBEE] flex items-center justify-center shrink-0 text-[#666699]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-[#2E2A3B] text-sm">Dirección</strong>
                  <p>{STORE_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAF7FC] border border-[#EEDBEE] flex items-center justify-center shrink-0 text-[#666699]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-[#2E2A3B] text-sm">Horarios de Atención</strong>
                  <p>Lunes a Sábado: 8:00 AM - 7:00 PM</p>
                  <p className="text-xs text-[#706A82]">Domingos y Festivos: Despachos programados</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAF7FC] border border-[#EEDBEE] flex items-center justify-center shrink-0 text-[#666699]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-[#2E2A3B] text-sm">Línea de WhatsApp</strong>
                  <p>{STORE_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAF7FC] border border-[#EEDBEE] flex items-center justify-center shrink-0 text-[#666699]">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-[#2E2A3B] text-sm">Instagram Oficial</strong>
                  <a
                    href={STORE_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#666699] font-medium hover:underline"
                  >
                    {STORE_INFO.instagram}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F0EBF5] space-y-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#666699] text-[#666699] hover:bg-[#FAF7FC] font-semibold text-xs sm:text-sm transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Cómo llegar (Abrir en Google Maps)</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#FF9999] hover:bg-[#F28585] text-[#2E2A3B] font-semibold text-sm transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir ubicación en vivo por WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Delivery Note */}
          <div className="bg-[#FAF7FC] p-5 rounded-2xl border border-[#EEDBEE] text-xs text-[#706A82] space-y-1">
            <span className="font-bold text-[#666699] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cobertura de Domicilios en Valledupar</span>
            </span>
            <p>
              Entregamos en Dangond, Novalito, Los Cortijos, San Joaquín, La Nevada, Las Américas, Villa del Rosario y todos los sectores de la ciudad con transporte seguro.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
