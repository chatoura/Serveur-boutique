 Serveur Boutique - API REST (Node.js + Express + MongoDB)

Une API REST simple pour la gestion d’une boutique, construite avec Node.js, Express.js et MongoDB.
Elle permet de gérer les produits : ajout, lecture, mise à jour, suppression et gestion du stock.
 Fonctionnalités

     Récupérer tous les produits

   Récupérer un produit par ID

   Ajouter un nouveau produit

   Mettre à jour les informations d’un produit (hors stock)

   Mettre à jour uniquement le stockStatus

    Supprimer un produit

Technologies utilisées

    Node.js

    Express.js

    MongoDB / Mongoose

    Dotenv

Installation
🔸 1. Cloner le projet

git clone https://github.com/chatoura/Serveur-boutique.git
cd Serveur-boutique

🔸 2. Installer les dépendances

npm install

🔸 3. Configurer l’environnement

Crée un fichier .env à la racine du projet avec le contenu suivant :

PORT=3000
MONGODB_URI=mongodb://localhost:27017/boutique

🔸 4. Lancer le serveur

node index.js

L'API sera disponible sur :
 http://localhost:3000
 Tester l’API avec Postman

Ouvre Postman et utilise les routes suivantes :
Méthode	URL	Description
GET	http://localhost:3000/products	Récupérer tous les produits
GET	http://localhost:3000/products/:id	Récupérer un produit par son ID
POST	http://localhost:3000/products	Ajouter un nouveau produit
PATCH	http://localhost:3000/products/:id	Mettre à jour un produit (hors stock)
PATCH	http://localhost:3000/products/:id/status	Mettre à jour le statut du stock
DELETE	http://localhost:3000/products/:id	Supprimer un produit

    Après avoir renseigné l’URL et la méthode dans Postman, cliquer sur Send pour voir la réponse du serveur.

Structure du projet

Serveur-boutique/
├── models/
│   └── product.js
├── .env
├── index.js
├── package.json

