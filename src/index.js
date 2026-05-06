const express = require('express');
const path    = require('path');
const evolutionCardsRouter = require('./routes/evolutionCards');

const EVOLUTION_API_PORT = 3000;

const evolutionApp = express();

evolutionApp.use(express.json());

// API
evolutionApp.use('/cards', evolutionCardsRouter);

// Раздача собранного фронтенда (ЛР №6) как статики.
// Тот же домен и порт = CORS не нужен, расширение в браузере не требуется.
evolutionApp.use(express.static(path.join(__dirname, '..', 'public')));

evolutionApp.listen(EVOLUTION_API_PORT, '127.0.0.1', () => {
    console.log(`Сервер карточной игры Эволюция запущен: http://localhost:${EVOLUTION_API_PORT}`);
});
