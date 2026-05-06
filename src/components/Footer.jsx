import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-sauge-900 text-ivoire pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-4xl font-medium tracking-tight block mb-4">
              Naya<span className="text-rose-300 italic">.</span>
              <span className="italic font-normal text-rose-300">harmonie</span>
            </Link>
            <p className="text-ivoire/70 leading-relaxed mb-6 max-w-md">
              Coaching en sexothérapie, bien-être féminin et harmonie de couple. Une approche
              holistique, naturelle et bienveillante. Certifiée IPHM.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/221777302999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full bg-ivoire/10 hover:bg-rose-300 hover:text-bordeaux flex items-center justify-center transition-all hover:scale-110"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-ivoire/10 hover:bg-rose-300 hover:text-bordeaux flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-ivoire/10 hover:bg-rose-300 hover:text-bordeaux flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-serif text-lg mb-5 text-rose-300">Navigation</p>
            <ul className="space-y-3 text-sm text-ivoire/70">
              <li>
                <Link to="/" className="hover:text-rose-300 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/boutique" className="hover:text-rose-300 transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-rose-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="hover:text-rose-300 transition-colors">
                  Coaching
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-serif text-lg mb-5 text-rose-300">Contact</p>
            <ul className="space-y-3 text-sm text-ivoire/70">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 mt-1 flex-shrink-0" />
                <span>+221 77 730 29 99</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 mt-1 flex-shrink-0" />
                <span>contact@nayaharmonie.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-1 flex-shrink-0" />
                <span>France & Sénégal</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 mt-1 flex-shrink-0" />
                <span>Coaching à distance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-ivoire/15 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ivoire/60">
          <p>© 2026 Naya Harmonie · Tous droits réservés</p>
          <div className="flex gap-6">
          <Link to="/Mentionlegales" className="hover:text-rose-300 transition-colors">
            Mentions légales
          </Link>

          <Link to="/confidentialite" className="hover:text-rose-300 transition-colors">
            Confidentialité
          </Link>

          <Link to="/cgv" className="hover:text-rose-300 transition-colors">
            CGV
          </Link>
        </div>
        </div>
      </div>
    </footer>
  );
}
