import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Heart, Leaf, Sparkles, ArrowRight, ArrowLeft, Check, MessageCircle, Award, Shield } from 'lucide-react';

const TYPES = [
  { id: 'sexo', label: 'Sexothérapie', desc: "Réveiller le désir, explorer l'intimité en confiance", icon: Heart, color: 'rose' },
  { id: 'couple', label: 'Harmonie de couple', desc: 'Complicité, communication, raviver la flamme', icon: Sparkles, color: 'rose' },
  { id: 'meno', label: 'Pré/Ménopause', desc: 'Équilibre hormonal, énergie, sérénité', icon: Leaf, color: 'sauge' },
  { id: 'bien', label: 'Bien-être féminin', desc: 'Reconnexion à son corps et sa féminité', icon: Heart, color: 'sauge' },
];

const PROFILS = [
  { id: 'femme', label: 'Femme seule', icon: '♀', desc: 'Je viens seule pour mon accompagnement' },
  { id: 'couple', label: 'En couple', icon: '♀ + ♂', desc: 'Nous venons en couple' },
];

const CRENEAUX = ['09:00', '10:30', '14:00', '15:30', '17:00', '18:30'];

export default function Reservation() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    type: '', profil: '', date: '', creneau: '',
    nom: '', email: '', tel: '', message: '',
  });
  const [done, setDone] = useState(false);

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.nom || !data.email || !data.tel) return;
    setDone(true);
    // Ici on enverrait à l'API en vrai
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const canContinue =
    (step === 1 && data.type) ||
    (step === 2 && data.profil) ||
    (step === 3 && data.date && data.creneau);

  return (
    <>
      {/* HERO RDV */}
      <section className="pt-32 pb-12 bg-sauge-900 text-ivoire relative overflow-hidden grain">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-300 font-medium mb-4 inline-block reveal">
            — Réservation
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1] mb-6 reveal">
            Premier échange
            <br />
            <span className="italic text-rose-300">offert &amp; sans engagement</span>
          </h1>
          <p className="text-ivoire/80 text-lg leading-relaxed max-w-2xl mx-auto reveal">
            30 minutes pour faire connaissance, explorer vos besoins et voir comment nous pouvons cheminer ensemble. Confidentialité absolue.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10 pt-6 border-t border-ivoire/15 reveal">
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
              <span className="text-sm text-ivoire/80">À distance · 30 min</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORPS RÉSERVATION */}
      <section className="py-16 lg:py-24 bg-ivoire">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          {!done ? (
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
                  <p className="text-xs text-encre-muted uppercase tracking-wider">
                    Étape {step} / 4
                  </p>
                  <p className="text-xs text-sauge-700 font-medium">
                    {step === 1 && 'Accompagnement'}
                    {step === 2 && 'Profil'}
                    {step === 3 && 'Date & créneau'}
                    {step === 4 && 'Coordonnées'}
                  </p>
                </div>
              </div>

              <div className="p-8 lg:p-10">
                {/* ÉTAPE 1 */}
                {step === 1 && (
                  <div className="animate-fade-in">
                    <h2 className="font-serif text-3xl md:text-4xl text-encre mb-2">
                      Quel <span className="italic text-sauge-700">accompagnement</span> ?
                    </h2>
                    <p className="text-sm text-encre-muted mb-8">
                      Choisissez ce qui vous parle le plus. Vous pourrez en discuter avec Mariame lors du premier échange.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {TYPES.map((t) => {
                        const Icon = t.icon;
                        return (
                          <button
                            key={t.id}
                            onClick={() => setData({ ...data, type: t.id })}
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

                {/* ÉTAPE 2 */}
                {step === 2 && (
                  <div className="animate-fade-in">
                    <h2 className="font-serif text-3xl md:text-4xl text-encre mb-2">
                      Vous êtes <span className="italic text-sauge-700">?</span>
                    </h2>
                    <p className="text-sm text-encre-muted mb-2">
                      Mon accompagnement s'adresse aux femmes et aux couples uniquement.
                    </p>
                    <p className="text-xs text-rose-700 italic mb-8">
                      ⚠ Les hommes seuls ne sont pas pris en charge.
                    </p>
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

                {/* ÉTAPE 3 */}
                {step === 3 && (
                  <div className="animate-fade-in">
                    <h2 className="font-serif text-3xl md:text-4xl text-encre mb-2">
                      Quand <span className="italic text-sauge-700">échangeons-nous</span> ?
                    </h2>
                    <p className="text-sm text-encre-muted mb-8">
                      Premier échange offert · 30 minutes · à distance.
                    </p>

                    <label className="block mb-2 text-sm font-medium text-encre">
                      Date souhaitée
                    </label>
                    <div className="relative mb-6">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-encre-muted pointer-events-none" />
                      <input
                        type="date"
                        value={data.date}
                        onChange={(e) => setData({ ...data, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-sable focus:border-sauge-500 focus:ring-2 focus:ring-sauge-500/20 outline-none transition-all bg-ivoire"
                      />
                    </div>

                    <label className="block mb-3 text-sm font-medium text-encre">
                      Créneau préféré
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {CRENEAUX.map((c) => (
                        <button
                          key={c}
                          onClick={() => setData({ ...data, creneau: c })}
                          className={`py-3.5 rounded-xl border-2 text-sm transition-all ${
                            data.creneau === c
                              ? 'border-sauge-500 bg-sauge-100 text-sauge-900 font-medium shadow-md'
                              : 'border-sable bg-ivoire text-encre hover:border-sauge-300'
                          }`}
                        >
                          <Clock className="w-3 h-3 inline mr-1.5 -mt-0.5" />
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* ÉTAPE 4 */}
                {step === 4 && (
                  <form onSubmit={handleSubmit} className="animate-fade-in">
                    <h2 className="font-serif text-3xl md:text-4xl text-encre mb-2">
                      Vos <span className="italic text-sauge-700">coordonnées</span>
                    </h2>
                    <p className="text-sm text-encre-muted mb-8">
                      Pour vous confirmer le rendez-vous dans les 24h.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <label className="block mb-1.5 text-sm font-medium text-encre">
                          Prénom <span className="text-rose-700">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Marie"
                          value={data.nom}
                          onChange={(e) => setData({ ...data, nom: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-sable focus:border-sauge-500 focus:ring-2 focus:ring-sauge-500/20 outline-none transition-all bg-ivoire"
                          required
                        />
                      </div>

                      <div>
                        <label className="block mb-1.5 text-sm font-medium text-encre">
                          Email <span className="text-rose-700">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="marie@email.com"
                          value={data.email}
                          onChange={(e) => setData({ ...data, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-sable focus:border-sauge-500 focus:ring-2 focus:ring-sauge-500/20 outline-none transition-all bg-ivoire"
                          required
                        />
                      </div>

                      <div>
                        <label className="block mb-1.5 text-sm font-medium text-encre">
                          Téléphone (WhatsApp de préférence) <span className="text-rose-700">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="+221 77 ..."
                          value={data.tel}
                          onChange={(e) => setData({ ...data, tel: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-sable focus:border-sauge-500 focus:ring-2 focus:ring-sauge-500/20 outline-none transition-all bg-ivoire"
                          required
                        />
                      </div>

                      <div>
                        <label className="block mb-1.5 text-sm font-medium text-encre">
                          Un message ? (optionnel)
                        </label>
                        <textarea
                          placeholder="Partagez ce qui vous amène, vos attentes..."
                          rows="4"
                          value={data.message}
                          onChange={(e) => setData({ ...data, message: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-sable focus:border-sauge-500 focus:ring-2 focus:ring-sauge-500/20 outline-none transition-all bg-ivoire resize-none"
                        />
                      </div>

                      <p className="text-xs text-encre-muted leading-relaxed pt-2">
                        En soumettant ce formulaire, vous acceptez d'être contactée par Mariame pour fixer votre rendez-vous. Vos données restent strictement confidentielles.
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
                    onClick={handleSubmit}
                    disabled={!data.nom || !data.email || !data.tel}
                    className="btn-primary px-8 py-3 rounded-full text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2"
                  >
                    <span>Confirmer la demande</span>
                    <Check className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* SUCCESS */
            <div className="bg-ivoire-cream rounded-3xl shadow-xl border border-sable p-10 lg:p-16 text-center reveal" style={{ background: '#EEF1E6' }}>
              <div className="w-24 h-24 rounded-full bg-sauge-100 flex items-center justify-center mx-auto mb-6 animate-fade-up">
                <Check className="w-12 h-12 text-sauge-700" strokeWidth={2.5} />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-encre mb-4 animate-fade-up">
                Demande envoyée <span className="text-sauge-700">🌿</span>
              </h2>
              <p className="text-encre-muted text-lg leading-relaxed max-w-md mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Merci <strong className="text-encre">{data.nom}</strong> ! Mariame vous contactera dans les <strong className="text-sauge-700">24h</strong> pour confirmer votre rendez-vous du <strong className="text-sauge-700">{new Date(data.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</strong> à <strong className="text-sauge-700">{data.creneau}</strong>.
              </p>

              <div className="bg-ivoire rounded-2xl p-5 max-w-md mx-auto mb-8 text-left animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-xs uppercase tracking-wider text-encre-muted mb-3">Récapitulatif</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-encre-muted">Accompagnement</span>
                    <span className="text-encre font-medium">{TYPES.find((t) => t.id === data.type)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-encre-muted">Profil</span>
                    <span className="text-encre font-medium">{PROFILS.find((p) => p.id === data.profil)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-encre-muted">Date</span>
                    <span className="text-encre font-medium">{new Date(data.date).toLocaleDateString('fr-FR')} · {data.creneau}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <Link to="/" className="btn-primary px-7 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2">
                  <span>Retour à l'accueil</span>
                </Link>
                <a
                  href="https://wa.me/221777302999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 rounded-full text-sm font-medium border-2 border-sauge-500 text-sauge-700 hover:bg-sauge-500 hover:text-ivoire transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Me contacter sur WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* INFO RAPIDE */}
          {!done && (
            <div className="mt-10 grid sm:grid-cols-3 gap-4 reveal">
              <div className="text-center p-5">
                <div className="w-12 h-12 rounded-full bg-rose-300/30 flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-5 h-5 text-rose-700" />
                </div>
                <p className="font-serif text-lg text-encre mb-1">30 minutes</p>
                <p className="text-xs text-encre-muted">Premier échange offert</p>
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
          )}
        </div>
      </section>
    </>
  );
}
