## Initialisation 
`yarn init -2` 
-> -2 pour initialiser le projet en mode plug and play sans avoir besoin du dossier node_modules pour les dépendances

### dependencies
`yarn add express dotenv body-parser`
-> dotenv pour charger le fichier .env et les variables d'environnement
-> body-parser pour interpéter le body json d'une réponse http

### dev-dependencies
`yarn add -D @types/express @types/body-parser`
`yarn add -D prettier typescript`
`yarn dlx @yarnpkg/sdks vscode`
-> sdk nécessaire pour utiliser yarn sans dossier node-modules
`yarn add -D nodemon`
-> pour démarrer l'api + mode hot reloading

## Configuration API
Ajout d'une configuration minimale dans `tsconfig.json` et `nodemon.json`
et des scripts `"dev": "nodemon"` et `"lint": "prettier --check ."` dans package.json
Ajout du dossier `src/` avec une arborescence de départ :
Chargement des variables d'environnement dans `src/infrastructure/api/api.config.ts`.
Création et démarrage de l'api dans `src/infrastructure/api/index.ts`.
Activation des variables d'environnement et lancement de l'api dans `src/index.ts`
`yarn dev`