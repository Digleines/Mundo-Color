import React from 'react';
import { Headphones, Gift, MessageCircleHeart } from 'lucide-react';

export const FeatureChips: React.FC = () => {
  const features = [
    {
      id: 'atencion',
      icon: Headphones,
      iconBg: 'bg-[#EBD6EB]',
      iconColor: 'text-[#666699]',
      title: 'Atención personalizada',
      description: 'Te escuchamos y creamos justo lo que sueñas.',
    },
    {
      id: 'edades',
      icon: Gift,
      iconBg: 'bg-[#E3DFEE]',
      iconColor: 'text-[#666699]',
      title: 'Detalles para todas las edades',
      description: 'Desde los más pequeños hasta aniversarios y abuelitos.',
    },
    {
      id: 'whatsapp',
      icon: MessageCircleHeart,
      iconBg: 'bg-[#FFE2E2]',
      iconColor: 'text-[#B84E4E]',
      title: 'Pedidos fáciles por WhatsApp',
      description: 'Sin formularios engorrosos ni procesos lentos.',
    },
  ];

  return (
    <section className="py-6 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="bg-white rounded-2xl p-5 border border-[#EEDBEE]/70 shadow-[0_4px_16px_rgba(102,102,153,0.04)] flex items-start gap-4 transition-all duration-200 hover:shadow-[0_8px_24px_rgba(102,102,153,0.08)] hover:border-[#CC99CC]/60"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${feat.iconBg} flex items-center justify-center shrink-0 shadow-sm`}
                >
                  <Icon className={`w-6 h-6 ${feat.iconColor}`} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-[#2E2A3B]">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#706A82] leading-snug">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
