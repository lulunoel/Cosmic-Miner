const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

// Garder une référence globale de l'objet window
let mainWindow;

function createWindow() {
    // Créer la fenêtre du navigateur
    mainWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 1000,
        minHeight: 700,
        icon: path.join(__dirname, 'icon.png'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },
        backgroundColor: '#0a0a1a',
        show: false, // Ne pas afficher avant que ce soit prêt
        titleBarStyle: 'default',
        autoHideMenuBar: true // Cache la barre de menu par défaut
    });

    // Charger le fichier index.html
    mainWindow.loadFile(path.join(__dirname, 'idlegame', 'index.html'));

    // Afficher quand c'est prêt (évite le flash blanc)
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    // Ouvrir les liens externes dans le navigateur par défaut
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: 'deny' };
    });

    // Menu personnalisé (minimal)
    const menu = Menu.buildFromTemplate([
        {
            label: 'Jeu',
            submenu: [
                {
                    label: 'Plein écran',
                    accelerator: 'F11',
                    click: () => {
                        mainWindow.setFullScreen(!mainWindow.isFullScreen());
                    }
                },
                { type: 'separator' },
                {
                    label: 'Outils de développement',
                    accelerator: 'F12',
                    click: () => {
                        mainWindow.webContents.toggleDevTools();
                    }
                },
                { type: 'separator' },
                {
                    label: 'Quitter',
                    accelerator: 'Alt+F4',
                    click: () => {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Aide',
            submenu: [
                {
                    label: 'À propos',
                    click: () => {
                        const { dialog } = require('electron');
                        dialog.showMessageBox(mainWindow, {
                            type: 'info',
                            title: 'Cosmic Miner',
                            message: 'Cosmic Miner v1.0.0',
                            detail: 'Un jeu idle spatial\n\nDéveloppé par Lulunoel2016\n\nMerci de jouer !'
                        });
                    }
                }
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);

    // Émis quand la fenêtre est fermée
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// Quand Electron a fini l'initialisation
app.whenReady().then(createWindow);

// Quitter quand toutes les fenêtres sont fermées
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

// Sécurité : empêcher la navigation vers des URLs externes
app.on('web-contents-created', (event, contents) => {
    contents.on('will-navigate', (event, navigationUrl) => {
        const parsedUrl = new URL(navigationUrl);
        if (parsedUrl.protocol !== 'file:') {
            event.preventDefault();
            shell.openExternal(navigationUrl);
        }
    });
});
