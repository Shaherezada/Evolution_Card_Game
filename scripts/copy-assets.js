// Копируем статичные ассеты (картинки карт, .glb-модели) в bundle.
// Vite не процессит их автоматически, потому что они подключаются
// строковыми путями `assets/cards_images/1.png`, а не через `import`.
const fs   = require('fs');
const path = require('path');

const sourceAssetsDir = path.resolve(__dirname, '..', 'assets');
const buildAssetsDir  = path.resolve(__dirname, '..', 'public', 'assets');

if (!fs.existsSync(sourceAssetsDir)) {
    console.error('[copy-assets] Нет папки', sourceAssetsDir);
    process.exit(1);
}

fs.cpSync(sourceAssetsDir, buildAssetsDir, { recursive: true });
console.log('[copy-assets] OK:', sourceAssetsDir, '->', buildAssetsDir);
