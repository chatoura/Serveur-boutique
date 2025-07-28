const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const productModel = require("./models/product"); // ✅ importer le modèle

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connexion à MongoDB réussie"))
  .catch((err) => console.error("Erreur de connexion :", err));

// Route test
app.get("/", (req, res) => {
  res.send("Bienvenue sur le serveur boutique !");
});

// Route pour récupérer tous les produits
app.get("/products", async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json({
            message: "Produits récupérés avec succès",
            data: products
        });
    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la récupération des produits",
            error: error.message
        });
    }
});

// Route pour récupérer un produit par ID
app.get("/products/:id", async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        
        if (!product) {
            return res.status(404).json({
                message: "Produit introuvable"
            });
        }

        res.status(200).json({
            message: "Produit récupéré avec succès",
            data: product
        });
    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la récupération du produit",
            error: error.message
        });
    }
});

// Route pour ajouter un nouveau produit
app.post("/products", async (req, res) => {
    try {
        const { productName, price, stockStatus } = req.body;

        // Vérification de la validité des données
        if (!productName || !price || !stockStatus) {
            return res.status(400).json({
                message: "Tous les champs sont obligatoires"
            });
        }

        const newProduct = new productModel({ productName, price, stockStatus });
        await newProduct.save();

        res.status(201).json({
            message: "Produit ajouté avec succès",
            data: newProduct
        });
    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de l'ajout du produit",
            error: error.message
        });
    }
});

// Route pour mettre à jour un produit (hors stockStatus)
app.patch("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { productName, price } = req.body;

        // Ne pas permettre la mise à jour de stockStatus ici
        if (req.body.stockStatus) {
            return res.status(400).json({
                message: "Vous ne pouvez pas modifier le stockStatus avec cette route"
            });
        }

        const updatedProduct = await productModel.findByIdAndUpdate(
            id,
            { productName, price },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }

        res.status(200).json({
            message: "Produit mis à jour avec succès",
            data: updatedProduct
        });
    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la mise à jour du produit",
            error: error.message
        });
    }
});

// Route pour mettre à jour uniquement le stockStatus
app.patch("/products/:id/:status", async (req, res) => {
    try {
        const { id, status } = req.params;

        const validStatuses = ['en stock', 'petite stock', 'pas en stock'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                message: "Le statut doit être : 'en stock', 'petite stock' ou 'pas en stock'"
            });
        }

        const updatedProduct = await productModel.findByIdAndUpdate(
            id,
            { stockStatus: status },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }

        res.status(200).json({
            message: "StockStatus mis à jour avec succès",
            data: updatedProduct
        });
    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la mise à jour du stockStatus",
            error: error.message
        });
    }
});

// Route pour supprimer un produit
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    res.status(200).json({ message: "Produit supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression du produit", error: error.message });
  }
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${port}`);
});
