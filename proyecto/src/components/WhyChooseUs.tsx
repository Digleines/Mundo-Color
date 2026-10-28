import React from 'react';
import { Images } from '../assets/images';
import { Heart, Sparkles, Palette, MessageSquare, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      id: 'atencion',
      icon: Heart,
      title: 'Atención que se siente',
      description:
        'Trato humano y cálido en cada interacción para que tu sorpresa sea perfecta.',
    },
    {
      id: 'amor',
      icon: Sparkles,
      title: 'Detalles hechos con amor',
      description:
        'Cuidamos cada moño, cinta, globo y combinación de color como si fuera para nuestra propia familia.',
    },
    {
      id: 'personalizacion',
      icon: Palette,
      title: 'Personalizamos a tu gusto',
      description:
        'Elige colores, mensajes especiales, snacks favoritos y el estilo que imaginas.',
    },
    {
      id: 'facilidad',
      icon: MessageSquare,
      title: 'Pedidos fáciles por WhatsApp',
      description:
        'Escríbenos directamente, te enviamos fotos, opciones y confirmamos todo en minutos.',
    },
  ];

  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white border-y border-[#EEDBEE]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow and title */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#666699]">
            NUESTRA ESENCIA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2E2A3B] tracking-tight">
            Por qué elegirnos
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: 4 Feature Cards */}
          <div className="lg:col-span-6 space-y-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.id}
                  className="bg-[#FAF7FC] rounded-2xl p-5 sm:p-6 border border-[#EEDBEE] hover:border-[#CC99CC] transition-all duration-200 flex items-start gap-4 hover:shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E6E0F0] flex items-center justify-center shrink-0 shadow-xs">
                    <Icon className="w-5 h-5 text-[#666699]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-semibold text-[#2E2A3B]">
                      {reason.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#706A82] leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Collage with Workshop & Storefront */}
          <div className="lg:col-span-6 space-y-4">
            {/* Top Row: Workshop & Artisans */}
            <div className="overflow-hidden rounded-2xl border border-[#EEDBEE] shadow-[0_8px_24px_rgba(102,102,153,0.08)] bg-[#F5F2F7]">
              <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                <img
                  src={Images.workshop}
                  alt="Equipo artesanal de Mundo Color confeccionando regalos en Valledupar"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#666699] border border-[#EEDBEE]">
                  Confección 100% artesanal
                </div>
              </div>
            </div>

            {/* Bottom Row: Storefront Facade */}
            <div className="relative overflow-hidden rounded-2xl border border-[#EEDBEE] shadow-[0_8px_24px_rgba(102,102,153,0.08)] bg-[#F5F2F7] group">
              <div className="relative aspect-[16/9]">
                <img
                  src={Images.facade}
                  alt="Local comercial de Mundo Color en Transversal 23 # 19A - 12 Valledupar"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white">
                    <MapPin className="w-3 h-3 text-[#FFCC66]" />
                    <span>NUESTRO LOCAL EN VALLEDUPAR</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold drop-shadow-sm">
                    {STORE_INFO.address}
                  </h4>
                  <p className="text-xs text-white/80">
                    Visítanos cuando quieras • Te recibimos con los brazos abiertos
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
