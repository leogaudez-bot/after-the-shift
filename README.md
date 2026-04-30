# After the Shift

Mini web app solo, mobile-first et en français : une satire dystopique légère où le joueur pilote un **Protocole de Rééquilibrage** et observe l'évolution de quatre indicateurs sociaux.

## Concept

- 1 page unique
- 8 tours / cartes de scénario
- 4 métriques : **Emploi**, **Stabilité**, **Innovation**, **Humanité**
- fins multiples selon l'état final
- ton absurde / corporate / IA dystopique
- partage du résultat via **Web Share API** avec repli presse-papiers, puis sélection manuelle si nécessaire

## Fichiers

- `index.html` — structure de l'application
- `styles.css` — interface sombre, compacte et tactile
- `app.js` — logique de jeu, scénarios, fins, partage
- `server.mjs` — serveur Node minimal sans dépendances
- `package.json` — scripts et métadonnées

## Lancer en local

```bash
npm start
```

Puis ouvrir :

```text
http://localhost:3000
```

Le serveur écoute sur `0.0.0.0` et utilise `process.env.PORT || 3000`, ce qui convient à Railway.

## Déploiement Railway

Aucune configuration spéciale requise : Railway détecte le projet Node et peut lancer :

```bash
npm start
```

## Notes

- Aucun framework
- Aucune dépendance externe
- Animations discrètes, sans son
- Projet conçu pour être facilement servi en statique via Node natif
