import { ArrowLeft, ArrowRight, Calendar, Clock, Heart, Share2 } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

/* ───────────────────────── DONNÉES ───────────────────────── */

const ARTICLES = [
  {
    id: 1,
    cat: 'menopause',
    catLabel: 'Ménopause',
    read: '5 min',
    date: '15 avril 2026',
    title: '5 plantes pour traverser la ménopause en douceur',
    desc: "Découvrez les alliées naturelles qui accompagnent les bouleversements hormonaux et apaisent les symptômes courants de la ménopause.",
    img: '/images/menopose.jpg',
    featured: true,
    sections: [
      {
        type: 'intro',
        text: "La ménopause est une transition naturelle dans la vie d'une femme, marquée par la fin des menstruations et des changements hormonaux significatifs. Pendant cette période, le corps subit une réduction progressive de la production d'œstrogène et de progestérone, ce qui peut entraîner une variété de symptômes inconfortables.",
      },
      {
        type: 'quote',
        text: "La nature offre des trésors insoupçonnés pour accompagner chaque femme dans cette transition sacrée.",
      },
      {
        type: 'heading',
        title: 'Les 5 plantes essentielles',
      },
      {
        type: 'plant',
        number: '01',
        title: 'La Sauge Officinale',
        text: "La sauge est réputée depuis des siècles pour ses propriétés régulatrices. Elle contient des composés phytoestrogènes qui imitent l'action de l'œstrogène dans le corps. Particulièrement efficace pour réduire les bouffées de chaleur et les sueurs nocturnes.",
        usage: "Infusion (une tasse le matin) ou en complément alimentaire.",
      },
      {
        type: 'plant',
        number: '02',
        title: "L'Igname Sauvage",
        text: "Originaire du Mexique, l'igname sauvage contient de la diosgénine, un composé qui soutient naturellement l'équilibre hormonal. Elle aide à soulager les crampes et l'irritabilité.",
        usage: "Crème topique ou complément alimentaire.",
      },
      {
        type: 'plant',
        number: '03',
        title: 'Le Trèfle Rouge',
        text: "Riche en isoflavones, le trèfle rouge agit comme un phytoestrogène doux. Des études montrent qu'il peut réduire les bouffées de chaleur de 30 à 40%.",
        usage: "Infusion quotidienne ou en gélules.",
      },
      {
        type: 'plant',
        number: '04',
        title: 'La Cohosh Noir',
        text: "Utilisée traditionnellement par les peuples autochtones, elle soutient l'équilibre hormonal et aide à gérer les changements d'humeur et l'insomnie.",
        usage: "En extrait ou complément.",
      },
      {
        type: 'plant',
        number: '05',
        title: 'Le Ginseng Asiatique',
        text: "Adaptogène puissant, le ginseng aide le corps à gérer le stress lié aux changements hormonaux. Il booste également l'énergie et améliore la concentration.",
        usage: "En racine à mâcher ou en complément.",
      },
      {
        type: 'heading',
        title: 'Conseils pour une ménopause apaisée',
      },
      {
        type: 'tips',
        items: [
          "Maintenez une alimentation équilibrée riche en minéraux (calcium, magnésium)",
          "Pratiquez une activité physique régulière (marche, yoga, natation)",
          "Gérez le stress par la méditation ou le tai-chi",
          "Dormez suffisamment (7 à 9 heures par nuit)",
          "Consultez un praticien avant de commencer tout complément",
        ],
      },
      {
        type: 'quote',
        text: "La ménopause n'est pas une maladie mais une transition naturelle. Avec les bonnes plantes et du soutien, traversez cette période avec sérénité.",
      },
    ],
  },
  {
    id: 2,
    cat: 'couple',
    catLabel: 'Couple',
    read: '7 min',
    date: '8 avril 2026',
    title: 'Raviver le désir après plusieurs années de mariage',
    desc: "Trois rituels simples mais puissants pour réveiller la complicité, redécouvrir l'autre et retrouver la magie des premiers temps.",
    img: '/images/ensemble.jpg',
    sections: [
      {
        type: 'intro',
        text: "Après plusieurs années de mariage, beaucoup de couples constatent que la passion a laissé place à une certaine routine. Ce n'est pas une fatalité ! Découvrez comment raviver le désir naturellement.",
      },
      {
        type: 'quote',
        text: "L'amour n'est pas un feu qui s'éteint, c'est une braise qu'il faut attiser avec intention.",
      },
      {
        type: 'heading',
        title: 'Les trois rituels qui transforment',
      },
      {
        type: 'plant',
        number: '01',
        title: 'La soirée sans écrans',
        text: "Un soir par semaine, rangez les téléphones, fermez les ordinateurs. Consacrez ce temps à vous regarder, discuter, rire ensemble. Redécouvrez le plaisir simple d'être présents l'un pour l'autre.",
        usage: "Choisissez un jour fixe et protégez ce rendez-vous.",
      },
      {
        type: 'plant',
        number: '02',
        title: 'Le massage sensuel',
        text: "Recréez l'intimité par le toucher. Un massage doux aide à réactiver la sensualité et la connexion. Le contact physique libère de l'ocytocine, l'hormone du lien.",
        usage: "Alternez les rôles, utilisez des huiles naturelles.",
      },
      {
        type: 'plant',
        number: '03',
        title: 'La conversation intime',
        text: "Parlez de vos désirs, de vos rêves, de ce qui vous excite. La vulnérabilité crée la connexion. Osez dire ce que vous aimez, sans jugement ni tabou.",
        usage: "Commencez doucement, dans un cadre bienveillant.",
      },
      {
        type: 'quote',
        text: "Raviver la passion demande de l'intention et de la consistance. C'est un investissement dans votre bonheur conjugal.",
      },
    ],
  },
  {
    id: 3,
    cat: 'bien-etre',
    catLabel: 'Bien-être',
    read: '4 min',
    date: '2 avril 2026',
    title: "Le moringa, l'arbre de vie des femmes",
    desc: "Pourquoi cette plante africaine ancestrale est-elle si précieuse pour la santé hormonale féminine et l'énergie au quotidien ?",
    img: '/images/energie.jpg',
    sections: [
      {
        type: 'intro',
        text: "Le moringa, souvent appelé « l'arbre de vie », est une plante originaire d'Afrique et d'Asie du Sud. Ses feuilles sont incroyablement nutritives et particulièrement bénéfiques pour les femmes à tous les âges de la vie.",
      },
      {
        type: 'quote',
        text: "Un seul arbre, et pourtant une pharmacie entière pour la femme africaine.",
      },
      {
        type: 'heading',
        title: 'Pourquoi pour les femmes ?',
      },
      {
        type: 'paragraph',
        text: "Riche en fer, en protéines et en minéraux essentiels, le moringa soutient particulièrement bien les femmes. Il aide à combattre la fatigue, renforce les os, nourrit la peau et soutient l'équilibre hormonal.",
      },
      {
        type: 'heading',
        title: "Comment l'utiliser au quotidien",
      },
      {
        type: 'tips',
        items: [
          "En poudre dans vos smoothies ou jus du matin",
          "En thé ou infusion l'après-midi",
          "Ajouté à vos sauces et plats traditionnels",
          "En gélules comme complément alimentaire",
        ],
      },
    ],
  },
  {
    id: 4,
    cat: 'sexualite',
    catLabel: 'Sexualité',
    read: '6 min',
    date: '25 mars 2026',
    title: 'Communiquer ses désirs sans tabou avec son partenaire',
    desc: "Comment ouvrir le dialogue sur l'intimité sans gêne, dans la bienveillance et le respect mutuel.",
    img: '/images/sexualite.jpg',
    sections: [
      {
        type: 'intro',
        text: "La communication est la clé d'une vie intime épanouie. Pourtant, parler de ses désirs reste l'un des plus grands tabous dans de nombreuses cultures. Découvrez comment briser le silence avec douceur.",
      },
      {
        type: 'quote',
        text: "Ce qui ne se dit pas finit par ne plus se vivre. Oser parler, c'est oser aimer pleinement.",
      },
      {
        type: 'heading',
        title: 'Les étapes pour ouvrir le dialogue',
      },
      {
        type: 'tips',
        items: [
          "Choisissez le bon moment, en dehors de l'intimité",
          "Commencez par exprimer ce que vous aimez déjà",
          "Utilisez le « je » plutôt que le « tu »",
          "Écoutez sans juger la réponse de votre partenaire",
          "Avancez à votre rythme, pas à pas",
        ],
      },
    ],
  },
  {
    id: 5,
    cat: 'bien-etre',
    catLabel: 'Bien-être',
    read: '5 min',
    date: '18 mars 2026',
    title: 'Le rituel beauté au karité que toutes les femmes devraient connaître',
    desc: "Un soin ancestral du Sénégal pour nourrir la peau et les cheveux en profondeur. Recette transmise de génération en génération.",
    img: '/images/bien.jpg',
    sections: [
      {
        type: 'intro',
        text: "Originaire du Sénégal et de l'Afrique de l'Ouest, le beurre de karité est un trésor naturel utilisé depuis des générations pour nourrir la peau et les cheveux en profondeur. Un rituel de beauté ancestral qui traverse les âges.",
      },
      {
        type: 'quote',
        text: "Nos grands-mères connaissaient déjà le secret d'une peau éclatante : la générosité du karité.",
      },
      {
        type: 'heading',
        title: 'Bienfaits du beurre de karité',
      },
      {
        type: 'tips',
        items: [
          "Hydrate intensément les peaux sèches et sensibles",
          "Nourrit les cheveux crépus en profondeur",
          "Protège contre les agressions climatiques",
          "Apaise les irritations et vergetures",
          "Adoucit les mains et les pieds abîmés",
        ],
      },
    ],
  },
  {
    id: 6,
    cat: 'menopause',
    catLabel: 'Ménopause',
    read: '8 min',
    date: '10 mars 2026',
    title: 'Bouffées de chaleur : comprendre et apaiser naturellement',
    desc: "Les mécanismes hormonaux derrière les bouffées et les solutions naturelles qui ont fait leurs preuves.",
    img: '/images/menopause3.jpg',
    sections: [
      {
        type: 'intro',
        text: "Les bouffées de chaleur sont l'un des symptômes les plus courants de la ménopause, touchant environ 75% des femmes. Comprendre leur mécanisme est la première étape pour les apaiser naturellement.",
      },
      {
        type: 'quote',
        text: "Comprendre son corps, c'est reprendre le pouvoir. Chaque bouffée est un signal, pas une fatalité.",
      },
      {
        type: 'heading',
        title: 'Comment ça fonctionne ?',
      },
      {
        type: 'paragraph',
        text: "Les bouffées de chaleur résultent de la baisse d'œstrogènes qui perturbe le thermostat interne du cerveau (l'hypothalamus). Celui-ci réagit de manière excessive à de légers changements de température, déclenchant une sensation de chaleur intense.",
      },
      {
        type: 'heading',
        title: 'Solutions naturelles éprouvées',
      },
      {
        type: 'tips',
        items: [
          "Infusions de sauge officinale, matin et soir",
          "Compléments d'isoflavones de soja",
          "Techniques de respiration profonde",
          "Vêtements en fibres naturelles et respirantes",
          "Éviter les plats épicés, l'alcool et la caféine",
          "Pratiquer le yoga ou la méditation",
        ],
      },
    ],
  },
];

/* ───────────────────────── COMPOSANTS DE SECTIONS ───────────────────────── */

function SectionIntro({ text }) {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-10 mb-16 reveal">
      <p className="text-xl md:text-2xl text-encre-muted leading-relaxed first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-rose-400 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
        {text}
      </p>
    </div>
  );
}

function SectionQuote({ text }) {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-10 my-16 lg:my-24 reveal">
      <blockquote className="relative py-10 px-8 md:px-16">
        {/* Decorative line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-rose-300" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-rose-300" />
        
        {/* Quote marks */}
        <svg className="absolute -top-4 left-4 md:left-8 w-12 h-12 text-rose-200 opacity-60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.998 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.986z" />
        </svg>
        
        <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-encre leading-snug text-center">
          {text}
        </p>
      </blockquote>
    </div>
  );
}

function SectionHeading({ title }) {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-10 mb-10 mt-16 reveal">
      <div className="flex items-center gap-4 mb-2">
        <span className="h-px flex-1 bg-sable" />
        <svg className="w-5 h-5 text-rose-300" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 10 C120 40 140 60 160 80 C140 100 130 130 100 150 C70 130 60 100 40 80 C60 60 80 40 100 10 Z" />
        </svg>
        <span className="h-px flex-1 bg-sable" />
      </div>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-encre text-center leading-tight">
        {title}
      </h2>
    </div>
  );
}

function SectionParagraph({ text }) {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-10 mb-8 reveal">
      <p className="text-lg text-encre-muted leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function SectionPlant({ number, title, text, usage }) {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-10 mb-12 reveal">
      <div className="group relative pl-20 md:pl-24">
        {/* Big number */}
        <span className="absolute left-0 top-0 font-serif text-6xl md:text-7xl font-bold text-rose-200/50 leading-none select-none">
          {number}
        </span>
        
        <h3 className="font-serif text-2xl md:text-3xl font-medium text-encre mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-lg text-encre-muted leading-relaxed mb-4">
          {text}
        </p>
        {usage && (
          <div className="flex items-start gap-3 py-3 px-5 rounded-2xl bg-sauge-50 border border-sauge-100">
            <span className="text-sauge-600 text-sm font-medium uppercase tracking-wider mt-0.5 whitespace-nowrap">
              Utilisation
            </span>
            <span className="h-4 w-px bg-sauge-200 mt-1" />
            <p className="text-sauge-800 text-sm leading-relaxed">
              {usage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function SectionTips({ items }) {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-10 mb-12 reveal">
      <div className="grid gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-rose-50/50 to-transparent border border-rose-100/50 hover:border-rose-200 transition-all duration-300"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-200/40 flex items-center justify-center">
              <Heart className="w-3.5 h-3.5 text-rose-500" />
            </span>
            <p className="text-encre-muted leading-relaxed pt-1">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── RENDER SECTION ───────────────────────── */

function RenderSection({ section, index }) {
  switch (section.type) {
    case 'intro':
      return <SectionIntro key={index} text={section.text} />;
    case 'quote':
      return <SectionQuote key={index} text={section.text} />;
    case 'heading':
      return <SectionHeading key={index} title={section.title} />;
    case 'paragraph':
      return <SectionParagraph key={index} text={section.text} />;
    case 'plant':
      return (
        <SectionPlant
          key={index}
          number={section.number}
          title={section.title}
          text={section.text}
          usage={section.usage}
        />
      );
    case 'tips':
      return <SectionTips key={index} items={section.items} />;
    default:
      return null;
  }
}

/* ───────────────────────── PAGE ARTICLE ───────────────────────── */

export default function Article() {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = ARTICLES.find((a) => a.id === parseInt(id));

  const similarArticles = article
    ? ARTICLES.filter((a) => a.cat === article.cat && a.id !== article.id).slice(0, 2)
    : [];

  // Scroll to top on article change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-ivoire flex items-center justify-center">
        <div className="text-center reveal">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-rose-100 flex items-center justify-center">
            <Heart className="w-8 h-8 text-rose-400" />
          </div>
          <p className="font-serif text-3xl text-encre italic mb-4">
            Article non trouvé
          </p>
          <p className="text-encre-muted mb-8">
            Cet article n'existe pas ou a été déplacé.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sauge-700 text-ivoire font-medium hover:bg-sauge-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retourner au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ─── HERO IMMERSIF ─── */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-28 left-6 lg:left-10 z-20 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-white/90 text-sm font-medium hover:bg-white/25 transition-all group border border-white/20"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Retour
        </button>

        {/* Content overlay */}
        <div className="relative z-10 w-full pb-12 md:pb-20 pt-40">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            {/* Category badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6 reveal">
              <span className="px-4 py-1.5 rounded-full bg-rose-400/20 backdrop-blur-sm text-rose-200 text-xs font-medium uppercase tracking-widest border border-rose-300/20">
                {article.catLabel}
              </span>
              <span className="text-white/40">·</span>
              <span className="text-white/70 text-sm flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {article.read} de lecture
              </span>
              <span className="text-white/40">·</span>
              <span className="text-white/70 text-sm flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] mb-6 reveal">
              {article.title}
            </h1>

            {/* Description */}
            <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl reveal">
              {article.desc}
            </p>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full block">
            <path
              d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
              className="fill-ivoire"
            />
          </svg>
        </div>
      </section>

      {/* ─── ACTIONS BAR ─── */}
      <section className="bg-ivoire -mt-1">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between py-6 border-b border-sable/60">
            <div className="flex items-center gap-3 text-sm text-encre-muted">
              <span className="w-8 h-8 rounded-full bg-sauge-100 flex items-center justify-center">
                <span className="font-serif text-sauge-700 text-sm font-bold">N</span>
              </span>
              <span>Naya Harmonie</span>
            </div>
            <button className="inline-flex items-center gap-2 text-sm text-sauge-700 hover:text-sauge-900 font-medium transition-colors group px-4 py-2 rounded-full hover:bg-sauge-50">
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Partager</span>
            </button>
          </div>
        </div>
      </section>

      {/* ─── CONTENU ARTICLE ─── */}
      <section className="py-16 lg:py-20 bg-ivoire">
        {article.sections.map((section, index) => (
          <RenderSection key={index} section={section} index={index} />
        ))}
      </section>

      {/* ─── SEPARATOR DÉCORATIF ─── */}
      <div className="bg-ivoire pb-10">
        <div className="max-w-3xl mx-auto px-6 flex items-center gap-4">
          <span className="h-px flex-1 bg-sable" />
          <svg className="w-6 h-6 text-rose-300" viewBox="0 0 200 200" fill="currentColor">
            <path d="M100 10 C120 40 140 60 160 80 C140 100 130 130 100 150 C70 130 60 100 40 80 C60 60 80 40 100 10 Z" />
          </svg>
          <span className="h-px flex-1 bg-sable" />
        </div>
      </div>

      {/* ─── ARTICLES SIMILAIRES ─── */}
      {similarArticles.length > 0 && (
        <section className="py-20 lg:py-28 bg-ivoire">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {/* Section header */}
            <div className="text-center mb-16 reveal">
              <span className="text-xs uppercase tracking-[0.3em] text-rose-400 font-medium mb-3 inline-block">
                — Continuer la lecture
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-encre">
                Découvrez <span className="italic text-sauge-600">aussi</span>
              </h2>
            </div>

            {/* Articles grid */}
            <div className={`grid gap-8 ${similarArticles.length === 1 ? 'max-w-lg mx-auto' : 'md:grid-cols-2 max-w-4xl mx-auto'}`}>
              {similarArticles.map((a, i) => (
                <Link
                  key={a.id}
                  to={`/article/${a.id}`}
                  className="group reveal"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <article className="overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-500">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={a.img}
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-wider mb-3">
                        <span className="text-rose-600 font-medium">{a.catLabel}</span>
                        <span className="text-encre-muted/30">·</span>
                        <span className="text-encre-muted flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {a.read}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-medium text-encre mb-3 leading-snug group-hover:text-sauge-700 transition-colors">
                        {a.title}
                      </h3>
                      <p className="text-sm text-encre-muted leading-relaxed mb-4 line-clamp-2">
                        {a.desc}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sauge-700 text-sm font-medium group-hover:gap-3 transition-all">
                        Lire l'article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA RETOUR BLOG ─── */}
      <section className="pb-20 bg-ivoire">
        <div className="max-w-xl mx-auto px-6 text-center reveal">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-sauge-700 text-sauge-700 font-medium hover:bg-sauge-700 hover:text-ivoire transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Tous les articles
          </Link>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="py-20 bg-sauge-700 text-ivoire grain relative overflow-hidden">
        {/* Decorative element */}
        <svg className="absolute -right-20 -top-20 w-80 h-80 opacity-5 text-rose-300" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 10 C120 40 140 60 160 80 C140 100 130 130 100 150 C70 130 60 100 40 80 C60 60 80 40 100 10 Z" />
        </svg>

        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-300 font-medium mb-4 inline-block">
            — Lettre d'amour
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] mb-6">
            Recevez mes <span className="italic text-rose-300">conseils</span> chaque semaine
          </h2>
          <p className="text-ivoire/70 leading-relaxed mb-8 max-w-xl mx-auto">
            Astuces bien-être, recettes naturelles, témoignages et inspiration directement dans votre boîte mail.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Merci pour votre inscription !');
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="votre@email.com"
              className="flex-1 px-5 py-4 rounded-full bg-ivoire/10 border border-ivoire/20 text-ivoire placeholder:text-ivoire/40 focus:outline-none focus:border-rose-300 focus:bg-ivoire/15 transition-all"
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