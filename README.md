# Serveur Boutique - API REST Node.js + Express + MongoDB

Une API REST simple pour la gestion d’une boutique, construite avec **Node.js**, **Express.js** et **MongoDB**.  
Elle permet de gérer les produits : ajout, lecture, mise à jour, suppression et gestion du stock.

##Fonctionnalités

-  Récupérer tous les produits
-  Récupérer un produit par ID
-  Ajouter un nouveau produit
-  Mettre à jour les informations d’un produit (sauf stock)
-  Mettre à jour uniquement le `stockStatus`
-  Supprimer un produit

## Technologies utilisées

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Installation

### Prérequis

- Node.js
- MongoDB local ou MongoDB Atlas
- Postman (pour les tests)

###  Étapes

 **Cloner le projet**

```bash
git clone https://github.com/chatoura/Serveur-boutique.git
cd Serveur-boutique
 **on installe les dependances**
"npm install" puis on
**configurer l’environnement**
en créeant un fichier .env à la racine du projet PORT=3000
MONGODB_URI=mongodb://localhost:27017/boutique ensuite on
**lance le serveur**
node index.js qui sera disponible sur http://localhost:3000 .


**Pour tester avec POSTMAN**

D'abord installer Postman puis le lancer ensuite créer une requête pour tester .
GET http://localhost:3000/products

 ### qui permet de récuperer la liste de tous les produits.

GET hhtp://http://localhost:3000/products

### qui permet de récuperer un produit par son ID.
GET http://localhost:3000/products/68833656736de04b1289b03f

### qui permet d'ajouter un nouvel produit.
POST  http://localhost:3000/products

###  qui permet de mettre à jour un produit excepté son status en stock.
PATCH  http://localhost:3000/products/68833656736de04b1289b041

### status qui permet de mettre à jour le status du produit en stock.
PATCH http://localhost:3000/products/68833656736de04b1289b042

### qui permet de supprimer un produit. 

DELETE  http://localhost:3000/products/68833656736de04b1289b03d

une fois entrer la requete cliquer sur Send pour envoyer la requête.
et vous verrez la réponse du serveur en dessous.

## Structure du projet

Serveur-boutique/
├── models/
│   └── product.js
├── .env
├── index.js
├── package.json


