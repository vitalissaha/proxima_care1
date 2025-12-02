# ⚠️ IMPORTANT : Logo manquant

## Problème
Le fichier `/log.jpeg` n'existe pas dans le dossier `public/`.

## Solution

### Option 1 : Ajouter votre logo (recommandé)
1. Placez votre fichier logo dans le dossier `public/` avec le nom exact : **`log.jpeg`**
2. Ou renommez votre fichier en `log.jpeg` s'il a un autre nom
3. Le site affichera automatiquement votre logo

### Option 2 : Utiliser un autre format
Si votre logo est en PNG ou SVG, vous pouvez :
- Renommer en `log.jpeg` (même si c'est un PNG)
- Ou modifier `components/Logo.tsx` pour utiliser `/logo.png` ou `/logo.svg`

### Option 3 : Utiliser le placeholder
Le composant `Logo` affichera automatiquement un placeholder SVG si l'image n'existe pas.

## Emplacement du fichier
```
public/
  └── log.jpeg  ← Placez votre logo ici
```

## Formats acceptés
- JPEG (.jpeg, .jpg)
- PNG (.png)
- SVG (.svg)

## Taille recommandée
- Minimum : 512x512 pixels
- Optimal : 1024x1024 pixels ou plus






