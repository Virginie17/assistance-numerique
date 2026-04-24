import React from 'react';
import Image from 'next/image';
import { Mail, Camera, Heart, MessageCircle } from 'lucide-react';
import Button from './Button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-bleu-marine text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Le numérique n&apos;est pas toujours simple, mais vous n&apos;êtes pas seul(e).
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Je suis là pour vous accompagner avec patience et bienveillance dans toutes vos démarches.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Carte Email */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-principal rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-bleu-marine mb-4">
                Envoyer un mail
              </h3>
              
              <p className="text-foreground/80 mb-6">
                Me contacter directement pour poser vos questions ou prendre rendez-vous
              </p>
              
              <Button 
                href="mailto:virginie.assistancenumerique@gmail.com?subject=Prise de contact - Assistance Numérique&amp;body=Bonjour Virginie,%0D%0AJ&apos;aimerais prendre rendez-vous pour une séance d&apos;assistance numérique.%0D%0AMes disponibilités :%0D%0AMes besoins :%0D%0AMerci,%0D%0AVotre nom" 
                className="w-full bg-rose-principal hover:bg-rose-principal/90 text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Envoyer un mail
              </Button>
            </div>
          </div>
          
          {/* Carte Instagram */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-principal rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-bleu-marine mb-4">
                Voir mon Instagram
              </h3>
              
              <p className="text-foreground/80 mb-6">
                Me suivre pour découvrir mes astuces, conseils et actualités
              </p>
              
              <Button 
                href="https://instagram.com/virginie_assistance_numerique" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-rose-principal hover:bg-rose-principal/90 text-white"
              >
                <Camera className="w-5 h-5 mr-2" />
                Voir mon Instagram
              </Button>
            </div>
          </div>
        </div>
        
        {/* Message de bienveillance */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl border border-white/20">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Heart className="w-8 h-8 text-rose-principal" fill="currentColor" />
              <MessageCircle className="w-8 h-8 text-rose-principal" />
            </div>
            <p className="text-xl text-white font-medium mb-2">
              Une réponse personnalisée sous 24h
            </p>
            <p className="text-white/80">
              Chaque demande est importante et je m&apos;engage à vous répondre avec attention et bienveillance.
            </p>
          </div>
        </div>
        
        {/* Coordonnées simplifiées */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
            <p className="text-white/90 text-sm mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              <a 
                href="mailto:virginie.assistancenumerique@gmail.com" 
                className="text-white hover:text-rose-clair transition-colors underline"
              >
                virginie.assistancenumerique@gmail.com
              </a>
            </p>
            <p className="text-white/90 text-sm">
              <Camera className="w-4 h-4 inline mr-2" />
              <a 
                href="https://instagram.com/virginie_assistance_numerique" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-rose-clair transition-colors underline"
              >
                @virginie_assistance_numerique
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
