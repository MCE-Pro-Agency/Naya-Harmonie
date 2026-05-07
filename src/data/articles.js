/**
 * src/data/articles.js
 * 
 * Données des articles (métadonnées uniquement)
 * Le contenu complet est dans Article.jsx
 */

export const ARTICLES = [
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
  },
];

export const CATEGORIES = [
  { id: 'all', label: 'Tous les articles' },
  { id: 'couple', label: 'Couple' },
  { id: 'menopause', label: 'Ménopause' },
  { id: 'bien-etre', label: 'Bien-être' },
  { id: 'sexualite', label: 'Sexualité' },
];