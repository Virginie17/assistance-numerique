import React from 'react';
import Image from 'next/image';
import { Heart, Users, Award } from 'lucide-react';
import Button from './Button';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-rose-clair">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo avec décorations */}
          <div className="relative">
            {/* Photo principale */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="w-full h-full rounded-3xl overflow-hidden border-6 border-white shadow-2xl">
                <Image
                  src="/virginie.jpg"
                  alt="Virginie - Votre assistante numérique"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Décorations */}
              <div className="absolute -top-4 -right-4 bg-rose-principal rounded-full p-3 shadow-lg">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <Users className="w-6 h-6 text-rose-principal" />
              </div>
              
              <div className="absolute top-1/2 -left-8 bg-rose-clair rounded-full p-2 opacity-60">
                <Award className="w-5 h-5 text-rose-principal" />
              </div>
            </div>
          </div>
          
          {/* Texte humain */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-bleu-marine mb-6">
                À Propos de Moi
              </h2>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  Je m'appelle Virginie. Passionnée par le numérique et le contact humain, j'aide les personnes qui se sentent perdues avec les outils numériques ou les démarches en ligne.
                </p>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Mon objectif est de vous accompagner pas à pas, avec <span className="text-rose-principal font-semibold">patience</span>, <span className="text-rose-principal font-semibold">bienveillance</span> et <span className="text-rose-principal font-semibold">simplicité</span>.
                </p>
              </div>
            </div>
            
            {/* Valeurs */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-md">
                <Heart className="w-8 h-8 text-rose-principal mx-auto mb-2" fill="currentColor" />
                <h3 className="font-semibold text-bleu-marine text-sm">Bienveillance</h3>
              </div>
              
              <div className="bg-white rounded-xl p-4 text-center shadow-md">
                <Users className="w-8 h-8 text-rose-principal mx-auto mb-2" />
                <h3 className="font-semibold text-bleu-marine text-sm">Patience</h3>
              </div>
              
              <div className="bg-white rounded-xl p-4 text-center shadow-md">
                <Award className="w-8 h-8 text-rose-principal mx-auto mb-2" />
                <h3 className="font-semibold text-bleu-marine text-sm">Simplicité</h3>
              </div>
            </div>
            
            <div className="text-center">
              <Button href="#contact" className="bg-rose-principal hover:bg-rose-principal/90 text-white">
                Discutons ensemble
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
