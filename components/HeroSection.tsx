import React from 'react';
import Image from 'next/image';
import { Heart, Mail, Camera } from 'lucide-react';
import Button from './Button';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-beige pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {/* Badge slogan */}
            <div className="inline-block">
              <div className="bg-rose-clair rounded-full px-6 py-3 flex items-center space-x-2">
                <Heart className="w-5 h-5 text-rose-principal" fill="currentColor" />
                <span className="text-rose-principal font-medium">Le numérique en toute sérénité</span>
              </div>
            </div>
            
            {/* Titre principal */}
            <h1 className="text-4xl md:text-5xl font-bold text-bleu-marine leading-tight">
              Besoin d'aide<br />
              avec le numérique ?
            </h1>
            
            {/* Sous-titre */}
            <p className="text-lg text-foreground/80 leading-relaxed">
              J'accompagne les seniors et les personnes en difficulté avec le numérique, à domicile ou à distance.
            </p>
            
            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#contact" className="bg-rose-principal hover:bg-rose-principal/90 text-white flex-1">
                <Mail className="w-5 h-5 mr-2" />
                Me contacter
              </Button>
              <Button 
                href="https://instagram.com/virginie_assistance_numerique" 
                target="_blank"
                rel="noopener noreferrer"
                variant="outline" 
                className="border-rose-principal text-rose-principal hover:bg-rose-principal hover:text-white flex-1"
              >
                <Camera className="w-5 h-5 mr-2" />
                Voir mon Instagram
              </Button>
            </div>
          </div>
          
          {/* Photo avec bulle */}
          <div className="relative">
            {/* Cercle avec photo */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/virginie.webp"
                  alt="Virginie - Assistance Numérique"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Bulle de dialogue */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 max-w-xs transform rotate-3">
                <div className="flex items-start space-x-2">
                  <Heart className="w-5 h-5 text-rose-principal flex-shrink-0 mt-1" fill="currentColor" />
                  <p className="text-sm text-foreground/80 italic">
                    À votre écoute, avec patience et bienveillance
                  </p>
                </div>
                {/* Pointe de la bulle */}
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45"></div>
              </div>
              
              {/* Décoration cœur */}
              <div className="absolute -bottom-6 -left-6 text-rose-clair opacity-60">
                <Heart className="w-12 h-12" fill="currentColor" />
              </div>
              
              {/* Décoration vague */}
              <div className="absolute -top-8 -left-8 text-rose-principal opacity-20">
                <Heart className="w-16 h-16" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
