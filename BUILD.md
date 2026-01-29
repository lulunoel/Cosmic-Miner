# Cosmic Miner - Guide de Compilation

## Prérequis

1. **Node.js** (v18 ou plus récent)
   - Télécharger : https://nodejs.org/

2. **Git** (optionnel mais recommandé)
   - Télécharger : https://git-scm.com/

## Installation

Ouvrir un terminal dans le dossier du projet et exécuter :

```bash
npm install
```

## Lancer en mode développement

```bash
npm start
```

## Compiler en .exe

### Windows (installateur + portable)
```bash
npm run build:win
```

Les fichiers seront dans le dossier `dist/` :
- `Cosmic Miner Setup 1.0.0.exe` - Installateur
- `Cosmic Miner 1.0.0.exe` - Version portable

### Mac
```bash
npm run build:mac
```

### Linux
```bash
npm run build:linux
```

## Structure des fichiers générés

```
dist/
├── Cosmic Miner Setup 1.0.0.exe    # Installateur Windows
├── Cosmic Miner 1.0.0.exe          # Portable Windows
├── win-unpacked/                    # Version non compressée
└── ...
```

## Personnalisation

### Icône
Remplacer les fichiers suivants :
- `icon.ico` - Windows (256x256 recommandé)
- `icon.png` - Linux/Général (512x512 recommandé)
- `icon.icns` - Mac

Générateur d'icônes : https://www.electron.build/icons

### Métadonnées
Modifier `package.json` :
- `name` : Nom technique (sans espaces)
- `productName` : Nom affiché
- `version` : Version du jeu
- `author` : Ton nom
- `description` : Description

## Publication sur Steam

### 1. Créer un compte Steamworks
- https://partner.steamgames.com/
- Frais : 100$ par jeu

### 2. Intégration Steamworks (optionnel)
Pour les achievements Steam, le cloud save, etc. :

```bash
npm install steamworks.js
```

### 3. Fichiers requis pour Steam
- Executable (.exe)
- Dépôt de contenu configuré dans Steamworks
- Images : capsule (460x215), header (460x215), screenshots

### 4. Upload via SteamPipe
Utiliser l'outil SteamCMD fourni par Valve.

## Alternatives à Electron

| Outil | Taille | Avantages |
|-------|--------|-----------|
| Electron | ~150MB | Le plus documenté, utilisé par Steam |
| NW.js | ~100MB | Plus simple pour les jeux |
| Tauri | ~10MB | Très léger, moderne |
| Neutralino | ~5MB | Ultra léger |

## Dépannage

### "npm not found"
→ Installer Node.js et redémarrer le terminal

### Erreur de compilation
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

### Antivirus bloque le .exe
→ Normal pour les apps Electron non signées. Signer le code pour la distribution :
- Windows : Certificat de signature de code (~200$/an)
- Alternative gratuite : Distribuer via Steam (ils signent automatiquement)
