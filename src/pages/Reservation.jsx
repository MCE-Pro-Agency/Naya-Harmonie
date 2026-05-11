import { ArrowLeft, ArrowRight, Award, Check, Clock, Heart, Leaf, MessageCircle, Shield, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { QUESTIONNAIRES_DATA } from './Questionnaires_Data';
import { SERVICES_DATA } from './Services_Data';

const PAYS = [
  { id: 'senegal', label: 'Sénégal', code: 'SN', currency: 'FCFA' },
  { id: 'france', label: 'France', code: 'FR', currency: '€' },
];

const PROFILS = [
  { id: 'femme', label: 'Femme seule', icon: '♀', desc: 'Je viens seule pour mon accompagnement' },
  { id: 'homme', label: 'Homme seul', icon: '♂', desc: 'Je viens seul pour mon accompagnement' },
  { id: 'couple', label: 'En couple', icon: '♀ + ♂', desc: 'Nous venons en couple' },
];

const SERVICES_LIST = [
  { id: 'sexo', label: 'Sexothérapie', desc: "Réveiller le désir, explorer l'intimité en confiance", icon: Heart, color: 'rose', img: './images/sexualite.jpg' },
  { id: 'couple', label: 'Harmonie de couple', desc: 'Complicité, communication, raviver la flamme', icon: Sparkles, color: 'rose', img: './images/couple.jpg' },
  { id: 'meno', label: 'Pré/Ménopause', desc: 'Équilibre hormonal, énergie, sérénité', icon: Leaf, color: 'sauge', img: './images/menopose.jpg' },
  { id: 'bien', label: 'Bien-être féminin', desc: 'Reconnexion à son corps et sa féminité', icon: Heart, color: 'sauge', img: './images/bien-etre.jpg' },
];

export default function ReservationHeroCarrousel() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [data, setData] = useState({
    pays: '', type: '', profil: '',
    questionnaire: {}
  });

  // Auto-rotation du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % SERVICES_LIST.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  const nextService = () => setActiveService((prev) => (prev + 1) % SERVICES_LIST.length);
  const prevService = () => setActiveService((prev) => (prev - 1 + SERVICES_LIST.length) % SERVICES_LIST.length);

  const TYPES = [
    { id: 'sexo', label: 'Sexothérapie', desc: "Réveiller le désir, explorer l'intimité en confiance", icon: Heart, color: 'rose' },
    { id: 'couple', label: 'Harmonie de couple', desc: 'Complicité, communication, raviver la flamme', icon: Sparkles, color: 'rose' },
    { id: 'meno', label: 'Pré/Ménopause', desc: 'Équilibre hormonal, énergie, sérénité', icon: Leaf, color: 'sauge' },
    { id: 'bien', label: 'Bien-être féminin', desc: 'Reconnexion à son corps et sa féminité', icon: Heart, color: 'sauge' },
  ];

  // Récupérer le questionnaire du service choisi
  const currentQuestionnaire = data.type ? QUESTIONNAIRES_DATA[data.type] : null;

  // Vérifier les champs requis du questionnaire
  const areRequiredFieldsComplete = () => {
    if (!currentQuestionnaire) return false;

    return currentQuestionnaire.questions.every(q => {
      if (!q.required) return true;

      if (q.type === 'checkbox') {
        const selectedValues = data.questionnaire[q.id] || [];
        return Array.isArray(selectedValues) && selectedValues.length > 0;
      }

      const value = data.questionnaire[q.id];
      return value && value.toString().trim() !== '';
    });
  };

  // Gérer les changements de réponse
  const handleQuestionChange = (questionId, value, type) => {
    if (type === 'checkbox') {
      const current = data.questionnaire[questionId] || [];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      setData({
        ...data,
        questionnaire: { ...data.questionnaire, [questionId]: updated }
      });
    } else {
      setData({
        ...data,
        questionnaire: { ...data.questionnaire, [questionId]: value }
      });
    }
  };

  // ============================================================
  // HANDLERESERVER - APPELLE SUPABASE EDGE FUNCTION
  // ============================================================
  const handleReserver = async (e) => {
    e.preventDefault();
    if (!areRequiredFieldsComplete()) return;

    setLoading(true);

    try {
      console.log('📋 Envoi du questionnaire à Supabase...');

      // APPELER LA SUPABASE EDGE FUNCTION
      const response = await fetch(
        'https://xsggxgotuylifjsrjeml.supabase.co/functions/v1/submit-questionnaire',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzZ2d4Z290dXlsaWZqc3JqZW1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwOTY2NzgsImV4cCI6MjA5MzY3MjY3OH0.2XyUlME6gcJFKRaUq1yCPhSoBdY8vvTCelwgkYLOwl0'
          },
          body: JSON.stringify({
            questionnaire: data.questionnaire,
            pays: data.pays,
            type: data.type,
            profil: data.profil
          })
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de la réservation');
      }

      console.log('✅ Questionnaire soumis avec succès');
      console.log('📋 Booking ID:', result.bookingId);
      console.log('📅 Redirection vers Calendly...');

      // REDIRIGER VERS CALENDLY
      // OUVRIR CALENDLY DANS UN NOUVEL ONGLET
      if (result.calendlyUrl) {
        window.open(result.calendlyUrl, '_blank');
        setLoading(false);
        setStep(1);
        setData({ pays: '', type: '', profil: '', questionnaire: {} });
        alert('✅ Questionnaire envoyé avec succès !\n\nCalendly s\'ouvre dans un nouvel onglet pour choisir votre créneau.');
      } else {
        throw new Error('URL Calendly non reçue du serveur');
      }

    } catch (error) {
      console.error('❌ Erreur:', error);
      alert(`Erreur: ${error.message}`);
      setLoading(false);
    }
  };

  const canContinue =
    (step === 1 && data.pays) ||
    (step === 2 && data.type) ||
    (step === 3 && data.profil) ||
    (step === 4 && areRequiredFieldsComplete());

  const currentService = SERVICES_LIST[activeService];
  const currentServiceData = SERVICES_DATA[currentService.id];

  return (
    <>
      {/* HERO CARROUSEL - FULL WIDTH */}
      <section className="min-h-screen relative bg-ivoire overflow-hidden pt-24">
        {/* Carrousel Container */}
        <div className="relative w-full h-screen flex items-center">
          {/* Image Background */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={currentService.img}
              alt={currentService.label}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sauge-900/80 via-sauge-900/60 to-transparent" />
          </div>

          {/* Contenu */}
          <div className="relative z-10 w-full px-6 lg:px-10 max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-2 rounded-full bg-rose-300/30 text-rose-300 text-xs font-medium uppercase tracking-wider mb-6 reveal">
                Service {activeService + 1} / {SERVICES_LIST.length}
              </span>

              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-ivoire font-medium leading-[0.95] tracking-tight mb-6 reveal">
                {currentService.label}
              </h1>

              <p className="text-lg lg:text-xl text-ivoire/90 leading-relaxed mb-10 max-w-xl reveal">
                {currentServiceData.description}
              </p>

              {/* Carrousel Controls */}
              <div className="flex items-center gap-6 reveal">
                <button
                  onClick={prevService}
                  className="p-3 rounded-full bg-ivoire/20 hover:bg-ivoire/30 transition-colors"
                >
                  <ArrowLeft className="w-6 h-6 text-ivoire" />
                </button>

                <div className="flex gap-2">
                  {SERVICES_LIST.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveService(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === activeService ? 'w-8 bg-ivoire' : 'w-2 bg-ivoire/40'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextService}
                  className="p-3 rounded-full bg-ivoire/20 hover:bg-ivoire/30 transition-colors"
                >
                  <ArrowRight className="w-6 h-6 text-ivoire" />
                </button>
              </div>

              {/* Info Badge */}
              <div className="mt-12 pt-12 border-t border-ivoire/20 flex flex-wrap gap-x-8 gap-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-rose-300" />
                  <span className="text-sm text-ivoire/80">Certifiée IPHM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-rose-300" />
                  <span className="text-sm text-ivoire/80">100% confidentiel</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-rose-300" />
                  <span className="text-sm text-ivoire/80">À distance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULAIRE RÉSERVATION */}
      <section className="py-16 lg:py-24 bg-ivoire">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="bg-ivoire-cream rounded-3xl shadow-xl border border-sable overflow-hidden" style={{ background: '#EEF1E6' }}>
            {/* Progress */}
            <div className="px-8 pt-8 pb-6 border-b border-sable">
              <div className="flex items-center gap-2 mb-3">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                      n <= step ? 'bg-sauge-500' : 'bg-sable'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-encre-muted uppercase tracking-wider">Étape {step} / 4</p>
                <p className="text-xs text-sauge-700 font-medium">
                  {step === 1 && 'Localisation'}
                  {step === 2 && 'Accompagnement'}
                  {step === 3 && 'Profil'}
                  {step === 4 && 'Questionnaire'}
                </p>
              </div>
            </div>

            <div className="p-8 lg:p-10">
              {/* ÉTAPE 1 - PAYS */}
              {step === 1 && (
                <div className="animate-fade-in">
                  <h2 className="font-serif text-3xl md:text-4xl text-encre mb-2">
                    Où êtes-vous <span className="italic text-sauge-700">?</span>
                  </h2>
                  <p className="text-sm text-encre-muted mb-8">Cela nous permet d'adapter nos tarifs et créneaux à votre fuseau horaire.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {PAYS.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setData({ ...data, pays: p.id })}
                        className={`text-left p-6 rounded-2xl border-2 transition-all hover:-translate-y-0.5 ${
                          data.pays === p.id
                            ? 'border-sauge-500 bg-sauge-100 shadow-lg'
                            : 'border-sable bg-ivoire hover:border-sauge-300'
                        }`}
                      >
                        <p className="font-serif text-2xl text-sauge-700 mb-2">🌍</p>
                        <p className="font-serif text-xl text-encre mb-1">{p.label}</p>
                        <p className="text-xs text-encre-muted">{p.code} · {p.currency}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ÉTAPE 2 - SERVICE */}
              {step === 2 && (
                <div className="animate-fade-in">
                  <h2 className="font-serif text-3xl md:text-4xl text-encre mb-2">
                    Quel <span className="italic text-sauge-700">accompagnement</span> ?
                  </h2>
                  <p className="text-sm text-encre-muted mb-8">Choisissez ce qui vous parle le plus. Vous avez découvert les services ci-dessus.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {TYPES.map((t) => {
                      const Icon = t.icon;
                      return (
                        <button
                          key={t.id}
                          onClick={() => setData({ ...data, type: t.id, questionnaire: {} })}
                          className={`text-left p-5 rounded-2xl border-2 transition-all hover:-translate-y-0.5 ${
                            data.type === t.id
                              ? 'border-sauge-500 bg-sauge-100 shadow-lg'
                              : 'border-sable bg-ivoire hover:border-sauge-300'
                          }`}
                        >
                          <div
                            className={`w-11 h-11 rounded-full flex items-center justify-center mb-3 ${
                              t.color === 'rose'
                                ? 'bg-rose-300/40 text-rose-700'
                                : 'bg-sauge-100 text-sauge-700'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <p className="font-serif text-xl text-encre mb-1">{t.label}</p>
                          <p className="text-xs text-encre-muted leading-relaxed">{t.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ÉTAPE 3 - PROFIL */}
              {step === 3 && (
                <div className="animate-fade-in">
                  <h2 className="font-serif text-3xl md:text-4xl text-encre mb-2">
                    Vous êtes <span className="italic text-sauge-700">?</span>
                  </h2>
                  <p className="text-sm text-encre-muted mb-8">Choisissez le profil qui vous correspond.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {PROFILS.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setData({ ...data, profil: p.id })}
                        className={`p-8 rounded-2xl border-2 transition-all text-center hover:-translate-y-0.5 ${
                          data.profil === p.id
                            ? 'border-sauge-500 bg-sauge-100 shadow-lg'
                            : 'border-sable bg-ivoire hover:border-sauge-300'
                        }`}
                      >
                        <p className="font-serif text-4xl text-rose-700 mb-3">{p.icon}</p>
                        <p className="font-medium text-encre text-lg mb-1">{p.label}</p>
                        <p className="text-xs text-encre-muted">{p.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ÉTAPE 4 - QUESTIONNAIRE DYNAMIQUE */}
              {step === 4 && currentQuestionnaire && (
                <form onSubmit={handleReserver} className="animate-fade-in">
                  <h2 className="font-serif text-3xl md:text-4xl text-encre mb-2">
                    {currentQuestionnaire.titre}
                  </h2>
                  <p className="text-sm text-encre-muted mb-8">Remplissez ce questionnaire pour affiner votre accompagnement.</p>

                  <div className="space-y-6">
                    {/* Informations Personnelles - Section */}
                    <div>
                      <h3 className="font-medium text-lg text-encre mb-4 pb-3 border-b-2 border-sauge-200">
                        ℹ️ Informations Personnelles
                      </h3>
                      <div className="space-y-4">
                        {currentQuestionnaire.questions
                          .filter(q => q.group === 'infos')
                          .map(q => (
                            <div key={q.id}>
                              <label className="block mb-1.5 text-sm font-medium text-encre">
                                {q.label}
                                {q.required && <span className="text-rose-700">*</span>}
                              </label>
                              {q.type === 'text' || q.type === 'email' || q.type === 'tel' || q.type === 'number' ? (
                                <input
                                  type={q.type}
                                  placeholder={q.placeholder}
                                  value={data.questionnaire[q.id] || ''}
                                  onChange={(e) => handleQuestionChange(q.id, e.target.value, q.type)}
                                  className="w-full px-4 py-3.5 rounded-xl border-2 border-sable focus:border-sauge-500 focus:ring-2 focus:ring-sauge-500/20 outline-none transition-all bg-ivoire"
                                  required={q.required}
                                />
                              ) : null}
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Questions Spécifiques au Thème */}
                    <div>
                      <h3 className="font-medium text-lg text-encre mb-4 pb-3 border-b-2 border-rose-200">
                        💭 Questions relatives à votre accompagnement
                      </h3>
                      <div className="space-y-5">
                        {currentQuestionnaire.questions
                          .filter(q => q.group === 'theme')
                          .map(q => (
                            <div key={q.id}>
                              <label className="block mb-2.5 text-sm font-medium text-encre">
                                {q.label}
                                {q.required && <span className="text-rose-700">*</span>}
                              </label>

                              {/* Select */}
                              {q.type === 'select' && (
                                <select
                                  value={data.questionnaire[q.id] || ''}
                                  onChange={(e) => handleQuestionChange(q.id, e.target.value, 'select')}
                                  className="w-full px-4 py-3.5 rounded-xl border-2 border-sable focus:border-sauge-500 focus:ring-2 focus:ring-sauge-500/20 outline-none transition-all bg-ivoire text-encre"
                                  required={q.required}
                                >
                                  <option value="">-- Sélectionner une option --</option>
                                  {q.options.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                  ))}
                                </select>
                              )}

                              {/* Textarea */}
                              {q.type === 'textarea' && (
                                <textarea
                                  placeholder={q.placeholder}
                                  rows="4"
                                  value={data.questionnaire[q.id] || ''}
                                  onChange={(e) => handleQuestionChange(q.id, e.target.value, 'textarea')}
                                  className="w-full px-4 py-3.5 rounded-xl border-2 border-sable focus:border-sauge-500 focus:ring-2 focus:ring-sauge-500/20 outline-none transition-all bg-ivoire resize-none"
                                  required={q.required}
                                />
                              )}

                              {/* Checkbox */}
                              {q.type === 'checkbox' && (
                                <div className="space-y-2.5">
                                  {q.options.map(opt => (
                                    <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                                      <input
                                        type="checkbox"
                                        checked={(data.questionnaire[q.id] || []).includes(opt.value)}
                                        onChange={() => handleQuestionChange(q.id, opt.value, 'checkbox')}
                                        className="w-5 h-5 rounded border-2 border-sable accent-sauge-500 cursor-pointer"
                                      />
                                      <span className="text-sm text-encre group-hover:text-sauge-700 transition-colors">
                                        {opt.label}
                                      </span>
                                    </label>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                      </div>
                    </div>

                    <p className="text-xs text-encre-muted leading-relaxed pt-4 border-t border-sable">
                      📋 Vos réponses nous aident à mieux vous accompagner. Vos données restent strictement confidentielles.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Navigation footer */}
            <div className="px-8 lg:px-10 py-6 bg-ivoire border-t border-sable flex items-center justify-between">
              {step > 1 ? (
                <button
                  onClick={prev}
                  className="text-sm text-encre-muted hover:text-encre transition-colors flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour
                </button>
              ) : (
                <span />
              )}

              {step < 4 ? (
                <button
                  onClick={next}
                  disabled={!canContinue}
                  className="btn-primary px-8 py-3 rounded-full text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2"
                >
                  <span>Continuer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleReserver}
                  disabled={!areRequiredFieldsComplete() || loading}
                  className="btn-primary px-8 py-3 rounded-full text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2"
                >
                  <span>{loading ? 'Envoi...' : 'Réserver sur Calendly'}</span>
                  <Check className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* INFO RAPIDE */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4 reveal">
            <div className="text-center p-5">
              <div className="w-12 h-12 rounded-full bg-rose-300/30 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-5 h-5 text-rose-700" />
              </div>
              <p className="font-serif text-lg text-encre mb-1">Réunion</p>
              <p className="text-xs text-encre-muted">À distance</p>
            </div>
            <div className="text-center p-5">
              <div className="w-12 h-12 rounded-full bg-sauge-100 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-5 h-5 text-sauge-700" />
              </div>
              <p className="font-serif text-lg text-encre mb-1">Confidentiel</p>
              <p className="text-xs text-encre-muted">Discrétion absolue</p>
            </div>
            <div className="text-center p-5">
              <div className="w-12 h-12 rounded-full bg-rose-300/30 flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-5 h-5 text-rose-700" />
              </div>
              <p className="font-serif text-lg text-encre mb-1">À distance</p>
              <p className="text-xs text-encre-muted">Visio ou téléphone</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
