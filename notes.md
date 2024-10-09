## Initialisation 
`yarn init -2` 
-> -2 pour initialiser le projet en mode plug and play sans avoir besoin du dossier node_modules pour les dépendances

## Installation des dependencies
`yarn add express dotenv body-parser`
-> dotenv pour charger le fichier .env et les variables d'environnement
-> body-parser pour interpéter le body json d'une réponse http

## Installation des dev-dependencies
`yarn add -D @types/express @types/body-parser`
`yarn add -D prettier typescript`
`yarn dlx @yarnpkg/sdks vscode`
-> sdk nécessaire pour utiliser yarn sans dossier node-modules