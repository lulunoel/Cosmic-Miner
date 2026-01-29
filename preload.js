// Preload script pour la sécurité
// Ce fichier s'exécute avant le rendu de la page

const { contextBridge } = require('electron');

// Exposer des APIs sécurisées au renderer si nécessaire
contextBridge.exposeInMainWorld('electronAPI', {
    // Version de l'app
    getVersion: () => require('./package.json').version,

    // Plateforme
    platform: process.platform
});

// Log pour debug
console.log('Cosmic Miner - Electron App Loaded');
