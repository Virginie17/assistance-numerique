export type CommercialOffer = {
  slug: string;
  title: string;
  price: string;
  duration: string;
  summary: string;
  idealFor: string;
  included: string[];
  result: string;
  terms: string;
  excluded: string[];
  service: string;
};

export const individualDigitalOffers: CommercialOffer[] = [
  {
    slug: "coup-de-pouce-numerique",
    title: "Coup de pouce numérique",
    price: "55 €",
    duration: "1 heure",
    summary:
      "Une heure pour débloquer une difficulté précise et repartir avec des explications simples.",
    idealFor:
      "Un problème ponctuel avec un smartphone, une tablette, un ordinateur, une messagerie, des photos ou une application.",
    included: [
      "Échange préalable pour identifier le besoin prioritaire",
      "Aide sur un appareil ou un sujet principal",
      "Réglages simples et manipulation guidée",
      "Explications adaptées et conseils pour éviter que le problème se reproduise",
    ],
    result:
      "Le problème principal est résolu ou clairement diagnostiqué et vous savez reproduire les manipulations essentielles.",
    terms:
      "À domicile ou à distance. Une heure minimale est facturée. Toute demi-heure supplémentaire acceptée est facturée 27,50 €.",
    excluded: [
      "Réparation matérielle ou remplacement de pièces",
      "Récupération complexe de données",
      "Achat de matériel, logiciel ou abonnement",
    ],
    service: "accompagnement_informatique",
  },
  {
    slug: "nouveau-telephone-serein",
    title: "Nouveau téléphone serein",
    price: "99 €",
    duration: "Jusqu’à 2 heures",
    summary:
      "Votre nouveau téléphone configuré selon vos besoins, avec les explications nécessaires pour l’utiliser sereinement.",
    idealFor:
      "Une personne qui vient d’acheter un smartphone ou souhaite remettre de l’ordre dans un appareil récent.",
    included: [
      "Réglages d’affichage, son, notifications, sécurité et accessibilité",
      "Connexion Wi-Fi et vérification du compte Apple ou Google",
      "Applications, contacts, photos, appels, messages et WhatsApp",
      "Conseils de sécurité et fiche mémo si nécessaire",
    ],
    result:
      "Le téléphone est adapté à vos usages et vous savez effectuer les actions quotidiennes principales.",
    terms:
      "Intervention à domicile. Vos identifiants et mots de passe doivent être disponibles. Les transferts dépendent des possibilités techniques des appareils.",
    excluded: [
      "Téléphone, carte SIM, forfait ou stockage payant",
      "Récupération garantie depuis un appareil cassé",
      "Création d’informations personnelles à votre place",
    ],
    service: "configuration_appareils",
  },
  {
    slug: "securite-numerique",
    title: "Sécurité numérique",
    price: "79 €",
    duration: "Jusqu’à 1 h 30",
    summary:
      "Des réglages plus sûrs et de bons réflexes pour reconnaître les arnaques et protéger vos comptes.",
    idealFor:
      "Une personne inquiète après un message, un mail ou un appel suspect, ou souhaitant prévenir les risques.",
    included: [
      "Vérification des réglages et mises à jour essentielles",
      "Conseils sur les mots de passe",
      "Double authentification sur les comptes prioritaires lorsque possible",
      "Reconnaissance des mails, SMS, sites et appels frauduleux",
    ],
    result:
      "Vos protections sont renforcées et vous disposez d’une méthode simple pour réagir en cas de doute.",
    terms:
      "À domicile ou à distance. En cas de fraude financière, contactez immédiatement votre banque et les autorités compétentes.",
    excluded: [
      "Garantie d’absence de fraude future",
      "Expertise informatique judiciaire",
      "Récupération de fonds ou intervention sans le titulaire du compte",
    ],
    service: "cybersecurite",
  },
  {
    slug: "demarches-en-ligne",
    title: "Démarches en ligne",
    price: "55 €",
    duration: "1 heure",
    summary:
      "Un accompagnement pas à pas pour comprendre et réaliser une démarche tout en restant maître de vos décisions.",
    idealFor:
      "Une aide avec Ameli, la CAF, les impôts, la retraite, France Titres ou un autre service administratif en ligne.",
    included: [
      "Préparation des informations utiles",
      "Connexion guidée au service concerné",
      "Aide à la saisie et à l’envoi des documents",
      "Vérification avec vous avant validation",
      "Enregistrement du justificatif disponible",
    ],
    result:
      "La démarche est avancée ou finalisée et vous connaissez les éventuelles suites à donner.",
    terms:
      "Vous fournissez les informations, restez présent et validez personnellement vos déclarations et engagements.",
    excluded: [
      "Conseil juridique, fiscal, médical ou social spécialisé",
      "Signature ou déclaration réalisée à votre place",
      "Garantie d’acceptation du dossier",
    ],
    service: "demarches_en_ligne",
  },
  {
    slug: "parcours-autonomie",
    title: "Parcours autonomie",
    price: "155 €",
    duration: "3 séances d’1 heure",
    summary:
      "Trois rendez-vous personnalisés pour progresser durablement, à votre rythme et sans pression.",
    idealFor:
      "Une personne qui souhaite apprendre progressivement à utiliser ses appareils et gagner en confiance.",
    included: [
      "Définition de trois objectifs prioritaires",
      "Trois séances individuelles",
      "Exercices sur vos propres appareils",
      "Répétitions, réponses aux questions et fiches mémo",
      "Bilan des progrès",
    ],
    result:
      "Vous savez réaliser seul les actions travaillées pendant le parcours.",
    terms:
      "À domicile ou à distance. Les séances sont réservées à une même personne et à utiliser dans les trois mois.",
    excluded: [
      "Formation certifiante",
      "Réparation matérielle",
      "Report illimité ou remboursement des séances réalisées",
    ],
    service: "formation_outils",
  },
];

export const professionalGroups: {
  title: string;
  description: string;
  offers: CommercialOffer[];
}[] = [
  {
    title: "Facturation & organisation",
    description:
      "Comprendre, installer et utiliser les bons outils pour gérer votre activité plus sereinement.",
    offers: [
      {
        slug: "facturation-decouverte",
        title: "Pack Facturation Découverte",
        price: "97 €",
        duration: "Jusqu’à 1 h 15",
        summary:
          "Comprendre la réforme, clarifier vos besoins et choisir une solution adaptée sans jargon.",
        idealFor:
          "Un artisan, indépendant ou micro-entrepreneur qui ne sait pas quel outil choisir ni comment se préparer.",
        included: [
          "Analyse de votre activité et de votre organisation",
          "Explication pédagogique de la réforme",
          "Identification des fonctions nécessaires",
          "Comparaison de 2 ou 3 solutions",
          "Recommandation et compte rendu",
        ],
        result:
          "Vous comprenez ce qui vous concerne et disposez d’une orientation claire.",
        terms:
          "À domicile, dans l’entreprise ou à distance. Accompagnement numérique et organisationnel.",
        excluded: [
          "Paramétrage complet du compte",
          "Abonnements et options payantes",
          "Conseil comptable, fiscal ou juridique",
        ],
        service: "facturation_electronique",
      },
      {
        slug: "facturation-installation",
        title: "Pack Facturation Installation",
        price: "197 €",
        duration: "Jusqu’à 2 h 30",
        summary:
          "Repartir avec un outil configuré et savoir créer vos premiers devis et factures.",
        idealFor:
          "Un entrepreneur ayant choisi son outil ou souhaitant être accompagné dans le choix et le paramétrage initial.",
        included: [
          "Contenu du Pack Découverte",
          "Création ou paramétrage du compte",
          "Coordonnées, logo, paiements et numérotation",
          "3 fiches clients et prestations courantes",
          "Devis et facture test guidés",
        ],
        result:
          "L’outil est prêt pour un usage courant et vous savez créer, envoyer et retrouver vos documents.",
        terms:
          "Vous choisissez et souscrivez personnellement la solution retenue.",
        excluded: [
          "Coût du logiciel ou de la plateforme",
          "Import massif ou reprise comptable",
          "Validation juridique, fiscale ou comptable",
        ],
        service: "facturation_electronique",
      },
      {
        slug: "facturation-serenite",
        title: "Pack Facturation Sérénité",
        price: "297 €",
        duration: "Jusqu’à 4 heures",
        summary:
          "Une mise en place approfondie, une méthode claire et un suivi pour devenir autonome.",
        idealFor:
          "Un entrepreneur qui souhaite une solution personnalisée et vérifiée après ses premières utilisations.",
        included: [
          "Tout le Pack Installation",
          "Jusqu’à 10 fiches clients",
          "Personnalisation des documents",
          "Organisation des prestations et règlements",
          "Fiche mémo",
          "Suivi de 45 minutes après environ 2 semaines",
        ],
        result:
          "Vous disposez d’une organisation opérationnelle et d’un suivi après la prise en main.",
        terms:
          "Le temps total comprend analyse, paramétrage, personnalisation et suivi. Tout ajout est chiffré séparément.",
        excluded: [
          "Abonnement au logiciel",
          "Comptabilité et déclarations",
          "Développement sur mesure ou migration massive",
        ],
        service: "facturation_electronique",
      },
      {
        slug: "aide-pro-ponctuelle",
        title: "Aide numérique professionnelle ponctuelle",
        price: "65 € / heure",
        duration: "1 heure minimum",
        summary:
          "Une intervention ciblée pour débloquer un outil, un document ou une organisation numérique.",
        idealFor: "Un professionnel confronté à un besoin numérique ponctuel.",
        included: [
          "Analyse de la difficulté",
          "Assistance sur un logiciel, une messagerie ou un document",
          "Réalisation guidée",
          "Conseils et résumé des actions",
        ],
        result:
          "Le besoin prioritaire est traité et vous disposez d’une méthode pour continuer.",
        terms:
          "À distance ou sur site. Une heure minimum puis demi-heures supplémentaires après accord.",
        excluded: [
          "Maintenance lourde ou cybersécurité avancée",
          "Comptabilité et conseil juridique",
          "Licences, abonnements ou matériel",
        ],
        service: "formation_outils",
      },
    ],
  },
  {
    title: "Visibilité & présence en ligne",
    description:
      "Des supports clairs et professionnels pour inspirer confiance et recevoir davantage de demandes.",
    offers: [
      {
        slug: "fiche-google",
        title: "Fiche Google",
        price: "À partir de 149 €",
        duration: "Sur devis",
        summary:
          "Une présence locale complète et rassurante pour aider les clients à vous trouver et vous contacter.",
        idealFor:
          "Un artisan, indépendant ou commerce local souhaitant créer ou améliorer sa fiche Google.",
        included: [
          "Audit de la fiche",
          "Informations, catégories, horaires et zone",
          "Présentation de l’activité",
          "Intégration des éléments fournis",
          "Conseils pour les avis clients",
        ],
        result:
          "Votre fiche présente des informations complètes et cohérentes, orientées vers la prise de contact.",
        terms:
          "Vous devez disposer des droits sur l’établissement, des accès et justificatifs nécessaires.",
        excluded: [
          "Validation garantie par Google",
          "Garantie de classement ou de résultats",
          "Faux avis, photographie ou animation mensuelle",
        ],
        service: "visibilite",
      },
      {
        slug: "landing-page",
        title: "Landing page – Offre de lancement",
        price: "299 €",
        duration: "Délai défini au devis",
        summary:
          "Une page web claire et professionnelle pour présenter votre activité et recevoir des demandes.",
        idealFor:
          "Un professionnel qui souhaite une présence en ligne simple et rassurante.",
        included: [
          "Cadrage",
          "Page responsive",
          "Services, zone et appel à l’action",
          "Intégration des contenus fournis",
          "Contact et SEO essentiel",
          "Une série de corrections",
        ],
        result:
          "Vous possédez une page claire et orientée vers la prise de contact.",
        terms:
          "Offre de lancement limitée. Le périmètre, le délai et les frais techniques sont précisés au devis.",
        excluded: [
          "Domaine, hébergement ou outils payants",
          "Identité complète, boutique ou espace membre",
          "Modifications illimitées et maintenance",
        ],
        service: "creation_site",
      },
      {
        slug: "site-vitrine",
        title: "Site vitrine complet",
        price: "À partir de 659 €",
        duration: "Sur devis",
        summary:
          "Un site structuré et rassurant pour présenter votre savoir-faire et développer votre visibilité locale.",
        idealFor:
          "Un artisan, indépendant ou TPE ayant besoin de plusieurs pages et d’une présence durable.",
        included: [
          "Cadrage et arborescence",
          "Plusieurs pages selon devis",
          "Design responsive",
          "Contenus validés",
          "Formulaire de contact",
          "Fondations SEO",
          "Mise en ligne",
        ],
        result:
          "Vous disposez d’un site professionnel conçu pour inspirer confiance et générer des contacts.",
        terms:
          "Le tarif dépend des pages, contenus, fonctions et délais. Acompte et calendrier au devis.",
        excluded: [
          "Hébergement et domaine sauf mention",
          "Logo, photos, boutique et fonctions avancées",
          "Garantie de positionnement ou maintenance illimitée",
        ],
        service: "creation_site",
      },
    ],
  },
  {
    title: "Services complémentaires",
    description:
      "Des interventions ciblées pour professionnaliser vos outils et vos contenus.",
    offers: [
      {
        slug: "maintenance-site",
        title: "Maintenance de site",
        price: "49 € / mois",
        duration: "Abonnement mensuel",
        summary:
          "Un suivi mensuel pour garder votre site à jour et traiter les petites modifications courantes.",
        idealFor:
          "Un client dont le site est compatible avec le périmètre défini.",
        included: [
          "Vérification du fonctionnement",
          "Mises à jour courantes",
          "Contrôle des sauvegardes selon la solution",
          "Petites modifications dans la limite contractuelle",
          "Signalement des anomalies",
        ],
        result: "Votre site bénéficie d’un suivi régulier.",
        terms:
          "Le volume, les délais et la résiliation sont précisés au contrat ou au devis.",
        excluded: [
          "Refonte ou nouvelle fonction",
          "Hébergement, domaine et licences",
          "Récupération après piratage",
        ],
        service: "creation_site",
      },
      {
        slug: "email-professionnel",
        title: "Adresse email professionnelle",
        price: "60 €",
        duration: "Jusqu’à 1 heure",
        summary:
          "Une adresse au nom de votre activité, configurée sur votre appareil et prête à être utilisée.",
        idealFor:
          "Un professionnel souhaitant remplacer une adresse personnelle par une adresse liée à son domaine.",
        included: [
          "Vérification de la solution",
          "Création guidée",
          "Configuration sur un appareil",
          "Test d’envoi et réception",
          "Signature simple",
        ],
        result: "L’adresse est opérationnelle et vous savez l’utiliser.",
        terms:
          "Vous devez disposer du domaine, des accès et d’un service compatible.",
        excluded: [
          "Domaine, hébergement ou abonnement",
          "Migration complète ou récupération d’accès",
          "Plusieurs utilisateurs ou appareils",
        ],
        service: "formation_outils",
      },
      {
        slug: "optimisation-photos",
        title: "Optimisation de photos fournies",
        price: "70 €",
        duration: "Lot défini avant commande",
        summary:
          "Des images plus propres, homogènes et adaptées au web ou aux réseaux sociaux.",
        idealFor:
          "Un professionnel disposant de photos exploitables à améliorer.",
        included: [
          "Sélection du lot convenu",
          "Recadrage et redressement",
          "Lumière, contraste et couleurs",
          "Harmonisation",
          "Export et livraison numérique",
        ],
        result:
          "Vous recevez des photos cohérentes et prêtes pour les supports convenus.",
        terms:
          "Le nombre, le format et l’usage sont confirmés avant commande. Vous garantissez détenir les droits.",
        excluded: [
          "Prise de vue ou retouche complexe",
          "Achat de photos ou impression",
          "Restauration garantie d’une photo trop dégradée",
        ],
        service: "visibilite",
      },
    ],
  },
];

export const professionalOffers = professionalGroups.flatMap(
  (group) => group.offers,
);

const administrativeExclusions = [
  "Conseil juridique, fiscal, comptable, médical ou social spécialisé",
  "Signature ou validation à votre place",
  "Garantie de réponse, de délai ou d’acceptation par un organisme",
];
const administrativeTerms =
  "Vous fournissez les informations et validez personnellement chaque déclaration et engagement. Le périmètre et le montant total sont confirmés avant le rendez-vous. Toute intervention supplémentaire fait l’objet de votre accord préalable.";
export const administrativeOffers: CommercialOffer[] = [
  {
    slug: "coup-de-pouce-administratif",
    title: "Coup de pouce administratif",
    price: "55 €",
    duration: "1 heure",
    summary: "Un courrier ou une démarche précise à débloquer ensemble.",
    idealFor:
      "Comprendre un courrier, préparer une réponse ou remplir un formulaire.",
    included: [
      "Lecture et explication du courrier",
      "Liste des justificatifs utiles",
      "Préparation guidée de la réponse ou du formulaire",
      "Vérification avec vous avant envoi",
    ],
    result: "Vous comprenez la demande et savez quelle suite lui donner.",
    terms:
      administrativeTerms +
      " Une demi-heure supplémentaire acceptée est facturée 27,50 €.",
    excluded: administrativeExclusions,
    service: "demarches_administratives",
  },
  {
    slug: "dossier-serenite",
    title: "Dossier Sérénité",
    price: "89 €",
    duration: "Jusqu’à 1 h 30",
    summary: "Réunir et organiser les pièces d’un dossier, étape par étape.",
    idealFor: "Un dossier CAF, Ameli, retraite ou France Titres à préparer.",
    included: [
      "Point sur la demande et les pièces attendues",
      "Tri des documents que vous fournissez",
      "Identification des pièces manquantes",
      "Préparation ou saisie guidée dans le temps inclus",
      "Liste des prochaines étapes",
    ],
    result:
      "Votre dossier est organisé et les éléments restant à réunir sont identifiés.",
    terms:
      administrativeTerms +
      " Un dossier principal ; suivi ultérieur non inclus.",
    excluded: administrativeExclusions,
    service: "demarches_administratives",
  },
  {
    slug: "suivi-serenite",
    title: "Suivi Sérénité",
    price: "129 €",
    duration: "Jusqu’à 2 h 30 au total",
    summary:
      "Préparer votre dossier et faire le point après une première réponse.",
    idealFor: "Une démarche qui nécessite plusieurs étapes et un suivi limité.",
    included: [
      "Préparation d’un dossier avec vous",
      "Liste des actions et justificatifs",
      "Un rendez-vous de suivi de 30 minutes compris dans le temps total",
      "Lecture de la réponse et préparation de la prochaine étape",
    ],
    result:
      "Vous disposez d’une feuille de route et d’un point de suivi personnalisé.",
    terms:
      administrativeTerms +
      " Temps total partagé entre préparation et suivi, à utiliser sous 2 mois. Sans réponse de l’organisme, le suivi permet un point d’avancement ; pas de relances illimitées.",
    excluded: administrativeExclusions,
    service: "demarches_administratives",
  },
  {
    slug: "organisation-administrative",
    title: "Organisation administrative à domicile",
    price: "99 €",
    duration: "Jusqu’à 2 heures",
    summary:
      "Retrouver vos papiers et mettre en place un classement facile à maintenir.",
    idealFor: "Des courriers, factures et documents difficiles à retrouver.",
    included: [
      "Tri avec vous d’un volume convenu au préalable",
      "Classement par catégories",
      "Repérage des courriers à traiter",
      "Méthode simple pour les prochains documents",
    ],
    result:
      "Les documents traités sont accessibles et vous disposez d’une méthode de classement.",
    terms:
      administrativeTerms +
      " Fournitures non incluses. Aucun document n’est jeté sans votre validation.",
    excluded: [
      ...administrativeExclusions,
      "Archivage complet sans limite de volume",
    ],
    service: "demarches_administratives",
  },
];

// Compatibilité avec les pages existantes : les offres numériques restent inchangées.
export const individualOffers = individualDigitalOffers;
