const translations = {
  fr: {
        'hero.eyebrow': 'Data Scientist · Fraud Analysis Specialist · ML · NLP · MLOps',
    'hero.name': 'Elhadji Diaraff DIAGNE',
    'hero.role': 'Je conçois, entraîne et déploie des systèmes de machine learning de bout en bout — de l\'ingestion de données brutes jusqu\'à l\'API en production.',
    'hero.cta.projects': 'Voir mes projets',
    'hero.cta.cv': 'Mon CV',
    'summary.title': 'Résumé technique',
    'summary.p1': 'Data Scientist orienté production, spécialisé en machine learning supervisé, traitement du langage (NLP) et déploiement de modèles en production. Expérience end-to-end : exploration de données volumineuses, feature engineering, entraînement et évaluation de modèles, monitoring post-déploiement.',
    'summary.p2': 'Maîtrise de Python (Pandas, NumPy, scikit-learn, PyTorch) et SQL (PostgreSQL, BigQuery). Pratique quotidienne de Docker, MLflow, FastAPI et Git pour industrialiser les pipelines. Sensibilité aux contraintes métier : coût d\'erreur, latence, interprétabilité.',
    'summary.p3': 'Intérêt marqué pour les modèles parcimonieux, les architectures reproductibles et les workflows MLOps (CI/CD, versionnement de données, tests de modèles).',
    'skills.title': 'Stack technique',
    'skills.languages': 'Langages',
    'skills.ml': 'Machine Learning & Deep Learning',
    'skills.nlp': 'NLP & LLMs',
    'skills.data': 'Data Engineering',
    'skills.mlops': 'MLOps & Déploiement',
    'skills.viz': 'Visualisation & BI',
    'skills.db': 'Bases de données',
    'skills.cloud': 'Cloud & Infra',
    'featured.title': 'Projets phares',
    'featured.all': 'Tous les projets →',
    'proj1.title': 'Prédiction du churn client',
    'proj1.desc': 'Modèle XGBoost pour anticiper la résiliation sur un dataset télécom (7k clients).',
    'proj1.link': 'Voir l\'étude de cas →',
    'proj2.title': 'Dashboard ventes interactif',
    'proj2.desc': 'Application Streamlit explorant 3 ans de ventes e-commerce avec segmentation RFM.',
    'proj2.link': 'Voir l\'étude de cas →',
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
    'cv.headline': 'Mon CV',
    'cv.intro': 'Choisissez la version à télécharger — le PDF s\u2019ouvre dans un nouvel onglet.',
    'cv.download': '⬇ Télécharger en français',
    'cv.preview.fr': 'Aperçu du CV français ↗',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés'
  },
  en: {
        'hero.eyebrow': 'Data Scientist · Fraud Analysis Specialist · ML · NLP · MLOps',
    'hero.name': 'Elhadji Diaraff DIAGNE',
    'hero.role': 'I design, train and deploy end-to-end machine learning systems — from raw data ingestion to production API.',
    'hero.cta.projects': 'View my projects',
    'hero.cta.cv': 'My Resume',
    'summary.title': 'Technical Summary',
    'summary.p1': 'Production-oriented Data Scientist specialized in supervised machine learning, natural language processing (NLP) and production model deployment. End-to-end experience: large-scale data exploration, feature engineering, model training and evaluation, post-deployment monitoring.',
    'summary.p2': 'Strong command of Python (Pandas, NumPy, scikit-learn, PyTorch) and SQL (PostgreSQL, BigQuery). Daily practice with Docker, MLflow, FastAPI and Git to industrialize pipelines. Sensitive to business constraints: error cost, latency, interpretability.',
    'summary.p3': 'Keen interest in parsimonious models, reproducible architectures and MLOps workflows (CI/CD, data versioning, model testing).',
    'skills.title': 'Technical Stack',
    'skills.languages': 'Languages',
    'skills.ml': 'Machine Learning & Deep Learning',
    'skills.nlp': 'NLP & LLMs',
    'skills.data': 'Data Engineering',
    'skills.mlops': 'MLOps & Deployment',
    'skills.viz': 'Visualization & BI',
    'skills.db': 'Databases',
    'skills.cloud': 'Cloud & Infra',
    'featured.title': 'Featured Projects',
    'featured.all': 'All projects →',
    'proj1.title': 'Customer Churn Prediction',
    'proj1.desc': 'XGBoost model to anticipate churn on a telecom dataset (7k customers).',
    'proj1.link': 'View case study →',
    'proj2.title': 'Interactive Sales Dashboard',
    'proj2.desc': 'Streamlit application exploring 3 years of e-commerce sales with RFM segmentation.',
    'proj2.link': 'View case study →',
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
