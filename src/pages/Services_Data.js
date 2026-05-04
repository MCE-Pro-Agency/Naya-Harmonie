// Données complètes des 4 services (sans prix)
export const SERVICES_DATA = {
  sexo: {
    id: 'sexo',
    label: 'Sexothérapie',
    icon: '💚',
    color: 'rose',
    description: 'Un accompagnement personnalisé pour aider les femmes à mieux comprendre leur sexualité, se reconnecter à leur corps, retrouver confiance et vivre une vie intime épanouie.',
    pourquoi: 'Parce que la sexualité est encore un sujet tabou pour beaucoup de femmes. Cet accompagnement permet de mieux comprendre son corps, dépasser les blocages, retrouver confiance et vivre une sexualité épanouie.',
    forfaits: [
      {
        name: 'Forfait Éveil',
        sessions: '1 séance (1h)',
        description: 'Écoute bienveillante, échange sans tabou, premiers conseils personnalisés. Idéal pour faire le point sur sa situation.'
      },
      {
        name: 'Forfait Harmonie',
        sessions: '2 séances (1h chacune)',
        description: 'Accompagnement personnalisé, travail sur la confiance, la libido et le bien-être intime. Idéal pour avancer concrètement.',
        highlight: true
      },
      {
        name: 'Forfait Renaissance',
        sessions: '3 séances (1h chacune)',
        description: 'Accompagnement complet, libération des blocages, reconnexion à sa féminité et à son plaisir. Idéal pour une transformation profonde.'
      }
    ],
    conseils: [
      'Bienveillance, écoute et absence de jugement',
      'Créer un espace de confiance et de confidentialité',
      'Proposer un accompagnement progressif',
      'Ne pas remplacer un suivi médical ou thérapeutique'
    ],
    disclaimer: 'Cet accompagnement est basé sur du coaching bien-être et ne remplace pas un suivi médical ou thérapeutique.'
  },

  couple: {
    id: 'couple',
    label: 'Harmonie de Couple',
    icon: '💕',
    color: 'rose',
    description: 'Un accompagnement personnalisé pour aider les couples à renforcer leur complicité, raviver le désir et cultiver une relation épanouie et durable.',
    pourquoi: 'Parce que la relation de couple mérite d\'être nourrie et cultivée. Cet accompagnement permet de mieux communiquer, redécouvrir l\'intimité et bâtir une relation de confiance et de sérénité.',
    forfaits: [
      {
        name: 'Forfait Éveil',
        sessions: '1 séance (1h)',
        description: 'Écoute bienveillante, identification des enjeux principaux, premiers conseils pour raviver la flamme. Idéal pour faire le point ensemble.'
      },
      {
        name: 'Forfait Harmonie',
        sessions: '2 séances (1h chacune)',
        description: 'Accompagnement pour améliorer la communication, raviver le désir et la complicité. Idéal pour des résultats concrets.',
        highlight: true
      },
      {
        name: 'Forfait Renaissance',
        sessions: '3 séances (1h chacune)',
        description: 'Accompagnement complet, outils pratiques pour transformer votre relation, retrouver l\'intimité et la confiance mutuelle. Idéal pour une renaissance du couple.'
      }
    ],
    conseils: [
      'Créer un espace de confiance et de bienveillance',
      'Favoriser la communication authentique',
      'Proposer des outils concrets et progressifs',
      'Respecter le rythme de chaque couple'
    ],
    disclaimer: 'Cet accompagnement est basé sur du coaching bien-être et ne remplace pas une thérapie de couple si nécessaire.'
  },

  meno: {
    id: 'meno',
    label: 'Pré/Ménopause',
    icon: '🌿',
    color: 'sauge',
    description: 'Un accompagnement personnalisé pour aider les femmes à mieux comprendre leur corps, vivre sereinement les changements liés à la ménopause et retrouver leur bien-être intime, leur confiance et leur féminité.',
    pourquoi: 'Mieux comprendre votre corps, retrouver confiance, améliorer votre bien-être intime et votre qualité de vie. La ménopause est une étape naturelle qui mérite d\'être vécue avec sérénité.',
    forfaits: [
      {
        name: 'Forfait Éveil',
        sessions: '1 séance (1h)',
        description: 'Écoute bienveillante, conseils personnalisés et premières recommandations naturelles. Idéal pour commencer en douceur.'
      },
      {
        name: 'Forfait Harmonie',
        sessions: '2 séances (1h chacune)',
        description: 'Suivi personnalisé, conseils approfondis (libido, énergie, sécheresse…), recommandations naturelles. Idéal pour un vrai suivi et des résultats concrets.',
        highlight: true
      },
      {
        name: 'Forfait Renaissance',
        sessions: '3 séances (1h chacune)',
        description: 'Accompagnement complet, plan naturel personnalisé, bien-être intime et émotionnel. Idéal pour une transformation en profondeur.'
      }
    ],
    conseils: [
      'Positionnement : bien-être naturel et accompagnement féminin',
      'Créer une relation de confiance avec vos clientes',
      'Proposer un suivi personnalisé',
      'Ne pas remplacer un suivi médical mais accompagner en complément'
    ],
    disclaimer: 'Cet accompagnement est basé sur des conseils en bien-être naturel et ne remplace pas un suivi médical.'
  },

  bien: {
    id: 'bien',
    label: 'Bien-être Féminin',
    icon: '✨',
    color: 'sauge',
    description: 'Un accompagnement holistique pour aider les femmes à se reconnecter à leur corps, leur cycle, leur énergie féminine et cultiver une féminité rayonnante au quotidien.',
    pourquoi: 'Retrouver l\'harmonie avec votre corps, votre cycle et votre féminité. Cet accompagnement permet de cultiver une relation bienveillante avec soi-même, son corps et son énergie féminine.',
    forfaits: [
      {
        name: 'Forfait Éveil',
        sessions: '1 séance (1h)',
        description: 'Écoute bienveillante, conseils personnalisés et introduction aux rituels naturels. Idéal pour commencer votre transformation.'
      },
      {
        name: 'Forfait Harmonie',
        sessions: '2 séances (1h chacune)',
        description: 'Suivi personnalisé, rituel naturels adaptés à votre cycle, reconnexion à votre féminité. Idéal pour des changements durables.',
        highlight: true
      },
      {
        name: 'Forfait Renaissance',
        sessions: '3 séances (1h chacune)',
        description: 'Accompagnement complet, plan personnalisé mêlant rituels naturels, plantes et travail sur soi pour une féminité rayonnante. Idéal pour une transformation profonde.'
      }
    ],
    conseils: [
      'Positionnement : bien-être holistique et féminin',
      'Créer une relation de confiance et de sororité',
      'Proposer des rituels concrets et accessibles',
      'Célébrer la féminité dans toutes ses dimensions'
    ],
    disclaimer: 'Cet accompagnement est basé sur des conseils en bien-être naturel et n\'est pas un substitut à un suivi médical.'
  }
};

export const SERVICES_LIST = [
  SERVICES_DATA.sexo,
  SERVICES_DATA.couple,
  SERVICES_DATA.meno,
  SERVICES_DATA.bien
];