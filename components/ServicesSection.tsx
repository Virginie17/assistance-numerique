import React from 'react';
import { 
  FileText, 
  Smartphone, 
  Mail, 
  Monitor, 
  Calendar, 
  Shield,
  Home,
  Tablet,
  Lock,
  Heart
} from 'lucide-react';
import Card from './Card';

const ServicesSection: React.FC = () => {
  const services = [
    { 
      name: 'Démarches administratives', 
      icon: FileText, 
      description: 'CAF, Impôts, Ameli, Retraite',
      color: 'bg-rose-principal'
    },
    { 
      name: 'Smartphone & tablette', 
      icon: Tablet, 
      description: 'Apprentissage et configuration',
      color: 'bg-rose-principal'
    },
    { 
      name: 'Mails & courriers', 
      icon: Mail, 
      description: 'Création et gestion de boîtes mail',
      color: 'bg-rose-principal'
    },
    { 
      name: 'Ordinateur & Internet', 
      icon: Monitor, 
      description: 'Initiation et dépannage informatique',
      color: 'bg-rose-principal'
    },
    { 
      name: 'Documents en ligne', 
      icon: FileText, 
      description: 'Numérisation et gestion documents',
      color: 'bg-rose-principal'
    },
    { 
      name: 'Rendez-vous en ligne', 
      icon: Calendar, 
      description: 'Prise de rendez-vous médicaux, administratifs',
      color: 'bg-rose-principal'
    },
    { 
      name: 'Sécurité & conseils', 
      icon: Shield, 
      description: 'Protection et astuces numériques',
      color: 'bg-rose-principal'
    },
  ];

  return (
    <section id="services" className="py-20 bg-blanc">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-bleu-marine mb-6">
            Mes Services
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Je vous accompagne avec patience et bienveillance dans toutes vos démarches numériques
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="text-center">
                {/* Icône dans un cercle */}
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-bleu-marine mb-3">
                  {service.name}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Message personnalisé */}
        <div className="text-center mt-12">
          <div className="inline-block bg-rose-clair rounded-2xl p-6 max-w-2xl">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Heart className="w-6 h-6 text-rose-principal" fill="currentColor" />
              <h3 className="text-xl font-semibold text-bleu-marine">
                Un service sur mesure
              </h3>
            </div>
            <p className="text-foreground/80">
              Besoin d'aide pour autre chose ? N'hésitez pas à me contacter, j'adapte mon accompagnement à vos besoins spécifiques avec toujours la même bienveillance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
