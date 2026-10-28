import React, { useState } from 'react';
import { Logo } from './Logo';
import { STORE_INFO } from '../data/mockData';
import { MessageCircle, Menu, X, Sparkles, MapPin, Gift } from 'lucide-react';

interface NavbarProps {
  currentTab: 'home' | 'customizer' | 'location' | 'catalog';
  setCurrentTab: (tab: 'home' | 'customizer' | 'location' | 'catalog') => void;
  onOpenCustomizer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  onOpenCustomizer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Inicio', href: '#inicio' },
    { id: 'catalogo', label: 'Nuestros detalles', href: '#catalogo' },
    { id: 'personalizador', label: 'Arma tu Detalle', icon: Sparkles, action: onOpenCustomizer },
    { id: 'nosotros', label: 'Por qué elegirnos', href: '#nosotros' },
    { id: 'testimonios', label: 'Testimonios', href: '#testimonios' },
    { id: 'preguntas', label: 'Preguntas', href: '#preguntas' },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    setMobileMenuOpen(false);
    if (link.action) {
      link.action();
      return;
    }
    if (link.id === 'inicio') {
      setCurrentTab('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentTab('home');
      const el = document.querySelector(link.href || '');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const whatsappUrl = `https://wa.me/${STORE_INFO.phoneClean}?text=${encodeURIComponent(
    '¡Hola Mundo Color! Me gustaría recibir asesoría para un detalle especial en Valledupar.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7FC]/90 backdrop-blur-md border-b border-[#EEDBEE]/60 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button
          onClick={() => {
            setCurrentTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#666699] rounded-lg group"
          aria-label="Ir al inicio de Mundo Color"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isCustomizer = link.id === 'personalizador';
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`text-sm tracking-wide transition-colors relative py-1 flex items-center gap-1.5 ${
                  isCustomizer
                    ? 'font-semibold text-[#666699] hover:text-[#525282]'
                    : 'text-[#47464F] hover:text-[#2E2A3B] font-medium'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5 text-[#BA7ABA]" />}
                {link.label}
                {isCustomizer && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-[#EBD6EB] text-[#666699]">
                    Nuevo
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action CTA: Escríbenos */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF9999] hover:bg-[#F28585] text-[#2E2A3B] font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 fill-[#2E2A3B]/20" />
            <span>Escríbenos</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2 rounded-full bg-[#FF9999] text-[#2E2A3B]"
            aria-label="Escribir por WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#47464F] hover:text-[#2E2A3B] hover:bg-[#F0EDF2]"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FFFFFF] border-b border-[#E6E0F0] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className="text-left py-2 px-3 rounded-lg text-[#2E2A3B] font-medium text-base hover:bg-[#FAF7FC] flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.id === 'personalizador' && (
                  <span className="text-xs bg-[#EBD6EB] text-[#666699] font-bold px-2 py-0.5 rounded-full">
                    Interactúa
                  </span>
                )}
              </button>
            ))}
            <div className="pt-2 border-t border-[#F0EDF2]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#FF9999] text-[#2E2A3B] font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Escríbenos por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
