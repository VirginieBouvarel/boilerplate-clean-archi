import bodyParser from "body-parser";
import express from "express";

import config from "./api.config";

// Création d'une instance d'express pour l'app
const app = express();

// Configuration du parsing des requêtes 
// -> avec le header content-type: application/json dans req.body
app.use(bodyParser.json());
// -> Dans req.body on pourra avoir autre chose que des strings
app.use(bodyParser.urlencoded({ extended: true }));


// Démarrage du serveur express
const server = app.listen(config.port, () => {
  console.log(`Listening at http://localhost:${config.port}`);
})
server.on('error', console.error);