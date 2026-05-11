import {
  ArrowRight,
  Award,
  Calendar,
  Clock,
  Heart, Leaf,
  MessageCircle,
  Quote,
  Sparkles,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section
        id="top"
        className="relative min-h-screen overflow-hidden bg-sauge-900 text-ivoire pt-24 lg:pt-0 grain"
      >
        <svg
          className="absolute top-20 right-10 w-32 h-32 lg:w-56 lg:h-56 opacity-20 z-10"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M100 20 Q60 60 60 110 Q60 160 100 180 Q140 160 140 110 Q140 60 100 20"
            stroke="#E8B4B8"
            strokeWidth="1"
          />
          <path d="M100 30 Q70 70 75 120" stroke="#E8B4B8" strokeWidth="0.8" />
          <path d="M100 30 Q130 70 125 120" stroke="#E8B4B8" strokeWidth="0.8" />
        </svg>

        <div className="relative z-20 w-full px-6 lg:px-10 min-h-screen flex items-center py-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">

            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-8 animate-fade-in opacity-0">
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[0.95] tracking-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
                De l'harmonie naît
                <br />
                <span className="italic text-rose-300">l'épanouissement</span>
              </h1>

              <p className="text-base lg:text-lg leading-relaxed text-ivoire/80 max-w-xl mb-10 animate-fade-up opacity-0" style={{ animationDelay: '0.3s' }}>
                Coaching holistique pour retrouver votre féminité et renforcer votre couple. Reconnectez-vous à votre corps, votre intimité — et cultivez la sérénité dans votre relation.
              </p>

              <div className="flex flex-wrap gap-4 mb-10 animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
                <Link
                  to="/reservation"
                  className="bg-ivoire text-sauge-900 px-8 py-4 rounded-full text-sm font-medium tracking-wide inline-flex items-center gap-3 hover:shadow-2xl hover:shadow-rose-300/30 hover:-translate-y-0.5 transition-all group"
                >
                  <Sparkles className="w-4 h-4 text-rose-700 group-hover:rotate-12 transition-transform" />
                  Premier échange offert
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#approche"
                  className="px-8 py-4 rounded-full text-sm font-medium border border-ivoire/30 text-ivoire hover:bg-ivoire/10 transition-all inline-flex items-center gap-2"
                >
                  Découvrir mon approche
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-ivoire/15 animate-fade-up opacity-0" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-rose-300" />
                  <span className="text-xs text-ivoire/70">Certifiée IPHM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-rose-300" />
                  <span className="text-xs text-ivoire/70">100+ femmes accompagnées</span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <Clock className="w-5 h-5 text-rose-300" />
                  <span className="text-xs text-ivoire/70">Coaching à distance</span>
                </div>
              </div>
            </div>

            <div
              className="lg:col-span-6 order-1 lg:order-2 relative animate-slide-right opacity-0 flex justify-center lg:justify-start"
              style={{ animationDelay: '0.2s' }}
            >
              <div
                className="relative w-full max-w-sm lg:max-w-md lg:translate-x-36"
                style={{ aspectRatio: '4 / 5.4' }}
              >
                <div className="absolute inset-0 rounded-[160px_160px_20px_20px] overflow-hidden border-[3px] border-rose-300/40 shadow-2xl">
                  <img
                    src="./images/couple4.jpg"
                    alt="Couple complice"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sauge-900/30 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-ivoire px-6 py-4 rounded-2xl shadow-2xl max-w-[220px] z-10 animate-float">
                  <Quote className="w-4 h-4 text-rose-300 mb-1" />
                  <p className="font-serif italic text-sauge-900 text-sm leading-snug">
                    Cultivez l'amour et la sérénité
                  </p>
                  <div className="mt-2 flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-300"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sauge-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-700"></span>
                  </div>
                </div>

                <div
                  className="absolute -top-4 -right-4 lg:-right-8 bg-rose-300/95 backdrop-blur px-4 py-3 rounded-full shadow-xl z-10 rotate-6 animate-float"
                  style={{ animationDelay: '0.5s' }}
                >
                  <span className="text-xs font-medium text-bordeaux tracking-wider uppercase">
                    ★ France · Sénégal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#piliers"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2 animate-fade-in opacity-0 group"
          style={{ animationDelay: '0.7s' }}
          aria-label="Faire défiler"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivoire/60">Découvrir</span>
          <div className="relative w-4 h-6 border border-ivoire/40 rounded-full">
            <div className="absolute left-1/2 top-1.5 -translate-x-1/2 w-1 h-1 bg-rose-300 rounded-full animate-scroll-dot"></div>
          </div>
        </a>
      </section>

      {/* ============== MARQUEE ============== */}
      <section className="bg-ivoire-cream border-y border-sable py-5 overflow-hidden" style={{ background: '#EEF1E6' }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-12 pr-12 shrink-0">
              {['Sexothérapie', 'Bien-être féminin', 'Harmonie de couple', 'Ménopause', 'Plantes naturelles'].map((item, i) => (
                <div key={i} className="flex items-center gap-12">
                  <span className="font-serif italic text-2xl text-sauge-700">{item}</span>
                  <span className="text-rose-500 text-xs">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============== PILIERS ============== */}
      <section id="piliers" className="py-24 lg:py-36 bg-ivoire">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-20 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-rose-700 font-medium mb-4 inline-block">
              — Trois piliers
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] text-encre">
              Un accompagnement
              <br />
              <span className="italic text-sauge-700">tout en douceur</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <article className="reveal group">
              <div className="card-img aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                <img src="./images/couple.jpg" alt="Couple complice" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-bordeaux/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-ivoire/90 backdrop-blur rounded-full">
                  <span className="text-xs font-medium text-rose-700 tracking-wide">01 / Couple</span>
                </div>
              </div>
              <h3 className="font-serif text-3xl font-medium text-rose-700 italic mb-3">Harmonie du couple</h3>
              <p className="text-encre-muted leading-relaxed mb-4">
                Conseils et outils pour renforcer la complicité, raviver le désir, communiquer mieux et retrouver l'équilibre dans votre relation.
              </p>
              <Link to="/reservation" className="text-sm font-medium text-sauge-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                En savoir plus
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            <article className="reveal md:mt-16 group">
              <div className="card-img aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                <img src="./images/energie.jpg" alt="Séance de coaching" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-sauge-900/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-ivoire/90 backdrop-blur rounded-full">
                  <span className="text-xs font-medium text-sauge-700 tracking-wide">02 / Bien-être</span>
                </div>
              </div>
              <h3 className="font-serif text-3xl font-medium text-sauge-700 italic mb-3">Plantes &amp; bien-être</h3>
              <p className="text-encre-muted leading-relaxed mb-4">
                Des astuces et produits naturels — moringa, baobab, karité, bissap — pour soutenir votre santé hormonale et votre énergie au quotidien.
              </p>
              <Link to="/boutique" className="text-sm font-medium text-sauge-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Découvrir la boutique
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>

            <article className="reveal group">
              <div className="card-img aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                <img src="/images/homme.jpg" alt="Bienveillance" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-ivoire/90 backdrop-blur rounded-full">
                  <span className="text-xs font-medium text-rose-700 tracking-wide">03 / Sérénité</span>
                </div>
              </div>
              <h3 className="font-serif text-3xl font-medium text-rose-700 italic mb-3">Bienveillance</h3>
              <p className="text-encre-muted leading-relaxed mb-4">
                Cultivez la paix intérieure et la confiance en soi — un espace d'écoute, de sororité et d'accueil sans jugement pour avancer à votre rythme.
              </p>
              <a href="#approche" className="text-sm font-medium text-sauge-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Mon approche
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ============== À PROPOS / APPROCHE ============== */}
      <section id="approche" className="py-24 lg:py-36 relative overflow-hidden" style={{ background: '#EEF1E6' }}>
        <svg className="absolute -left-20 top-20 w-80 h-80 opacity-10 text-sauge-700" viewBox="0 0 200 200" fill="currentColor" aria-hidden="true">
          <path d="M100 10 C120 40 140 60 160 80 C140 100 130 130 100 150 C70 130 60 100 40 80 C60 60 80 40 100 10 Z" />
        </svg>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 reveal">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img src="./images/profil.jpeg" alt="Mariame en séance" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 reveal">
              <span className="text-xs uppercase tracking-[0.3em] text-rose-700 font-medium mb-4 inline-block">
                — Mon approche
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] text-encre mb-8">
                Une philosophie
                <br />
                <span className="italic text-sauge-700">holistique &amp; naturelle</span>
              </h2>
              <p className="dropcap text-encre-soft leading-[1.85] mb-6 text-base lg:text-lg">
                Femme, épouse et maman de trois enfants, j'accompagne celles qui souhaitent retrouver leur équilibre intime, hormonal et émotionnel. Mon approche allie écoute bienveillante, conseils naturels et outils concrets pour traverser chaque étape de la vie féminine — de l'épanouissement intime à la traversée de la ménopause.
              </p>
              <p className="text-encre-soft leading-[1.85] mb-10 text-base lg:text-lg">
                Certifiée par l'IPHM, je propose un accompagnement à distance, confidentiel et personnalisé, pensé pour les femmes mariées, les hommes mariées et les couples qui souhaitent cultiver une relation épanouie et durable.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {[
                  { title: 'Bienveillance', desc: "Un espace d'écoute sans jugement", icon: Heart, color: 'rose' },
                  { title: 'Confidentialité', desc: 'Discrétion absolue, à distance', icon: Award, color: 'sauge' },
                  { title: 'Naturel', desc: 'Plantes, rituels, sagesse ancestrale', icon: Leaf, color: 'sauge' },
                  { title: 'Sororité', desc: 'Entre femmes, on se comprend', icon: Users, color: 'rose' },
                ].map((v, i) => {
                  const Icon = v.icon;
                  const colorClass = v.color === 'rose' ? 'bg-rose-300/40 text-rose-700' : 'bg-sauge-100 text-sauge-700';
                  return (
                    <div key={i} className="flex gap-4 items-start">
                      <div className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-serif text-xl text-encre mb-1">{v.title}</p>
                        <p className="text-sm text-encre-muted leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-4">
                {/* Bouton principal */}
                <Link
                  to="/reservation"
                  className="btn-primary px-8 py-4 rounded-full text-sm font-medium tracking-wide inline-flex items-center gap-3"
                >
                  <span>Découvrir mes services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Bouton certificats avec dropdown */}
                <div className="relative group">
                  <button className="px-8 py-4 rounded-full text-sm font-medium border border-sauge-700 text-sauge-700 hover:bg-sauge-700 hover:text-white transition-all inline-flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Mes certifications
                  </button>
                  <div className="absolute bottom-full left-0 mb-2 w-64 bg-white rounded-2xl shadow-xl border border-sable opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-20">
                    <a
                      href="/images/certificat-reussite.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-4 hover:bg-sauge-100 transition-colors text-sm text-encre"
                    >
                      <Award className="w-4 h-4 text-sauge-700" />
                      Sexualite
                    </a>
                    <a
                      href="/images/certificat_menopause.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-4 hover:bg-rose-300/20 transition-colors text-sm text-encre border-t border-sable"
                    >
                      <Award className="w-4 h-4 text-rose-700" />
                      Menopaause
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section id="services" className="py-24 lg:py-36 bg-ivoire">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 reveal">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-rose-700 font-medium mb-4 inline-block">
                — Coaching
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] text-encre">
                Quatre chemins
                <br />
                <span className="italic text-sauge-700">vers votre équilibre</span>
              </h2>
            </div>
            <p className="text-encre-muted leading-relaxed max-w-md">
              Chaque accompagnement est personnalisé selon votre situation, vos besoins et votre rythme. Premier échange offert pour faire connaissance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <article className="reveal lg:col-span-2 bg-sauge-900 text-ivoire rounded-3xl overflow-hidden group">
              <div className="grid md:grid-cols-2">
                <div className="card-img aspect-[4/3] md:aspect-auto">
                  <img src="./images/coach.jpg" alt="Sexothérapie" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-rose-300 font-serif italic text-sm">N°01</span>
                    <span className="h-px w-8 bg-rose-300"></span>
                    <span className="text-xs uppercase tracking-wider text-rose-300">À la une</span>
                  </div>
                  <h3 className="font-serif text-3xl lg:text-4xl font-medium mb-4">Sexothérapie</h3>
                  <p className="text-ivoire/75 leading-relaxed mb-6">
                    Pour réveiller votre désir, explorer votre intimité en confiance, lever les blocages et retrouver une sexualité épanouie — seule ou en couple.
                  </p>
                  <div className="flex items-center gap-4 mb-6 text-sm">
                    <span className="text-rose-300">3 séances · 1h</span>
                    <span className="text-ivoire/40">·</span>
                    <span className="text-ivoire/70">À distance</span>
                  </div>
                  <Link to="/reservation" className="text-rose-300 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Réserver
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>

            <article className="reveal bg-rose-300/15 rounded-3xl overflow-hidden p-8 lg:p-10 group hover:bg-rose-300/25 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <span className="text-rose-700 font-serif italic text-sm">N°02</span>
                <div className="w-14 h-14 rounded-full bg-rose-300 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-ivoire" />
                </div>
              </div>
              <h3 className="font-serif text-3xl font-medium text-encre mb-3">Harmonie de couple</h3>
              <p className="text-encre-muted leading-relaxed mb-6">
                Conseils pour raviver la complicité, mieux communiquer et bâtir une relation durable et sereine.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-rose-700 font-medium">Pack 4 séances</span>
                <Link to="/reservation" className="text-encre underline decoration-rose-300 decoration-2 underline-offset-4 hover:text-rose-700 transition-colors">
                  Découvrir
                </Link>
              </div>
            </article>

            <article className="reveal bg-sauge-100 rounded-3xl overflow-hidden p-8 lg:p-10 group hover:bg-sauge-300/30 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <span className="text-sauge-700 font-serif italic text-sm">N°03</span>
                <div className="w-14 h-14 rounded-full bg-sauge-700 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-ivoire" />
                </div>
              </div>
              <h3 className="font-serif text-3xl font-medium text-encre mb-3">Pré-ménopause &amp; Ménopause</h3>
              <p className="text-encre-muted leading-relaxed mb-6">
                Accompagnement pour traverser ces étapes en douceur — équilibre hormonal, libido, énergie, sommeil.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-sauge-700 font-medium">Suivi 3 mois</span>
                <Link to="/reservation" className="text-encre underline decoration-sauge-300 decoration-2 underline-offset-4 hover:text-sauge-700 transition-colors">
                  Découvrir
                </Link>
              </div>
            </article>

            <article className="reveal lg:col-span-2 border border-sable rounded-3xl overflow-hidden p-8 lg:p-12 grid md:grid-cols-3 gap-8 items-center" style={{ background: '#EEF1E6' }}>
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sauge-700 font-serif italic text-sm">N°04</span>
                  <span className="h-px w-8 bg-sauge-700"></span>
                  <span className="text-xs uppercase tracking-wider text-sauge-700">Bien-être global</span>
                </div>
                <h3 className="font-serif text-3xl lg:text-4xl font-medium text-encre mb-4">Bien-être féminin</h3>
                <p className="text-encre-muted leading-relaxed mb-6 max-w-xl">
                  Reconnectez-vous à votre corps, votre cycle, votre énergie féminine. Un parcours holistique mêlant rituels naturels, plantes, et travail sur soi pour une féminité rayonnante au quotidien.
                </p>
                <Link to="/reservation" className="btn-primary px-7 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2">
                  <span>Prendre rendez-vous</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src="./images/bien-etre.jpg" alt="Bien-être féminin" className="w-full h-full object-cover" />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============== TÉMOIGNAGES ============== */}
      <section className="py-24 lg:py-36 bg-bordeaux text-ivoire relative overflow-hidden grain">
        <svg className="absolute top-10 right-10 w-32 h-32 opacity-10" viewBox="0 0 100 100" fill="#E8B4B8" aria-hidden="true">
          <path d="M30 30 Q20 30 20 50 L20 70 L40 70 L40 50 Q40 30 30 30 Z M70 30 Q60 30 60 50 L60 70 L80 70 L80 50 Q80 30 70 30 Z" />
        </svg>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-rose-300 font-medium mb-4 inline-block">
              — Elles témoignent
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] max-w-3xl mx-auto">
              Des femmes,
              <br />
              <span className="italic text-rose-300">des histoires</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Mariame m'a aidée à retrouver confiance en moi et en mon couple. Son écoute et ses conseils naturels ont changé ma vie.", name: 'Awa M.', loc: 'Dakar · Couple', initial: 'A', color: 'rose' },
              { text: "Pour la ménopause, son accompagnement holistique m'a permis de traverser cette étape avec sérénité. Une vraie sœur de cœur.", name: 'Fatou D.', loc: 'Paris · Ménopause', initial: 'F', color: 'sauge' },
              { text: "Avec mon mari, on a redécouvert notre intimité. Approche douce, jamais gênante, toujours bienveillante.", name: 'Khady & Ibou', loc: 'Thiès · Couple', initial: 'K', color: 'rose' },
            ].map((t, i) => (
              <article key={i} className={`reveal ${i === 1 ? 'md:mt-12' : ''}`}>
                <Quote className="w-8 h-8 text-rose-300 mb-4" />
                <p className="font-serif text-xl lg:text-2xl italic leading-relaxed mb-6 text-ivoire/95">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-ivoire/20">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-serif text-lg ${t.color === 'rose' ? 'bg-rose-300 text-bordeaux' : 'bg-sauge-300 text-sauge-900'}`}>
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-ivoire/60">{t.loc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CTA RDV ============== */}
      <section className="py-24 lg:py-36 bg-ivoire relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="bg-rose-300/40 rounded-[40px] p-10 lg:p-20 text-center relative overflow-hidden reveal">
            <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-sauge-300/30" />
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-rose-500/30" />

            <div className="relative z-10">
              <span className="text-xs uppercase tracking-[0.3em] text-bordeaux font-medium mb-4 inline-block">
                — Premier pas
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] text-bordeaux mb-6 max-w-2xl mx-auto">
                Prête à retrouver
                <br />
                <span className="italic">votre équilibre&nbsp;?</span>
              </h2>
              <p className="text-bordeaux/80 leading-relaxed max-w-xl mx-auto mb-10 text-base lg:text-lg">
                Le premier échange est <strong>offert</strong> et confidentiel. Faites connaissance, posez toutes vos questions, et découvrez si nous sommes faites pour avancer ensemble.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/reservation" className="btn-primary px-10 py-5 rounded-full text-sm font-medium tracking-wide inline-flex items-center gap-3">
                  <Calendar className="w-4 h-4" />
                  <span>Prendre rendez-vous</span>
                </Link>
                <a
                  href="https://wa.me/221777302999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 rounded-full text-sm font-medium border border-bordeaux/30 text-bordeaux hover:bg-bordeaux hover:text-ivoire transition-all inline-flex items-center gap-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
