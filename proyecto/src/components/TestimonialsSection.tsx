import React from 'react';
import { REVIEWS } from '../data/mockData';
import { Star, CheckCircle, User } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-white border-y border-[#EEDBEE]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#666699] inline-block">
            OPINIONES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2E2A3B] tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-sm sm:text-base text-[#706A82] leading-relaxed">
            La satisfacción y felicidad de quienes confían en nuestros detalles en Valledupar.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF7FC] rounded-2xl p-6 sm:p-7 border border-[#EEDBEE] flex flex-col justify-between space-y-5 hover:border-[#CC99CC] transition-all duration-200 shadow-[0_2px_12px_rgba(102,102,153,0.04)]"
            >
              <div className="space-y-4">
                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#DFAD47] fill-[#DFAD47]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-[#47464F] italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Lockup */}
              <div className="pt-4 border-t border-[#EEDBEE]/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EBD6EB] flex items-center justify-center shrink-0 text-[#666699]">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2E2A3B] flex items-center gap-1.5">
                    <span>{rev.author}</span>
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-[#706A82]">
                    <CheckCircle className="w-3 h-3 text-[#7A9E7E]" />
                    <span>{rev.location} • Cliente verificado</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
