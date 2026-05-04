import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function MentionsLegales() {
  const [country, setCountry] = useState('france');
  const [expandedSection, setExpandedSection] = useState(null);

  const toggle = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const contentFR = {
    title: 'Mentions Légales',
    subtitle: 'Naya Harmonie - France',
    sections: [
      {
        id: 'publisher',
        title: "1. Éditeur du site",
        content: `
          <p><strong>Nom de l'entreprise :</strong> Naya Harmonie</p>
          <p><strong>Statut :</strong> Micro-entrepreneur</p>
          <p><strong>Responsable :</strong> Mariame Coulibaly</p>
          <p><strong>Email :</strong> mariame.coulibaly@yahoo.fr</p>
          <p><strong>Pays :</strong> France</p>
          <p><strong>Activité :</strong> Coaching en bien-être, sexothérapie et accompagnement féminin</p>
        `
      },
      {
        id: 'hosting',
        title: "2. Hébergement du site",
        content: `
          <p><strong>Hébergeur :</strong> [À définir]</p>
          <p><strong>Adresse :</strong> [À définir]</p>
          <p><strong>Téléphone :</strong> [À définir]</p>
          <p>Le site est hébergé par un prestataire technique situé en France ou en Europe, conformément à la réglementation RGPD.</p>
        `
      },
      {
        id: 'intellectual',
        title: "3. Propriété intellectuelle",
        content: `
          <p>L'ensemble du contenu présenté sur le site (textes, images, logos, vidéos, etc.) est la propriété de Naya Harmonie ou de ses partenaires.</p>
          <p>Toute reproduction, représentation ou utilisation sans autorisation écrite préalable est interdite, sous peine de poursuites judiciaires.</p>
          <p>Le logo et la marque Naya Harmonie sont protégés et ne peuvent être utilisés sans consentement écrit.</p>
        `
      },
      {
        id: 'liability',
        title: "4. Limitation de responsabilité",
        content: `
          <p>Naya Harmonie s'efforce d'assurer l'exactitude des informations présentes sur le site. Cependant, elle ne peut être tenue responsable des erreurs, omissions ou inexactitudes.</p>
          <p>Les conseils proposés ne remplacent jamais un avis médical ou un suivi thérapeutique professionnel. Naya Harmonie ne peut être tenue responsable de tout préjudice résultant de l'utilisation des informations du site.</p>
          <p>L'accès au site est interrompu ou suspendu sans préavis pour des raisons de maintenance ou de force majeure.</p>
        `
      },
      {
        id: 'hyperlinks',
        title: "5. Hyperliens",
        content: `
          <p>Le site peut contenir des liens vers d'autres sites. Naya Harmonie ne peut être tenue responsable du contenu de ces sites externes.</p>
          <p>Pour toute demande de création de lien vers le site de Naya Harmonie, veuillez nous contacter.</p>
        `
      },
      {
        id: 'contact',
        title: "6. Nous contacter",
        content: `
          <p>Pour toute question concernant ces mentions légales, veuillez contacter :</p>
          <p><strong>Email :</strong> mariame.coulibaly@yahoo.fr</p>
          <p>Nous vous répondrons sous 48 heures.</p>
        `
      }
    ]
  };

  const contentSN = {
    title: 'Mentions Légales',
    subtitle: 'Naya Harmonie - Sénégal',
    sections: [
      {
        id: 'publisher',
        title: "1. Éditeur du site",
        content: `
          <p><strong>Nom de l'entreprise :</strong> Naya Harmonie</p>
          <p><strong>Responsable :</strong> Mariame Coulibaly</p>
          <p><strong>Email :</strong> mariame.coulibaly@yahoo.fr</p>
          <p><strong>Pays :</strong> Sénégal</p>
          <p><strong>Activité :</strong> Coaching en bien-être, sexothérapie et accompagnement féminin</p>
        `
      },
      {
        id: 'hosting',
        title: "2. Hébergement du site",
        content: `
          <p><strong>Hébergeur :</strong> [À définir]</p>
          <p>Le site est hébergé par un prestataire technique conforme aux normes de protection des données.</p>
        `
      },
      {
        id: 'intellectual',
        title: "3. Propriété intellectuelle",
        content: `
          <p>L'ensemble du contenu du site (textes, images, logos, etc.) appartient à Naya Harmonie.</p>
          <p>Toute reproduction ou utilisation sans autorisation préalable est interdite.</p>
        `
      },
      {
        id: 'liability',
        title: "4. Limitation de responsabilité",
        content: `
          <p>Les informations présentées sur le site sont à titre informatif. Elles ne remplacent pas un avis médical ou professionnel.</p>
          <p>Naya Harmonie ne peut être tenue responsable de tout dommage résultant de l'utilisation du site.</p>
        `
      },
      {
        id: 'contact',
        title: "5. Nous contacter",
        content: `
          <p><strong>Email :</strong> mariame.coulibaly@yahoo.fr</p>
          <p>Vous pouvez nous contacter pour toute question concernant ces mentions légales.</p>
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

          {/* Sélecteur Pays */}
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

      {/* Contenu */}
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