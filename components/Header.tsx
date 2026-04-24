import React from 'react';
import Image from 'next/image';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-blanc/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logo assistance numerique.png"
                alt="Virginie Assistance Numérique"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-bleu-marine">Virginie</h1>
              <p className="text-xs text-foreground/70">Assistance Numérique</p>
            </div>
          </div>
          
          {/* Bouton contact */}
          <Button href="#contact" className="bg-rose-principal hover:bg-rose-principal/90 text-white">
            Me contacter
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
