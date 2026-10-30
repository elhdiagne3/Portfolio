const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.projects': 'Projets',
    'nav.cv': 'CV',
    'nav.contact': 'Contact',
    'nav.lang': 'EN',
    'nav.lang.label': 'Switch to English',
    'index.eyebrow': 'Data Scientist',
    'index.title': 'Je transforme les données<br>en décisions concrètes.',
    'index.intro': 'Data Scientist spécialisé en Machine Learning, NLP et MLOps.',
    'index.cta.projects': 'Voir mes projets',
    'index.cta.cv': 'Mon CV',
    'index.skills': 'Compétences',
    'index.featured': 'Projets phares',
    'index.all_projects': 'Tous les projets →',
    'projects.title': 'Projets',
    'projects.intro': 'Une sélection de projets data — de l\u2019exploration au déploiement.',
    'cv.eyebrow': 'Curriculum Vitæ',
    'cv.headline': 'Mon CV',
    'cv.intro': 'Choisissez la version à télécharger — le PDF s\u2019ouvre dans un nouvel onglet.',
    'cv.download': '⬇ Télécharger en français',
    'cv.preview.fr': 'Aperçu du CV français ↗',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés'
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.cv': 'Resume',
    'nav.contact': 'Contact',
    'nav.lang': 'FR',
    'nav.lang.label': 'Passer en français',
    'index.eyebrow': 'Data Scientist',
    'index.title': 'I turn data<br>into concrete decisions.',
    'index.intro': 'Data Scientist specialized in Machine Learning, NLP and MLOps.',
    'index.cta.projects': 'View my projects',
    'index.cta.cv': 'My Resume',
    'index.skills': 'Skills',
    'index.featured': 'Featured projects',
    'index.all_projects': 'All projects →',
    'projects.title': 'Projects',
    'projects.intro': 'A selection of data projects — from exploration to deployment.',
    'cv.eyebrow': 'Résumé',
    'cv.headline': 'My Resume',
    'cv.intro': 'Pick the version to download — the PDF opens in a new tab.',
    'cv.download': '⬇ Download (English)',
    'cv.preview.fr': 'Preview (English) ↗',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved'
  }
};

function getCurrentLang() {
  return localStorage.getItem('lang') || 'fr';
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  applyTranslations(lang);
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.fr;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] === undefined) return;
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = dict['nav.lang'];
    langBtn.setAttribute('aria-label', dict['nav.lang.label']);
  }

  // Bouton principal : pointe vers le PDF de la langue courante
  const dl = document.getElementById('cv-download');
  if (dl) {
    const prefix = window.location.pathname.includes('/projects/') ? '../' : '';
    dl.href = prefix + (lang === 'en' ? 'cv-en.pdf' : 'cv-fr.pdf');
  }
}

function toggleLang() {
  setLang(getCurrentLang() === 'fr' ? 'en' : 'fr');
}

document.addEventListener('DOMContentLoaded', () => {
  setLang(getCurrentLang());
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.addEventListener('click', toggleLang);
});
