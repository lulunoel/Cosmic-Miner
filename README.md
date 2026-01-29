# Cosmic Miner

**Un jeu idle/incrémental spatial développé avec Electron**

Construisez votre empire cosmique en minant des astéroïdes, en générant de l'énergie et en recherchant de nouvelles technologies. Progressez même hors-ligne grâce au système de gains passifs !

---

## Table des Matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Lancement](#lancement)
- [Build & Distribution](#build--distribution)
- [Structure du Projet](#structure-du-projet)
- [Mécanique de Jeu](#mécanique-de-jeu)
  - [Ressources](#ressources)
  - [Bâtiments](#bâtiments)
  - [Améliorations](#améliorations)
  - [Automatisations](#automatisations)
  - [Succès](#succès)
  - [Événements Aléatoires](#événements-aléatoires)
  - [Progression Hors-ligne](#progression-hors-ligne)
- [Technologies Utilisées](#technologies-utilisées)
- [Raccourcis Clavier](#raccourcis-clavier)
- [Système de Sauvegarde](#système-de-sauvegarde)
- [Contribution](#contribution)
- [Licence](#licence)
- [Auteur](#auteur)

---

## Aperçu

Cosmic Miner est un jeu idle/incrémental où vous incarnez un mineur spatial. Cliquez pour miner du minerai, construisez des installations automatisées, débloquez des améliorations et regardez votre empire cosmique grandir de manière exponentielle.

**Caractéristiques principales :**
- Interface sombre thématique spatiale avec animations
- 4 types de ressources interconnectées
- 9 bâtiments de production avec coûts exponentiels
- 8 améliorations permanentes
- 9 automatisations indépendantes
- 23 succès à débloquer
- 5 événements aléatoires bonus
- Progression hors-ligne (50% du taux, max 8h)

---

## Fonctionnalités

| Fonctionnalité | Description |
|----------------|-------------|
| **Minage Cliquable** | Cliquez sur l'astéroïde pour générer du minerai avec multiplicateurs |
| **Production Passive** | Les bâtiments génèrent des ressources automatiquement |
| **Système de Recherche** | Convertissez l'énergie en points de recherche |
| **Économie de Crédits** | Vendez du minerai pour obtenir des crédits |
| **Améliorations** | Achetez des bonus permanents multiplicateurs |
| **Automatisation** | Activez l'achat automatique de bâtiments |
| **Succès** | Débloquez 23 succès basés sur vos actions |
| **Événements** | Profitez de bonus temporaires aléatoires |
| **Hors-ligne** | Gagnez des ressources même déconnecté |
| **Sauvegarde Cloud** | Compatible CrazyGames et Steam |

---

## Installation

### Prérequis

- **Node.js** v18.0.0 ou supérieur
- **npm** (inclus avec Node.js)

### Étapes

```bash
# Cloner le dépôt
git clone https://github.com/Lulunoel2016/cosmic-miner.git
cd idlegame

# Installer les dépendances
npm install
```

---

## Lancement

### Mode Développement

```bash
npm start
```

Lance l'application Electron en mode développement avec les outils de débogage accessibles (F12).

### Ouvrir dans un navigateur

Vous pouvez également ouvrir directement `idlegame/index.html` dans un navigateur web moderne.

---

## Build & Distribution

### Construire pour Windows

```bash
npm run build:win
```

**Fichiers générés dans `dist/` :**
- `Cosmic Miner Setup 1.0.0.exe` - Installateur NSIS (~76.5 MB)
- `Cosmic Miner 1.0.0.exe` - Exécutable portable (~76.2 MB)

### Construire pour macOS

```bash
npm run build:mac
```

### Construire pour Linux

```bash
npm run build:linux
```

---

## Structure du Projet

```
idlegame/
├── idlegame/
│   └── index.html          # Fichier principal du jeu (HTML/CSS/JS)
├── main.js                  # Processus principal Electron
├── preload.js               # Script de préchargement sécurisé
├── package.json             # Configuration npm et scripts
├── BUILD.md                 # Guide de build détaillé
├── README.md                # Cette documentation
├── icon.png                 # Icône du jeu (512x512)
├── icon.ico                 # Icône Windows
├── dist/                    # Dossier de sortie des builds
│   ├── Cosmic Miner 1.0.0.exe
│   ├── Cosmic Miner Setup 1.0.0.exe
│   └── win-unpacked/
└── node_modules/            # Dépendances Node.js
```

---

## Mécanique de Jeu

### Ressources

Le jeu comporte **4 ressources principales** qui forment une chaîne de production :

| Ressource | Icône | Obtention | Utilisation |
|-----------|-------|-----------|-------------|
| **Minerai (Ore)** | Gris | Clic, Sondes, Stations, Raffineries, Colonies | Achat de bâtiments, vente |
| **Énergie (Energy)** | Jaune | Panneaux Solaires, Réacteurs, Essaims Dyson, Colonies | Achat de bâtiments, recherche |
| **Crédits (Credits)** | Vert | Vente de minerai, Vaisseaux Cargo, Colonies | Achat d'améliorations et automatisations |
| **Recherche (Research)** | Violet | Conversion d'énergie, Laboratoires | Achat d'améliorations et automatisations |

**Conversions :**
- `10 Minerai` → `5 Crédits` (Bouton Vendre)
- `20 Énergie` → `1 Recherche` (Bouton Rechercher)

---

### Bâtiments

9 bâtiments disponibles avec coûts exponentiels (facteur 1.15x par unité) :

| Bâtiment | Coût de Base | Production/sec | Condition de Déblocage |
|----------|--------------|----------------|------------------------|
| **Sonde de Minage** | 15 minerai | +1 minerai | Aucune |
| **Panneau Solaire** | 25 minerai, 10 crédits | +2 énergie | 1 Sonde |
| **Station de Minage** | 200 minerai, 50 énergie, 25 crédits | +10 minerai | 5 Sondes |
| **Vaisseau Cargo** | 500 minerai, 100 énergie, 100 crédits | +5 crédits | 1 Station |
| **Réacteur à Fusion** | 1000 minerai, 200 crédits | +25 énergie | 5 Panneaux |
| **Laboratoire** | 2000 minerai, 500 énergie, 300 crédits | +1 recherche | 1 Réacteur |
| **Raffinerie** | 5000 minerai, 1000 énergie, 500 crédits | +50 minerai | 3 Stations |
| **Essaim de Dyson** | 10000 minerai, 5000 énergie, 2000 crédits | +100 énergie | 5 Réacteurs |
| **Colonie Spatiale** | 50000 minerai, 20000 énergie, 10000 crédits, 100 recherche | +25 tout | 1 Raffinerie, 1 Dyson, 1 Labo |

**Formule de coût :**
```
Coût(n) = CoûtBase × 1.15^(nb_possédés + n)
```

---

### Améliorations

8 améliorations permanentes achetables une seule fois :

| Amélioration | Coût | Effet | Condition |
|--------------|------|-------|-----------|
| **Foreuse Améliorée** | 50 crédits | Clic ×2 | 25 crédits gagnés |
| **Sondes Efficaces** | 100 crédits | Sondes ×2 | 5 sondes |
| **Amplificateur Solaire** | 200 crédits | Panneaux ×3 | 10 panneaux |
| **Minage Laser** | 500 crédits, 10 recherche | Stations ×2 | 3 stations |
| **Moteur Warp** | 1000 crédits, 25 recherche | Cargos ×3 | 5 cargos |
| **Informatique Quantique** | 5000 crédits, 100 recherche | Tout ×2 | 50 recherche |
| **Sphère de Dyson** | 20000 crédits, 500 recherche | Énergie ×10 | 10 essaims |
| **Commerce Galactique** | 10000 crédits, 200 recherche | Crédits ×5 | 1000 crédits |

---

### Automatisations

9 automatisations pour acheter automatiquement des bâtiments :

| Automatisation | Coût | Intervalle | Condition |
|----------------|------|------------|-----------|
| **Auto-Sonde** | 500 crédits, 5 recherche | 5 sec | 10 sondes |
| **Auto-Panneaux** | 1000 crédits, 10 recherche | 5 sec | 10 panneaux |
| **Auto-Station** | 2500 crédits, 25 recherche | 6 sec | 5 stations |
| **Auto-Cargo** | 5000 crédits, 50 recherche | 6 sec | 5 cargos |
| **Auto-Réacteur** | 10000 crédits, 100 recherche | 7 sec | 5 réacteurs |
| **Auto-Labo** | 15000 crédits, 150 recherche | 8 sec | 3 labos |
| **Auto-Raffinerie** | 25000 crédits, 200 recherche | 8 sec | 3 raffineries |
| **Auto-Dyson** | 50000 crédits, 300 recherche | 10 sec | 3 essaims |
| **Auto-Colonie** | 100000 crédits, 500 recherche | 15 sec | 1 colonie |

Chaque automatisation peut être activée/désactivée individuellement.

---

### Succès

23 succès répartis en catégories :

#### Minerai (5)
| Succès | Condition |
|--------|-----------|
| Premier Minerai | Miner 1 minerai |
| Cent Minerais | Miner 100 minerais |
| Mille Minerais | Miner 1 000 minerais |
| Magnat Cosmique | Miner 100 000 minerais |
| Milliardaire du Minerai | Miner 10 000 000 minerais |

#### Énergie (2)
| Succès | Condition |
|--------|-----------|
| Maître de l'Énergie | Générer 10 000 énergie |
| Centrale Électrique | Générer 1 000 000 énergie |

#### Crédits (3)
| Succès | Condition |
|--------|-----------|
| Mineur Riche | Gagner 1 000 crédits |
| Millionnaire | Gagner 1 000 000 crédits |
| Milliardaire | Gagner 1 000 000 000 crédits |

#### Recherche (3)
| Succès | Condition |
|--------|-----------|
| Scientifique | Gagner 10 recherche |
| Chercheur | Gagner 100 recherche |
| Génie | Gagner 1 000 recherche |

#### Bâtiments (7)
| Succès | Condition |
|--------|-----------|
| Première Sonde | Posséder 1 sonde |
| Armée de Sondes | Posséder 50 sondes |
| Première Station | Posséder 1 station |
| Réseau de Stations | Posséder 10 stations |
| Ferme Solaire | Posséder 25 panneaux |
| Flotte Cargo | Posséder 10 cargos |
| Maître Fusion | Posséder 10 réacteurs |
| Colonisateur | Posséder 1 colonie |
| Bâtisseur d'Empire | Posséder 5 colonies |

#### Clics (3)
| Succès | Condition |
|--------|-----------|
| Cliqueur | 100 clics |
| Maître Cliqueur | 1 000 clics |
| Légende du Clic | 10 000 clics |

---

### Événements Aléatoires

5 événements peuvent se déclencher aléatoirement (0.5% par seconde) :

| Événement | Effet | Durée |
|-----------|-------|-------|
| **Pluie de Météores** | Production minerai ×3 | 30 sec |
| **Éruption Solaire** | Production énergie ×3 | 30 sec |
| **Boom Commercial** | Production crédits ×3 | 30 sec |
| **Eureka!** | Production recherche ×5 | 20 sec |
| **Chance Cosmique** | Toute production ×2 | 45 sec |

---

### Progression Hors-ligne

- **Taux :** 50% de la production normale
- **Durée max :** 8 heures
- **Minimum :** 1 minute d'absence pour afficher le résumé
- **Affichage :** Fenêtre modale au retour avec résumé des gains

---

## Technologies Utilisées

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Electron** | 28.0.0 | Application desktop cross-platform |
| **electron-builder** | 24.9.1 | Build et packaging |
| **electron-store** | 8.1.0 | Stockage persistant |
| **HTML5/CSS3/JS** | - | Interface utilisateur (vanilla) |
| **Google Fonts** | - | Orbitron, Exo 2 |
| **Icons8** | - | Icônes SVG |

### Intégrations Optionnelles
- **CrazyGames SDK** - Sauvegarde cloud web
- **Steamworks.js** - Achievements et cloud Steam

---

## Raccourcis Clavier

| Touche | Action |
|--------|--------|
| `Espace` | Miner |
| `S` | Vendre le minerai |
| `R` | Rechercher |
| `F11` | Plein écran |
| `F12` | Outils développeur |

---

## Système de Sauvegarde

### Fréquence
- Automatique toutes les **30 secondes**
- À la fermeture de la fenêtre
- Après chaque transaction

### Données Sauvegardées
- Ressources et totaux gagnés
- Bâtiments possédés
- Améliorations achetées
- Automatisations actives
- Succès débloqués
- Statistiques (clics, temps de jeu)
- État des multiplicateurs
- Timestamp dernière connexion

### Emplacements
1. **CrazyGames Cloud** (si intégré)
2. **LocalStorage** (fallback)

---

## Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push sur la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

---

## Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## Auteur

**Lulunoel2016**

- GitHub: [@Lulunoel2016](https://github.com/Lulunoel2016)

---

## Paramètres Techniques

### Boucle de Jeu
- **Tick rate :** 10 ticks/seconde (100ms)
- **Rendu UI :** 20 ticks/seconde (50ms)
- **Vérification événements :** 1/seconde

### Fenêtre Electron
- **Taille par défaut :** 1400×900 pixels
- **Taille minimum :** 1000×700 pixels
- **Couleur de fond :** #0a0a1a

### Formule de Notation
Le jeu utilise un système de notation avec 100+ unités :
- `< 1,000` : Entier standard
- `1,000+` : Abréviations (k, M, B, T, Qa, Qi, Sx, Sp, Oc, No, Dc...)
- Mode scientifique disponible (ex: 1.23e6)

---

*Dernière mise à jour : Janvier 2026*
