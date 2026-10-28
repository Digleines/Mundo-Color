import React from 'react';
import { Logo } from './Logo';
import { STORE_INFO } from '../data/mockData';
import { MapPin, Phone, Instagram, Clock, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${STORE_INFO.phoneClean}?text=${encodeURIComponent(
    '¡Hola Mundo Color! Quisiera información sobre su ubicación y horarios en Valledupar.'
  )}`;

  return (
    <footer className="bg-white border-t border-[#EEDBEE]/80 pt-16 pb-12 text-[#2E2A3B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F0EBF5]">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-[#706A82] leading-relaxed max-w-sm">
              Papelería y detalles con amor en Valledupar. Bouquets de globos, desayunos sorpresa, carteleras artesanales y peluches para celebrar la vida.
            </p>
          </div>

          {/* Ubicación */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#666699]">
              Ubicación
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm text-[#5A556B]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#BA7ABA] shrink-0 mt-0.5" />
                <span>Transversal 23 # 19A - 12</span>
              </div>
              <p className="text-[#706A82] pl-6">Valledupar, Cesar, Colombia</p>
              <div className="pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#666699] hover:underline pl-6 inline-flex items-center gap-1"
                >
                  <span>Ver ubicación en WhatsApp</span>
                  <span>›</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#666699]">
              Contacto
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#5A556B]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#BA7ABA] shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2E2A3B] transition-colors"
                >
                  {STORE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#BA7ABA] shrink-0" />
                <a
                  href={STORE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2E2A3B] transition-colors"
                >
                  {STORE_INFO.instagram}
                </a>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#666699]">
              Horarios
            </h4>
            <div className="bg-[#FAF7FC] p-4 rounded-xl border border-[#EEDBEE] space-y-1 text-xs text-[#5A556B]">
              <div className="flex items-center gap-1.5 font-semibold text-[#2E2A3B]">
                <Clock className="w-3.5 h-3.5 text-[#666699]" />
                <span>Atención y despachos:</span>
              </div>
              <p>Lunes a Sábado: 8:00 AM - 7:00 PM</p>
              <p className="text-[#706A82]">Domingos con entrega programada</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#706A82]">
          <p>
            © {new Date().getFullYear()} Papelería y Detalles Mundo Color. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1 text-[#666699]">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-[#E06D6D] fill-[#E06D6D]" />
            <span>en Valledupar</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
