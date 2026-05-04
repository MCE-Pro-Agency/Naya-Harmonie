import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const { pathname } = useLocation();

  // Scroll en haut à chaque changement de page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' }); // ✅ corrigé
  }, [pathname]);

  // Animation reveal au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, idx * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}