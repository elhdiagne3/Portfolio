import glob, os

# 1. On cherche les fichiers .ipynb
f_analysis = glob.glob('*Analysis*.ipynb')
f_cleaning = glob.glob('*cleaning*.ipynb')

if not f_analysis or not f_cleaning:
    print("❌ Fichiers .ipynb introuvables à la racine.")
else:
    # 2. On s'assure que le dossier existe
    os.makedirs('projects/public-health', exist_ok=True)
    
    # 3. On convertit avec la bibliothèque Python nbconvert
    import nbformat
    from nbconvert import HTMLExporter
    
    exporter = HTMLExporter()
    exporter.template_name = 'classic'
    
    # Traitement Analysis
    with open(f_analysis[0], 'r', encoding='utf-8') as f:
        nb = nbformat.read(f, as_version=4)
        body, _ = exporter.from_notebook_node(nb)
        with open('projects/public-health/analysis-raw.html', 'w', encoding='utf-8') as out:
            out.write(body)
            print("✔ analysis-raw.html créé")
            
    # Traitement Cleaning
    with open(f_cleaning[0], 'r', encoding='utf-8') as f:
        nb = nbformat.read(f, as_version=4)
        body, _ = exporter.from_notebook_node(nb)
        with open('projects/public-health/cleaning-raw.html', 'w', encoding='utf-8') as out:
            out.write(body)
            print("✔ cleaning-raw.html créé")
