import React from 'react';
import { MapPin, Home, Video } from 'lucide-react';
import Button from './Button';

const ZoneSection: React.FC = () => {
  const cities = [
    'La Rochelle', 'Périgny', 'Dompierre-sur-Mer', 'Marsilly',
    'Lagord', 'Nieul-sur-Mer', 'Saint-Xandre', 'Puilboreau',
    'L\'Houmeau', 'Esnandes', 'Charron', 'Marans'
  ];

  return (
    <section id="zone" className="py-20 bg-gradient-to-br from-rose-clair to-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-bleu-marine mb-6">
            Ma Zone d'Intervention
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Je me déplace à domicile et vous accompagne également à distance
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Carte stylisée */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              {/* Cercle central */}
              <div className="relative w-64 h-64 mx-auto mb-6">
                <div className="w-full h-full bg-gradient-to-br from-rose-principal/20 to-rose-clair/40 rounded-full flex items-center justify-center border-4 border-white">
                  <MapPin className="w-12 h-12 text-rose-principal" />
                </div>
                
                {/* Cercles de distance */}
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-rose-principal/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-0 left-1/4 w-3 h-3 bg-rose-principal/20 rounded-full -translate-x-1/2"></div>
                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-rose-principal/20 rounded-full translate-x-1/2"></div>
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-rose-principal/20 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-rose-principal/20 rounded-full"></div>
              </div>
              
              <div className="text-center">
                <p className="text-rose-principal font-semibold text-lg mb-2">
                  La Rochelle et alentours
                </p>
                <p className="text-foreground/80 font-medium">
                  Dans un rayon de 20 km
                </p>
              </div>
            </div>
            
            {/* Décorations */}
            <div className="absolute -top-6 -right-6 bg-rose-clair rounded-full p-3 shadow-lg">
              <Home className="w-6 h-6 text-rose-principal" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-full p-3 shadow-lg">
              <Video className="w-6 h-6 text-rose-principal" />
            </div>
          </div>
          
          {/* Informations */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-bleu-marine mb-4">
                Accompagnement à domicile
              </h3>
              <p className="text-foreground/80 mb-4">
                <MapPin className="w-5 h-5 text-rose-principal inline mr-2" />
                La Rochelle + 20km
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {cities.map((city, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-rose-principal rounded-full"></div>
                    <span className="text-foreground/70">{city}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-rose-clair rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-bleu-marine mb-4">
                Accompagnement à distance
              </h3>
              <p className="text-foreground/80 mb-4">
                <Video className="w-5 h-5 text-rose-principal inline mr-2" />
                Partout en France
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-rose-principal rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Video className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-foreground/80">Partage d'écran</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-rose-principal rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Video className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-foreground/80">Assistance en temps réel</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-rose-principal rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Video className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-foreground/80">Enregistrement des sessions</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <Button href="#contact" className="bg-rose-principal hover:bg-rose-principal/90 text-white">
                Vérifier ma disponibilité
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoneSection;
