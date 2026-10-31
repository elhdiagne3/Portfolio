import os, glob, re

print("=== 1. Déplacement des fichiers ===")
os.makedirs('projects/public-health', exist_ok=True)

clean_files = glob.glob('*cleaning*health*.html')
if clean_files:
    os.replace(clean_files[0], 'projects/public-health/cleaning-raw.html')
    print('✔ Fichier cleaning-raw.html prêt')
else:
    print('⚠️ Fichier cleaning introuvable à la racine')

analysis_files = glob.glob('*Analysis*health*.html')
if analysis_files:
    os.replace(analysis_files[0], 'projects/public-health/analysis-raw.html')
    print('✔ Fichier analysis-raw.html prêt')
else:
    print('⚠️ Fichier Analysis introuvable à la racine')

print("=== 2. Création des sous-pages (Iframes) ===")
iframe_code = """<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>{title}</title>
<style>
  body {{ margin: 0; height: 100vh; display: flex; flex-direction: column; background: #fff; font-family: sans-serif; }}
  .header-bar {{ display: flex; justify-content: space-between; align-items: center; padding: 12px 20px; background: #f8f9fa; border-bottom: 1px solid #ddd; }}
  iframe {{ flex: 1; width: 100%; border: none; }}
  .btn-back {{ text-decoration: none; padding: 8px 16px; background: #2563eb; color: white; border-radius: 6px; font-weight: bold; }}
</style>
</head>
<body>
<div class="header-bar">
  <a href="../public-health.html" class="btn-back">← Retour</a>
  <h2 style="margin:0; font-size: 1.1rem;">{title}</h2>
  <div style="width: 120px;"></div>
</div>
<iframe src="{src}"></iframe>
</body>
</html>"""

with open('projects/public-health/cleaning.html', 'w', encoding='utf-8') as f:
    f.write(iframe_code.format(title="Data Cleaning", src="cleaning-raw.html"))
with open('projects/public-health/analysis.html', 'w', encoding='utf-8') as f:
    f.write(iframe_code.format(title="Data Analysis", src="analysis-raw.html"))
print('✔ cleaning.html et analysis.html créés')

print("=== 3. Création de la page principale ===")
main_page = """<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Public Health Dashboard</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<header class="site-header"><nav class="nav"><a href="../index.html" class="logo">Elhadji Diaraff DIAGNE</a></nav></header>
<main class="case-study" style="max-width: 900px; padding-top: 3rem;">
  <div class="case-head">
    <p class="eyebrow">Data Science · Santé Publique</p>
    <h1>Public Health Dashboard</h1>
    <p class="stack">Python · Pandas · scikit-learn · Jupyter</p>
  </div>
  <section>
    <h2>Présentation du projet</h2>
    <p>Analyse de données Open Food Facts pour une application au service de la santé publique. Le projet est divisé en deux phases d'analyse.</p>
    <div style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
      <a href="public-health/cleaning.html" class="btn" style="padding:10px 20px; background:#2563eb; color:white; border-radius:6px; text-decoration:none;">📓 Data Cleaning</a>
      <a href="public-health/analysis.html" class="btn" style="padding:10px 20px; background:#2563eb; color:white; border-radius:6px; text-decoration:none;">📓 Data Analysis</a>
    </div>
  </section>
  <section style="margin-top: 3rem;"><a href="../projects.html" class="btn btn-outline">← Retour aux projets</a></section>
</main>
</body>
</html>"""
with open('projects/public-health.html', 'w', encoding='utf-8') as f:
    f.write(main_page)
print('✔ public-health.html créé')

print("=== 4. Mise à jour de projects.html ===")
if os.path.exists('projects.html'):
    with open('projects.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Supprime l'ancienne carte
    html = re.sub(r'<article class="project-card">\s*<h3[^>]*>Public Health Dashboard</h3>.*?</article>', '', html, flags=re.DOTALL)

    new_card = """<article class="project-card">
      <h3>Public Health Dashboard</h3>
      <p>Application interactive de suivi des indicateurs de santé publique avec visualisations temps réel.</p>
      <p class="stack">Python · Pandas · Jupyter</p>
      <a href="projects/public-health.html">Voir le projet →</a>
    </article>"""

    # Ajoute la carte au début de la grille (pour éviter les bugs de fermeture de balise)
    match = re.search(r'<div class="project-grid"[^>]*>', html)
    if match:
        html = html[:match.end()] + '\n' + new_card + html[match.end():]
    else:
        html = html.replace('</main>', new_card + '\n</main>')

    with open('projects.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print('✔ projects.html mis à jour')
else:
    print('⚠️ projects.html introuvable')
