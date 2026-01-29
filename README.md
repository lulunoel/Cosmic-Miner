# Cosmic Miner

**Un jeu idle/incrémental spatial développé avec Electron**

Construisez votre empire cosmique en minant des astéroïdes, en générant de l'énergie et en recherchant de nouvelles technologies. Progressez même hors-ligne grâce au système de gains passifs, atteignez des sommets de puissance grâce au système de prestige, et explorez de nouvelles planètes grâce au système de rebirth !

---

## Table des Matières

- [Cosmic Miner](#cosmic-miner)
  - [Table des Matières](#table-des-matières)
  - [Aperçu](#aperçu)
  - [Fonctionnalités](#fonctionnalités)
  - [Installation](#installation)
    - [Prérequis](#prérequis)
    - [Étapes](#étapes)
  - [Lancement](#lancement)
    - [Mode Développement](#mode-développement)
    - [Ouvrir dans un navigateur](#ouvrir-dans-un-navigateur)
  - [Build \& Distribution](#build--distribution)
    - [Construire pour Windows](#construire-pour-windows)
    - [Construire pour macOS](#construire-pour-macos)
    - [Construire pour Linux](#construire-pour-linux)
  - [Structure du Projet](#structure-du-projet)
  - [Mécanique de Jeu](#mécanique-de-jeu)
    - [Ressources](#ressources)
    - [Bâtiments](#bâtiments)
    - [Améliorations](#améliorations)
    - [Automatisations](#automatisations)
    - [Système de Prestige](#système-de-prestige)
      - [Niveaux de Prestige](#niveaux-de-prestige)
      - [Ce qui est conservé après un prestige :](#ce-qui-est-conservé-après-un-prestige-)
      - [Ce qui est réinitialisé :](#ce-qui-est-réinitialisé-)
    - [Système de Rebirth](#système-de-rebirth)
      - [Planètes](#planètes)
      - [Ressources Spéciales](#ressources-spéciales)
      - [Niveaux de Rebirth](#niveaux-de-rebirth)
      - [Ce qui est conservé après un rebirth :](#ce-qui-est-conservé-après-un-rebirth-)
      - [Ce qui est réinitialisé :](#ce-qui-est-réinitialisé--1)
    - [Succès](#succès)
      - [Minerai (5)](#minerai-5)
      - [Énergie (2)](#énergie-2)
      - [Crédits (3)](#crédits-3)
      - [Recherche (3)](#recherche-3)
      - [Bâtiments (9)](#bâtiments-9)
      - [Clics (3)](#clics-3)
      - [Prestige (8)](#prestige-8)
      - [Rebirth (8)](#rebirth-8)
    - [Événements Aléatoires](#événements-aléatoires)
    - [Progression Hors-ligne](#progression-hors-ligne)
  - [Technologies Utilisées](#technologies-utilisées)
    - [Intégrations Optionnelles](#intégrations-optionnelles)
  - [Raccourcis Clavier](#raccourcis-clavier)
  - [Système de Sauvegarde](#système-de-sauvegarde)
    - [Fréquence](#fréquence)
    - [Données Sauvegardées](#données-sauvegardées)
    - [Emplacements](#emplacements)
  - [Contribution](#contribution)
  - [Licence](#licence)
    - [Vous êtes autorisé à :](#vous-êtes-autorisé-à-)
    - [Vous n'êtes PAS autorisé à :](#vous-nêtes-pas-autorisé-à-)
  - [Auteur](#auteur)
  - [Paramètres Techniques](#paramètres-techniques)
    - [Boucle de Jeu](#boucle-de-jeu)
    - [Fenêtre Electron](#fenêtre-electron)
    - [Formule de Notation](#formule-de-notation)
    - [Formules de Production](#formules-de-production)

---

## Aperçu

Cosmic Miner est un jeu idle/incrémental où vous incarnez un mineur spatial. Cliquez pour miner du minerai, construisez des installations automatisées, débloquez des améliorations et regardez votre empire cosmique grandir de manière exponentielle. Atteignez le sommet de la puissance grâce au système de prestige et explorez de nouvelles planètes grâce au système de rebirth !

**Caractéristiques principales :**
- Interface sombre thématique spatiale avec animations
- 4 types de ressources principales + 4 ressources spéciales
- 9 bâtiments de production avec coûts exponentiels
- 8 améliorations permanentes
- 9 automatisations indépendantes
- 5 niveaux de prestige avec bonus cumulatifs
- 5 planètes à explorer avec le système de rebirth
- 5 niveaux de rebirth avec bonus permanents
- 39 succès à débloquer (dont 8 prestige et 8 rebirth)
- 5 événements aléatoires bonus
- Progression hors-ligne (50% à 100% selon le prestige)

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
| **Prestige** | Réinitialisez pour des bonus permanents puissants |
| **Rebirth** | Voyagez vers de nouvelles planètes pour des bonus méta-progressifs |
| **Planètes** | 5 planètes uniques avec ressources et contenus exclusifs |
| **Succès** | Débloquez 39 succès basés sur vos actions |
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
- `Cosmic Miner Setup 2.0.0.exe` - Installateur NSIS (~76.5 MB)
- `Cosmic Miner 2.0.0.exe` - Exécutable portable (~76.2 MB)

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
│   ├── Cosmic Miner 2.0.0.exe
│   ├── Cosmic Miner Setup 2.0.0.exe
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
Coût(n) = CoûtBase × 1.15^(nb_possédés + n) × (1 - réduction_prestige)
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

### Système de Prestige

Le prestige vous permet de réinitialiser votre progression en échange de **bonus permanents puissants**. Ces bonus s'appliquent à toutes vos parties futures !

#### Niveaux de Prestige

| Niveau | Nom | Prérequis | Bonus |
|--------|-----|-----------|-------|
| **1** | Explorateur Cosmique | 1M minerai total, 1 colonie | x2 production globale, x2 clics |
| **2** | Pionnier Galactique | 100M minerai, 5 colonies, tous les bâtiments | x3 production, x3 clics, -10% coûts |
| **3** | Seigneur des Étoiles | 10B minerai, 10 colonies, toutes les améliorations | x5 production, -20% coûts, +25% durée événements, 60% offline |
| **4** | Empereur Cosmique | 1T minerai, 25 colonies, toutes les automatisations | x10 production, -30% coûts, +50% durée événements, 75% offline |
| **5** | Divinité Astrale | 1Qa minerai, 50 colonies, 25+ succès | x25 production, -50% coûts, x2 chance événements, 100% offline |

#### Ce qui est conservé après un prestige :
- Niveau de prestige et bonus associés
- Statistiques lifetime (minerai/énergie/crédits/recherche totaux)
- Tous les succès débloqués
- Nombre de clics total

#### Ce qui est réinitialisé :
- Toutes les ressources (minerai, énergie, crédits, recherche)
- Tous les bâtiments
- Toutes les améliorations
- Toutes les automatisations

---

### Système de Rebirth

Le rebirth est un système de méta-progression qui vous permet d'explorer de **nouvelles planètes** avec des ressources et contenus uniques. C'est le niveau au-dessus du prestige !

#### Planètes

5 planètes à explorer, chacune avec une ressource spéciale et un thème unique :

| Planète | Icône | Ressource Spéciale | Description |
|---------|-------|-------------------|-------------|
| **Terra Cosmique** | 🌍 | - | Planète de départ, ressources classiques |
| **Nova Prime** | ⭐ | Plasma (rose) | Planète volcanique, énergie intense |
| **Cryosia** | ❄️ | Cristaux (cyan) | Monde gelé, cristaux précieux |
| **Vulcanis** | 🌋 | Magma (orange) | Planète de lave, ressources rares |
| **Nexus Omega** | 🌌 | Matière Noire (violet) | Dimension parallèle, pouvoir ultime |

**Conditions de déblocage :**
- **Terra Cosmique** : Disponible dès le début
- **Nova Prime** : Rebirth niveau 1
- **Cryosia** : Rebirth niveau 2
- **Vulcanis** : Rebirth niveau 3
- **Nexus Omega** : Rebirth niveau 5

#### Ressources Spéciales

Chaque planète (sauf Terra) possède une ressource spéciale unique :

| Ressource | Couleur | Planète | Utilisation |
|-----------|---------|---------|-------------|
| **Plasma** | 🩷 Rose | Nova Prime | Améliorations énergétiques avancées |
| **Cristaux** | 💎 Cyan | Cryosia | Technologies de recherche |
| **Magma** | 🔥 Orange | Vulcanis | Production massive |
| **Matière Noire** | 💜 Violet | Nexus Omega | Bonus ultimes |

#### Niveaux de Rebirth

| Niveau | Nom | Prérequis | Bonus |
|--------|-----|-----------|-------|
| **1** | Voyageur Cosmique | 1Qa minerai total, Prestige 3, 1Qa crédits | x2 production globale, débloque Nova Prime |
| **2** | Explorateur Galactique | 1Qi minerai, Prestige 4, 3 planètes | x3 production, -10% coûts, débloque Cryosia |
| **3** | Maître des Mondes | 1Sx minerai, Prestige 5, 4 planètes | x5 production, -20% coûts, débloque Vulcanis |
| **4** | Conquérant Universel | 1Sp minerai, toutes les planètes | x10 production, -30% coûts, +50% événements |
| **5** | Entité Primordiale | 1Oc minerai, 30+ succès | x25 production, -50% coûts, débloque Nexus Omega |

**Points de Rebirth :** Chaque rebirth vous accorde des points qui amplifient vos bonus globaux !

#### Ce qui est conservé après un rebirth :
- Niveau de rebirth et points
- Planètes débloquées
- Ressources spéciales accumulées
- Tous les succès
- Statistiques globales

#### Ce qui est réinitialisé :
- Niveau de prestige (repart à 0)
- Toutes les ressources de base
- Tous les bâtiments
- Toutes les améliorations
- Toutes les automatisations

---

### Succès

39 succès répartis en catégories :

#### Minerai (5)
| Succès | Condition |
|--------|-----------|
| Premier Minerai | Miner 1 minerai |
| Mineur Débutant | Miner 100 minerais |
| Mineur Expérimenté | Miner 1 000 minerais |
| Magnat Cosmique | Miner 100 000 minerais |
| Roi du Minerai | Miner 10 000 000 minerais |

#### Énergie (2)
| Succès | Condition |
|--------|-----------|
| Maître Énergie | Générer 10 000 énergie |
| Centrale Énergétique | Générer 1 000 000 énergie |

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
| Chercheur Expert | Gagner 100 recherche |
| Génie Cosmique | Gagner 1 000 recherche |

#### Bâtiments (9)
| Succès | Condition |
|--------|-----------|
| Automatisation | Posséder 1 sonde |
| Armée de Sondes | Posséder 50 sondes |
| Entrepreneur | Posséder 1 station |
| Réseau Minier | Posséder 10 stations |
| Ferme Solaire | Posséder 25 panneaux |
| Flotte Cargo | Posséder 10 cargos |
| Maître de la Fusion | Posséder 10 réacteurs |
| Colonisateur | Posséder 1 colonie |
| Bâtisseur d'Empire | Posséder 5 colonies |

#### Clics (3)
| Succès | Condition |
|--------|-----------|
| Cliqueur | 100 clics |
| Maître du Clic | 1 000 clics |
| Légende du Clic | 10 000 clics |

#### Prestige (8)
| Succès | Condition |
|--------|-----------|
| Renaissance Cosmique | Effectuer 1 prestige |
| Explorateur Cosmique | Atteindre prestige niveau 1 |
| Pionnier Galactique | Atteindre prestige niveau 2 |
| Seigneur des Étoiles | Atteindre prestige niveau 3 |
| Empereur Cosmique | Atteindre prestige niveau 4 |
| Divinité Astrale | Atteindre prestige niveau 5 |
| Maître du Prestige | Effectuer 5 prestiges |
| Légende Éternelle | Effectuer 10 prestiges |

#### Rebirth (8)
| Succès | Condition |
|--------|-----------|
| Renaissance | Effectuer 1 rebirth |
| Voyageur Cosmique | Atteindre rebirth niveau 1 |
| Explorateur Galactique | Atteindre rebirth niveau 2 |
| Maître des Mondes | Atteindre rebirth niveau 3 |
| Conquérant Universel | Atteindre rebirth niveau 4 |
| Entité Primordiale | Atteindre rebirth niveau 5 |
| Maître du Rebirth | Effectuer 5 rebirths |
| Collectionneur de Planètes | Débloquer toutes les planètes |

---

### Événements Aléatoires

5 événements peuvent se déclencher aléatoirement (0.5% par seconde, doublé au prestige 5) :

| Événement | Effet | Durée (base) |
|-----------|-------|--------------|
| **Pluie de Météores** | Production minerai ×3 | 30 sec |
| **Éruption Solaire** | Production énergie ×3 | 30 sec |
| **Boom Commercial** | Production crédits ×3 | 30 sec |
| **Eureka!** | Production recherche ×5 | 20 sec |
| **Chance Cosmique** | Toute production ×2 | 45 sec |

La durée des événements augmente avec le niveau de prestige (jusqu'à +100% au niveau 5).

---

### Progression Hors-ligne

| Niveau Prestige | Taux Production | Durée Max |
|-----------------|-----------------|-----------|
| 0 | 50% | 8 heures |
| 1 | 50% | 8 heures |
| 2 | 50% | 8 heures |
| 3 | 60% | 8 heures |
| 4 | 75% | 8 heures |
| 5 | 100% | 8 heures |

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
- **Données de prestige (niveau, total, lifetime stats)**
- **Données de rebirth (niveau, points, planète courante, planètes débloquées)**
- **Ressources spéciales (plasma, cristaux, magma, matière noire)**
- Succès débloqués
- Statistiques (clics, temps de jeu)
- État des multiplicateurs
- Timestamp dernière connexion

### Emplacements
1. **CrazyGames Cloud** (si intégré)
2. **LocalStorage** (fallback)

---

## Contribution

Les contributions sont les bienvenues !

En soumettant une contribution, vous acceptez que votre code puisse être intégré au projet Cosmic Miner et distribué sous sa licence propriétaire.

Étapes :

1. Fork le projet  
2. Créez une branche (`git checkout -b feature/nouvelle-fonctionnalite`)  
3. Committez vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)  
4. Push sur la branche (`git push origin feature/nouvelle-fonctionnalite`)  
5. Ouvrez une Pull Request

---

## Licence

Ce projet est sous licence **propriétaire**.

### Vous êtes autorisé à :
- Utiliser le projet à des fins personnelles ou internes  
- Modifier le code pour vos propres besoins  
- Créer des forks privés

### Vous n'êtes PAS autorisé à :
- Redistribuer publiquement le projet ou une version modifiée  
- Publier le jeu sur une plateforme (Steam, itch.io, GitHub, etc.)  
- Vendre ou monétiser le projet  

Toute redistribution publique ou commerciale nécessite un **accord écrit préalable** avec l’auteur et une contrepartie définie ensemble.

Voir :
- `LICENSE.md`
- `COMMERCIAL_LICENSE.md`

---

## Auteur

**Lulunoel2016**

- GitHub: [@lulunoel](https://github.com/lulunoel)

---

## Paramètres Techniques

### Boucle de Jeu
- **Tick rate :** 10 ticks/seconde (100ms)
- **Rendu UI :** 2 ticks/seconde (mise à jour tous les 5 ticks)
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

### Formules de Production
```
Production = BaseProduction × BuildingCount × BuildingMultiplier × GlobalMultiplier × EventMultiplier × PrestigeMultiplier × RebirthMultiplier

ClickProduction = 1 × OreMultiplier × PrestigeClickMultiplier × RebirthMultiplier

BuildingCost = BaseCost × 1.15^count × (1 - PrestigeCostReduction) × (1 - RebirthCostReduction)

RebirthMultiplier = 1 + (RebirthLevel × 0.5) + (RebirthPoints × 0.1)
```

---

*Dernière mise à jour : Janvier 2026*
