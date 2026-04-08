const fs   = require('fs');
const path = require('path');

const EVOLUTION_CARDS_FILE = path.join(__dirname, '../data/evolutionCards.json');

function readEvolutionCardsFromFile() {
    const cardFileContent = fs.readFileSync(EVOLUTION_CARDS_FILE, 'utf-8');
    return JSON.parse(cardFileContent);
}

function writeEvolutionCardsToFile(cardList) {
    fs.writeFileSync(EVOLUTION_CARDS_FILE, JSON.stringify(cardList, null, 2), 'utf-8');
}

module.exports = { readEvolutionCardsFromFile, writeEvolutionCardsToFile };
