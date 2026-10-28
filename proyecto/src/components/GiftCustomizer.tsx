import React, { useState } from 'react';
import { STORE_INFO } from '../data/mockData';
import { Sparkles, Check, ArrowRight, ArrowLeft, Heart, MessageCircle, RefreshCw } from 'lucide-react';

interface GiftCustomizerProps {
  onClose?: () => void;
}

export const GiftCustomizer: React.FC<GiftCustomizerProps> = ({ onClose }) => {
  const [step, setStep] = useState<number>(1);

  // Customizer State
  const [baseType, setBaseType] = useState<string>('bouquet');
  const [occasion, setOccasion] = useState<string>('Cumpleaños');
  const [palette, setPalette] = useState<string>('Lila & Dorado');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [recipient, setRecipient] = useState<string>('');
  const [sender, setSender] = useState<string>('');
  const [message, setMessage] = useState<string>('Que este día esté lleno de magia, risas y momentos inolvidables.');
  const [deliveryDate, setDeliveryDate] = useState<string>('');

  const baseOptions = [
    {
      id: 'bouquet',
      name: 'Bouquet de Globos & Rosas Eternas',
      desc: 'Arreglo de volumen con rosas de satén y globos foil.',
      price: 85000,
    },
    {
      id: 'caja-lujo',
      name: 'Caja Rígida de Lujo Personalizada',
      desc: 'Caja con nombre foil dorado, bombones y mini vino.',
      price: 95000,
    },
    {
      id: 'desayuno',
      name: 'Desayuno Sorpresa Artesanal',
      desc: 'Bandeja de madera con croissants, jugo, café y flores.',
      price: 125000,
    },
    {
      id: 'cartelera',
      name: 'Cartelera Colgante con Flores 3D',
      desc: 'Lienzo en tela con flores de papel modeladas a mano.',
      price: 55000,
    },
    {
      id: 'peluche',
      name: 'Arreglo con Peluche & Golosinas',
      desc: 'Tierno compañero con ramo de chocolates seleccionados.',
      price: 65000,
    },
  ];

  const occasions = [
    'Cumpleaños',
    'Aniversario',
    'Amor y Amistad',
    'Reconciliación',
    'Grado o Éxito',
    'Día de la Madre',
    'Día del Padre',
    'Solo porque te quiero',
  ];

  const palettes = [
    { name: 'Lila Boutique & Dorado', colors: ['#666699', '#CC99CC', '#FFCC66'] },
    { name: 'Rosa Pastel & Blanco', colors: ['#FFB6C1', '#F5E6E8', '#FFFFFF'] },
    { name: 'Rojo Pasión & Oro', colors: ['#C41E3A', '#8B0000', '#FFCC66'] },
    { name: 'Azul Cielo & Plata', colors: ['#87CEEB', '#B0C4DE', '#E0E0E0'] },
    { name: 'Vintage Lavanda & Salvia', colors: ['#967BB6', '#9CAF88', '#F5F2F7'] },
  ];

  const extras = [
    { id: 'ferrero', name: 'Chocolates Ferrero Rocher (x8)', price: 22000 },
    { id: 'globo-helio', name: 'Globo metalizado helio (número/letra)', price: 16000 },
    { id: 'luces-led', name: 'Serie micro-LED tipo hada cálida', price: 12000 },
    { id: 'skincare', name: 'Kit cuidado facial & mascarillas Bioaqua', price: 26000 },
    { id: 'mini-espumoso', name: 'Mini botella de vino espumoso 187ml', price: 20000 },
    { id: 'rosas-extra', name: 'Ramillete adicional de rosas de satén', price: 18000 },
  ];

  const toggleExtra = (id: string) => {
    if (selectedExtras.includes(id)) {
      setSelectedExtras(selectedExtras.filter((item) => item !== id));
    } else {
      setSelectedExtras([...selectedExtras, id]);
    }
  };

  // Calculate total
  const selectedBase = baseOptions.find((b) => b.id === baseType) || baseOptions[0];
  const extrasTotal = selectedExtras.reduce((sum, extraId) => {
    const extra = extras.find((e) => e.id === extraId);
    return sum + (extra?.price || 0);
  }, 0);
  const grandTotal = selectedBase.price + extrasTotal;

  const handleSendOrder = () => {
    const extrasList = selectedExtras
      .map((id) => extras.find((e) => e.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const orderText = `¡Hola Mundo Color! Quiero cotizar y ordenar este detalle personalizado que armé en su web:

✨ *DETALLE PERSONALIZADO MUNDO COLOR* ✨
• *Tipo:* ${selectedBase.name}
• *Ocasión:* ${occasion}
• *Paleta de color:* ${palette}
• *Para:* ${recipient || 'Persona especial'}
• *De parte de:* ${sender || 'Cliente'}
• *Mensaje de dedicatoria:* "${message}"
${extrasList ? `• *Adicionales:* ${extrasList}\n` : ''}${deliveryDate ? `• *Fecha deseada:* ${deliveryDate}\n` : ''}• *Total estimado:* $${grandTotal.toLocaleString('es-CO')} COP

¿Me confirman disponibilidad y detalles de entrega en Valledupar? ¡Muchas gracias!`;

    const url = `https://wa.me/${STORE_INFO.phoneClean}?text=${encodeURIComponent(orderText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-3xl border border-[#EEDBEE] shadow-[0_12px_40px_rgba(102,102,153,0.08)] p-6 sm:p-10 max-w-4xl mx-auto my-8">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-[#F0EBF5] mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#BA7ABA] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TALLER CREATIVO MUNDO COLOR</span>
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2E2A3B]">
            Arma tu Detalle con Amor
          </h2>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#706A82] hover:text-[#2E2A3B] px-3 py-1.5 rounded-lg border border-[#EEDBEE]"
          >
            Volver
          </button>
        )}
      </div>

      {/* Progress Steps Bar */}
      <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2 scrollbar-none">
        {[
          { num: 1, label: '1. Base' },
          { num: 2, label: '2. Ocasión' },
          { num: 3, label: '3. Colores' },
          { num: 4, label: '4. Extras' },
          { num: 5, label: '5. Dedicatoria' },
          { num: 6, label: '6. Resumen' },
        ].map((s) => (
          <button
            key={s.num}
            onClick={() => setStep(s.num)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              step === s.num
                ? 'bg-[#666699] text-white shadow-xs'
                : step > s.num
                ? 'bg-[#EBD6EB] text-[#666699]'
                : 'text-[#706A82] hover:bg-[#FAF7FC]'
            }`}
          >
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      {/* STEP 1: BASE TYPE */}
      {step === 1 && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-base font-semibold text-[#2E2A3B]">
            Paso 1: Elige el formato principal de tu sorpresa
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {baseOptions.map((opt) => (
              <div
                key={opt.id}
                onClick={() => setBaseType(opt.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  baseType === opt.id
                    ? 'border-[#666699] bg-[#FAF7FC] shadow-sm ring-2 ring-[#CC99CC]/40'
                    : 'border-[#EEDBEE] hover:border-[#CC99CC] bg-white'
                }`}
              >
                <div className="flex items-start justify-between">
                  <h4 className="font-serif text-lg font-semibold text-[#2E2A3B]">
                    {opt.name}
                  </h4>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      baseType === opt.id
                        ? 'bg-[#666699] border-[#666699] text-white'
                        : 'border-[#D1C9DE]'
                    }`}
                  >
                    {baseType === opt.id && <Check className="w-3 h-3" />}
                  </div>
                </div>
                <p className="text-xs text-[#706A82] mt-1.5">{opt.desc}</p>
                <div className="text-xs font-semibold text-[#666699] mt-3">
                  Base: ${opt.price.toLocaleString('es-CO')} COP
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STEP 2: OCCASION */}
      {step === 2 && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-base font-semibold text-[#2E2A3B]">
            Paso 2: ¿Qué motivo especial vamos a celebrar?
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {occasions.map((occ) => (
              <button
                key={occ}
                onClick={() => setOccasion(occ)}
                className={`p-4 rounded-xl text-xs sm:text-sm font-medium border text-center transition-all cursor-pointer ${
                  occasion === occ
                    ? 'bg-[#666699] text-white border-[#666699] shadow-sm'
                    : 'bg-white text-[#47464F] border-[#EEDBEE] hover:border-[#666699]'
                }`}
              >
                {occ}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 3: COLOR PALETTE */}
      {step === 3 && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-base font-semibold text-[#2E2A3B]">
            Paso 3: Selecciona la combinación cromática
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {palettes.map((pal) => (
              <div
                key={pal.name}
                onClick={() => setPalette(pal.name)}
                className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between ${
                  palette === pal.name
                    ? 'border-[#666699] bg-[#FAF7FC] ring-2 ring-[#CC99CC]/40'
                    : 'border-[#EEDBEE] hover:border-[#CC99CC] bg-white'
                }`}
              >
                <span className="text-sm font-semibold text-[#2E2A3B]">
                  {pal.name}
                </span>
                <div className="flex items-center gap-1.5">
                  {pal.colors.map((c, i) => (
                    <span
                      key={i}
                      className="w-5 h-5 rounded-full border border-black/10 shadow-xs"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STEP 4: EXTRAS */}
      {step === 4 && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-base font-semibold text-[#2E2A3B]">
            Paso 4: Añade toques dulces y especiales
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {extras.map((extra) => {
              const isChecked = selectedExtras.includes(extra.id);
              return (
                <div
                  key={extra.id}
                  onClick={() => toggleExtra(extra.id)}
                  className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                    isChecked
                      ? 'border-[#666699] bg-[#FAF7FC]'
                      : 'border-[#EEDBEE] hover:border-[#CC99CC] bg-white'
                  }`}
                >
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#2E2A3B]">
                      {extra.name}
                    </h4>
                    <span className="text-xs text-[#706A82]">
                      +${extra.price.toLocaleString('es-CO')} COP
                    </span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${
                      isChecked
                        ? 'bg-[#666699] border-[#666699] text-white'
                        : 'border-[#D1C9DE] bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 5: DEDICATORIA & TARJETA */}
      {step === 5 && (
        <div className="space-y-6 animate-fadeIn">
          <h3 className="text-base font-semibold text-[#2E2A3B]">
            Paso 5: La carta de dedicatoria para esa persona especial
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Fields */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2E2A3B] mb-1">
                  ¿Para quién es el detalle?
                </label>
                <input
                  type="text"
                  placeholder="Ej: Para mi amor, Mamá, Sofía..."
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#E6E0F0] focus:ring-2 focus:ring-[#CC99CC] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2E2A3B] mb-1">
                  ¿De parte de quién?
                </label>
                <input
                  type="text"
                  placeholder="Ej: Tu esposo, Carlos, Con amor siempre..."
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#E6E0F0] focus:ring-2 focus:ring-[#CC99CC] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2E2A3B] mb-1">
                  Mensaje personalizado para la tarjeta:
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-xs sm:text-sm p-3.5 rounded-xl border border-[#E6E0F0] focus:ring-2 focus:ring-[#CC99CC] focus:outline-none resize-none leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2E2A3B] mb-1">
                  Fecha deseada de entrega (Opcional):
                </label>
                <input
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-[#E6E0F0] focus:ring-2 focus:ring-[#CC99CC] focus:outline-none"
                />
              </div>
            </div>

            {/* Live Stationery Note Preview */}
            <div className="lg:col-span-6">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#BA7ABA] mb-2">
                Vista previa de la tarjeta artesanal:
              </span>
              <div className="relative p-6 sm:p-8 rounded-2xl bg-[#FFFDF9] border border-[#E8DFC8] shadow-[0_4px_20px_rgba(107,77,0,0.06)] min-h-[240px] flex flex-col justify-between">
                
                {/* Gold wax seal stamp top-right */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-tr from-[#C99427] to-[#F6D172] flex items-center justify-center text-white text-xs font-serif shadow-sm">
                  MC
                </div>

                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-widest text-[#8A7558] font-semibold">
                    {recipient ? `Para: ${recipient}` : 'Para alguien muy especial'}
                  </div>
                  <p className="font-serif italic text-sm sm:text-base text-[#3A3225] leading-relaxed">
                    "{message || 'Tu dedicatoria aparecerá aquí escrita a mano...'}"
                  </p>
                </div>

                <div className="pt-4 text-right text-xs font-medium text-[#8A7558] border-t border-[#F0E6D2]">
                  {sender ? `Con amor, ${sender}` : 'Con todo mi cariño'}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* STEP 6: SUMMARY & WHATSAPP ACTION */}
      {step === 6 && (
        <div className="space-y-6 animate-fadeIn">
          <h3 className="text-base font-semibold text-[#2E2A3B]">
            Paso 6: Resumen de tu detalle personalizado
          </h3>

          <div className="bg-[#FAF7FC] p-6 rounded-2xl border border-[#EEDBEE] space-y-4">
            <div className="flex justify-between items-center border-b border-[#EEDBEE]/60 pb-3">
              <span className="text-sm font-semibold text-[#2E2A3B]">
                {selectedBase.name}
              </span>
              <span className="text-sm font-bold text-[#666699]">
                ${selectedBase.price.toLocaleString('es-CO')} COP
              </span>
            </div>

            <div className="text-xs space-y-1.5 text-[#5A556B]">
              <p>• <strong>Ocasión:</strong> {occasion}</p>
              <p>• <strong>Gama cromática:</strong> {palette}</p>
              {recipient && <p>• <strong>Para:</strong> {recipient}</p>}
              {sender && <p>• <strong>De parte de:</strong> {sender}</p>}
              {deliveryDate && <p>• <strong>Fecha de entrega:</strong> {deliveryDate}</p>}
            </div>

            {selectedExtras.length > 0 && (
              <div className="pt-3 border-t border-[#EEDBEE]/60 space-y-1">
                <span className="text-xs font-bold text-[#2E2A3B]">Adicionales:</span>
                {selectedExtras.map((id) => {
                  const item = extras.find((e) => e.id === id);
                  return (
                    <div key={id} className="flex justify-between text-xs text-[#5A556B]">
                      <span>+ {item?.name}</span>
                      <span>${item?.price.toLocaleString('es-CO')} COP</span>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="pt-4 border-t border-[#EEDBEE] flex items-center justify-between">
              <div>
                <span className="text-xs text-[#706A82]">Inversión estimada:</span>
                <div className="text-2xl font-serif font-bold text-[#2E2A3B]">
                  ${grandTotal.toLocaleString('es-CO')} COP
                </div>
              </div>
              <div className="text-right text-[11px] text-[#706A82]">
                Asesoría de diseño incluida sin costo
              </div>
            </div>
          </div>

          <button
            onClick={handleSendOrder}
            className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-[#FF9999] hover:bg-[#F28585] text-[#2E2A3B] font-semibold text-base transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 fill-[#2E2A3B]/20" />
            <span>Enviar detalle a Mundo Color por WhatsApp</span>
          </button>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-8 border-t border-[#F0EBF5] mt-8">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#706A82] hover:text-[#2E2A3B] hover:bg-[#FAF7FC]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>
        ) : <div />}

        {step < 6 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#666699] text-white hover:bg-[#535384] transition-colors shadow-xs"
          >
            <span>Siguiente</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : null}
      </div>

    </div>
  );
};
