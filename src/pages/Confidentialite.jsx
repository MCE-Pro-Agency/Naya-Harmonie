import { ChevronDown, Eye, Lock, Shield } from 'lucide-react';
import { useState } from 'react';

export default function Confidentialite() {
  const [country, setCountry] = useState('france');
  const [expandedSection, setExpandedSection] = useState(null);

  const toggle = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const contentFR = {
    title: 'Politique de Confidentialité',
    subtitle: 'Naya Harmonie - France',
    intro: 'Votre confidentialité est importante. Découvrez comment nous protégeons vos données.',
    sections: [
      {
        id: 'responsible',
        title: "1. Responsable du traitement des données",
        content: `
          <p><strong>Nom :</strong> Naya Harmonie</p>
          <p><strong>Responsable :</strong> Mariame Coulibaly</p>
          <p><strong>Email :</strong> mariame.coulibaly@yahoo.fr</p>
          <p>Naya Harmonie est responsable du traitement de vos données personnelles conformément à la loi Informatique et Libertés et au RGPD.</p>
        `
      },
      {
        id: 'data-collected',
        title: "2. Données personnelles collectées",
        content: `
          <p>Lors de votre visite et réservation, nous collectons :</p>
          <ul>
            <li><strong>Identité :</strong> Prénom, nom</li>
            <li><strong>Contact :</strong> Email, téléphone</li>
            <li><strong>Localisation :</strong> Pays (France ou Sénégal)</li>
            <li><strong>Données de réservation :</strong> Service choisi, date, profil</li>
            <li><strong>Message :</strong> Informations additionnelles (optionnel)</li>
            <li><strong>Données techniques :</strong> Adresse IP, cookies, comportement de navigation</li>
          </ul>
        `
      },
      {
        id: 'purpose',
        title: "3. Finalités du traitement",
        content: `
          <p>Vos données sont utilisées pour :</p>
          <ul>
            <li>Traiter votre demande de réservation</li>
            <li>Vous envoyer un email de confirmation</li>
            <li>Vous contacter en cas de besoin</li>
            <li>Améliorer nos services</li>
            <li>Vous envoyer des informations sur nos services (avec consentement)</li>
            <li>Respecter les obligations légales</li>
          </ul>
        `
      },
      {
        id: 'legal-basis',
        title: "4. Base légale du traitement",
        content: `
          <p>Le traitement de vos données repose sur :</p>
          <ul>
            <li><strong>Consentement :</strong> Vous avez consenti au traitement de vos données (formulaire)</li>
            <li><strong>Contrat :</strong> Le traitement est nécessaire pour exécuter nos services</li>
            <li><strong>Obligation légale :</strong> Dans les cas requis par la loi</li>
            <li><strong>Intérêts légitimes :</strong> Pour améliorer nos services et sécurité</li>
          </ul>
        `
      },
      {
        id: 'recipients',
        title: "5. Partage des données",
        content: `
          <p>Vos données sont partagées avec :</p>
          <ul>
            <li><strong>Calendly :</strong> Pour gérer vos réservations</li>
            <li><strong>Resend :</strong> Pour envoyer vos emails de confirmation</li>
            <li><strong>Autorités :</strong> Si requis par la loi</li>
          </ul>
          <p>Aucune donnée n'est vendue à des tiers. Vos données ne sont jamais commercialisées.</p>
        `
      },
      {
        id: 'retention',
        title: "6. Durée de conservation",
        content: `
          <p><strong>Données de réservation :</strong> Conservées 3 ans après la dernière interaction</p>
          <p><strong>Données techniques :</strong> Conservées 12 mois</p>
          <p><strong>Emails marketing :</strong> Jusqu'à votre désinscription</p>
          <p>Passé ce délai, vos données sont supprimées de manière sécurisée.</p>
        `
      },
      {
        id: 'rights',
        title: "7. Vos droits",
        content: `
          <p>Conformément au RGPD, vous avez le droit de :</p>
          <ul>
            <li><strong>Accès :</strong> Accéder à vos données personnelles</li>
            <li><strong>Rectification :</strong> Corriger vos données</li>
            <li><strong>Suppression :</strong> Demander la suppression de vos données</li>
            <li><strong>Portabilité :</strong> Récupérer vos données dans un format lisible</li>
            <li><strong>Opposition :</strong> Vous opposer au traitement de vos données</li>
            <li><strong>Limitation :</strong> Limiter le traitement de vos données</li>
          </ul>
          <p>Pour exercer ces droits, contactez : <strong>mariame.coulibaly@yahoo.fr</strong></p>
        `
      },
      {
        id: 'security',
        title: "8. Sécurité des données",
        content: `
          <p>Vos données sont protégées par :</p>
          <ul>
            <li>Chiffrement SSL (HTTPS) lors de la transmission</li>
            <li>Accès restreint aux données (Mariame uniquement)</li>
            <li>Serveurs sécurisés</li>
            <li>Conformité RGPD</li>
          </ul>
          <p><strong>Important :</strong> Malgré ces mesures, aucune transmission sur Internet n'est 100% sécurisée. Vous avez la responsabilité de garder vos identifiants confidentiels.</p>
        `
      },
      {
        id: 'cookies',
        title: "9. Cookies",
        content: `
          <p>Notre site utilise des cookies pour :</p>
          <ul>
            <li>Mémoriser vos préférences</li>
            <li>Analyser l'utilisation du site</li>
            <li>Améliorer votre expérience</li>
          </ul>
          <p>Vous pouvez refuser les cookies via les paramètres de votre navigateur. Certains cookies sont essentiels et ne peuvent être refusés.</p>
        `
      },
      {
        id: 'changes',
        title: "10. Modifications de cette politique",
        content: `
          <p>Naya Harmonie peut modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour.</p>
          <p>Votre utilisation continue du site après les modifications constitue votre acceptation de la nouvelle politique.</p>
        `
      },
      {
        id: 'contact',
        title: "11. Nous contacter",
        content: `
          <p>Pour toute question concernant votre confidentialité :</p>
          <p><strong>Email :</strong> mariame.coulibaly@yahoo.fr</p>
          <p>Vous pouvez également contacter la CNIL (Commission Nationale Informatique et Libertés) : <strong>www.cnil.fr</strong></p>
        `
      }
    ]
  };

  const contentSN = {
    title: 'Politique de Confidentialité',
    subtitle: 'Naya Harmonie - Sénégal',
    intro: 'Votre confidentialité est importante. Découvrez comment nous protégeons vos données.',
    sections: [
      {
        id: 'responsible',
        title: "1. Responsable du traitement",
        content: `
          <p><strong>Naya Harmonie - Mariame Coulibaly</strong></p>
          <p><strong>Email :</strong> mariame.coulibaly@yahoo.fr</p>
        `
      },
      {
        id: 'data-collected',
        title: "2. Données collectées",
        content: `
          <p>Lors de votre réservation, nous collectons :</p>
          <ul>
            <li>Prénom et nom</li>
            <li>Email et téléphone</li>
            <li>Informations de réservation</li>
          </ul>
        `
      },
      {
        id: 'purpose',
        title: "3. Utilisation des données",
        content: `
          <p>Vos données sont utilisées pour :</p>
          <ul>
            <li>Traiter votre demande</li>
            <li>Vous envoyer un email de confirmation</li>
            <li>Vous contacter si nécessaire</li>
          </ul>
        `
      },
      {
        id: 'security',
        title: "4. Sécurité",
        content: `
          <p>Vos données sont stockées de manière sécurisée et confidentielle.</p>
          <p>Aucune donnée n'est partagée avec des tiers sans votre consentement.</p>
        `
      },
      {
        id: 'rights',
        title: "5. Vos droits",
        content: `
          <p>Vous avez le droit de :</p>
          <ul>
            <li>Accéder à vos données</li>
            <li>Demander leur modification</li>
            <li>Demander leur suppression</li>
          </ul>
          <p>Contactez : mariame.coulibaly@yahoo.fr</p>
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

          <p className="text-ivoire/80 text-lg mb-8 reveal">{content.intro}</p>

          <div className="flex gap-4 reveal">
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

      {/* Info Cards */}
      {country === 'france' && (
        <section className="py-12 bg-ivoire border-b border-sable">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 bg-ivoire-cream rounded-2xl border border-sauge-200 reveal" style={{ background: '#EEF1E6' }}>
                <Lock className="w-8 h-8 text-sauge-700 mb-3" />
                <h3 className="font-serif text-lg text-encre mb-2">Sécurisé</h3>
                <p className="text-sm text-encre-muted">Chiffrement SSL et serveurs sécurisés</p>
              </div>
              <div className="p-6 bg-ivoire-cream rounded-2xl border border-rose-200 reveal" style={{ background: '#EEF1E6' }}>
                <Shield className="w-8 h-8 text-rose-700 mb-3" />
                <h3 className="font-serif text-lg text-encre mb-2">Conforme RGPD</h3>
                <p className="text-sm text-encre-muted">Respect de la loi française</p>
              </div>
              <div className="p-6 bg-ivoire-cream rounded-2xl border border-sauge-200 reveal" style={{ background: '#EEF1E6' }}>
                <Eye className="w-8 h-8 text-sauge-700 mb-3" />
                <h3 className="font-serif text-lg text-encre mb-2">Transparent</h3>
                <p className="text-sm text-encre-muted">Vous savez toujours comment vos données sont utilisées</p>
              </div>
            </div>
          </div>
        </section>
      )}

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
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}