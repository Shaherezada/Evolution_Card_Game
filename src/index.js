const express = require('express');
const evolutionCardsRouter = require('./routes/evolutionCards');

const EVOLUTION_API_PORT = 3000;

const evolutionApp = express();

evolutionApp.use(express.json());

evolutionApp.use('/cards', evolutionCardsRouter);

evolutionApp.listen(EVOLUTION_API_PORT, '127.0.0.1', () => {
    console.log(`Сервер карточной игры Эволюция запущен: http://localhost:${EVOLUTION_API_PORT}`);
});
