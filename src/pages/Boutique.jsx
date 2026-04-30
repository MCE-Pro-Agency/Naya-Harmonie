import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Sparkles, ArrowRight, Filter, Search, Plus, Minus, X, Heart } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: 'Moringa', cat: 'plantes', catLabel: 'Plante · Poudre', desc: 'Énergie, vitalité, riche en nutriments. Surnommé "arbre de vie", soutient l\'équilibre hormonal.', priceXof: '5 000', priceEur: '8', emoji: '🌿', badge: 'Bestseller', badgeColor: 'sauge' },
  { id: 2, name: 'Karité Nep-Nep', cat: 'beurres', catLabel: 'Beurre · Naturel', desc: 'Beurre de karité non traité, pur. Soin de la peau, des cheveux et du corps.', priceXof: '8 500', priceEur: '13', emoji: '🥥', badge: 'Nouveau', badgeColor: 'rose' },
  { id: 3, name: 'Bissap naturel', cat: 'poudres', catLabel: 'Fleur · Poudre', desc: 'Fleurs d\'hibiscus pures en poudre. Antioxydant puissant, boisson rafraîchissante.', priceXof: '3 500', priceEur: '5', emoji: '🌺', badge: null },
  { id: 4, name: 'Baobab', cat: 'poudres', catLabel: 'Fruit · Poudre', desc: 'Pain de singe en poudre. Riche en vitamine C, soutient l\'immunité et la digestion.', priceXof: '4 500', priceEur: '7', emoji: '🌰', badge: null },
  { id: 5, name: 'Plante 4 côtés', cat: 'plantes', catLabel: 'Plante · Bien-être', desc: 'Plante traditionnelle aux propriétés équilibrantes pour la santé féminine.', priceXof: '6 000', priceEur: '9', emoji: '🌱', badge: null },
  { id: 6, name: 'Moringa en feuilles', cat: 'plantes', catLabel: 'Plante · Feuilles', desc: 'Feuilles séchées de moringa. À infuser ou ajouter aux préparations.', priceXof: '4 000', priceEur: '6', emoji: '🍃', badge: null },
  { id: 7, name: 'Beurre de karité poudre', cat: 'beurres', catLabel: 'Beurre · Poudre', desc: 'Karité en poudre, idéal pour préparations cosmétiques maison.', priceXof: '6 500', priceEur: '10', emoji: '✨', badge: null },
  { id: 8, name: 'Feuilles de corossol', cat: 'plantes', catLabel: 'Plante · Feuilles', desc: 'Feuilles de corossol séchées. Connues pour leurs propriétés apaisantes.', priceXof: '3 800', priceEur: '6', emoji: '🌾', badge: null },
];

const CATEGORIES = [
  { id: 'all', label: 'Tous les produits' },
  { id: 'plantes', label: 'Plantes' },
  { id: 'poudres', label: 'Poudres' },
  { id: 'beurres', label: 'Beurres' },
];

export default function Boutique() {
  const [activeCat, setActiveCat] = useState('all');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [favs, setFavs] = useState([]);

  const filtered = PRODUCTS.filter((p) => {
    if (activeCat !== 'all' && p.cat !== activeCat) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const toggleFav = (id) => {
    setFavs((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const cartTotal = cart.reduce((sum, i) => sum + parseInt(i.priceXof.replace(/\s/g, '')) * i.qty, 0);
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <>
      {/* HERO BOUTIQUE */}
      <section className="pt-32 pb-16 bg-sauge-900 text-ivoire relative overflow-hidden grain">
        <svg className="absolute -right-20 top-20 w-96 h-96 opacity-10 text-rose-300" viewBox="0 0 200 200" fill="currentColor" aria-hidden="true">
          <path d="M100 10 C120 40 140 60 160 80 C140 100 130 130 100 150 C70 130 60 100 40 80 C60 60 80 40 100 10 Z" />
        </svg>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div className="reveal">
              <span className="text-xs uppercase tracking-[0.3em] text-rose-300 font-medium mb-4 inline-block">
                — Boutique naturelle
              </span>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1] mb-6">
                Plantes &amp;<br />
                <span className="italic text-rose-300">trésors de la nature</span>
              </h1>
              <p className="text-ivoire/80 text-lg leading-relaxed max-w-xl">
                Sélection de produits 100% naturels, sourcés avec soin auprès de productrices locales du Sénégal. Pour soutenir votre santé hormonale, votre énergie et votre beauté au naturel.
              </p>
            </div>

            <div className="reveal flex flex-wrap gap-6 lg:justify-end">
              <div>
                <p className="font-serif text-4xl text-rose-300 mb-1">{PRODUCTS.length}</p>
                <p className="text-xs text-ivoire/60 uppercase tracking-wider">Produits</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-rose-300 mb-1">100%</p>
                <p className="text-xs text-ivoire/60 uppercase tracking-wider">Naturel</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-rose-300 mb-1">2</p>
                <p className="text-xs text-ivoire/60 uppercase tracking-wider">Pays livrés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTRES + RECHERCHE */}
      <section className="sticky top-[88px] z-30 border-b border-sable backdrop-blur-xl bg-ivoire/90 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCat === c.id
                    ? 'bg-sauge-700 text-ivoire'
                    : 'bg-ivoire-cream text-encre hover:bg-sauge-100'
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
              placeholder="Rechercher un produit..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full border border-sable bg-ivoire-cream focus:border-sauge-500 focus:ring-2 focus:ring-sauge-500/20 outline-none transition-all text-sm"
              style={{ background: '#EEF1E6' }}
            />
          </div>

          <button
            onClick={() => setCartOpen(true)}
            className="relative bg-sauge-500 text-ivoire px-5 py-2.5 rounded-full text-sm font-medium hover:bg-sauge-700 transition-colors flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Panier</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-bordeaux text-xs font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </section>

      {/* GRILLE PRODUITS */}
      <section className="py-16 lg:py-24 bg-ivoire">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-3xl text-encre-muted italic mb-4">
                Aucun produit trouvé
              </p>
              <button
                onClick={() => {
                  setActiveCat('all');
                  setSearch('');
                }}
                className="text-sauge-700 underline"
              >
                Voir tous les produits
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((p, i) => (
                <article
                  key={p.id}
                  className="reveal group cursor-pointer"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div
                    className={`aspect-square rounded-2xl overflow-hidden mb-4 relative flex items-center justify-center transition-all ${
                      p.cat === 'plantes' ? 'bg-sauge-100' : p.cat === 'beurres' ? 'bg-rose-300/15' : 'bg-ivoire-cream'
                    }`}
                    style={p.cat === 'poudres' ? { background: '#EEF1E6' } : {}}
                  >
                    <span className="text-7xl">{p.emoji}</span>

                    {p.badge && (
                      <div
                        className={`absolute top-3 left-3 px-3 py-1 backdrop-blur rounded-full ${
                          p.badgeColor === 'rose' ? 'bg-rose-300/95' : 'bg-ivoire/95'
                        }`}
                      >
                        <span
                          className={`text-[10px] uppercase tracking-wider font-medium ${
                            p.badgeColor === 'rose' ? 'text-bordeaux' : 'text-sauge-700'
                          }`}
                        >
                          ★ {p.badge}
                        </span>
                      </div>
                    )}

                    <button
                      onClick={() => toggleFav(p.id)}
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-ivoire/90 backdrop-blur flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label={favs.includes(p.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          favs.includes(p.id) ? 'fill-rose-500 text-rose-500' : 'text-encre-muted'
                        }`}
                      />
                    </button>

                    <button
                      onClick={() => addToCart(p)}
                      className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-ivoire shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-sauge-700 hover:text-ivoire translate-y-2 group-hover:translate-y-0"
                      aria-label={`Ajouter ${p.name} au panier`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs uppercase tracking-wider text-encre-muted mb-1">{p.catLabel}</p>
                  <h3 className="font-serif text-2xl font-medium text-encre mb-1 group-hover:text-sauge-700 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-encre-muted mb-3 leading-relaxed line-clamp-2">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl text-sauge-700">
                      {p.priceXof} <span className="text-sm text-encre-muted">FCFA</span>
                    </span>
                    <span className="text-xs text-rose-700">{p.priceEur}€</span>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Bandeau livraison */}
          <div className="mt-16 bg-ivoire-cream rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row items-center gap-6 reveal border border-sable" style={{ background: '#EEF1E6' }}>
            <div className="w-14 h-14 rounded-full bg-sauge-700 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-ivoire" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="font-serif text-xl text-encre mb-1">Livraison Sénégal &amp; France</p>
              <p className="text-sm text-encre-muted">
                Tous nos produits sont 100% naturels, non transformés et sourcés avec soin auprès de productrices locales.
              </p>
            </div>
            <a
              href="https://wa.me/221777302999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap"
            >
              <span>Commander via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* DRAWER PANIER */}
      <div
        className={`fixed inset-0 z-[70] transition-all duration-500 ${
          cartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-encre/60 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-ivoire flex flex-col transition-transform duration-500 ${
            cartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 border-b border-sable flex items-center justify-between">
            <div>
              <h3 className="font-serif text-2xl text-encre">Votre panier</h3>
              <p className="text-xs text-encre-muted">{cartCount} {cartCount > 1 ? 'articles' : 'article'}</p>
            </div>
            <button onClick={() => setCartOpen(false)} className="p-2 -m-2 hover:bg-sable rounded-full transition-colors" aria-label="Fermer">
              <X className="w-5 h-5 text-encre" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-12 h-12 text-encre-muted/30 mx-auto mb-4" />
                <p className="text-encre-muted">Votre panier est vide</p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="mt-4 text-sauge-700 underline text-sm"
                >
                  Continuer mes achats
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b border-sable last:border-0">
                    <div className="w-20 h-20 rounded-xl bg-sauge-100 flex items-center justify-center flex-shrink-0 text-3xl">
                      {item.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-lg text-encre">{item.name}</h4>
                      <p className="text-xs text-encre-muted mb-2">{item.catLabel}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 bg-ivoire-cream rounded-full p-1" style={{ background: '#EEF1E6' }}>
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="w-7 h-7 rounded-full hover:bg-ivoire flex items-center justify-center transition-colors"
                            aria-label="Diminuer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-6 text-center">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="w-7 h-7 rounded-full hover:bg-ivoire flex items-center justify-center transition-colors"
                            aria-label="Augmenter"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-serif text-lg text-sauge-700">
                          {(parseInt(item.priceXof.replace(/\s/g, '')) * item.qty).toLocaleString('fr-FR')} FCFA
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-encre-muted hover:text-rose-700 transition-colors self-start"
                      aria-label="Supprimer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 border-t border-sable bg-ivoire-cream" style={{ background: '#EEF1E6' }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-encre-muted">Total</span>
                <span className="font-serif text-2xl text-sauge-900">
                  {cartTotal.toLocaleString('fr-FR')} <span className="text-sm">FCFA</span>
                </span>
              </div>
              <a
                href={`https://wa.me/221777302999?text=${encodeURIComponent(
                  `Bonjour Mariame, je souhaite commander :\n${cart.map((i) => `- ${i.name} x${i.qty}`).join('\n')}\n\nTotal : ${cartTotal.toLocaleString('fr-FR')} FCFA`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary py-4 rounded-full text-sm font-medium flex items-center justify-center gap-2"
              >
                <span>Commander via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-encre-muted mt-3">
                Paiement sécurisé · Livraison rapide
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
