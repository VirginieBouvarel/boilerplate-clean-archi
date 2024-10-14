# 1- Couche externe

## Premier controller
Ajout des librairies `tsoa` et `reflect-metadata`
Mise à jour de la `tsconfig` pour pouvoir utiliser les décorateurs

On crée le premier controller `src/infrastructure/api/controllers/book.controller.ts` 
> En utilisant les décorateurs de la librairie tsoa
On définit dans le controller toutes les méthodes nécessaires pour manipuler un objet Book.
On rattache le controller à une route -> `api/books`

## Le DTO
Ajout de la librairie `zod`

On ajoute un fichier `src/infrastructure/api/controllers/dto/book.dto.ts`
Pour créer un DTO dans qui va définir :
- comment doit être constitué un objet Book retourné par la route `/books` en GET
- comment doit être constitué un objet Book envoyé à la route `/books` en POST
On crée d'emblée des fichiers `get-book.dto.ts` et `post-book.dto.ts` pour séparer les définitions en fonction des opérations effectuées sur les données
On ajoute un point d'entrée `index.ts` pour appeler les deux autres fichiers

On utilise les objets définis par le DTO pour typer correctement les retours dans le controller
> On utilise des mocks d'objet Book valides pour que la compilation TS passe
car une fois les types de retour correctement définis dans le controller, TS n'accepte plus que l'on retoune `undefined`.