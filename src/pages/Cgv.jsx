import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function CGV() {
  const [country, setCountry] = useState('france');
  const [expandedSection, setExpandedSection] = useState(null);

  const toggle = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const contentFR = {
    title: 'Conditions Générales de Vente',
    subtitle: 'Naya Harmonie - France',
    sections: [
      {
        id: 'services',
        title: "1. Nos services",
        content: `
          <p>Naya Harmonie propose des services de coaching et d'accompagnement en :</p>
          <ul>
            <li>Sexothérapie et confiance intime</li>
            <li>Harmonie de couple et communication</li>
            <li>Accompagnement ménopause et bien-être</li>
            <li>Reconnexion féminine et féminité</li>
          </ul>
          <p>Les services sont dispensés par Mariame Coulibaly, coach certifiée IPHM.</p>
        `
      },
      {
        id: 'pricing',
        title: "2. Tarification",
        content: `
          <p>Les tarifs sont affichés sur le site et peuvent être modifiés sans préavis. Une modification sera communiquée avant la réservation.</p>
          <p>Les tarifs s'entendent TTC pour les clients en France et FCFA pour les clients au Sénégal.</p>
          <p>Des forfaits à 1, 2 ou 3 séances sont proposés selon les besoins.</p>
        `
      },
      {
        id: 'booking',
        title: "3. Réservation et paiement",
        content: `
          <p><strong>Prise de rendez-vous :</strong> Via Calendly, après remplissage du formulaire de contact.</p>
          <p><strong>Confirmé :</strong> Votre rendez-vous est confirmé après réception de votre demande et accord de Mariame.</p>
          <p><strong>Paiement :</strong> Le paiement s'effectue avant la séance via les moyens proposés (virement, PayPal, etc.).</p>
          <p>Aucune séance ne débutera sans validation du paiement.</p>
        `
      },
      {
        id: 'cancellation',
        title: "4. Annulation et remboursement",
        content: `
          <p><strong>Délai d'annulation :</strong> Toute annulation doit être effectuée au minimum 48h avant la séance.</p>
          <p><strong>Annulation client :</strong> Une annulation < 48h sera facturée intégralement.</p>
          <p><strong>Annulation Mariame :</strong> Une annulation de la part de Mariame donne droit à un report gratuit ou à un remboursement complet.</p>
          <p><strong>Forfaits :</strong> Les forfaits multi-séances ne sont pas remboursables mais peuvent être reportés.</p>
        `
      },
      {
        id: 'conduct',
        title: "5. Conditions de conduite",
        content: `
          <p>Le client s'engage à :</p>
          <ul>
            <li>Respecter la confidentialité des échanges</li>
            <li>Être ponctuel aux rendez-vous</li>
            <li>Adopter un comportement respectueux et bienveillant</li>
            <li>Ne pas être sous l'influence de substances</li>
          </ul>
          <p>Tout manquement à ces conditions peut justifier l'interruption de la séance sans remboursement.</p>
        `
      },
      {
        id: 'confidentiality',
        title: "6. Confidentialité",
        content: `
          <p>Toutes les informations partagées lors des séances sont strictement confidentielles.</p>
          <p>Mariame ne divulguera aucune information vous concernant sans votre consentement écrit, sauf obligation légale.</p>
        `
      },
      {
        id: 'disclaimer',
        title: "7. Avertissement médical",
        content: `
          <p><strong>Important :</strong> Les services proposés ne remplacent pas un suivi médical ou psychothérapeutique.</p>
          <p>En cas de problème de santé, il est recommandé de consulter un professionnel de santé qualifié.</p>
          <p>Mariame n'est pas médecin et ne diagnostique pas, ne traite pas et ne prescrit pas.</p>
        `
      },
      {
        id: 'liability',
        title: "8. Responsabilité",
        content: `
          <p>Naya Harmonie décline toute responsabilité pour les résultats ou effets des séances.</p>
          <p>Le client est responsable de ses propres décisions et actions suite aux conseils donnés.</p>
          <p>Mariame ne peut être tenue responsable de tout dommage résultant de l'utilisation ou non des conseils proposés.</p>
        `
      },
      {
        id: 'contact',
        title: "9. Nous contacter",
        content: `
          <p><strong>Email :</strong> mariame.coulibaly@yahoo.fr</p>
          <p>Pour toute question concernant ces CGV, n'hésitez pas à nous contacter.</p>
        `
      }
    ]
  };

  const contentSN = {
    title: 'Conditions Générales de Vente',
    subtitle: 'Naya Harmonie - Sénégal',
    sections: [
      {
        id: 'services',
        title: "1. Nos services",
        content: `
          <p>Services de coaching et d'accompagnement en bien-être féminin, sexothérapie, harmonie de couple et ménopause.</p>
          <p>Dispensés par Mariame Coulibaly, coach certifiée IPHM.</p>
        `
      },
      {
        id: 'pricing',
        title: "2. Tarification",
        content: `
          <p>Tarifs en FCFA pour les clients au Sénégal.</p>
          <p>Forfaits 1, 2 ou 3 séances disponibles.</p>
        `
      },
      {
        id: 'booking',
        title: "3. Réservation et paiement",
        content: `
          <p>Réservation via le formulaire en ligne et Calendly.</p>
          <p>Paiement avant la séance.</p>
        `
      },
      {
        id: 'cancellation',
        title: "4. Annulation",
        content: `
          <p>Annulation minimum 48h avant la séance.</p>
          <p>Annulation < 48h = forfait non remboursable.</p>
        `
      },
      {
        id: 'confidentiality',
        title: "5. Confidentialité",
        content: `
          <p>Tous les échanges sont strictement confidentiels.</p>
        `
      },
      {
        id: 'disclaimer',
        title: "6. Avertissement",
        content: `
          <p>Ces services ne remplacent pas un avis médical. Consultez un professionnel en cas de problème de santé.</p>
        `
      }
    ]
  };

  const content = country === 'france' ? contentFR : contentSN;

  return (
    <>
      <section className="pt-32 pb-12 bg-sauge-900 text-ivoire relative overflow-hidden grain">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex items-center gap-6 mb-8 reveal">
           
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1] mb-2 reveal">
                {content.title}
              </h1>
              <p className="text-rose-300 text-lg reveal">{content.subtitle}</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8 reveal">
            <button
              onClick={() => setCountry('france')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                country === 'france'
                  ? 'bg-rose-300 text-sauge-900'
                  : 'bg-ivoire/20 text-ivoire hover:bg-ivoire/30'
              }`}
            >
              🇫🇷 France
            </button>
            <button
              onClick={() => setCountry('senegal')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                country === 'senegal'
                  ? 'bg-rose-300 text-sauge-900'
                  : 'bg-ivoire/20 text-ivoire hover:bg-ivoire/30'
              }`}
            >
              🇸🇳 Sénégal
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ivoire">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="space-y-4">
            {content.sections.map((section) => (
              <div
                key={section.id}
                className="bg-ivoire-cream rounded-2xl border border-sable overflow-hidden transition-all reveal"
                style={{ background: '#EEF1E6' }}
              >
                <button
                  onClick={() => toggle(section.id)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-sauge-100 transition-colors"
                >
                  <h2 className="font-serif text-2xl text-encre text-left">{section.title}</h2>
                  <ChevronDown
                    className={`w-6 h-6 text-sauge-700 transition-transform ${
                      expandedSection === section.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedSection === section.id && (
                  <div className="px-8 py-6 border-t border-sable bg-ivoire text-encre prose prose-sm max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-rose-300/15 rounded-2xl border border-rose-300/30 text-center reveal">
            <p className="text-sm text-encre-muted leading-relaxed">
              En acceptant ces CGV, vous acceptez les conditions d'utilisation de nos services.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}