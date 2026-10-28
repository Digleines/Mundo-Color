/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeatureChips } from './components/FeatureChips';
import { CatalogSection } from './components/CatalogSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowToOrder } from './components/HowToOrder';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { GiftCustomizer } from './components/GiftCustomizer';
import { StoreLocationView } from './components/StoreLocationView';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { PRODUCTS } from './data/mockData';
import { Product } from './types';
import { Sparkles, MapPin, Grid, Home } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'customizer' | 'location' | 'catalog'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenProductModal = (productId: string) => {
    const found = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
    setSelectedProduct(found);
  };

  return (
    <div className="min-h-screen bg-[#FAF7FC] text-[#2E2A3B] flex flex-col font-sans">
      
      {/* Top Experience Switcher Bar (Quickly explore all screens of the app) */}
      <div className="bg-[#59598C] text-white text-xs py-2 px-4 border-b border-[#4E4E7F]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-wide text-[#FFD6FC] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Mundo Color Valledupar
            </span>
            <span className="hidden sm:inline text-white/60">• Transversal 23 # 19A - 12</span>
          </div>

          {/* Screen Navigation Tabs */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => {
                setCurrentTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                currentTab === 'home'
                  ? 'bg-white text-[#4E4E7F] font-semibold'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Home className="w-3 h-3" />
              <span>Pantalla Principal</span>
            </button>

            <button
              onClick={() => {
                setCurrentTab('customizer');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                currentTab === 'customizer'
                  ? 'bg-white text-[#4E4E7F] font-semibold'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>Arma tu Detalle</span>
            </button>

            <button
              onClick={() => {
                setCurrentTab('location');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                currentTab === 'location'
                  ? 'bg-white text-[#4E4E7F] font-semibold'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <MapPin className="w-3 h-3" />
              <span>Tienda Física</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenCustomizer={() => {
          setCurrentTab('customizer');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            <HeroSection
              onOpenProductModal={handleOpenProductModal}
              onOpenCustomizer={() => setCurrentTab('customizer')}
            />
            <FeatureChips />
            <CatalogSection
              onSelectProduct={(p) => setSelectedProduct(p)}
              onOpenCustomizer={() => setCurrentTab('customizer')}
            />
            <WhyChooseUs />
            <HowToOrder />
            <TestimonialsSection />
            <FaqSection />
            <CtaBanner />
          </>
        )}

        {currentTab === 'customizer' && (
          <div className="py-6 px-4">
            <GiftCustomizer onClose={() => setCurrentTab('home')} />
          </div>
        )}

        {currentTab === 'location' && (
          <StoreLocationView onBackToHome={() => setCurrentTab('home')} />
        )}

        {currentTab === 'catalog' && (
          <CatalogSection
            onSelectProduct={(p) => setSelectedProduct(p)}
            onOpenCustomizer={() => setCurrentTab('customizer')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenCustomizer={() => {
          setSelectedProduct(null);
          setCurrentTab('customizer');
        }}
      />

      {/* Interactive Floating WhatsApp Button */}
      <WhatsAppFloatingButton />

    </div>
  );
}
