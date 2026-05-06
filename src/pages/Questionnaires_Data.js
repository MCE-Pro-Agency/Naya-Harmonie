// Questionnaires spécifiques à chaque thème de coaching

export const QUESTIONNAIRES_DATA = {
  sexo: {
    titre: "Sexothérapie - Questionnaire d'accompagnement",
    description: "Réveiller le désir, explorer l'intimité en confiance",
    questions: [
      {
        id: 'nom',
        label: 'Nom',
        type: 'text',
        placeholder: 'Dupont',
        required: true,
        group: 'infos'
      },
      {
        id: 'prenom',
        label: 'Prénom',
        type: 'text',
        placeholder: 'Marie',
        required: true,
        group: 'infos'
      },
      {
        id: 'telephone',
        label: 'Téléphone (WhatsApp)',
        type: 'tel',
        placeholder: '+221 77 ... ou +33 6 ...',
        required: true,
        group: 'infos'
      },
      {
        id: 'mail',
        label: 'Email',
        type: 'email',
        placeholder: 'marie@email.com',
        required: true,
        group: 'infos'
      },
      {
        id: 'age',
        label: 'Âge',
        type: 'number',
        placeholder: '35',
        required: true,
        group: 'infos'
      },
      {
        id: 'duree_baisse_desir',
        label: 'Depuis combien de temps ressentez-vous une baisse du désir ?',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'moins_1an', label: 'Moins d\'un an' },
          { value: '1-2ans', label: '1 à 2 ans' },
          { value: 'plus_2ans', label: 'Plus de 2 ans' }
        ],
        required: true,
        group: 'theme'
      },
      {
        id: 'affecte_couple',
        label: 'Cette situation affecte-t-elle votre relation de couple ?',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'oui', label: 'Oui' },
          { value: 'non', label: 'Non' },
          { value: 'so', label: 'Sans objet (célibataire)' }
        ],
        required: true,
        group: 'theme'
      },
      {
        id: 'preoccupations',
        label: 'Avez-vous des préoccupations spécifiques concernant votre intimité ?',
        type: 'textarea',
        placeholder: 'Décrivez vos préoccupations...',
        required: false,
        group: 'theme'
      },
      {
        id: 'difficultes_anterieures',
        label: 'Aviez-vous des difficultés sexuelles avant ?',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'oui', label: 'Oui' },
          { value: 'non', label: 'Non' },
          { value: 'pas_sur', label: 'Je ne suis pas sûr(e)' }
        ],
        required: true,
        group: 'theme'
      },
      {
        id: 'objectif_coaching',
        label: 'Quel est votre principal objectif pour ce coaching ?',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'retrouver_desir', label: 'Retrouver du désir' },
          { value: 'communication', label: 'Améliorer la communication' },
          { value: 'problematique_specifique', label: 'Résoudre une problématique spécifique' }
        ],
        required: true,
        group: 'theme'
      }
    ]
  },

  couple: {
    titre: "Harmonie de couple - Questionnaire d'accompagnement",
    description: "Complicité, communication, raviver la flamme",
    questions: [
      {
        id: 'nom',
        label: 'Nom',
        type: 'text',
        placeholder: 'Dupont',
        required: true,
        group: 'infos'
      },
      {
        id: 'prenom',
        label: 'Prénom',
        type: 'text',
        placeholder: 'Marie',
        required: true,
        group: 'infos'
      },
      {
        id: 'telephone',
        label: 'Téléphone (WhatsApp)',
        type: 'tel',
        placeholder: '+221 77 ... ou +33 6 ...',
        required: true,
        group: 'infos'
      },
      {
        id: 'mail',
        label: 'Email',
        type: 'email',
        placeholder: 'marie@email.com',
        required: true,
        group: 'infos'
      },
      {
        id: 'age',
        label: 'Âge',
        type: 'number',
        placeholder: '35',
        required: true,
        group: 'infos'
      },
      {
        id: 'situation_relationnelle',
        label: 'Situation relationnelle',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'marie', label: 'Marié(e)' },
          { value: 'concubinage', label: 'En concubinage' },
          { value: 'relation', label: 'En relation depuis plusieurs années' }
        ],
        required: true,
        group: 'theme'
      },
      {
        id: 'duree_tensions',
        label: 'Depuis combien de temps traversez-vous des tensions ?',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'moins_6mois', label: 'Moins de 6 mois' },
          { value: '6-12mois', label: '6 à 12 mois' },
          { value: 'plus_1an', label: 'Plus d\'1 an' }
        ],
        required: true,
        group: 'theme'
      },
      {
        id: 'principal_conflit',
        label: 'Quel est votre principal conflit ?',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'communication', label: 'Communication' },
          { value: 'confiance', label: 'Confiance' },
          { value: 'divergences_valeurs', label: 'Divergences de valeurs' },
          { value: 'manque_intimite', label: 'Manque d\'intimité' },
          { value: 'autre', label: 'Autre' }
        ],
        required: true,
        group: 'theme'
      },
      {
        id: 'accompagnement_anterieur',
        label: 'Avez-vous suivi un accompagnement de couple avant ?',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'oui', label: 'Oui' },
          { value: 'non', label: 'Non' }
        ],
        required: true,
        group: 'theme'
      },
      {
        id: 'priorite',
        label: 'Qu\'espérez-vous améliorer en priorité ?',
        type: 'textarea',
        placeholder: 'Décrivez vos attentes...',
        required: true,
        group: 'theme'
      }
    ]
  },

  meno: {
    titre: "Pré/Ménopause - Questionnaire d'accompagnement",
    description: "Équilibre hormonal, énergie, sérénité",
    questions: [
      {
        id: 'nom',
        label: 'Nom',
        type: 'text',
        placeholder: 'Dupont',
        required: true,
        group: 'infos'
      },
      {
        id: 'prenom',
        label: 'Prénom',
        type: 'text',
        placeholder: 'Marie',
        required: true,
        group: 'infos'
      },
      {
        id: 'telephone',
        label: 'Téléphone (WhatsApp)',
        type: 'tel',
        placeholder: '+221 77 ... ou +33 6 ...',
        required: true,
        group: 'infos'
      },
      {
        id: 'mail',
        label: 'Email',
        type: 'email',
        placeholder: 'marie@email.com',
        required: true,
        group: 'infos'
      },
      {
        id: 'age',
        label: 'Âge',
        type: 'number',
        placeholder: '45',
        required: true,
        group: 'infos'
      },
      {
        id: 'stade',
        label: 'Stade actuel',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'premenopause', label: 'Préménopause' },
          { value: 'menopause', label: 'Ménopause' },
          { value: 'postmenopause', label: 'Postménopause' }
        ],
        required: true,
        group: 'theme'
      },
      {
        id: 'duree_symptomes',
        label: 'Depuis combien de temps avez-vous des symptômes ?',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'moins_6mois', label: 'Moins de 6 mois' },
          { value: '6-12mois', label: '6 à 12 mois' },
          { value: 'plus_1an', label: 'Plus d\'1 an' }
        ],
        required: true,
        group: 'theme'
      },
      {
        id: 'symptomes_principaux',
        label: 'Quels symptômes vous impactent le plus ? (plusieurs réponses possibles)',
        type: 'checkbox',
        options: [
          { value: 'bouffees_chaleur', label: 'Bouffées de chaleur' },
          { value: 'sommeil', label: 'Troubles du sommeil' },
          { value: 'sautes_humeur', label: 'Sautes d\'humeur' },
          { value: 'energie', label: 'Baisse d\'énergie' },
          { value: 'tous', label: 'Tous les symptômes' }
        ],
        required: true,
        group: 'theme'
      },
      {
        id: 'suivi_medical',
        label: 'Avez-vous un suivi médical (gynécologue, homéopathe...) ?',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'oui', label: 'Oui' },
          { value: 'non', label: 'Non' }
        ],
        required: true,
        group: 'theme'
      },
      {
        id: 'qualite_vie',
        label: 'Votre qualité de vie est actuellement',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'fortement_impactee', label: 'Fortement impactée' },
          { value: 'moderement_impactee', label: 'Modérément impactée' },
          { value: 'peu_impactee', label: 'Peu impactée' }
        ],
        required: true,
        group: 'theme'
      },
      {
        id: 'besoin_principal',
        label: 'Quel est votre besoin principal ?',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'gerer_symptomes', label: 'Gérer les symptômes' },
          { value: 'retrouver_energie', label: 'Retrouver l\'énergie' },
          { value: 'rééquilibrer_hormones', label: 'Rééquilibrer les hormones naturellement' }
        ],
        required: true,
        group: 'theme'
      }
    ]
  },

  bien: {
    titre: "Bien-être féminin - Questionnaire d'accompagnement",
    description: "Reconnexion à son corps et sa féminité",
    questions: [
      {
        id: 'nom',
        label: 'Nom',
        type: 'text',
        placeholder: 'Dupont',
        required: true,
        group: 'infos'
      },
      {
        id: 'prenom',
        label: 'Prénom',
        type: 'text',
        placeholder: 'Marie',
        required: true,
        group: 'infos'
      },
      {
        id: 'telephone',
        label: 'Téléphone (WhatsApp)',
        type: 'tel',
        placeholder: '+221 77 ... ou +33 6 ...',
        required: true,
        group: 'infos'
      },
      {
        id: 'mail',
        label: 'Email',
        type: 'email',
        placeholder: 'marie@email.com',
        required: true,
        group: 'infos'
      },
      {
        id: 'age',
        label: 'Âge',
        type: 'number',
        placeholder: '35',
        required: true,
        group: 'infos'
      },
      {
        id: 'relation_corps',
        label: 'Comment décririez-vous votre relation à votre corps actuellement ?',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'harmonieuse', label: 'Harmonieuse' },
          { value: 'neutre', label: 'Neutre' },
          { value: 'difficile', label: 'Difficile' },
          { value: 'tres_difficile', label: 'Très difficile' }
        ],
        required: true,
        group: 'theme'
      },
      {
        id: 'raison_accompagnement',
        label: 'Qu\'est-ce qui vous amène à chercher un accompagnement ?',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'acceptation_corps', label: 'Acceptation du corps' },
          { value: 'reconnexion_emotionnelle', label: 'Reconnexion émotionnelle' },
          { value: 'estime_soi', label: 'Estime de soi' },
          { value: 'autre', label: 'Autre' }
        ],
        required: true,
        group: 'theme'
      },
      {
        id: 'antecedent',
        label: 'Avez-vous un antécédent spécifique ?',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'accouchement', label: 'Accouchement' },
          { value: 'trauma', label: 'Trauma' },
          { value: 'chirurgie', label: 'Chirurgie' },
          { value: 'aucun', label: 'Aucun particulier' }
        ],
        required: true,
        group: 'theme'
      },
      {
        id: 'domaine_interet',
        label: 'Quel domaine du bien-être vous intéresse le plus ?',
        type: 'select',
        options: [
          { value: '', label: 'Sélectionnez une option' },
          { value: 'cycle_feminin', label: 'Cycle féminin' },
          { value: 'sexualite', label: 'Sexualité' },
          { value: 'confiance_soi', label: 'Confiance en soi' },
          { value: 'image_corporelle', label: 'Image corporelle' }
        ],
        required: true,
        group: 'theme'
      },
      {
        id: 'objectif',
        label: 'Quel est votre objectif pour ce coaching ?',
        type: 'textarea',
        placeholder: 'Décrivez vos objectifs...',
        required: true,
        group: 'theme'
      }
    ]
  }
};