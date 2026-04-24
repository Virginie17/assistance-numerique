import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bleu-marine text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et slogan */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <img
                  src="/logo assistance numerique.png"
                  alt="Virginie Assistance Numérique"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Virginie</h3>
                <p className="text-xs text-white/80">Assistance Numérique</p>
              </div>
            </div>
            <p className="text-rose-clair text-sm">Le numérique en toute sérénité</p>
          </div>
          
          {/* Navigation */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white hover:text-rose-clair transition-colors">Services</a></li>
              <li><a href="#about" className="text-white hover:text-rose-clair transition-colors">À propos</a></li>
              <li><a href="#tarifs" className="text-white hover:text-rose-clair transition-colors">Tarifs</a></li>
              <li><a href="#zone" className="text-white hover:text-rose-clair transition-colors">Zone</a></li>
              <li><a href="#contact" className="text-white hover:text-rose-clair transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white hover:text-rose-clair transition-colors">Démarches administratives</a></li>
              <li><a href="#services" className="text-white hover:text-rose-clair transition-colors">Smartphone & tablette</a></li>
              <li><a href="#services" className="text-white hover:text-rose-clair transition-colors">Mails & courriers</a></li>
              <li><a href="#services" className="text-white hover:text-rose-clair transition-colors">Ordinateur & Internet</a></li>
              <li><a href="#services" className="text-white hover:text-rose-clair transition-colors">Documents en ligne</a></li>
              <li><a href="#services" className="text-white hover:text-rose-clair transition-colors">Rendez-vous en ligne</a></li>
              <li><a href="#services" className="text-white hover:text-rose-clair transition-colors">Sécurité & conseils</a></li>
            </ul>
          </div>
          
          {/* Zone */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Zone d&apos;intervention</h4>
            <ul className="space-y-2">
              <li><a href="#zone" className="text-white hover:text-rose-clair transition-colors">La Rochelle et alentours</a></li>
              <li><a href="#zone" className="text-white hover:text-rose-clair transition-colors">Accompagnement à domicile</a></li>
              <li><a href="#zone" className="text-white hover:text-rose-clair transition-colors">Accompagnement à distance</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:virginie.assistancenumerique@gmail.com" className="text-white hover:text-rose-clair transition-colors underline">virginie.assistancenumerique@gmail.com</a>
              </li>
              <li>
                <a href="https://instagram.com/virginie_assistance_numerique" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose-clair transition-colors underline">@virginie_assistance_numerique</a>
              </li>
            </ul>
          </div>
          
          {/* Copyright */}
          <div className="text-center mt-8">
            <p className="text-white/60 text-sm">
              2024 Virginie Assistance Numérique. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;