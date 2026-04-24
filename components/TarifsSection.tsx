import React from 'react';
import { CheckCircle, Star, Gift } from 'lucide-react';
import Card from './Card';
import Button from './Button';

const TarifsSection: React.FC = () => {
  return (
    <section id="tarifs" className="py-20 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-bleu-marine mb-6">
            Mes Tarifs
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Des tarifs transparents et adaptés à vos besoins
          </p>
        </div>
        
        {/* Offre spéciale */}
        <div className="text-center mb-12">
          <div className="inline-block bg-rose-clair rounded-2xl p-6 max-w-2xl border-2 border-rose-principal/20">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Gift className="w-6 h-6 text-rose-principal" />
              <h3 className="text-xl font-semibold text-bleu-marine">
                Première prise de contact offerte
              </h3>
            </div>
            <p className="text-foreground/80">
              Pour faire connaissance et évaluer vos besoins ensemble
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Séance découverte */}
          <Card className="relative overflow-hidden border-2 border-rose-principal/20 hover:border-rose-principal/40 transition-all duration-300">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-rose-clair rounded-full px-3 py-1">
              <span className="text-rose-principal text-sm font-medium">Populaire</span>
            </div>
            
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold text-bleu-marine mb-4">
                Séance Découverte
              </h3>
              
              <div className="text-5xl font-bold text-rose-principal mb-6">
                35€
              </div>
              
              <p className="text-foreground/70 mb-6">
                Première séance pour faire connaissance et évaluer vos besoins
              </p>
              
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose-principal flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Durée : 1h30</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose-principal flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Évaluation de vos besoins</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose-principal flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Première aide concrète</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose-principal flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Plan d'accompagnement personnalisé</span>
                </li>
              </ul>
              
              <Button href="#contact" className="w-full bg-rose-principal hover:bg-rose-principal/90 text-white">
                Réserver ma séance découverte
              </Button>
            </div>
          </Card>
          
          {/* Pack autonomie */}
          <Card className="relative overflow-hidden border-2 border-bleu-marine/20 hover:border-bleu-marine/40 transition-all duration-300">
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-bleu-marine rounded-full px-3 py-1">
              <span className="text-white text-sm font-medium">Recommandé</span>
            </div>
            
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold text-bleu-marine mb-4">
                Pack Autonomie
              </h3>
              
              <div className="text-5xl font-bold text-rose-principal mb-6">
                120€
              </div>
              
              <p className="text-foreground/70 mb-6">
                Forfait complet pour votre autonomie numérique
              </p>
              
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose-principal flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">4 séances de 1h30</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose-principal flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Accompagnement complet</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose-principal flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Support téléphonique entre séances</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose-principal flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Documents personnalisés</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose-principal flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Suivi personnalisé</span>
                </li>
              </ul>
              
              <Button href="#contact" className="w-full bg-bleu-marine hover:bg-bleu-marine/90 text-white">
                Choisir le pack autonomie
              </Button>
            </div>
          </Card>
        </div>
        
        {/* Message de flexibilité */}
        <div className="text-center mt-12">
          <div className="inline-block bg-white rounded-2xl p-6 max-w-2xl shadow-lg">
            <p className="text-foreground/80 mb-3">
              <Star className="w-5 h-5 text-rose-principal inline mr-2" fill="currentColor" />
              Paiement possible en plusieurs fois
            </p>
            <p className="text-foreground/70">
              N'hésitez pas à me contacter pour discuter d'un accompagnement sur mesure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TarifsSection;
