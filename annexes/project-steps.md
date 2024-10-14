# 1- Couche externe

## Premier controller
Ajout des librairies tsoa et reflect-metadata
Mise à jour de la tsconfig pour pouvoir utiliser les décorateurs

On crée le premier controller src/infrastructure/api/controllers/book.controller.ts 
-> en utilisant les décorateurs de la librairie tsoa
On définit dans le controller toutes les méthodes nécessaires pour manipuler un objet `Book`.
On rattache le controller à une route -> `api/books`