import React, { useState } from 'react';
import { Product } from '../types';
import { STORE_INFO } from '../data/mockData';
import { X, Check, MessageCircle, Heart, Sparkles, Gift } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenCustomizer: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onOpenCustomizer,
}) => {
  const [recipientName, setRecipientName] = useState('');
  const [personalMessage, setPersonalMessage] = useState('');

  if (!product) return null;

  const handleSendWhatsapp = () => {
    let msg = `¡Hola Mundo Color! Quiero ordenar el detalle: *${product.name}* en Valledupar.\n`;
    if (recipientName.trim()) {
      msg += `• Para: ${recipientName.trim()}\n`;
    }
    if (personalMessage.trim()) {
      msg += `• Mensaje de dedicatoria: "${personalMessage.trim()}"\n`;
    }
    msg += `• Precio referencial: ${product.price}\n`;
    msg += `¿Me pueden confirmar disponibilidad y opciones de entrega?`;

    const url = `https://wa.me/${STORE_INFO.phoneClean}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#EEDBEE] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-[#47464F] hover:text-[#2E2A3B] flex items-center justify-center shadow-md hover:bg-white transition-all"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 max-h-[85vh] overflow-y-auto">
          
          {/* Image Side */}
          <div className="relative aspect-square md:aspect-auto md:h-full bg-[#FAF7FC]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {product.badge && (
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full text-xs font-bold text-[#666699] shadow-sm border border-[#EEDBEE]">
                {product.badge}
              </div>
            )}
          </div>

          {/* Details Side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#BA7ABA]">
                  {product.categoryLabel}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2E2A3B]">
                  {product.name}
                </h3>
                <div className="text-sm font-semibold text-[#666699] pt-0.5">
                  Desde {product.price}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#706A82] leading-relaxed">
                {product.description}
              </p>

              {/* Inclusions checklist */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2E2A3B]">
                  ¿Qué incluye este detalle?
                </h4>
                <ul className="space-y-1.5">
                  {product.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#5A556B]">
                      <div className="w-4 h-4 rounded-full bg-[#EBD6EB] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#666699]" />
                      </div>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Personalization Inputs */}
              <div className="space-y-2.5 pt-2 border-t border-[#F0EBF5]">
                <label className="block text-xs font-semibold text-[#2E2A3B]">
                  Personaliza tu mensaje o destinatario (opcional):
                </label>
                <input
                  type="text"
                  placeholder="Nombre de la persona homenajeada"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E6E0F0] focus:outline-none focus:ring-2 focus:ring-[#CC99CC] focus:border-[#666699]"
                />
                <textarea
                  rows={2}
                  placeholder="Mensaje para la tarjeta de dedicatoria..."
                  value={personalMessage}
                  onChange={(e) => setPersonalMessage(e.target.value)}
                  className="w-full text-xs px-3.5 py-2 rounded-xl border border-[#E6E0F0] focus:outline-none focus:ring-2 focus:ring-[#CC99CC] focus:border-[#666699] resize-none"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2.5 pt-3">
              <button
                onClick={handleSendWhatsapp}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#FF9999] hover:bg-[#F28585] text-[#2E2A3B] font-semibold text-sm transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-[#2E2A3B]/20" />
                <span>Pedir este detalle por WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenCustomizer();
                }}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl text-xs font-semibold text-[#666699] hover:bg-[#FAF7FC] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#BA7ABA]" />
                <span>O personalízalo paso a paso desde cero</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
