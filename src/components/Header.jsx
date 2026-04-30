import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Import du logo de manière optimale pour le déploiement
import logo from '/images/Logo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/boutique', label: 'Boutique' },
    { to: '/blog', label: 'Journal' },
    { to: '/reservation', label: 'Rendez-vous' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-4'
        }`}
        style={{ backgroundColor: '#f7dddd' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <Link to="/" className="flex items-center group relative" aria-label="Naya Harmonie">
            <img 
              src={logo} 
              alt="Naya Harmonie Logo" 
              className="h-[60px] w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium tracking-wide">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  // Application du vert foncé #43523D
                  `relative group transition-colors ${
                    isActive ? 'text-[#43523D]' : 'text-[#43523D]/70 hover:text-[#43523D]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-[#43523D] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/reservation"
            // Application du fond #43523D sur le bouton
            className="hidden md:inline-flex items-center gap-2 bg-[#43523D] text-white hover:bg-[#43523D]/90 px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-colors shadow-sm"
          >
            <span>Prendre rendez-vous</span>
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            // L'icône du menu burger en #43523D
            className="lg:hidden text-[#43523D] p-2 -m-2"
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          // Fond légèrement transparent avec le vert foncé
          className="absolute inset-0 bg-[#43523D]/90 backdrop-blur-md"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ backgroundColor: '#F5F0E8' }}
        >
          <div className="p-6 flex justify-between items-center border-b border-[#43523D]/20">
            <div className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="Naya Harmonie" 
                className="h-[60px] w-auto object-contain"
              />
              <span className="font-serif text-xl">
                <span className="text-[#43523D]">Naya</span>
                <span className="text-rose-700 italic">.</span>
                <span className="italic text-sauge-700">harmonie</span>
              </span>
            </div>
            <button onClick={() => setMenuOpen(false)} className="p-2 -m-2" aria-label="Fermer">
              {/* L'icône pour fermer le menu */}
              <X className="w-6 h-6 text-[#43523D]" />
            </button>
          </div>
          <nav className="p-6 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setMenuOpen(false)}
                // Les liens du menu mobile
                className="font-serif text-3xl py-3 border-b border-[#43523D]/20 text-[#43523D]/80 hover:text-[#43523D] transition-colors flex items-center justify-between group"
              >
                {l.label}
                <ArrowUpRight className="w-5 h-5 text-[#43523D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </NavLink>
            ))}
          </nav>
          <div className="absolute bottom-0 inset-x-0 p-6">
            <Link
              to="/reservation"
              onClick={() => setMenuOpen(false)}
              // Le bouton du menu mobile
              className="w-full bg-[#43523D] text-white hover:bg-[#43523D]/90 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              Prendre rendez-vous
            </Link>
            <p className="text-center text-xs text-encre-muted mt-4">
              Premier échange offert · 30 min
            </p>
          </div>
        </div>
      </div>
    </>
  );
}