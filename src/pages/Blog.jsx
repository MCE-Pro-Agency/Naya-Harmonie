import { ArrowRight, Calendar, Clock, Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ARTICLES = [
  {
    id: 1,
    cat: 'menopause',
    catLabel: 'Ménopause',
    read: '5 min',
    date: '15 avril 2026',
    title: '5 plantes pour traverser la ménopause en douceur',
    desc: "Découvrez les alliées naturelles qui accompagnent les bouleversements hormonaux et apaisent les symptômes courants de la ménopause.",
    img: './images/menopose.jpg',
    featured: true,
  },
  {
    id: 2,
    cat: 'couple',
    catLabel: 'Couple',
    read: '7 min',
    date: '8 avril 2026',
    title: 'Raviver le désir après plusieurs années de mariage',
    desc: "Trois rituels simples mais puissants pour réveiller la complicité, redécouvrir l'autre et retrouver la magie des premiers temps.",
    img: './images/ensemble.jpg',
  },
  {
    id: 3,
    cat: 'bien-etre',
    catLabel: 'Bien-être',
    read: '4 min',
    date: '2 avril 2026',
    title: "Le moringa, l'arbre de vie des femmes",
    desc: "Pourquoi cette plante africaine ancestrale est-elle si précieuse pour la santé hormonale féminine et l'énergie au quotidien ?",
    img: './images/energie.jpg',
  },
  {
    id: 4,
    cat: 'sexualite',
    catLabel: 'Sexualité',
    read: '6 min',
    date: '25 mars 2026',
    title: 'Communiquer ses désirs sans tabou avec son partenaire',
    desc: "Comment ouvrir le dialogue sur l'intimité sans gêne, dans la bienveillance et le respect mutuel.",
    img: './images/sexualite.jpg',
  },
  {
    id: 5,
    cat: 'bien-etre',
    catLabel: 'Bien-être',
    read: '5 min',
    date: '18 mars 2026',
    title: 'Le rituel beauté au karité que toutes les femmes devraient connaître',
    desc: "Un soin ancestral du Sénégal pour nourrir la peau et les cheveux en profondeur. Recette transmise de génération en génération.",
    img: './images/bien.jpg',
  },
  {
    id: 6,
    cat: 'menopause',
    catLabel: 'Ménopause',
    read: '8 min',
    date: '10 mars 2026',
    title: 'Bouffées de chaleur : comprendre et apaiser naturellement',
    desc: "Les mécanismes hormonaux derrière les bouffées et les solutions naturelles qui ont fait leurs preuves.",
    img: './images/menopause2.jpg',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'Tous les articles' },
  { id: 'couple', label: 'Couple' },
  { id: 'menopause', label: 'Ménopause' },
  { id: 'bien-etre', label: 'Bien-être' },
  { id: 'sexualite', label: 'Sexualité' },
];

export default function Blog() {
  const [activeCat, setActiveCat] = useState('all');
  const [search, setSearch] = useState('');

  // Filtrage corrigé
  const filtered = ARTICLES.filter((article) => {
    // Filtre par catégorie
    const matchCategory = activeCat === 'all' || article.cat === activeCat;
    
    // Filtre par recherche
    const searchLower = search.toLowerCase().trim();
    const matchSearch = !searchLower || 
      article.title.toLowerCase().includes(searchLower) || 
      article.desc.toLowerCase().includes(searchLower);
    
    return matchCategory && matchSearch;
  });

  // Affiche l'article featured SEULEMENT quand on est sur "all" et sans recherche
  const showFeatured = activeCat === 'all' && search.trim() === '';
  const featured = showFeatured ? ARTICLES.find((a) => a.featured) : null;

  return (
    <>
      {/* HERO BLOG */}
      <section className="pt-32 pb-12 bg-sauge-900 text-ivoire relative overflow-hidden grain">
        <svg className="absolute -left-20 top-20 w-80 h-80 opacity-10 text-rose-300" viewBox="0 0 200 200" fill="currentColor" aria-hidden="true">
          <path d="M100 10 C120 40 140 60 160 80 C140 100 130 130 100 150 C70 130 60 100 40 80 C60 60 80 40 100 10 Z" />
        </svg>

        <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-300 font-medium mb-4 inline-block reveal">
            — Le journal
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1] mb-6 reveal">
            Inspirations<br />
            <span className="italic text-rose-300">&amp; sagesse féminine</span>
          </h1>
          <p className="text-ivoire/80 text-lg leading-relaxed max-w-2xl mx-auto reveal">
            Conseils, astuces, réflexions et témoignages pour cultiver votre bien-être, votre intimité et votre équilibre au quotidien.
          </p>
        </div>
      </section>

      {/* ARTICLE FEATURED */}
      {featured && (
        <section className="py-12 lg:py-20 bg-ivoire">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-rose-300 text-bordeaux text-xs font-medium uppercase tracking-wider">
                  ★ À la une
                </span>
                <span className="h-px flex-1 bg-sable" />
              </div>

              <Link to="#" className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center group cursor-pointer">
                <div className="card-img aspect-[4/3] rounded-3xl overflow-hidden order-2 md:order-1">
                  <img src={featured.img} alt={featured.title} className="w-full h-full object-cover" />
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4 text-xs uppercase tracking-wider">
                    <span className="text-rose-700 font-medium">{featured.catLabel}</span>
                    <span className="text-encre-muted/40">·</span>
                    <span className="text-encre-muted">
                      <Clock className="w-3 h-3 inline mr-1 -mt-0.5" />
                      {featured.read}
                    </span>
                    <span className="text-encre-muted/40">·</span>
                    <span className="text-encre-muted">{featured.date}</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-encre mb-5 leading-[1.1] group-hover:text-sauge-700 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-encre-muted leading-relaxed text-lg mb-6">
                    {featured.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sauge-700 font-medium group-hover:gap-3 transition-all">
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FILTRES */}
      <section className="sticky top-[88px] z-30 border-y border-sable backdrop-blur-xl bg-ivoire/90 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCat === c.id
                    ? 'bg-sauge-700 text-ivoire'
                    : 'text-encre hover:bg-sauge-100'
                }`}
                style={activeCat !== c.id ? { background: '#EEF1E6' } : {}}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="flex-1 md:max-w-xs md:ml-auto relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-encre-muted" />
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full border border-sable focus:border-sauge-500 focus:ring-2 focus:ring-sauge-500/20 outline-none transition-all text-sm"
              style={{ background: '#EEF1E6' }}
              aria-label="Rechercher un article"
            />
          </div>
        </div>
      </section>

      {/* GRILLE ARTICLES */}
      <section className="py-16 lg:py-24 bg-ivoire">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-3xl text-encre-muted italic mb-4">
                Aucun article trouvé
              </p>
              <button
                onClick={() => {
                  setActiveCat('all');
                  setSearch('');
                }}
                className="text-sauge-700 underline hover:text-sauge-900"
              >
                Voir tous les articles
              </button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {filtered.map((a, i) => (
                <Link
                  key={a.id}
                  to={`/article/${a.id}`}
                  className={`reveal group cursor-pointer ${i === 1 ? 'md:mt-8' : ''}`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <article>
                    <div className="card-img aspect-[4/5] rounded-2xl overflow-hidden mb-5">
                      <img src={a.img} alt={a.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-rose-700 font-medium mb-2">
                      <span>{a.catLabel}</span>
                      <span className="text-encre-muted/40">·</span>
                      <span className="text-encre-muted">
                        <Clock className="w-3 h-3 inline mr-1 -mt-0.5" />
                        {a.read}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-encre mb-3 group-hover:text-sauge-700 transition-colors leading-tight">
                      {a.title}
                    </h3>
                    <p className="text-sm text-encre-muted leading-relaxed mb-4">{a.desc}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-encre-muted flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {a.date}
                      </span>
                      <span className="text-sauge-700 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Lire
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-sauge-700 text-ivoire">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-300 font-medium mb-4 inline-block">
            — Lettre d'amour
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] mb-6">
            Recevez mes <span className="italic text-rose-300">conseils</span> chaque semaine
          </h2>
          <p className="text-ivoire/80 leading-relaxed mb-8 max-w-xl mx-auto">
            Astuces bien-être, recettes naturelles, témoignages et inspiration directement dans votre boîte mail. Sans spam, juste de l'amour.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); alert('Merci pour votre inscription !'); }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="votre@email.com"
              className="flex-1 px-5 py-4 rounded-full bg-ivoire/10 border border-ivoire/30 text-ivoire placeholder:text-ivoire/50 focus:outline-none focus:border-rose-300 focus:bg-ivoire/15 transition-all"
              aria-label="Adresse email"
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-full bg-rose-300 text-bordeaux font-medium hover:bg-ivoire transition-colors text-sm"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </>
  );
}