# Shroompedia - L'encyclopédie de ShroomTD

---

## Développeurs
- Jérôme Vandewalle
- Scotty Pruvost

## Version
- v0.0.0
- Dernière mise à jour : 18 Janvier 2026

---

## Description

Shroompedia est une encyclopédie décrivant les éléments du jeu [ShroomTD](https://github.com/SparkasseLabank/Shroom-TD).

Grâce à Shroompedia, vous aurez toutes les informations sur tous les éléments du jeu ShroomTD et vous pourrez donc en apprendre plus sur ce jeu culte ! Vous comprendrez enfin toutes les subtilités du jeu et comment gagner à tous les coups !

### Fonctionnalités

Cette application comprend les fonctionnalités suivantes :
- Gestion des utilisateurs
- Gestion des Shrooms
- Authentification avec JWT
- Affichage des informations des Shrooms

### Technologies

- Back-end: Node.JS, Express, TypeScript, Prisma, MySQL / MariaDB
- Front-end: Vue 3, Pinia, NaiveUI, TypeScript
- Autres: JWT, Bruno, Swagger

---

## Installation

*Note: Cette procédure d'installation suppose que vous ayez installé MySQL / MariaDB sur votre ordinateur au préalable. Si ce n'est pas déjà fait, veuillez consultez ces liens : [MySQL](https://www.mysql.com/fr/downloads/) | [MariaDB](https://mariadb.org/download/)

1. Cloner le projet:
```
git clone https://github.com/WorKai7/shroompedia.git
```

2. Ouvrir le projet dans un terminal

3. Ouvrir votre client MySQL ou MariaDB:
```
sudo mysql
```

Si vous êtes sur Windows,
```
mysql -u root
```

4. Créer la base de données
```
CREATE DATABASE shroompedia;
```

5. Executer le script sql présent à la racine du projet et quitter
```
SOURCE chemin/vers/shroompedia.sql;
exit
```

6. Installer les dépendences:
```
cd api/
npm install

cd ../front/shroompedia
npm install
```

7. Retourner à la racine du projet puis ouvrir un terminal et lancer le serveur de l'API:
```
cd api/
npm run dev
```

8. Retourner à la racine du projet puis ouvrir un terminal et lancer le serveur front:
```
cd front/shroompedia
npm run dev
```

9. Ouvrir votre navigateur préféré puis entrez le lien suivant:
```
http://localhost:5173
```

---

## Endpoints API

### Authentification

| Méthode | Route            | Description                                  |
| ------- | ---------------- | -------------------------------------------- |
| POST    | `/auth/login`    | Connexion d’un utilisateur (retourne un JWT) |

### Users

Tous les endpoints nécessitent un Bearer Token

| Méthode | Route        | Description                  |
| ------- | ------------ | ---------------------------- |
| GET     | `/users`     | Liste tous les utilisateurs  |
| GET     | `/users/:id` | Détails d’un utilisateur     |
| POST    | `/users`     | Créer un utilisateur         |
| PUT     | `/users/:id` | Mettre à jour un utilisateur |
| DELETE  | `/users/:id` | Supprimer un utilisateur     |

### Shrooms

Tous les endpoints nécessitent un Bearer Token

| Méthode | Route          | Description             |
| ------- | -------------- | ----------------------- |
| GET     | `/shrooms`     | Liste tous les shrooms  |
| GET     | `/shrooms/:id` | Détails d’un shroom     |
| POST    | `/shrooms`     | Créer un shroom         |
| PUT     | `/shrooms/:id` | Mettre à jour un shroom |
| DELETE  | `/shrooms/:id` | Supprimer un shroom     |

### Doc

| Méthode | Route          | Description             |
| ------- | -------------- | ----------------------- |
| GET     | `/api-docs`     | Affiche la documentation Swagger  |
